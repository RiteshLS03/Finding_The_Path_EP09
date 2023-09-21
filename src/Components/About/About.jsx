import { Outlet } from "react-router-dom";
import "./About.css"


const About = () => {
    return(
        <>
        <h1>About US</h1>
        <Outlet />  
        </>
    )
}

export default About;