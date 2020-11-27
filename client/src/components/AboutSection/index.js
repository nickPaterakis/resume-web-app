import React from 'react';
import {
    AboutContainer,
    AboutWrapper,
    Title,
    PersonalStatement,
} from './AboutElements';

const AboutSection = () => {
    return (
        <>
        <AboutContainer>
            <AboutWrapper id="about">
                <Title>About Me</Title>
                <PersonalStatement>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nunc nec eros congue, nec vulputate mauris facilisis. Duis elementum rhoncus augue at convallis. Fusce interdum, orci in facilisis ultrices, tellus dolor ultrices ligula, vitae tristique tellus ante vel ipsum. Aenean ut nunc sed purus tincidunt elementum vel sed ex. Sed consectetur lectus laoreet libero dignissim rhoncus. Aliquam condimentum metus commodo, scelerisque urna nec, aliquet lorem. Phasellus ultrices in magna ac accumsan.
                </PersonalStatement>
            </AboutWrapper>
        </AboutContainer>
        </>
    )
}

export default AboutSection;
