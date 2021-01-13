/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from "next/link";
import { Container } from "theme-ui";
import PageBackground from "../PageBackground";
import PageHeader from "../PageHeader";
import SlidingLayout from "../../containers/CardLayouts/SlidingLayout";
import InstructorCard from "../Cards/InstructorCard";

import { Headline, Row, SingleImage, TextCol, ButtonRow, TeamLeadersSection, TeamLeaders, SectionTitle, CTA } from "./styles";

const About = () => {

    const teamLeaders = [
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
        }
    ]; 
    
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
    
    return(
        <>
        <PageBackground src="/images/about/bg.png" />
        <PageHeader heading="About Us" />
        <Container>
            <Headline>
                <img src="/images/about/banner.jpg" />
                <h2>The truth is that, from the very first studio location that opened back in 2010, Yoga Joint has relied on one simple ingredient: <strong>Passion</strong></h2>
            </Headline>
            <Row>
                <div><SingleImage><img src="/images/about/image_01.jpg" /></SingleImage></div>
                <TextCol className="right">
                    <p>From choosing which teachers will lead our various studio locations to the development of our trademark SHIFT yoga &amp; fitness program, passion is at the core of everything we do.</p>
                    <p>This heartfelt motivation has served us well as we expanded to include meditative retreats around the world, on-location boutiques filled with our favorite lines of healthy living products, and, more recently, our SHIFT-certified teacher training and ambassador program.</p>
                    <ButtonRow>
                        <Link href="#">
                            <a sx={{ variant: "buttons.primary" }}>Schedule a Class</a>
                        </Link>
                    </ButtonRow>
                </TextCol>
            </Row>
            <Row>
                <TextCol className="left">
                    <h3>We embrace a body-positive philosophy that orbits around a healthy mind-body connection.</h3>
                    <p>As the Yoga Joint community continues to grow, we remain committed to giving our members the tools they need to look good, feel good, and be mindful each and every day.  </p>  
                    <ButtonRow>
                        <Link href="#">
                            <a sx={{ variant: "buttons.primary" }}>Schedule a Class</a>
                        </Link>
                        <Link href="#">
                            <a sx={{ variant: "buttons.secondary" }}>More Info</a>
                        </Link>
                    </ButtonRow>
                </TextCol>
                <div><SingleImage><img src="/images/about/image_02.jpg" /></SingleImage></div>
            </Row>
            <TeamLeadersSection>
                <SectionTitle>Team Leaders</SectionTitle>
                <TeamLeaders>
                    {teamLeaders.map((instructor, i) => {
                        return(
                            <InstructorCard key={i} variant="large" {...instructor}/>
                        )
                    })}
                </TeamLeaders>
            </TeamLeadersSection>
            <SlidingLayout title={`Studio Leaders`} height={[300, null, null, 460]} stepWidth={296} >
                {instructors.map((instructor, i) => {
                    return(
                        <InstructorCard key={i} {...instructor} />
                    )
                })}
            </SlidingLayout>
            <CTA>
                <p>We are thankful for this tremendous gift every day.</p>
                <h1>I’m Ready to Make the SHIFT!</h1>
                <Link href="/contact">
                    <a sx={{ variant: "buttons.primary" }}>Contact Us</a>
                </Link>
            </CTA>
        </Container>
        
        </>
    )
}

export default About;