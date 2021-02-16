import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faUser } from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
    return (
        <>
            <h1 id="about">Intro</h1>
            <p>+62 855 3322 1111 | <b>assignmentstanley@gmail.com</b></p>
            <br />
            <p>
                I am highly competent IT professional with a proven track record in designing websites, 
                networking and managing database. I have strong technical skills as well as excellent interpersonal skills,
                enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further
                improve my IT skills. My greatest passion is in life is using my technical
                know-how to benefit other people and organisations.
            </p>
        </>
    );
};


const Experience = () => {
    return (
        <React.Fragment>
            <h1 id="experience">Experience</h1>
            <p>PT IT Consultant Merdeka | <b>Full-stack engineer</b></p>
            <p>
                The primary responsibiility of a Full Stack Developer includes designing user interactions
                on websites, developing servers, and databases for website functionality and coding for Mobile
                platforms. Particular responsibilities often include: Developing front-end website architecture.
            </p>

        </React.Fragment>
    );
};

const Education = () => {
    return (
        <React.Fragment>
            <h1 id="education">Education</h1>
            <ol>
                <li>High school: Gonzaga College</li>
                <li>University: Atma Jaya Jakarta</li>
            </ol>
        </React.Fragment>
    );
};

const Skill = () => {
    return (
        <React.Fragment>
            <h1 id="skills">Skills</h1>
            <p>Programming languages & Tools</p>
            <ul className='skill'>
                <li>HTML</li>
                <li>Javascript</li>
                <li>C#</li>
                <li>Visual Studio</li>
                <li>Visual Studio Code</li>
                <li>Browser</li>
            </ul>
        </React.Fragment>
    );
};

const Interest = () => {
    return (
        <React.Fragment>
            <h1 id="interests">Interest</h1>
            Travel and Good Food, it's true that you cannot buy happiness, but you can always buy ticket to an awesome vacation, and that's pretty much close.
            For me personally, this is one of the interest I am living for, I mean whats the point on the earth that you are living for if you have not seen the beautiful
            valleys of Himalayas and the Canyons, the soothing beaches of Goa, Bali, and Rio, the magnificent Burj Khalifa, Niagara Falls and the amazing historic places AwardsComponent
            museums.
        </React.Fragment>
    );
};

const AwardsComponent = () => {
    const listAwards = [
        "Google Analytics Certified Developer",
        "Mobile Web Specialist - Google Certification",
        "1 st Place - University of Colorado Boulder - Emerging Tech Competition 2009",
        "1 st Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)",
        "2 nd Place - University of Colorado Boulder - Emerging Tech Competition 2008",
        "1 st Place - James Buchanan High School - Hackathon 2006"
    ];

    return (
        <>
            <h1 id="awards">Award and Certification</h1>
            <ul>
                {listAwards.map((v,i) => 
                     <li key={i}><FontAwesomeIcon icon={faCheck} />&nbsp;{v}</li>
                )}
            </ul>
        </>
    );
};

const Sidebar = () => {
    return (
        <>
            <div class="sidenav">
                <FontAwesomeIcon icon={faUser} className="photo" />
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#interests">Interests</a>
                <a href="#awards">Awards</a>
            </div>
        </>
    );
};

class HomePortofolio extends React.Component {
    state = {
        isButtonEnabled: false
    };

    setButtonStatus = () => {
        this.setState({ isButtonEnabled: true });
    };
    
    render() {
        
        return(
            <div>
                <Sidebar />

                <div className="main">
                    <Introduction /> <br /><br /><br /><br />
                    <Experience /> <br /><br /><br /><br />
                    <Education /> <br /><br /><br /><br />
                    <Skill /> <br /><br /><br /><br />
                    <Interest /> <br /><br /><br /><br />
                    <AwardsComponent /> <br /><br /><br /><br />
                </div>
            </div>
        );
    }
}

export default HomePortofolio;