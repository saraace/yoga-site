/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { Container } from "theme-ui";
import PageBackground from "../PageBackground";
import PageHeader from "../PageHeader";
import SlidingLayout from "../../containers/CardLayouts/SlidingLayout";
import ClassCard from "../Cards/ClassCard";
import { Intro, TextCol, RightImage, LeftImage, Section, ButtonRow, COVIDSection, Model, Bg, CTA } from "./styles";
import { classes1 } from "../../mocks/classes.mock";

const NewToYogaPage = () => {
  return (
    <>
      <PageBackground src="/images/new-to-yoga/bg.jpg" />
      <Container>
        <PageHeader heading="New to SHIFT?" />
        <Intro>
          <TextCol>
            <h2>
              Whether you've decided to join us for a single class, the whole year, in-studio or online, here's what to
              expect.
            </h2>
            <p>
              Trying something new can be intimidating (especially when it involves spandex!), but rest assured that at
              Yoga, we embrace a body-positive environment that is friendly to those at all levels of fitness. In other
              words, we are not "perfect," and we certainly don't expect you to be, either. What we do believe in,
              however, is creating a safe, encouraging class atmosphere that gives our members the chance to explore
              their minds and body.
            </p>
          </TextCol>
        </Intro>
        <Section className="mobile-reverse">
          <TextCol>
            <h3>Before Class</h3>
            <p>
              We recommend that you eat a light snack beforehand and hydrate properly before, during, and after class.
              If your class uses props, keeping them handy will ensure you can focus on being in the moment. And to save
              time, first-time members and drop-ins can fill out a personal profile and waiver via our convenient online
              form.
            </p>
          </TextCol>
          <div>
            <RightImage>
              <img src="/images/new-to-yoga/image_01.jpg" />
            </RightImage>
          </div>
        </Section>
        <Section>
          <div>
            <LeftImage>
              <img src="/images/new-to-yoga/image_02.jpg" />
            </LeftImage>
          </div>
          <TextCol>
            <h3>In-Studio Classes</h3>
            <p>
              If you're joining us in-studio, we recommend that you arrive 30 minutes before class begins. This will
              give you the time you need to get acquainted with our facilities, change into comfortable clothes, and
              grab your complimentary mat and towel*.
            </p>
            <ButtonRow>
              <Link href="#">
                <a sx={{ variant: "buttons.primary" }}>Schedule A Class</a>
              </Link>
            </ButtonRow>
          </TextCol>
        </Section>
        <Section className="mobile-reverse">
          <TextCol>
            <h3>Online Classes</h3>
            <p>
              If you’re joining us online, we recommend that you sign in about 10 minutes before the start of class.
              This buffer will give you the time you need to set up your yoga mat and props, ask the teacher any
              questions you may have, and engage in a light warm-up.
            </p>
            <ButtonRow>
              <Link href="#">
                <a sx={{ variant: "buttons.primary" }}>Schedule A Class</a>
              </Link>
            </ButtonRow>
          </TextCol>
          <div>
            <RightImage>
              <img src="/images/new-to-yoga/image_03.jpg" />
            </RightImage>
          </div>
        </Section>
        <SlidingLayout title={`New classes to discover`}>
          {classes1.map((c, i) => {
            return <ClassCard key={i} {...c} />;
          })}
        </SlidingLayout>
        <COVIDSection>
          <Model>
            <Bg src="/images/new-to-yoga/covid_bg.png" />
            <img src="/images/new-to-yoga/image_04.png" />
          </Model>
          <TextCol>
            <h3>Social Distancing &amp; Health Guidelines</h3>
            <p>
              In light of our “new normal,” Yoga has implemented increased health and safety measures to ensure the
              safety of all our staff and members. They include enhanced cleaning protocols with commercial-grade
              CDC-approved cleaning products, decreased class sizes, no physical touching during class, and mandatory
              masks for all teachers and members.
            </p>
            <p>
              For a complete list of guidelines, please{" "}
              <Link href="#">
                <a className="link">click here</a>
              </Link>
              .
            </p>
            <CTA>
              <h2>I'm Ready to SHIFT!</h2>
              <Link href="/contact">
                <a sx={{ variant: "buttons.primary" }}>Contact Us</a>
              </Link>
            </CTA>
          </TextCol>
        </COVIDSection>
      </Container>
    </>
  );
};

export default NewToYogaPage;
