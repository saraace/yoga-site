import PropTypes from "prop-types";
import { TopRow } from "./styles";
import Tabs from "../Tabs";
import Filters from "../Filters"; 

const LibraryTopRow = ({ tabs, activeTab, onTabClick, subTabs, activeSubTab, onSubTabClick, filters }) => {
    return(
        <TopRow>
            <div>
                <Tabs {...{tabs}} active={activeTab} {...{onTabClick}} />
                {subTabs && <Tabs tabs={Array.isArray(subTabs) ? subTabs : subTabs[activeTab]} active={activeSubTab} variant='sub-tab' onTabClick={onSubTabClick} />}
            </div>
            {filters && (
                <Filters />
            )}
        </TopRow>
    )
}

LibraryTopRow.defaultProps = {
    tabs: [], 
    activeTab: "", 
    subTabs: [], 
    filters: false
}

export default LibraryTopRow;