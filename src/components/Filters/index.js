import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, Button, Badge } from 'theme-ui';
import { FilterButton, FilterMenu, FilterRow, Filter, ClassTypeFilter, DifficultyFilter, YogaType, FilterTitle, ApplyButton } from './styles';
import InstructorFilter from './InstructorFilter';
import RadioFilterOption from './RadioFilterOption';
import YogaTypeFilterOption from './YogaTypeFilterOption';
import FilterIcon from '../../assets/svgs/filter-icon.svg';

const Filters = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [numberActive, setNumberActive] = useState(0);
    const [selected, setSelected] = useState({
        instructor: '', 
        classType: '', 
        difficulty: '',
        yogaType : ''
    });

    useEffect(() => {
        let number = 0; 
        for(const ob of Object.entries(selected)){
            number += (ob[1] !== '')? 1 : 0;
        }
        setNumberActive(number);
    }, [selected]);

    const onSelect = (name, value) => {
        const updatedSelected = {};
        updatedSelected[name] = value;
        setSelected(selected => ({ 
            ...selected, 
            ...updatedSelected
        }));
    };

    const onApply = () => {
        setIsOpen(false);
    }

    /* const onClear = () => {
        setIsOpen(false); 
        setNumberActive(0);
        setSelected({
            instructor: '', 
            classType: '', 
            difficulty: '',
            yogaType : ''
        });
    } */

    const instructors = [
        {
            value: 'alexis-georgia', 
            label: 'Alexis Georgia',
            image: '/images/instructors/alexis-georgia.png'
        },
        {
            value: 'ana-vecchio', 
            label: 'Ana Vecchio',
            image: '/images/instructors/ana-vecchio.png'
        }, 
        {
            value: 'brittney-coates', 
            label: 'Brittney Coates',
            image: '/images/instructors/brittney-coates.png'
        }, 
        {
            value: 'caroline-rafenbury', 
            label: 'Carolina Rifenbury',
            image: '/images/instructors/caroline-rafenbury.png'
        }, 
        {
            value: 'hailey-stricker', 
            label: 'Hailey Stricker',
            image: '/images/instructors/hailey-stricker.png'
        }, 
        {
            value: 'keely-mccullough', 
            label: 'Keely McCulloungh',
            image: '/images/instructors/keely-mccullough.png'
        }, 
        {
            value: 'kelly-green', 
            label: 'Kelly Green',
            image: '/images/instructors/kelly-green.png'
        }, 
        {
            value: 'nicole-fox', 
            label: 'Nicole Fox',
            image: '/images/instructors/nicole-fox.png'
        }, 
        {
            value: 'paige-held', 
            label: 'Paige Held',
            image: '/images/instructors/paige-held.png'
        }, 
        {
            value: 'vanessa-mota', 
            label: 'Vanessa Mota',
            image: '/images/instructors/vanessa-mota.png'
        }
    ]; 

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
                <div>Filters 
                    <AnimatePresence>
                        {numberActive > 0 && 
                            <motion.div
                                initial={{ width: '0px' }}
                                animate={{ width: 'auto' }}
                                exit={{ width: '0px' }}
                            >
                                <Badge variant="danger">{numberActive}</Badge>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
            </FilterButton>
            <AnimatePresence>
                {isOpen && (
                <FilterMenu
                    initial={{ opacity: 0, height: '0px' }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: '0px' }}
                    transition={{ ease: 'easeOut', duration: 0.3 }}
                >
                    <Container>
                        <FilterRow>
                            <div>
                                <div>
                                    <FilterTitle>Instructor</FilterTitle>
                                    <InstructorFilter {...{instructors}} name="instructor" selected={selected.instructor} handleChange={onSelect} />
                                </div>
                            </div>
                        </FilterRow>
                        <FilterRow>
                            <div>
                                <div>
                                    <FilterTitle>Class Type</FilterTitle>
                                    <ClassTypeFilter>
                                        {classTypes.map((ct, i) => (
                                            <RadioFilterOption key={i} {...ct} selected={selected.classType} name="classType" handleChange={() => { onSelect('classType', ct.value) }} />
                                        ))}
                                    </ClassTypeFilter>
                                </div>
                                <div>
                                    <FilterTitle>Difficulty Settings</FilterTitle>
                                    <DifficultyFilter>
                                        {difficulties.map((difficulty, i) => (
                                            <RadioFilterOption key={i} {...difficulty} selected={selected.difficulty} name="difficulty" handleChange={() => { onSelect('difficulty', difficulty.value) }} />
                                        ))}
                                    </DifficultyFilter>
                                </div>
                                <Filter>
                                    <FilterTitle>Duration <span className="muted">(Minutes)</span></FilterTitle>
                                </Filter>
                            </div>
                            <div>
                                <div>
                                    <FilterTitle>Yoga Type</FilterTitle>
                                    <YogaType>
                                        {yogaTypes.map((yogaType, i) => (
                                            <YogaTypeFilterOption key={i} {...yogaType} selected={selected.yogaType} handleChange={() => { onSelect('yogaType', yogaType.value) }} />
                                        ))}
                                    </YogaType>
                                </div>
                            </div>
                        </FilterRow>
                        <FilterRow>
                            <ApplyButton>
                                <Button onClick={onApply} >Apply Filter</Button>
                            </ApplyButton>
                        </FilterRow>
                    </Container>
                </FilterMenu>
                )}
            </AnimatePresence>
        </>
    )
}

export default Filters;