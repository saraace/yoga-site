import SlidingSection from "../SlidingSection";
import ClassCard from "../Class/Card";

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
            image: "/images/classes/image-01.png"
        }, 
        {
            title: "Cardio", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-02.png"
        }, 
        {
            title: "Workout Name", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-03.png"
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
            image: "/images/classes/image-04.png"
        }, 
        {
            title: "Cardio", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-02.png"
        }, 
        {
            title: "Relaxation", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-05.png"
        }, 
        {
            title: "Relaxation", 
            teacher: "Teacher", 
            difficulty: "Advanced", 
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-01.png"
        }
    ]

    return (
        <>
            <SlidingSection title={`My programs & scheduled classes`}>
                {classes1.map(c => {
                    return (
                        <ClassCard {...c} size="md" />
                    )
                })}
            </SlidingSection>
            <SlidingSection title={`New classes to discover`}>
                {classes2.map(c => {
                    return (
                        <ClassCard {...c} size="sm" />
                    )
                })}
            </SlidingSection>
        </>
    );
}

export default Homepage;