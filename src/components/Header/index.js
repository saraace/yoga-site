import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { AnimatePresence, useViewportScroll } from "framer-motion";
import PageHeader, { LogoCol, LogoWrapper, NavCol, ButtonCol, MobileNavCol } from "./styles";
import YogaJointLogo from "../../assets/svgs/yoga-joint.svg";
import ShiftLogo from "../../assets/svgs/shift.svg";
import Navigation from "./Navigation";
import Buttons from "./Buttons";
import MobileNav from "./Navigation/MobileNav";

const Header = () => {
  const router = useRouter(); 

  const [ scrollingUp, setScrollingUp ] = useState(false);
  const [ scrollTop, setScrollTop ] = useState(0);

  useEffect(() => {
      const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
          setScrollingUp((e.target.documentElement.scrollTop < scrollTop) && e.target.documentElement.scrollTop > 138);
      };
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const headerVariants = {
    'static': {
      position: 'absolute',
      background: 'rgba(11, 21, 37, 0)',
      boxShadow: '0 0 24px 0 rgba(11, 21, 37, 0)'
    },
    'sticky': {
      position: 'fixed', 
      background: 'rgba(11, 21, 37, 1)', 
      boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.5)'
    },
    'initialHomepage': {
      opacity: 0, 
      position: 'fixed',
      background: 'rgba(11, 21, 37, 0)'
    },
    'homepage': {
      opacity: 1, 
      transition: {
        delay: 2.5
      }
    }
  }

  return (
    <PageHeader 
      className={router.pathname !== "/"? (scrollingUp? 'sticky' : 'static') : "homepage"} 
      initial={router.pathname !== "/"? "": "initialHomepage"}
      animate={router.pathname !== "/"? (scrollingUp? 'sticky' : 'static') : "homepage"} 
      variants={headerVariants}
    >
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
  