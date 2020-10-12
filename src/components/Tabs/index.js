import { TabMenu, Tab } from "./styles";

const Tabs = ({ tabs, active, variant, onTabClick }) => {
    return(
        <TabMenu>
            {tabs.map((tab, i) => (
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

export default Tabs;