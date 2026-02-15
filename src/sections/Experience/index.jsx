import { useState } from "react";
import {data} from "../../contents/experience";
import ContentContainer from "../../components/ContentContainer";

const SECTION_ID = "experience-section";

const Experience = () => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
    return (
        <ContentContainer 
        title="Experience" 
        data={data} 
        />
    )
}

export default Experience;