import CodecademyLogo from "../components/ImageComponents/CodecademyLogo";
import CodingCover from "../components/ImageComponents/CodingCover";
import LoganvilleLogo from "../components/ImageComponents/LoganvilleLogo"


export const EDUCATIONDATA = [
    {
        program: 'Loganville High School',
        startDate: '1995',
        completionDate: '1999',
        path: '/Education/LHS',
        image:  <LoganvilleLogo />,
    },
    {
        program: 'Codecademy',
        startDate: 'April 2022',
        completionDate: 'Currently Attending',
        path: '/Education/Codecademy',
        image: <CodecademyLogo />,
    },
    {
        program:'Coding With Minecraft by Al Sweigart',
        startDate: 'Mar 2023',
        completionDate: 'Currently exploring slowly in my free time',
        path: '/Education/CWMinecraft',
        image: <CodingCover />,
    }
];