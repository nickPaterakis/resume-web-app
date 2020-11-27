import React from 'react';
import { FiHexagon } from 'react-icons/fi';
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
        <>
            <AbilityContainer id="abilities">
                <Title>Abilities</Title>
                <AbilityWrapper>
                    <SkillWrapper>
                        <Subtitle>Skills</Subtitle>
                        <List>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Spring boot</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>Java</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>HTML</ListItem>
                            <ListItem><ItemOrder> <FiHexagon /> </ItemOrder>CSS</ListItem>
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
        </>
    )
}

export default AbilitySection;
