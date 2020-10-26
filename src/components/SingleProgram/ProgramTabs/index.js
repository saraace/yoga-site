import { useState } from 'react';
import { TabWrapper } from './styles';
import Tabs from '../../Tabs';
import SlidingLayout from '../../../containers/CardLayouts/SlidingLayout';
import ScheduleCard from '../../Cards/ScheduleCard';

const ProgramTabs = ({ schedule }) => {

    const [ activeTab, setActiveTab ] = useState('Week 1');

    const tabs = [...new Set(schedule.map(week => week.title))];

    const onTabClick = (tab) => {
        console.log(tab);
        setActiveTab(tab);
    }

    return(
        <>
            <TabWrapper>
                {tabs.length && <Tabs {...{tabs}} active={activeTab} variant="button" {...{onTabClick}} />}
            </TabWrapper>
            <div>
                {schedule.map((week, i) => (week.title === activeTab &&
                    <SlidingLayout key={i} dashedBorder={true} height={[300, null, null, 685]} stepWidth={581} >
                        {week.schedule.map((day, j) => (
                            <ScheduleCard key={j} {...day} />
                        ))}
                    </SlidingLayout>
                ))}
            </div>
        </>
    )
}

export default ProgramTabs;