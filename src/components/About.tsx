// About.tsx

import Header from "../feature/Header";
import Tab from "../feature/Tab";

export default function About(){
    return(
        <div>
            <Header currentSection="about" currentProject={null}/>
            <Tab currentSection="about" />
        </div>
    );
}