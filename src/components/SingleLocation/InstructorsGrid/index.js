import { Grid, Instructor, Name } from './styles';

const InstructorsGrid = ({ instructors }) => {
    return(
        <>
            <h3>Instructors</h3>
            <Grid>
                {instructors.map((instructor, i) => (
                    <Instructor key={i}>
                        <img src={instructor.image} alt={instructor.name}/>
                        <Name>{instructor.name}</Name>
                    </Instructor>
                ))}
            </Grid>
        </>
    )
}

export default InstructorsGrid;