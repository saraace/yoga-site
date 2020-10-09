import SlidingSection from "../SlidingSection";
import LargeClassCard from "../Card/LargeClassCard";
import SmallClassCard from "../Card/SmallClassCard";
import InstructorCard from "../Card/InstructorCard";

const Homepage = () => {

    const classes1 = [
        {
            title: "Workout Name", 
            teacher: "Teacher", 
            difficulty: "Advanced",  
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-01.png", 
            link: "/sign-up"
        }, 
        {
            title: "Cardio", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-02.png", 
            link: "/sign-up"
        }, 
        {
            title: "Workout Name", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-03.png", 
            link: "/sign-up"
        }
    ]

    const classes2 = [
        {
            title: "Strength", 
            teacher: "Teacher", 
            difficulty: "Advanced",  
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-04.png", 
            link: "/sign-up"
        }, 
        {
            title: "Cardio", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-02.png", 
            link: "/sign-up"
        }, 
        {
            title: "Relaxation", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-05.png", 
            link: "/sign-up"
        }, 
        {
            title: "Relaxation", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-01.png", 
            link: "/sign-up"
        }
    ]

    const instructors = [
        {
            name: "Paige Held",
            title: "Owner, Yoga Leader",
            classes: "24",
            image: "/images/instructors/image-01.png", 
            link: "/sign-up"
        }, 
        {
            name: "Kelly Green",
            title: "Creator of Fusion Flow & Teacher Training Leader",
            classes: "9",
            image: "/images/instructors/image-02.png", 
            link: "/sign-up"
        }, 
        {
            name: "Kelly Green",
            title: "Creative Marketing & Yoga Philosophy Training Leader",
            classes: "12",
            image: "/images/instructors/image-03.png", 
            link: "/sign-up"
        }, 
        {
            name: "Ana Vecchino",
            title: "Studio Leader",
            classes: "10",
            image: "/images/instructors/image-04.png", 
            link: "/sign-up"
        }, 
        {
            name: "Lynzy Ferris",
            title: "Studio Leader",
            classes: "11",
            image: "/images/instructors/image-05.png", 
            link: "/sign-up"
        }
    ]

    return (
        <>
            <SlidingSection title={`My programs & scheduled classes`}>
                {classes1.map(c => {
                    return (
                        <LargeClassCard {...c} />
                    )
                })}
            </SlidingSection>
            <SlidingSection title={`New classes to discover`}>
                {classes2.map(c => {
                    return (
                        <SmallClassCard {...c} />
                    )
                })}
            </SlidingSection>
            <SlidingSection title={`Classes by instructor`}>
                {instructors.map(instructor => {
                    return(
                        <InstructorCard {...instructor} />
                    )
                })}
            </SlidingSection>
        </>
    );
}

export default Homepage;