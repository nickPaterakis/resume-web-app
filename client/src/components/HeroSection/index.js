import ProfileImage from '../../images/profile-img.jpg';
import BackgroundImage from '../../images/bg-img.jpg';
import { 
    HeroContainer, 
    HeroBg, 
    BgImg,
    HeroContent, 
    HeroH1,
    HeroP,
    Img
} from './HeroElements';

const HeroSection = () => {

    return (
        <HeroContainer id="home">
            <HeroBg>
                <BgImg src={BackgroundImage} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Nicholas Paterakis</HeroH1>
                    <Img src={ProfileImage} />
                <HeroP>
                    Programming Enthusiast, Student
                </HeroP>
            </HeroContent> 
        </HeroContainer>
    )
}

export default HeroSection;
