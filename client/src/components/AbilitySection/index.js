import React from 'react';
import { FiHexagon } from 'react-icons/fi';
import Aux from '../../hoc/Auxiliary'
import {
    AbilityContainer,
    AbilityWrapper,
    SkillWrapper,
    OtherWrapper,
    LanguageWrapper,
    HobbyWrapper,
    Title,
    Subtitle,
    List,
    ListItem,
    ItemOrder
} from './AbilityElements';

const AbilitySection = () => {
    return (
        <Aux>
            <AbilityContainer id="abilities">
                <Title>Abilities</Title>
                <AbilityWrapper>
                    <SkillWrapper>
                        <Subtitle>Skills</Subtitle>
                        <List>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>JavaScript</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>React</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>CSS</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Sass</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>HTML</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Java</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Spring Framework</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Spring Boot</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Docker</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Python</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>TensorFlow</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>NumPy</ListItem>
                        </List>
                    </SkillWrapper>

                    <OtherWrapper>
                        <LanguageWrapper>
                            <Subtitle>Languages</Subtitle>
                            <List>
                                <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Greek</ListItem>
                                <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>German</ListItem>
                                <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>English</ListItem>
                            </List>
                        </LanguageWrapper>
                        <HobbyWrapper>
                            <Subtitle>Hobbies</Subtitle>
                            <List>
                                <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Football</ListItem>
                                <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Bike</ListItem>
                                <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Hike</ListItem>
                                <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Music</ListItem>
                            </List>
                        </HobbyWrapper>
                    </OtherWrapper>
                </AbilityWrapper>
            </AbilityContainer>
        </Aux>
    )
}

export default AbilitySection;
