import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion";
import { MobileNavWrapper, ToggleButton, NavMenu, NavItem, NavLink } from "./styles";

const MobileNav = () => {
  const { auth } = useSelector(({ auth }) => auth);

  const [open, setOpen] = useState(false);

  const toggleAnimation = useAnimation();

  useEffect(() => {
    if (open) {
      toggleAnimation.start("open");
    } else {
      toggleAnimation.start("closed");
    }
  }, [open]);

  const topLineVariants = {
    init: {
      left: "auto",
      right: "0px",
    },
    hover: {
      left: "3px",
    },
    open: {
      top: "11px",
      left: "3px",
      rotate: 45,
    },
    closed: {
      top: "8px",
      left: "auto",
      right: "0px",
      rotate: 0,
    },
  };

  const bottomLineVariants = {
    init: {
      left: "0px",
    },
    hover: {
      left: "3px",
    },
    open: {
      top: "11px",
      left: "3px",
      rotate: -45,
    },
    closed: {
      top: "15px",
      left: "0px",
      rotate: 0,
    },
  };

  const menuVariants = {
    open: {
      bottom: 0,
    },
    closed: {
      bottom: "100%",
    },
  };

  return (
    <>
      <ToggleButton
        onHoverStart={() => {
          if (!open) {
            toggleAnimation.start("hover");
          }
        }}
        onHoverEnd={() => {
          if (!open) {
            toggleAnimation.start("init");
          }
        }}
        onClick={() => {
          setOpen((open) => !open);
        }}
      >
        <motion.div animate={toggleAnimation} variants={topLineVariants}></motion.div>
        <motion.div animate={toggleAnimation} variants={bottomLineVariants}></motion.div>
      </ToggleButton>
      <MobileNavWrapper initial="closed" animate={open ? "open" : "closed"} variants={menuVariants}>
        <NavMenu>
          {!auth && (
            <NavItem>
              <Link href="/explore">
                <NavLink onClick={() => setOpen(false)}>Explore</NavLink>
              </Link>
            </NavItem>
          )}
          <NavItem>
            <Link href="/classes">
              <NavLink onClick={() => setOpen(false)}>Classes</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/locations">
              <NavLink onClick={() => setOpen(false)}>Locations</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/teachers">
              <NavLink onClick={() => setOpen(false)}>Teachers</NavLink>
            </Link>
          </NavItem>
          {/* <NavItem>
            <Link href="/account">
              <NavLink onClick={() => setOpen(false)}>Account</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="#">
              <NavLink onClick={() => setOpen(false)}>Logout</NavLink>
            </Link>
          </NavItem> */}
        </NavMenu>
      </MobileNavWrapper>
    </>
  );
};

export default MobileNav;
