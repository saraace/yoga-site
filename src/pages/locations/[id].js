import SingleLocation from '../../components/SingleLocation';

const Location = () => {

    const location = {
        address: '6131 N. Federal Hwy., Fort Lauderdale, FL 33308', 
        title: 'North Fort Lauderdale', 
        tagline: 'Where the Magic City Meets Down-to-Earth Charm',
        description: '<p>Set against the backdrop of winding canals and a lazy waterfront promenade, North Fort Lauderdale won our hearts way back in our carefree childhood days.</p><p>Delighted to be serving the local community, both in-studio and online, North Fort Lauderdale has proved to be a tremendous source of inspiration for the Yoga Joint community and a place we are proud to call one of our homes!</p>',
        scheduleLink: '/locations/1/schedule',
        signUpLink: '#', 
        phone: '954-916-7253',
        coordinates: {
            lat: 26.124950, 
            lng: -80.137930
        }
    };

    const instructor = {
        name: 'Lynzy Ferris', 
        title: 'Studio Leader', 
        image: '/images/instructors/image-05.png',
        quote: 'You’re not only doing something for your physique or your mind, but you’re also doing something for a whole.',
        bio:'Hailey Stricker is the studio leader of Yoga Joint’s North Fort Lauderdale location. A compassionate teacher and community leader, both on and off the mat, Hayley’s approach to yoga & fitness is one of instinct, empathy, and mind-body balance.',
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

    return(
        <>
            <SingleLocation {...location} {...{ instructor, photoWallImages }} />
        </>
    )
}

export default Location;