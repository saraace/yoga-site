import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Container, Button } from 'theme-ui';
import { Menu, FilterRow, ClassTypeFilter, DifficultyFilter, YogaType, FilterTitle, ApplyButton } from './styles';
import InstructorFilter from './InstructorFilter';
import RadioFilterOption from './RadioFilterOption';
import DurationFilter from './DurationFilter';
import YogaTypeFilterOption from './YogaTypeFilterOption';

const FilterMenu = ({ filters, onClose, onApply, onChange }) => {
    
    const [selected, setSelected] = useState(filters);

    useEffect(() => {
        let numberOfFilters = 0; 
        for(const ob of Object.entries(selected)){
            numberOfFilters += 1;
        }
        onChange(numberOfFilters);
    }, [selected]);

    const onSelect = (name, value) => {
        const updatedSelected = {};
        updatedSelected[name] = value;
        setSelected(selected => ({ 
            ...selected, 
            ...updatedSelected
        }));
    };

    const applyFilters = () => {
        onClose();
        onApply(selected);
    }

    /* const onClear = () => {
        onClose(false); 
        setNumberActive(0);
        setSelected({
            instructor: '', 
            classType: '', 
            difficulty: '',
            durationMin: 0, 
            durationMax: 40,
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
        <Menu>
            <Container>
                <FilterRow>
                    <div>
                        <div>
                            <FilterTitle>Instructor</FilterTitle>
                            <InstructorFilter 
                                {...{instructors}} 
                                name="instructor" 
                                selected={selected.instructor} 
                                handleChange={onSelect} 
                            />
                        </div>
                    </div>
                </FilterRow>
                <FilterRow>
                    <div>
                        <div>
                            <FilterTitle>Class Type</FilterTitle>
                            <ClassTypeFilter>
                                {classTypes.map((ct, i) => (
                                    <RadioFilterOption 
                                        key={i} 
                                        {...ct} 
                                        selected={selected.classType} 
                                        name="classType" 
                                        handleChange={() => { onSelect('classType', ct.value) }} 
                                    />
                                ))}
                            </ClassTypeFilter>
                        </div>
                        <div>
                            <FilterTitle>Difficulty Settings</FilterTitle>
                            <DifficultyFilter>
                                {difficulties.map((difficulty, i) => (
                                    <RadioFilterOption 
                                        key={i} 
                                        {...difficulty} 
                                        selected={selected.difficulty} 
                                        name="difficulty" 
                                        handleChange={() => { onSelect('difficulty', difficulty.value) }} 
                                    />
                                ))}
                            </DifficultyFilter>
                        </div>
                        <div>
                            <FilterTitle>Duration <span className="muted">(Minutes)</span></FilterTitle>
                            <DurationFilter 
                                durationMin={selected.durationMin}
                                durationMax={selected.durationMax}
                                handleChange={onSelect} 
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <FilterTitle>Yoga Type</FilterTitle>
                            <YogaType>
                                {yogaTypes.map((yogaType, i) => (
                                    <YogaTypeFilterOption 
                                        key={i} 
                                        {...yogaType} 
                                        name="yogaType" 
                                        selected={selected.yogaType} 
                                        handleChange={() => { onSelect('yogaType', yogaType.value) }} 
                                    />
                                ))}
                            </YogaType>
                        </div>
                    </div>
                </FilterRow>
                <FilterRow>
                    <ApplyButton>
                        <Button onClick={applyFilters} >Apply Filter</Button>
                    </ApplyButton>
                </FilterRow>
            </Container>
        </Menu>
    )
}

FilterMenu.defaultProps = {
    filters: {}, 
    onClose: () => {}, 
    onApply: () => {}, 
    onChange: () => {}
}

FilterMenu.propTypes = {
    filters: PropTypes.object, 
    onClose: PropTypes.func, 
    onApply: PropTypes.func, 
    onChange: PropTypes.func
}

export default FilterMenu;