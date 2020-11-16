import Links, { SocialLink, InstagramButton, FacebookButton } from "./styles";
import InstagramIcon from "../../../assets/svgs/instagram.svg";
import FacebookIcon from "../../../assets/svgs/facebook.svg";

const SocialLinks = () => {
    return (
        <div>
            <Links>
                <SocialLink>
                    <InstagramButton href="#" target="_blank"><InstagramIcon /></InstagramButton>
                </SocialLink>
                <SocialLink>
                    <FacebookButton href="#" target="_blank"><FacebookIcon /></FacebookButton>
                </SocialLink>
            </Links>
        </div>
    ); 
}
export default SocialLinks