import PageHeader, { LogoCol, NavCol, ButtonCol, MobileNavCol } from "./styles";
import YogaJointLogo from "../../svgs/yoga-joint.svg";
import Navigation from "./Navigation";
import Buttons from "./Buttons";
import MobileNav from "./Navigation/MobileNav";

const Header = () => {
    return (
      <PageHeader>
        <LogoCol>
          <YogaJointLogo />
        </LogoCol>
        <NavCol>
          <Navigation />
        </NavCol>
        <ButtonCol>
          <Buttons />
        </ButtonCol>
        <MobileNavCol>  
          <MobileNav />
        </MobileNavCol>
      </PageHeader>
    )
  }
  
  export default Header;
  