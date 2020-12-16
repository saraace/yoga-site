import { useState } from "react";
import { useSelector } from "react-redux";
import { motion, useAnimation } from "framer-motion"
import { MobileNavWrapper, ToggleButton, NavMenu, NavItem, NavLink } from "./styles";


const MobileNav = () => {

    const { auth } = useSelector(({ auth }) => auth);

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
            left: 'auto',
            right: '0px',
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
            left: '0px',
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
    };

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
                    {!auth && (
                    <NavItem>
                        <NavLink href="/shift">Shift</NavLink>
                    </NavItem>
                    )}
                    <NavItem>
                        <NavLink href="/classes">Classes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/locations">Locations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/teachers">Teachers</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink href="/store">Store</NavLink>
                    </NavItem> */}
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