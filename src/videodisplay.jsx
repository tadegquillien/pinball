
import { useState } from 'react';
import Likert from 'react-likert-scale';
import { likertChoicesTest } from './likertScale';
import { buttonStyle } from './dimensions';
import { videolist } from './randomized parameters';
import { Data } from './Data';
import redflipper from './redflipper.png';
import greenflipper from './greenflipper.png';
import orangeflipper_right from './orangeflipper_right.png';
import orangeflipper_left from './orangeflipper_left.png';
import "./videodisplay.css";




export const Videodisplay = (props) => {

  //select the current video
  const currentvideo = videolist[props.currentTrial];
  const video = currentvideo.clip;
  const direction = currentvideo.A_orientation;
  

  //initialize the variables
  const [response, setResponse] = useState('unclicked');
  const [status, setStatus] = useState("waiting");
  const [buttonStatus, setButtonStatus] = useState("hidden");
  const [ giveControl, setGiveControl ] = useState(false);


  //the likert scale
  const likertOptions = {
    question: "",
    responses: likertChoicesTest,
    //keeps track of the last response by the participant
    onChange: val => {
      setResponse(val.value);
      setButtonStatus("display");
      console.log(val.value);
      console.log(response);

    },
    id: 'question',
  };

  const handleClick = () => {
    //record the participant's response, as well
    //as the details of the videoclip
    Data.responses.push({
      "response": response,
      "trial": props.currentTrial,
      "A_orientation": currentvideo.A_orientation,
      "C_orientation": currentvideo.C_orientation,
      "Pa": currentvideo.Pa,
      "Pc": currentvideo.Pc
    });
    //hide the question and the 'next' button
    setStatus("waiting");
    setButtonStatus("hidden");
    setGiveControl(false);
    console.log(Data);
    props.setCurrentTrial((i) => i + 1);
    //if we have reached the end of the video list, 
    //go to the next phase
    if (props.currentTrial > (videolist.length - 2)) {
      props.setCurrentPhase("demographics");
    }

  }

  //the 'NEXT' button is displayed once the player has clicked on the likert scale
  const nextbutton = buttonStatus === "display" ?
    <button style={buttonStyle} onClick={() => handleClick()}>Next</button> :
    "";

  //the question is displayed once the video has ended
  const question = status === "ready" ? <div style={{ margin: "0% 25%" }}>
    <p>Please tell us how much you agree with the following statement:</p>
    <p>The player won the game because the top flipper sent the ball to the {direction}</p>
    <Likert {...likertOptions} />
    {nextbutton}
  </div> : "Please watch the video above carefully";

  const endText = question;

  //this function displays the text once the video ends
  const handleEnd = () => {
    setStatus("ready");
    setGiveControl(true);
  }


  const img_width = "20%"

  return (
    <div align="center">
      <div className="container">

        <div className="child" id="reminder">
          <p>(Flippers'<br></br>
             preferred<br></br>
              orientations) :</p>
          <img src={greenflipper} width={img_width} /><br></br>
          <img src={redflipper} width={img_width} /><br></br>

        </div>




        <div className="child">
          <video width="400" height="400"
            src={video} autoPlay muted controls={giveControl} onEnded={() => handleEnd()} />
        </div>


        <div className="child"></div>


      </div>

      <div align="center">{endText}<br></br>
      </div>
    </div>
  )
}