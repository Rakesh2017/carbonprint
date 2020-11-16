import React, { useEffect } from 'react';
import baseUrl from '../database-secrets/secrets.js';
import { Container, } from '@material-ui/core';
import linked_icon from '../images/icons/linkedin.png';
import about_us_image from '../images/about-us-hero.jpg'
import who_we_are from '../images/who-we-are.jpg';
import our_values from '../images/our-values.jpg';
import github_image from '../images/github.png'
import stackoverflow_image from '../images/stack-overflow.png'

const About = () => {

    /* global variables */
    const teamUrl = baseUrl + "/team"

    /* Fetch Team Data */
    function getTeam() {
        // GET request using fetch with set headers
        const headers = { 'Content-Type': 'application/json' }
        fetch(teamUrl, { headers })
            .then(response => response.json())
            .then(data => {
                let result
                data.forEach(element => {
                    result = element.result
                });
                result.forEach(element => {
                    /* Set Team Info */
                    if (element.designation_type_id === 1) {
                        setTeamInfo("manager-name", element.name)
                        setTeamInfo("manager-designation", element.designation_type)
                        setImage("image1", element.image_base64)
                    } else if (element.designation_type_id === 2) {
                        setTeamInfo("lead-developer-name", element.name)
                        setTeamInfo("lead-developer-designation", element.designation_type)
                        setImage("image2", element.image_base64)
                    } else if (element.designation_type_id === 3) {
                        setTeamInfo("qa-name", element.name)
                        setTeamInfo("qa-designation", element.designation_type)
                        setImage("image3", element.image_base64)
                    } else if (element.designation_type_id === 4) {
                        setTeamInfo("lead-designer-name", element.name)
                        setTeamInfo("lead-designer-designation", element.designation_type)
                        setImage("image4", element.image_base64)
                    } else if (element.designation_type_id === 51) {
                        setTeamInfo("designer-1-name", element.name)
                        setTeamInfo("designer-1-designation", element.designation_type)
                        setImage("image5", element.image_base64)
                    } else if (element.designation_type_id === 52) {
                        setTeamInfo("designer-2-name", element.name)
                        setTeamInfo("designer-2-designation", element.designation_type)
                        setImage("image6", element.image_base64)
                    } else if (element.designation_type_id === 53) {
                        // setTeamInfo("designer-3-name", element.name)
                        // setTeamInfo("designer-3-designation", element.designation_type)
                        // setImage("image7", element.image_base64)s
                    } else if (element.designation_type_id === 54) {
                        // setTeamInfo("designer-4-name", element.name)
                        // setTeamInfo("designer-4-designation", element.designation_type)
                        // setImage("image8", element.image_base64)
                    }
                });
            })
    }

    useEffect(() => {
        getTeam();
    })

    /* Set Team Info */
    function setTeamInfo(id, value) {
        document.getElementById(id).innerHTML = value
    }

    function setImage(id, value) {
        document.getElementById(id).src = value;
    }

    return (
        // main container

        <div className="about-us-container">

            {/* heading-container may serve as background */}
            {/* heading-container starts */}
            <div className="heading-container">
                
                <div className="img-container"> 
                    <img src={about_us_image} alt="about us" /> 
                </div>
                
                <div className="super-text-container">
                    <div className="text-container">
                        <h1>About Carbon Print</h1>
                        <p>Our mission is to give accessability to everyone to estimate their carbon footprint through their day to day activities. Carbon print is a web platform where an individual can calculate the amount of carbon footprint they produced in relation to their daily activities. </p>
                    </div>
                </div>

            </div>

            <Container>

                {/* who-we-are-container starts  */}
                <div className="who-we-are-container container-img-float" id="who-we-are-container-id">
                    {/* text container */}

                    <div className="img-float img-float-left">
                        <img src={who_we_are} alt="who we are" />
                    </div>
                    <div>
                        <h2>Who we are?</h2>
                        <p>

                        We are a team of people who are willing to use their skills to bring a sustainable change to the environment by making use of the technology. Being beginners, we have done the research and found out that the environment is most affected by the amount of carbon being produced.
                            Hence, we came up with this website to educate people about carbon footprint and how big of an impact it has on our planet.
                        </p>

                    </div>
                    {/* image container */}
                </div>

                {/* our-values-container starts  */}

                <div id="our-values-container-id" className="container-img-float">
                    <div className="img-float img-float-right">
                        <img src={our_values} alt="our values" />
                    </div>
                    
                    <div>
                        <h2>Our Values</h2>
                        <p>
                        Our team holds integrity on the top of values that we posses. Our teaam members have worked hard on getting reliale data to the users which will guide them to bring necessary and appropriate changes in theri life to contribute in reducing carbon impression. Our whole team is very passionate about environmental protection and this website is one off the first initiatives that we have taken to follow our passion and prevent the environmental health from deteriorating further.

                        </p>
                    </div>
                </div>


                {/* our-team-container starts  */}
                <div className="our-team-container">
                    <h1>Team Tiger Shark</h1>

                    {/* Rakesh */}
                    <div className="team-tile-container project-manager">
                        <div className="profile-image">
                            <img id="image1" alt="project manager" />
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/rakesh07/" target="_blank"> <img src={linked_icon} alt="linkedin icon" /> </a>
                                <a href="https://github.com/Rakesh2017" target="_blank"> <img id="github-image" src={github_image} alt="github icon" /> </a>
                                <a href="https://stackoverflow.com/users/7872344/rakesh-kumar" target="_blank"> <img id="stack-overflow-image" src={stackoverflow_image} alt="stack overflow icon" /> </a>
                            </div>                            
                        </div>

                        <h3 className="member-name" id="manager-name"></h3>
                        <p className="member-designation" id="manager-designation"></p>
                    </div>

                    {/* dalbir */}
                    <div className="team-tile-container lead-developer">
                        <div className="profile-image">
                            <img id="image2" alt="front end developer" />
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/dalbir-singh-01815328/" target="_blank"> <img src={linked_icon}  alt="linkedin icon" /> </a>
                                <a href="https://github.com/dalbirsrana" target="_blank"> <img id="github-image" src={github_image} alt="github icon" /> </a>
                            </div>
                            
                        </div>
                        <h3 className="member-name" id="lead-developer-name"></h3>
                        <p className="member-designation" id="lead-developer-designation"></p>
                    </div>

                    {/* Palak */}
                    <div className="team-tile-container developer quality-assurance">
                        <div className="profile-image">
                            <img id="image3" alt="front end developer" />
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/palakdeep-kaur-88a020b7" target="_blank"> <img src={linked_icon}  alt="linkedin icon" /> </a>
                            </div>
                        </div>
                        <h3 className="member-name" id="qa-name"></h3>
                        <p className="member-designation" id="qa-designation"></p>
                    </div>

                    {/* Lalit */}
                    <div className="team-tile-container lead-designer designer">
                        <div className="profile-image">
                            <img id="image4" alt="designer" />
                            <div className="social-links">
                                <a href="linkedin.com/in/lalit-kumar-1467aa1b2" target="_blank"> <img src={linked_icon} alt="linkedin icon" /> </a>
                            </div>
                        </div>
                        <h3 className="member-name" id="lead-designer-name"></h3>
                        <p className="member-designation" id="lead-designer-designation"></p>
                    </div>

                    {/* Neha */}
                    <div className="team-tile-container designer">
                        <div className="profile-image">
                            <img id="image5" alt="designer" />
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/neha-verma05" target="_blank"> <img src={linked_icon} alt="linkedin icon" /> </a>
                            </div>
                            
                        </div>
                        <h3 className="member-name" id="designer-1-name"></h3>
                        <p className="member-designation" id="designer-1-designation"></p>
                    </div>

                    {/* Aanchal */}
                    <div className="team-tile-container designer">
                        <div className="profile-image">
                            <img id="image6" alt="designer" />
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/aanchal02" target="_blank"> <img src={linked_icon} /> </a>
                            </div>
                            
                        </div>
                        <h3 className="member-name" id="designer-2-name"></h3>
                        <p className="member-designation" id="designer-2-designation"></p>
                    </div>


                </div>


            </Container>
        </div>
        // main container ends
    )

}

export default About;
