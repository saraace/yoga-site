import Links, { SocialLink, InstagramButton, FacebookButton } from "./styles";
import InstagramIcon from "../../../svgs/instagram.svg";
import FacebookIcon from "../../../svgs/facebook.svg";

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