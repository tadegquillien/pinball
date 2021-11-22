import { shuffle } from "./convenience-functions";


import A1C1TopLeft from './A1C1TopLeft.mp4';
import A1C9TopLeft from './A1C9TopLeft.mp4';
import A9C1TopLeft from './A9C1TopLeft.mp4';
import A9C9TopLeft from './A9C9TopLeft.mp4';

import A1C1TopRight from './A1C1TopRight.mp4';
import A1C9TopRight from './A1C9TopRight.mp4';
import A9C1TopRight from './A9C1TopRight.mp4';
import A9C9TopRight from './A9C9TopRight.mp4';





export const videolist = shuffle([
    {
        "clip": A1C1TopLeft,
        "A_orientation": 'left',
        "C_orientation": "left",
        "Pa": .1,
        "Pc": .1
    },
    {
        "clip": A1C1TopRight,
        "A_orientation": 'right',
        "C_orientation": "right",
        "Pa": .1,
        "Pc": .1
    },
    {
        "clip": A1C9TopLeft,
        "A_orientation": 'left',
        'C_orientation': 'left',
        "Pa": .1,
        "Pc": .9
    },
    {
        "clip": A1C9TopRight,
        "A_orientation": 'right',
        'C_orientation': 'right',
        "Pa": .1,
        "Pc": .9
    },
    {
        "clip": A9C1TopLeft,
        "A_orientation": 'left',
        'C_orientation': 'left',
        "Pa": .9,
        "Pc": .1
    },
    {
        "clip": A9C1TopRight,
        "A_orientation": 'right',
        'C_orientation': 'right',
        "Pa": .9,
        "Pc": .1
    },
    {
        "clip": A9C9TopLeft,
        "A_orientation": 'left',
        'C_orientation': 'left',
        "Pa": .9,
        "Pc": .9
    },
    {
        "clip": A9C9TopRight,
        "A_orientation": 'right',
        'C_orientation': 'right',
        "Pa": .9,
        "Pc": .9
    },
    


])
