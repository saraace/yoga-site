import { Container } from 'theme-ui';
import SingleClass from '../../components/SingleClass';

const Class = () => {

    const singleClass = {
        title: 'Legs and Core Exercise', 
        difficulty: 'Moderate', 
        duration: '20 mins', 
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco. Est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        equipment: ['Yoga mat', 'yoga block', 'towel', 'bottle of water'],
        muscleGroups: ['Shoulders', 'legs', 'core', 'biceps'], 
        reserved: false, 
        selectedSpot: "",
        classType: 'yoga'
    };

    const instructor = {
        name: 'Paige Held', 
        bio: 'Alexandra is an 8 year veteran of the U.S. Army who brings that bootcamp style of fitness to the yoga mat. She has a Masters Degree in Kiniseology from the University of Boston.', 
        link: '/instructors/1', 
        image: '/images/instructors/paige-held.png'
    }

    const location = {
        title: "North Fort Lauderdale", 
        link: "/locations/1"
    }

    return(
        <Container variant="small">
            <SingleClass {...singleClass} {...{ instructor, location }}/>
        </Container>
    )
}

export default Class;