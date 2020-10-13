import PropTypes from "prop-types";
import { TopRow } from "./styles";
import Tabs from "../Tabs";
import Filters from "../Filters"; 

const LibraryTopRow = ({ tabs, activeTab, onTabClick, subTabs, activeSubTab, onSubTabClick, filters }) => {
    return(
        <TopRow>
            <div>
                {tabs && <Tabs {...{tabs}} active={activeTab} {...{onTabClick}} />}
                {subTabs && <Tabs tabs={Array.isArray(subTabs) ? subTabs : subTabs[activeTab]} active={activeSubTab} variant='sub-tab' onTabClick={onSubTabClick} />}
            </div>
            {filters && <Filters />}
        </TopRow>
    )
}

LibraryTopRow.defaultProps = {
    filters: false
}

LibraryTopRow.propTypes = {
    tabs: PropTypes.array,
    activeTab: PropTypes.string, 
    onTabClick: PropTypes.func,
    subTabs: PropTypes.oneOfType(PropTypes.array, PropTypes.object), 
    activeSubTab: PropTypes.string, 
    onSubTabClick: PropTypes.func,
    filters: PropTypes.bool
}

export default LibraryTopRow;