// About.tsx

import Contents from "../feature/Contents";
import Header from "../feature/Header";
import Tab from "../feature/Tab";

export default function About(){
    return(
        <div>
            <Header currentSection="about" currentProject={null}/>
            <Contents/>
            <Tab currentSection="about" />
        </div>
    );
}