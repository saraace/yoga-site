import PropTypes from "prop-types";
import Link from 'next/link';
import { Grid, Instructor, Name } from './styles';

const InstructorsGrid = ({ instructors }) => {
    return(
        <>
            <h3>Instructors</h3>
            <Grid>
                {instructors.map((instructor, i) => (
                    <Link key={i} href={'/instructors/'+instructor.slug+'/'}>
                        <Instructor title={instructor.name}>
                            <img src={instructor.image} alt={instructor.name}/>
                            <Name>{instructor.name}</Name>
                        </Instructor>
                    </Link>
                ))}
            </Grid>
        </>
    )
}

InstructorsGrid.propTypes = {
    slug: PropTypes.string, 
    name: PropTypes.string, 
    image: PropTypes.string
}

export default InstructorsGrid;