/** @jsx jsx */
import { jsx, Container, Button } from "theme-ui";
import SlidingLayout from "../containers/CardLayouts/SlidingLayout"; 
import FeaturedClassCard from "../components/Cards/FeaturedClassCard";
import ClassCard from "../components/Cards/ClassCard";
import FeaturedClass from "../components/FeaturedClass"; 
import InstructorCard from "../components/Cards/InstructorCard";

const Home = () => {

  const classes1 = [
      {
          title: "Workout Name", 
          instructor: "Teacher", 
          difficulty: "Advanced",  
          duration: "20 mins", 
          type: "follow",
          date: "Mon, July 25th", 
          time: "10:15pm", 
          image: "/images/classes/image-01.png", 
          link: "/classes/1"
      }, 
      {
          title: "Cardio", 
          instructor: "Teacher", 
          difficulty: "Advanced", 
          duration: "20 mins", 
          type: "follow",
          date: "Mon, July 25th", 
          time: "10:15pm", 
          image: "/images/classes/image-02.png", 
          link: "/classes/1"
      }, 
      {
          title: "Workout Name", 
          instructor: "Teacher", 
          difficulty: "Advanced", 
          duration: "20 mins", 
          type: "follow",
          date: "Mon, July 25th", 
          time: "10:15pm", 
          image: "/images/classes/image-03.png", 
          link: "/classes/1"
      }
  ]

  const classes2 = [
      {
          title: "Strength", 
          instructor: "Teacher", 
          difficulty: "Advanced",  
          duration: "20 mins", 
          type: "fiit",
          date: "Mon, July 25th", 
          time: "10:15pm", 
          image: "/images/classes/image-04.png", 
          link: "/classes/1"
      }, 
      {
          title: "Cardio", 
          instructor: "Teacher", 
          difficulty: "Advanced", 
          duration: "20 mins", 
          type: "follow",
          date: "Mon, July 25th", 
          time: "10:15pm", 
          image: "/images/classes/image-02.png", 
          link: "/classes/1"
      }, 
      {
          title: "Relaxation", 
          instructor: "Teacher", 
          difficulty: "Advanced", 
          duration: "20 mins", 
          type: "follow",
          date: "Mon, July 25th", 
          time: "10:15pm", 
          image: "/images/classes/image-05.png", 
          link: "/classes/1"
      }, 
      {
          title: "Relaxation", 
          instructor: "Teacher", 
          difficulty: "Advanced", 
          duration: "20 mins", 
          type: "follow",
          date: "Mon, July 25th", 
          time: "10:15pm", 
          image: "/images/classes/image-01.png", 
          link: "/classes/1"
      }
  ]

  const instructors = [
      {
          name: "Paige Held",
          title: "Owner, Yoga Leader",
          classes: "24",
          image: "/images/instructors/image-01.png", 
          link: "/classes/1"
      }, 
      {
          name: "Kelly Green",
          title: "Creator of Fusion Flow & Teacher Training Leader",
          classes: "9",
          image: "/images/instructors/image-02.png", 
          link: "/classes/1"
      }, 
      {
          name: "Kelly Green",
          title: "Creative Marketing & Yoga Philosophy Training Leader",
          classes: "12",
          image: "/images/instructors/image-03.png", 
          link: "/classes/1"
      }, 
      {
          name: "Ana Vecchino",
          title: "Studio Leader",
          classes: "10",
          image: "/images/instructors/image-04.png", 
          link: "/classes/1"
      }, 
      {
          name: "Lynzy Ferris",
          title: "Studio Leader",
          classes: "11",
          image: "/images/instructors/image-05.png", 
          link: "/classes/1"
      }
  ]; 

  const featuredClass = {
      card: {
          instructor: "Teacher", 
          difficulty: "Advanced",
          duration: "20 mins", 
          date: "Mon, Jul 25th", 
          time: "10:15pm", 
          type: "follow", 
          image: "/images/homepage/image-01.png"
      }, 
      title: "Hips and Legs: Finding Freedom through Foundation", 
      watchLink: "/", 
      infoLink: "/", 
      description: "Starting from the ground up, learn how to establish a stable foundation in the feet that will translate up the entire leg and pelvis."
  };

  return (
    <>
        <SlidingLayout title={`My programs & scheduled classes`}>
            {classes1.map((c, i) => {
                return (
                    <FeaturedClassCard key={i} {...c} />
                )
            })}
        </SlidingLayout>
        <SlidingLayout title={`New classes to discover`}>
            {classes2.map((c, i) => {
                return (
                    <ClassCard key={i} {...c} />
                )
            })}
        </SlidingLayout>
        <Container variant="no-gutters">
            <FeaturedClass {...featuredClass} />
        </Container>
        <SlidingLayout title={`Upcoming live classes`}>
            {classes2.map((c, i) => {
                return (
                    <ClassCard key={i} {...c} />
                )
            })}
        </SlidingLayout>
        <SlidingLayout title={`Classes by instructor`}>
            {instructors.map((instructor, i) => {
                return(
                    <InstructorCard key={i} {...instructor} />
                )
            })}
        </SlidingLayout>
    </>
  )
}

export default Home;