import React from 'react';
import AppCTA from '../components/AppCTA';
import image1 from '../images/image-1.jpg';
// import image2 from '../images/image-2.png';
import {
    Container,
} from '@material-ui/core';

export default () => (
    <Container>

        <div class="carbon-impact-container">

        <div className="page-heading">
            <h1>Carbon Impact</h1>
        </div>

            <div class="impact-section1">
                <h2>Carbon Emissions</h2>
                <p>
                    Emissions of carbon dioxide (CO2) are either natural or anthropic (due to human
                    activity). Natural emissions are ones from natural wildfire, animal breathing, plants,
                    aquatic microorganism, the ground or even volcanic origin. Anthropic emissions
                    comes from heating, vehicles, voluntary fire, power generation station of fossil fuels.
                </p>

                <h2>Impact of carbon emissions on our environment</h2>
                <p>
                    Global warming designate the worldwide phenomenon of rising temperature in the air
                    and oceans. Studied since our 20th century, this change is mainly due to the high
                    trapped quantity of heat at the terrestrial surface. This is provoked by the emissions
                    of greenhouse gaz (CO2, and others)            
                </p>
            </div>

            <div className="impact-image">
            <img id="impact-image1" src={image1} alt="Carbon Impact" />
            </div>


            {/* <img id="impact-image2" src={image2} /> */}

            <div class="impact-section2">      

                <h2>What are the consequences of Co2 on our environment ?</h2>
                <p>
                    As CO2 is naturally present in the air, it’s not harmful for living organism. But CO2 emissions are also accompanied by soot, heavy metals, different contaminant. Which, all together, provoke deleterious effects on living organism. This latest are sensitive to variations of the CO2 concentrations in the atmosphere. This one having risen of 280 ppm at the beginning of the industrialisation. and 400ppm in 2013. 
                </p>
                
                <p>This have consequences on the wildlife and plants.</p>

                
                <div>
                    <h4>For birds and mammals :</h4>                
                    <p>the carbon can kill by asphyxiation at a certain level and time of exposition. Its chemical property, higher than oxygen, permits it to be able to
                    rapidly cross numerous types of biological membrane (including central nervous system).
                    </p>
                </div>

                <div>
                    <h4>In the Oceans :</h4>
                    <p> The circulation of oceans is also affected by human carbon emissions. It makes oceans more acid.
                        Thus,numerous fish can wind up to the poles, where
                        the water temperature change less rapidly. Regarding ocean current, they could slow down, or even stop. The CO2 absorbed could be released and worsen climate change.
                    </p>
                </div>

                <div>
                    <h4>For the plants :</h4>
                    <p>With a low dose, the CO2 can permit growth of so many vegetal species. After experiences, this has    been proven, but until a certain level. When this level
                    </p>
                </div>

            </div>
        

        </div>

        
        <AppCTA />

    </Container>
);