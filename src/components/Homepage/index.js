import { Container, Button } from "theme-ui";
import SlidingSection from "../SlidingSection";
import LargeClassCard from "../Card/LargeClassCard";
import SmallClassCard from "../Card/SmallClassCard";
import InstructorCard from "../Card/InstructorCard";
import { FeaturedClass, FeaturedClassCard, FeaturedClassContent, ButtonRow } from "./styles";
import PlayIcon from "../../svgs/play-icon.svg"; 
import InfoIcon from "../../svgs/info-icon.svg";

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
                {classes1.map((c, i) => {
                    return (
                        <LargeClassCard key={i} {...c} />
                    )
                })}
            </SlidingSection>
            <SlidingSection title={`New classes to discover`}>
                {classes2.map((c, i) => {
                    return (
                        <SmallClassCard key={i} {...c} />
                    )
                })}
            </SlidingSection>
            <Container variant="no-gutters">
                <FeaturedClass>
                    <FeaturedClassCard>
                        <SmallClassCard teacher="Teacher" difficulty="Advanced" duration="20 mins" date="Mon, Jul 25th" time="10:15pm" type="follow" image="/images/homepage/image-01.png" />
                    </FeaturedClassCard>
                    <FeaturedClassContent>
                        <h2>Hips and Legs: Finding Freedom through Foundation</h2>
                        <ButtonRow>
                            <div>
                                <Button variant="primary-icon"><PlayIcon />Watch Exercise</Button>
                            </div>
                            <div>
                                <Button variant="secondary-icon"><InfoIcon />More Info</Button>
                            </div>
                        </ButtonRow>
                        <p>Starting from the ground up, learn how to establish a stable foundation in the feet that will translate up the entire leg and pelvis.</p>
                    </FeaturedClassContent>
                </FeaturedClass>
            </Container>
            <SlidingSection title={`Upcoming live classes`}>
                {classes2.map((c, i) => {
                    return (
                        <SmallClassCard key={i} {...c} />
                    )
                })}
            </SlidingSection>
            <SlidingSection title={`Classes by instructor`}>
                {instructors.map((instructor, i) => {
                    return(
                        <InstructorCard key={i} {...instructor} />
                    )
                })}
            </SlidingSection>
        </>
    );
}

export default Homepage;