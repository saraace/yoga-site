import { useState } from 'react';
import PropTypes from "prop-types";
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from 'theme-ui';
import { TopRowWrapper, TopRow } from "./styles";
import Tabs from "../Tabs";
import FilterMenu from '../FilterMenu';
import FilterButton from '../FilterMenu/FilterButton';

const LibraryTopRow = ({ tabs, activeTab, onTabClick, subTabs, activeSubTab, onSubTabClick, filters, onApplyFilters }) => {

    const [ filterMenuOpen, setFilterMenuOpen ] = useState(false);
    const [ activeFilters, setActiveFilters ] = useState(0);

    return(
        <TopRowWrapper>
            <Container>
                <TopRow>
                    <div>
                        {tabs && <Tabs {...{tabs}} active={activeTab} {...{onTabClick}} />}
                        {subTabs && <Tabs tabs={Array.isArray(subTabs) ? subTabs : subTabs[activeTab]} active={activeSubTab} variant='sub-tab' onTabClick={onSubTabClick} />}
                    </div>
                    {filters && (
                        <FilterButton 
                            numberActive={activeFilters} 
                            onClick={() => setFilterMenuOpen(filterMenuOpen => (!filterMenuOpen))} 
                        />
                    )}
                </TopRow>
            </Container>
            <AnimatePresence>
                {filters && filterMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ ease: 'easeOut', duration: 0.4 }}
                    >
                        <FilterMenu 
                            {...{filters}}
                            onClose={() => setFilterMenuOpen(false)} 
                            onApply={onApplyFilters} 
                            onChange={(numberActive) => setActiveFilters(numberActive)} 
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </TopRowWrapper>
    )
}

LibraryTopRow.propTypes = {
    tabs: PropTypes.array,
    activeTab: PropTypes.string, 
    onTabClick: PropTypes.func,
    subTabs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), 
    activeSubTab: PropTypes.string, 
    onSubTabClick: PropTypes.func,
    filters: PropTypes.object, 
    onApplyFilters: PropTypes.func
}

export default LibraryTopRow;