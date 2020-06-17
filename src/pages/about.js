import React from 'react';

const About = () => {

    return (
        // main container
        <div className="about-us-container">

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
                    <h3 className="member-name">Rakesh</h3>
                    <p className="member-designation">Project Manager | Developer | DA</p>
                </div>

                {/* dalbir */}
                <div className="team-tile-container lead-developer">
                    {/* <img /> */}
                    <h3 className="member-name">Dalbir Singh</h3>
                    <p className="member-designation">Lead Developer</p>
                </div>

                {/* Palak */}
                <div className="team-tile-container developer quality-assurance">
                    {/* <img /> */}
                    <h3 className="member-name">Palakdeep Kaur</h3>
                    <p className="member-designation">Developer | Quality Assurance</p>
                </div>

                {/* Lalit */}
                <div className="team-tile-container lead-designer designer">
                    {/* <img /> */}
                    <h3 className="member-name">Lalit Kumar</h3>
                    <p className="member-designation">Lead Designer</p>
                </div>

                {/* Neha */}
                <div className="team-tile-container designer">
                    {/* <img /> */}
                    <h3 className="member-name">Neha Verma</h3>
                    <p className="member-designation">Designer</p>
                </div>

                {/* Aanchal */}
                <div className="team-tile-container designer">
                    {/* <img /> */}
                    <h3 className="member-name">Aanchal Arora</h3>
                    <p className="member-designation">Designer</p>
                </div>

                {/* Arsh */}
                <div className="team-tile-container designer">
                    {/* <img /> */}
                    <h3 className="member-name">Arshdeep</h3>
                    <p className="member-designation">Designer</p>
                </div>

                {/* Hiril */}
                <div className="team-tile-container designer">
                    {/* <img /> */}
                    <h3 className="member-name">Hiril</h3>
                    <p className="member-designation">Designer</p>
                </div>

            </div>


        </div>
        // main container ends
    )

}

export default About;