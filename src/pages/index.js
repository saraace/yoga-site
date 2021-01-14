/** @jsx jsx */
import { jsx, Container, Button } from "theme-ui";
import PageBackground from "../components/PageBackground";
import SlidingLayout from "../containers/CardLayouts/SlidingLayout"; 
import FeaturedClassCard from "../components/Cards/FeaturedClassCard";
import ClassCard from "../components/Cards/ClassCard";
import FeaturedClass from "../components/FeaturedClass"; 
import InstructorCard from "../components/Cards/InstructorCard";

const Dashboard = () => {

  const classes1 = [
    {
        title: "Workout Name", 
        instructor: "Teacher", 
        difficulty: "Advanced",  
        duration: "20 mins", 
        type: "restore",
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
        type: "yoga",
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
    }, 
    {
        title: "Workout Name", 
        instructor: "Teacher", 
        difficulty: "Advanced",  
        duration: "20 mins", 
        type: "restore",
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
        type: "yoga",
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
    },
    {
        title: "Workout Name", 
        instructor: "Teacher", 
        difficulty: "Advanced",  
        duration: "20 mins", 
        type: "restore",
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
        type: "yoga",
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
    }, 
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
          link: "/instructors/1"
      }, 
      {
          name: "Kelly Green",
          title: "Creator of Fusion Flow & Teacher Training Leader",
          classes: "9",
          image: "/images/instructors/image-02.png", 
          link: "/instructors/1"
      }, 
      {
          name: "Kelly Green",
          title: "Creative Marketing & Yoga Philosophy Training Leader",
          classes: "12",
          image: "/images/instructors/image-03.png", 
          link: "/instructors/1"
      }, 
      {
          name: "Ana Vecchino",
          title: "Studio Leader",
          classes: "10",
          image: "/images/instructors/image-04.png", 
          link: "/instructors/1"
      }, 
      {
          name: "Lynzy Ferris",
          title: "Studio Leader",
          classes: "11",
          image: "/images/instructors/image-05.png", 
          link: "/instructors/1"
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
          image: "/images/dashboard/image-01.png"
      }, 
      title: "Hips and Legs: Finding Freedom through Foundation", 
      watchLink: "/", 
      infoLink: "/", 
      description: "Starting from the ground up, learn how to establish a stable foundation in the feet that will translate up the entire leg and pelvis."
  };

  return (
      <>
        <PageBackground src="/images/dashboard/bg.png" />
        <Container variant="no-gutters">
            <SlidingLayout title={`My programs & scheduled classes`} height={[192, null, null, 300]} stepWidth={528} >
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
            <Container variant="no-mobile-gutters">
                <FeaturedClass {...featuredClass} />
            </Container>
            <SlidingLayout title={`Upcoming live classes`}>
                {classes2.map((c, i) => {
                    return (
                        <ClassCard key={i} {...c} />
                    )
                })}
            </SlidingLayout>
            <SlidingLayout title={`Classes by instructor`} height={[300, null, null, 460]} stepWidth={296} >
                {instructors.map((instructor, i) => {
                    return(
                        <InstructorCard key={i} {...instructor} />
                    )
                })}
            </SlidingLayout>
        </Container>
    </>
  )
}

export default Dashboard;