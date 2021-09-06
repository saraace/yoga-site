/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import PageBackground from "../components/PageBackground";
import SlidingLayout from "../containers/CardLayouts/SlidingLayout";
import FeaturedClassCard from "../components/Cards/FeaturedClassCard";
import ClassCard from "../components/Cards/ClassCard";
import FeaturedClass from "../components/FeaturedClass";
import InstructorCard from "../components/Cards/InstructorCard";
import { classes1, classes2 } from "../mocks/classes.mock";
import { instructors } from "../mocks/instructors.mock";
import { featuredClass } from "../mocks/featuredClass.mock";

const Dashboard = () => {
  return (
    <>
      <PageBackground src="/images/dashboard/bg.png" />
      <Container variant="no-gutters">
        <SlidingLayout title={`My programs & scheduled classes`} height={[192, null, null, 300]} stepWidth={528}>
          {classes1.map((c, i) => {
            return <FeaturedClassCard key={i} {...c} />;
          })}
        </SlidingLayout>
        <SlidingLayout title={`New classes to discover`}>
          {classes2.map((c, i) => {
            return <ClassCard key={i} {...c} />;
          })}
        </SlidingLayout>
        <Container variant="no-mobile-gutters">
          <FeaturedClass {...featuredClass} />
        </Container>
        <SlidingLayout title={`Upcoming live classes`}>
          {classes2.map((c, i) => {
            return <ClassCard key={i} {...c} />;
          })}
        </SlidingLayout>
        <SlidingLayout title={`Classes by instructor`} height={[300, null, null, 460]} stepWidth={296}>
          {instructors.map((instructor, i) => {
            return <InstructorCard key={i} {...instructor} />;
          })}
        </SlidingLayout>
      </Container>
    </>
  );
};

export default Dashboard;
