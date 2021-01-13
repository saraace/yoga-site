import { Container } from 'theme-ui';
import PageBackground from "../../components/PageBackground";
import SingleInstructor from '../../components/SingleInstructor';

const Instructor = () => {

    const instructor = {
        name: 'Lynzy Ferris', 
        title: 'Studio Leader', 
        image: '/images/instructors/image-05.png',
        location: {
            id: '1', 
            title: 'Nort Fort Lauderdale',
            coordinates: {
                lat: 26.124950, 
                lng: -80.137930
            }
        }, 
        bio:'<p>Discovering yoga in 2009 she realized the amazing benefits yoga was giving her life physically and mentally. It was exactly what she desired, a restorative practice that delves so much deeper than the aesthetics of exercise. It digs deeper into the soul, rather than just the mirror, while it strengthens the body and the mind giving a person a wonderful sense of confidence and wholeness.</p><p>She explored deeper into her personal practice making it a daily routine. Realizing she wanted to share the beauty of this practice with others, she became a fully certified instructor in 2011 with her 200 RYT. She is also CPR certified with American Red Cross.</p>'
    }

    return(
        <>
            <PageBackground src="/images/instructors/bg-instructor.jpg" />
            <Container variant="small">
                <SingleInstructor {...instructor} />
            </Container>
        </>
    )
}

export default Instructor;