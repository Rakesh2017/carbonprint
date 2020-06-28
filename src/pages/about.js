import React, { useEffect } from 'react';
import baseUrl from '../database-secrets/secrets.js';
import { Container, } from '@material-ui/core';

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
                    if (element.identity === 1) {
                        setTeamInfo("manager-name", element.name)
                        setTeamInfo("manager-designation", element.designation)
                        // document.getElementById("image1").src = image;
                    } else if (element.identity === 2) {
                        setTeamInfo("lead-developer-name", element.name)
                        setTeamInfo("lead-developer-designation", element.designation)
                    } else if (element.identity === 3) {
                        setTeamInfo("qa-name", element.name)
                        setTeamInfo("qa-designation", element.designation)
                    } else if (element.identity === 4) {
                        setTeamInfo("lead-designer-name", element.name)
                        setTeamInfo("lead-designer-designation", element.designation)
                    } else if (element.identity === 51) {
                        setTeamInfo("designer-1-name", element.name)
                        setTeamInfo("designer-1-designation", element.designation)
                    } else if (element.identity === 52) {
                        setTeamInfo("designer-2-name", element.name)
                        setTeamInfo("designer-2-designation", element.designation)
                    } else if (element.identity === 53) {
                        setTeamInfo("designer-3-name", element.name)
                        setTeamInfo("designer-3-designation", element.designation)
                    } else if (element.identity === 54) {
                        setTeamInfo("designer-4-name", element.name)
                        setTeamInfo("designer-4-designation", element.designation)
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

    return (
        // main container
        <Container className="about-us-container">

            {/* heading-container may serve as background */}
            {/* heading-container starts */}
            <div className="heading-container">
                <h1>About Carbon-Print</h1>
                <p>Our mission is to give accessability to everyone to estimate their carbon footprint (in simple words global warming causing gases emission) through their day to day activities.</p>
            </div>

            {/* who-we-are-container starts  */}
            <div className="who-we-are-container">
                {/* text container */}
                <div>
                    <h2>Who we are?</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                {/* image container */}
                <div>
                    {/* apply image here, then delete this comment */}
                    {/* <img /> */}
                </div>
            </div>

            {/* our-values-container starts  */}
            <div className="our-values-container">
                {/* image container */}

                <div>
                    {/* apply image here, then delete this comment */}
                    {/* <img /> */}
                </div>
                {/* text container */}
                <div>
                    <h2>Our Values</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>

            {/* our-team-container starts  */}
            <div className="our-team-container">
                <h1>Our Team</h1>

                {/* Rakesh */}
                <div className="team-tile-container project-manager">
                    {/* <img /> */}
                    <h3 className="member-name" id="manager-name"></h3>
                    <p className="member-designation" id="manager-designation"></p>
                </div>

                {/* dalbir */}
                <div className="team-tile-container lead-developer">
                    {/* <img /> */}
                    <h3 className="member-name" id="lead-developer-name"></h3>
                    <p className="member-designation" id="lead-developer-designation"></p>
                </div>

                {/* Palak */}
                <div className="team-tile-container developer quality-assurance">
                    {/* <img /> */}
                    <h3 className="member-name" id="qa-name"></h3>
                    <p className="member-designation" id="qa-designation"></p>
                </div>

                {/* Lalit */}
                <div className="team-tile-container lead-designer designer">
                    {/* <img /> */}
                    <h3 className="member-name" id="lead-designer-name"></h3>
                    <p className="member-designation" id="lead-designer-designation"></p>
                </div>

                {/* Neha */}
                <div className="team-tile-container designer">
                    {/* <img /> */}
                    <h3 className="member-name" id="designer-1-name"></h3>
                    <p className="member-designation" id="designer-1-designation"></p>
                </div>

                {/* Aanchal */}
                <div className="team-tile-container designer">
                    {/* <img /> */}
                    <h3 className="member-name" id="designer-2-name"></h3>
                    <p className="member-designation" id="designer-2-designation"></p>
                </div>

                {/* Arsh */}
                <div className="team-tile-container designer">
                    {/* <img /> */}
                    <h3 className="member-name" id="designer-3-name"></h3>
                    <p className="member-designation" id="designer-3-designation"></p>
                </div>

                {/* Hiril */}
                <div className="team-tile-container designer">
                    {/* <img /> */}
                    <h3 className="member-name" id="designer-4-name"></h3>
                    <p className="member-designation" id="designer-4-designation"></p>
                </div>

            </div>


        </Container>
        // main container ends
    )

}

export default About;