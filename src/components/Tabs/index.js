import PropTypes from "prop-types";
import { TabMenu, Tab } from "./styles";

const Tabs = ({ tabs, active, variant, onTabClick }) => {
    return(
        <TabMenu>
            {tabs && tabs.map((tab, i) => (
                <Tab 
                key={i} 
                className={
                    (variant? variant : 'default') + 
                    (tab === active? ' active' : '')
                } 
                onClick={() => {onTabClick(tab)}} 
                >{tab}</Tab>
            ))}
        </TabMenu>
    )
}

Tabs.defaultProps = {
    tabs: [], 
    active: "", 
    variant: "", 
    onTabClick: () => {}
}; 

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    active: PropTypes.string, 
    variant: PropTypes.string, 
    onTabClick: PropTypes.func
};

export default Tabs;