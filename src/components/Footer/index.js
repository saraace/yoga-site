/** @jsx jsx */
import { jsx, Container, Box} from 'theme-ui';
import PageFooter, { FooterFlex, LogoWrapper, FooterContent, CopyrightWrapper, Copyright } from "./styles";
import YogaJointLogo from "../../svgs/yoga-joint.svg";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
      <PageFooter>
        <Container>
          <FooterFlex>
            <LogoWrapper>
              <YogaJointLogo />
            </LogoWrapper>
            <FooterContent>
              <FooterLinks />   
              <CopyrightWrapper>
                <Copyright>© 2020 Yoga Joint All Rights Reserved | <a href="#">Privacy Policy</a></Copyright>
                <SocialLinks />
              </CopyrightWrapper>
            </FooterContent>
          </FooterFlex>
        </Container>
      </PageFooter>
    )
  }
  
  export default Footer;
  