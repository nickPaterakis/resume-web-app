import React from 'react';
import {
    ExpirienceContainer,
    ExpirienceWrapper,
    Title,
    InfoWrapper,
    WorkWrapper,
    EducationWrapper,
    Subtitle,
    Wrapper,
    Column1, 
    Column2,
    Year,
    Position,
    Experience,
    OrganizationName,
} from './ExpirienceElements';
import Aux from '../../hoc/Auxiliary';

const ExpirienceSection = () => {
    return (
        <Aux>
            <ExpirienceContainer id="expiriences">
                <ExpirienceWrapper>
                    <Title>Experiences</Title>

                    <InfoWrapper>
                        <WorkWrapper>
                            <Subtitle>Work</Subtitle>

                            <Wrapper>
                                <Column1>
                                    <OrganizationName>BLUE APP</OrganizationName>
                                    <Year>2014-2016</Year>    
                                </Column1>

                                <Column2>
                                    <Position>Associate Design Director</Position>
                                    <Experience>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ut sem vel auctor. Donec sed malesuada lacus, id varius sem. Ut rhoncus congue lacinia. Nullam ante ligula, rutrum vel semper id, volutpat nec augue. 
                                    </Experience>
                                </Column2>

                                <Column1>
                                    <OrganizationName>HOP!</OrganizationName>
                                    <Year>2016-2017</Year>      
                                </Column1>

                                <Column2>
                                    <Position>Creative Design Lead</Position>
                                    <Experience>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ut sem vel auctor. Donec sed malesuada lacus, id varius sem. Ut rhoncus congue lacinia. Nullam ante ligula, rutrum vel semper id, volutpat nec augue.                                     
                                        </Experience>
                                </Column2>

                                <Column1>
                                    <OrganizationName>WISBOOM</OrganizationName>
                                    <Year>2018-2019</Year>
                                </Column1>

                                <Column2>
                                    <Position>Associate Design Director</Position>
                                    <Experience>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ut sem vel auctor. Donec sed malesuada lacus, id varius sem. Ut rhoncus congue lacinia. Nullam ante ligula, rutrum vel semper id, volutpat nec augue.                                     
                                    </Experience>
                                </Column2>

                                <Column1>
                                    <OrganizationName>SNAP UP</OrganizationName>
                                    <Year>2019-2020</Year>
                                </Column1>
                                    
                                <Column2>
                                    <Position>UI/UX Design</Position>
                                    <Experience>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ut sem vel auctor. Donec sed malesuada lacus, id varius sem. Ut rhoncus congue lacinia. Nullam ante ligula, rutrum vel semper id, volutpat nec augue.                                     
                                    </Experience>
                                </Column2>

                                <Column1>
                                    <OrganizationName>GDV</OrganizationName>
                                    <Year>2020-2021</Year>    
                                </Column1>

                                <Column2>
                                    <Position>Director of Design</Position>
                                    <Experience>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ut sem vel auctor. Donec sed malesuada lacus, id varius sem. Ut rhoncus congue lacinia. Nullam ante ligula, rutrum vel semper id, volutpat nec augue.                                     
                                    </Experience>
                                </Column2>
                            </Wrapper>
                        </WorkWrapper>

                        <EducationWrapper>
                            <Subtitle>Education</Subtitle>

                            <Wrapper>
                                <Column1>
                                    <OrganizationName>BLUE APP</OrganizationName>
                                    <Year>2014-2016</Year>    
                                </Column1>

                                <Column2>
                                    <Position>Associate Design Director</Position>
                                    <Experience>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ut sem vel auctor. Donec sed malesuada lacus, id varius sem. Ut rhoncus congue lacinia. Nullam ante ligula, rutrum vel semper id, volutpat nec augue.                                     
                                    </Experience>
                                </Column2>

                                <Column1>
                                    <OrganizationName>HOP!</OrganizationName>
                                    <Year>2016-2017</Year>      
                                </Column1>

                                <Column2>
                                    <Position>Creative Design Lead</Position>
                                    <Experience>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ut sem vel auctor. Donec sed malesuada lacus, id varius sem. Ut rhoncus congue lacinia. Nullam ante ligula, rutrum vel semper id, volutpat nec augue.                                     
                                    </Experience>
                                </Column2>

                                <Column1>
                                    <OrganizationName>WISBOOM</OrganizationName>
                                    <Year>2018-2019</Year>
                                </Column1>

                                <Column2>
                                    <Position>Associate Design Director</Position>
                                    <Experience>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elementum ut sem vel auctor. Donec sed malesuada lacus, id varius sem. Ut rhoncus congue lacinia. Nullam ante ligula, rutrum vel semper id, volutpat nec augue.                                     
                                    </Experience>
                                </Column2>
                            </Wrapper>
                        </EducationWrapper>
                    </InfoWrapper>
                </ExpirienceWrapper>
            </ExpirienceContainer>
        </Aux>
    )
}

export default ExpirienceSection;
