import { AnimatePresence, motion } from 'framer-motion';
import { Badge } from 'theme-ui';
import { Button } from './styles';
import FilterIcon from '../../../assets/svgs/filter-icon.svg';

const FilterButton = ({ numberActive, ...rest }) => {

    return(
        <Button {...rest}>
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
        </Button>
    )
}

export default FilterButton;