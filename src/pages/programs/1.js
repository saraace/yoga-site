/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import LargeHeader from "../../components/SingleProgram/Header/LargeHeader";
import SlidingLayout from "../../containers/CardLayouts/SlidingLayout";
import ClassCard from "../../components/Cards/ClassCard";

const SingleProgram = () => {
  const program = {
    title: "Hips and Legs: Fiding Freedom through Foundation",
    description:
      "Starting from the ground up, learn how to establish a stable foundation in the feet that will translate up the entire leg and pelvis.",
    date: "Aug 17, 2020 - Aug 29, 2020",
    location: "Yoga Downtown Ft. Lauderdale",
    signUpLink: "/",
    schedule: [
      {
        title: "WEEK 1",
        sub_title: "Aug 17, 2020 - Aug 22, 2020",
        classes: [
          {
            title: "Workout Name",
            instructor: "Teacher",
            difficulty: "Advanced",
            duration: "20 mins",
            type: "restore",
            date: "Mon, July 25th",
            time: "10:15pm",
            image: "/images/classes/image-01.png",
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
          },
        ],
      },
      {
        title: "WEEK 2",
        sub_title: "Aug 23, 2020 - Aug 29, 2020",
        classes: [
          {
            title: "Workout Name",
            instructor: "Teacher",
            difficulty: "Advanced",
            duration: "20 mins",
            type: "restore",
            date: "Mon, July 25th",
            time: "10:15pm",
            image: "/images/classes/image-01.png",
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
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
            link: "/classes/1",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Container>
        <LargeHeader {...program} />
        <h2>Your Classes</h2>
        {program.schedule.map((week, i) => (
          <SlidingLayout
            key={i}
            title={week.title}
            subTitle={week.sub_title}
            height={[192, null, null, 436]}
            stepWidth={384}
          >
            {week.classes.map((c, j) => (
              <ClassCard key={j} {...c} className="programClass" />
            ))}
          </SlidingLayout>
        ))}
      </Container>
    </>
  );
};

export default SingleProgram;
