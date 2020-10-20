import { Container } from 'theme-ui';
import SingleInstructor from '../../components/SingleInstructor';

const Instructor = () => {

    const instructor = {
        name: 'Lynzy Ferris', 
        title: 'Studio Leader', 
        image: '/images/instructors/image-05.png',
        location: {
            id: '1', 
            title: 'Nort Fort Lauderdale',
            lat: 0, 
            lng: 0
        }, 
        bio:'<p>Discovering yoga in 2009 she realized the amazing benefits yoga was giving her life physically and mentally. It was exactly what she desired, a restorative practice that delves so much deeper than the aesthetics of exercise. It digs deeper into the soul, rather than just the mirror, while it strengthens the body and the mind giving a person a wonderful sense of confidence and wholeness.</p><p>She explored deeper into her personal practice making it a daily routine. Realizing she wanted to share the beauty of this practice with others, she became a fully certified instructor in 2011 with her 200 RYT. She is also CPR certified with American Red Cross.</p>'
    }

    return(
        <Container variant="small">
            <SingleInstructor {...instructor} />
        </Container>
    )
}

export default Instructor;