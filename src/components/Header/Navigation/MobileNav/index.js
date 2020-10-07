//import NavMenu, { NavItem, NavLink, Dropdown } from "./styles"; 
import { useState } from "react";
import { motion, useAnimation } from "framer-motion"
import MobileNavWrapper, { ToggleButton, NavMenu, NavItem, NavLink, Dropdown } from "./styles";
import navigationLinks from "../nav-items";

const MobileNav = () => {
    const [ open, setOpen ] = useState(false);

    const toggleAnimation = useAnimation();
    
    const topLineVariants = {
        init: {
            left: 'auto', 
            right: '0px'
        },
        hover: {
            left: '3px'
        }, 
        open: {
            top: '11px', 
            left: '3px',
            rotate: 45
        }, 
        closed: {
            top: '8px',
            rotate: 0
        }
    };

    const bottomLineVariants = {
        init: {
            left: '0px'
        },
        hover: {
            left: '3px'
        }, 
        open: {
            top: '11px', 
            left: '3px',
            rotate: -45
        }, 
        closed: {
            top: '15px',
            rotate: 0
        }
    };

    const menuVariants = {
        open: {
            bottom: 0
        },
        closed: {
            bottom: '100%'
        }
    }
    return (
        <>
            <ToggleButton 
                onHoverStart={() => { if(!open){ toggleAnimation.start('hover') }}} 
                onHoverEnd={() => { if(!open){ toggleAnimation.start('init') }}} 
                onClick={() => { setOpen(!open); if(!open){ toggleAnimation.start('open'); } else{ toggleAnimation.start('closed'); } }}
            >
                <motion.div animate={toggleAnimation} variants={topLineVariants}></motion.div>
                <motion.div animate={toggleAnimation} variants={bottomLineVariants}></motion.div>
            </ToggleButton>
            <MobileNavWrapper initial="closed" animate={ open? 'open' : 'closed' } variants={menuVariants}>
                <NavMenu>
                    {navigationLinks.map(navItem => {
                        return (
                            <NavItem>
                                <NavLink href={navItem.link}>{navItem.text}</NavLink>
                                {navItem.hasOwnProperty('children') && (
                                <Dropdown>
                                    <ul>
                                        {navItem.children.map(childItem => {
                                            return(
                                                <NavItem>
                                                    <NavLink href={childItem.link}>{childItem.text}</NavLink>
                                                </NavItem>
                                            )
                                        })}
                                    </ul>
                                </Dropdown>
                                )}
                            </NavItem> 
                        );
                    })}
                    <NavItem>
                        <NavLink href="#">Account</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Logout</NavLink>
                    </NavItem>
                </NavMenu>
            </MobileNavWrapper>
        </>
    )
}
  
export default MobileNav;