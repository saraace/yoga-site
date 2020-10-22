import PropTypes from "prop-types";
import { AnimatePresence, motion } from 'framer-motion';
import { Badge } from 'theme-ui';
import { Link, Button } from './styles';
import FilterIcon from '../../../assets/svgs/filter-icon.svg';

const FilterButton = ({ numberActive, menuOpen, ...rest }) => {

    return(
        <>
            <Link {...rest}>
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
            </Link>
            <AnimatePresence>
                {!menuOpen && (
                    <Button {...rest} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                    >
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
                )}
            </AnimatePresence>
        </>
    )
}

FilterButton.defaultProps = {
    numberActive: 0, 
    menuOpen: false
}

FilterButton.propTypes = {
    numberActive: PropTypes.number, 
    menuOpen: PropTypes.bool
}

export default FilterButton;