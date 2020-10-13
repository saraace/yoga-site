import { useRouter } from "next/router";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import PageHeader, { LogoCol, LogoWrapper, NavCol, ButtonCol, MobileNavCol } from "./styles";
import YogaJointLogo from "../../assets/svgs/yoga-joint.svg";
import ShiftLogo from "../../assets/svgs/shift.svg";
import Navigation from "./Navigation";
import Buttons from "./Buttons";
import MobileNav from "./Navigation/MobileNav";

const Header = () => {
  const router = useRouter(); 
  return (
    <PageHeader>
      <LogoCol>
        <Link href="/">
          <a>
            <AnimatePresence>
              {router.pathname === '/sign-up' && (
                <LogoWrapper
                  initial={{ opacity: 0, y: '-50%' }}
                  animate={{ opacity: 1, y: '-50%' }}
                  transition={{ ease: 'easeOut', duration: 0.3 }}
                  exit={{ opacity: 0, y: '-50%' }}
                >
                  <YogaJointLogo />
                </LogoWrapper>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {router.pathname !== '/sign-up' && (
                <LogoWrapper
                  initial={{ opacity: 0, x: '-100px', y: '-50%' }}
                  animate={{ opacity: 1, x: 0, y: '-50%' }}
                  transition={{ ease: 'easeOut', duration: 0.3 }}
                  exit={{ opacity: 0, x: '100px', y: '-50%' }}
                >
                  <ShiftLogo />
                </LogoWrapper>
              )}
            </AnimatePresence>
          </a>
        </Link>
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
  