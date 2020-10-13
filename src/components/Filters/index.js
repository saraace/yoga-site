import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Container, Button } from 'theme-ui';
import { FilterButton, FilterMenu, FilterRow, FilterCol, FilterGroup, Filter, ClassTypeFilter, DifficultyFilter, YogaType, FilterTitle, ApplyButton } from './styles';
import RadioFilter from './RadioFilter';
import YogaTypeFilter from './YogaTypeFilter';
import FilterIcon from '../../assets/svgs/filter-icon.svg';

const Filters = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState({
        instructor: '', 
        classType: '', 
        difficulty: '',
        yogaType : ''
    });

    const onSelect = (name, value) => {
        const updatedSelected = {};
        updatedSelected[name] = value;
        setSelected(selected => ({ 
            ...selected, 
            ...updatedSelected
        }));
    };

    const instructors = []; 

    const classTypes = [
        {
            value: 'live',
            label: 'Live or Local'
        },
        {
            value: 'on-demand', 
            label: 'On-Demand'
        }
    ]; 

    const difficulties = [
        {
            value: 'easy', 
            label: 'Easy'
        }, 
        {
            value: 'medium', 
            label: 'Medium'
        },
        {
            value: 'hard', 
            label: 'Hard'
        }
    ];

    const yogaTypes = [
        {
            value: 'flow', 
            label: 'Yoga Flow'
        }, 
        {
            value: 'follow', 
            label: 'Yoga Follow'
        },
        {
            value: 'fiit', 
            label: 'Fiit'
        }, 
        {
            value: 'restore', 
            label: 'Restore'
        }
    ];
    
    return(
        <>
            <FilterButton onClick={() => setIsOpen(isOpen => (!isOpen))}>
                <FilterIcon />
                <span>Filters</span>
            </FilterButton>
            <AnimatePresence>
                {isOpen && (
                <FilterMenu
                    initial={{ height: '0px' }}
                    animate={{ height: 'auto' }}
                    exit={{ height: '0px' }}
                    transition={{ ease: 'easeOut', duration: 0.3 }}
                >
                    <Container>
                        <FilterRow>
                            <FilterCol>
                                <FilterGroup>
                                    <FilterTitle>Instructor</FilterTitle>
                                    <Filter>
                                        {instructors.map((instructor, i) => (
                                            <label key={i}>
                                                <img src="" alt={instructor.name} />
                                                <input type="checkbox" value={instructor.name} name="instructor" />
                                                <div></div>
                                                <div>{instructor.name}</div>
                                            </label>
                                        ))}
                                    </Filter>
                                </FilterGroup>
                            </FilterCol>
                        </FilterRow>
                        <FilterRow>
                            <FilterCol>
                                <FilterGroup>
                                    <FilterTitle>Class Type</FilterTitle>
                                    <ClassTypeFilter>
                                        {classTypes.map((ct, i) => (
                                            <RadioFilter key={i} {...ct} selected={selected.classType} name="classType" handleChange={() => { onSelect('classType', ct.value) }} />
                                        ))}
                                    </ClassTypeFilter>
                                </FilterGroup>
                                <FilterGroup>
                                    <FilterTitle>Difficulty Settings</FilterTitle>
                                    <DifficultyFilter>
                                        {difficulties.map((difficulty, i) => (
                                            <RadioFilter key={i} {...difficulty} selected={selected.difficulty} name="difficulty" handleChange={() => { onSelect('difficulty', difficulty.value) }} />
                                        ))}
                                    </DifficultyFilter>
                                </FilterGroup>
                                <Filter>
                                    <FilterTitle>Duration <span className="muted">(Minutes)</span></FilterTitle>
                                </Filter>
                            </FilterCol>
                            <FilterCol>
                                <FilterGroup>
                                    <FilterTitle>Yoga Type</FilterTitle>
                                    <YogaType>
                                        {yogaTypes.map((yogaType, i) => (
                                            <YogaTypeFilter key={i} {...yogaType} selected={selected.yogaType} handleChange={() => { onSelect('yogaType', yogaType.value) }} />
                                        ))}
                                    </YogaType>
                                </FilterGroup>
                            </FilterCol>
                        </FilterRow>
                        <FilterRow>
                            <FilterCol>
                                <ApplyButton>
                                    <Button type="submit" >Apply Filter</Button>
                                </ApplyButton>
                            </FilterCol>
                        </FilterRow>
                    </Container>
                </FilterMenu>
                )}
            </AnimatePresence>
        </>
    )
}

export default Filters;