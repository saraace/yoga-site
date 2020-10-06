import PageHeader from "./styles";
import YogaJointLogo from "../../svgs/yoga-joint.svg";
import Navigation from "./Navigation";
import Buttons from "./Buttons";

const Header = () => {
    return (
      <PageHeader>
        <div>
          <YogaJointLogo />
        </div>
        <div>
          <Navigation />
        </div>
        <div>
          <Buttons />
        </div>
      </PageHeader>
    )
  }
  
  export default Header;
  