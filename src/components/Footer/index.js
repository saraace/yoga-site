import { Container } from "theme-ui";
import PageFooter, { FooterFlex, LogoWrapper, FooterContent, CopyrightWrapper, Copyright } from "./styles";
import YogaLogo from "../../assets/svgs/yoga-site.svg";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <PageFooter>
      <Container>
        <FooterFlex>
          <LogoWrapper>
            <YogaLogo />
          </LogoWrapper>
          <FooterContent>
            <FooterLinks />
            <CopyrightWrapper>
              <Copyright>
                © 2021 Yoga Site All Rights Reserved | <a href="#">Privacy Policy</a>
              </Copyright>
              <SocialLinks />
            </CopyrightWrapper>
          </FooterContent>
        </FooterFlex>
      </Container>
    </PageFooter>
  );
};

export default Footer;
