import { Container } from 'theme-ui';
import SingleLocation from '../../components/SingleLocation';

const Location = () => {

    const location = {
        title: 'North Fort Lauderdale', 
        address: '6131 N. Federal Hwy., Fort Lauderdale, FL 33308', 
        scheduleLink: '/locations/1/schedule',
        signUpLink: '#', 
        coordinates: {
            lat: 26.124950, 
            lng: -80.137930
        },
        services: [
            'yoga', 
            'fiit', 
            'restore'
        ]
    };

    const instructor = {
        name: 'Lynzy Ferris', 
        title: 'Studio Leader', 
        image: '/images/instructors/image-05.png',
        bio:'<p>Discovering yoga in 2009 she realized the amazing benefits yoga was giving her life physically and mentally. It was exactly what she desired, a restorative practice that delves so much deeper than the aesthetics of exercise. It digs deeper into the soul, rather than just the mirror, while it strengthens the body and the mind giving a person a wonderful sense of confidence and wholeness.</p><p>She explored deeper into her personal practice making it a daily routine. Realizing she wanted to share the beauty of this practice with others, she became a fully certified instructor in 2011 with her 200 RYT. She is also CPR certified with American Red Cross.</p>',
        link: '/instructors/1', 
        followLink: '#'
    };

    const photoWallImages = [
        '/images/classes/image-01.png', 
        '/images/classes/image-01.png', 
        '/images/classes/image-01.png',
        '/images/classes/image-01.png',
        '/images/classes/image-01.png',
        '/images/classes/image-01.png',
        '/images/classes/image-01.png',
        '/images/classes/image-01.png'
    ];

    const instructors = [
        {
            slug: 'alexis-georgia', 
            name: 'Alexis Georgia',
            image: '/images/instructors/alexis-georgia.png'
        },
        {
            slug: 'ana-vecchio', 
            name: 'Ana Vecchio',
            image: '/images/instructors/ana-vecchio.png'
        }, 
        {
            slug: 'brittney-coates', 
            name: 'Brittney Coates',
            image: '/images/instructors/brittney-coates.png'
        }, 
        {
            slug: 'caroline-rafenbury', 
            name: 'Carolina Rifenbury',
            image: '/images/instructors/caroline-rafenbury.png'
        }, 
        {
            slug: 'hailey-stricker', 
            name: 'Hailey Stricker',
            image: '/images/instructors/hailey-stricker.png'
        }, 
        {
            slug: 'keely-mccullough', 
            name: 'Keely McCulloungh',
            image: '/images/instructors/keely-mccullough.png'
        }, 
        {
            slug: 'kelly-green', 
            name: 'Kelly Green',
            image: '/images/instructors/kelly-green.png'
        }, 
        {
            slug: 'nicole-fox', 
            name: 'Nicole Fox',
            image: '/images/instructors/nicole-fox.png'
        }, 
        {
            slug: 'paige-held', 
            name: 'Paige Held',
            image: '/images/instructors/paige-held.png'
        }, 
        {
            slug: 'vanessa-mota', 
            name: 'Vanessa Mota',
            image: '/images/instructors/vanessa-mota.png'
        }
    ]; 

    return(
        <Container variant="small" >
            <SingleLocation {...location} {...{instructor}} {...{photoWallImages}} {...{instructors}} />
        </Container>
    )
}

export default Location;