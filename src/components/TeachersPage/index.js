/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from "react"; 
import Link from "next/link";
import { Container } from "theme-ui";
import PageBackground from "../PageBackground";
import PageHeader from "../PageHeader";
import InfoIcon from "../../assets/svgs/info-icon.svg";
import SlidingLayout from "../../containers/CardLayouts/SlidingLayout";
import InstructorCard from "../Cards/InstructorCard";
import TeacherLightbox from "../TeacherLightbox"; 

import { Headline, Row, SingleImage, TextCol, ButtonRow, TeamLeadersSection, TeamLeaders, SectionTitle, CTA } from "./styles";

const TeachersPage = () => {

    const [ activeTeacher, setActiveTeacher ] = useState(null);

    const onClose = () => {
        setActiveTeacher(null);
    }

    const teamLeaders = [
        {
            name: "Paige Held",
            title: "Owner, Yoga Leader",
            image: "/images/instructors/paige-held.jpg", 
            cta: true
        }, 
        {
            name: "Kelly Green",
            title: "Creator of Fusion Flow & Teacher Training Leader",
            image: "/images/instructors/kelly-green.jpg", 
            cta: true
        }
    ]; 
    
    const instructors = [
        {
            name: "Hayley Stricker",
            title: "Studio Leader",
            image: "/images/instructors/hayley-stricker.jpg", 
            quote: "“The way we speak to ourselves all the time shapes our reality, and through my journey with yoga I have learned to love myself and fully embrace everything about me.”",
            bio: "Ana Vecchio is the studio leader of Yoga Joint’s West Boca Raton location. With a background in yoga and meditation, Ana's journey as a teacher began when she realized that she wanted to share a message of self-care and self-love with others.",
            locations: [
                {
                    name: "West Boca",
                    address_line_one: "19575 State Road 7", 
                    address_line_two: "", 
                    city: "Boca Raton", 
                    state_province: "FL", 
                    postal_code: "33498"
                }, {
                    name: "Central Boca Raton",
                    address_line_one: "698 Yamato Rd.", 
                    address_line_two: "#2", 
                    city: "Boca Raton", 
                    state_province: "FL", 
                    postal_code: "33431"
                }
            ]
        }, 
        {
            name: "Riley Burns",
            locations: [
                {
                    name: "Downtown Fort Lauderdale",
                    address_line_one: "19575 State Road 7", 
                    address_line_two: "", 
                    city: "Boca Raton", 
                    state_province: "FL", 
                    postal_code: "33498"
                }
            ],
            image: "/images/instructors/riley-burns.jpg"
        }, 
        {
            name: "Ana Vecchio",
            locations: [
                {
                    name: "West Boca & Central Boca",
                    address_line_one: "19575 State Road 7", 
                    address_line_two: "", 
                    city: "Boca Raton", 
                    state_province: "FL", 
                    postal_code: "33498"
                }
            ],
            image: "/images/instructors/ana-vecchio.jpg"
        }, 
        {
            name: "Carisa Reyes",
            locations: [
                {
                    name: "Davie & Pembroke Pines",
                    address_line_one: "19575 State Road 7", 
                    address_line_two: "", 
                    city: "Boca Raton", 
                    state_province: "FL", 
                    postal_code: "33498"
                }
            ],
            image: "/images/instructors/carisa-reyes.jpg"
        }, 
        {
            name: "Carisa Reyes",
            locations: [
                {
                    name: "Davie & Pembroke Pines",
                    address_line_one: "19575 State Road 7", 
                    address_line_two: "", 
                    city: "Boca Raton", 
                    state_province: "FL", 
                    postal_code: "33498"
                }
            ],
            image: "/images/instructors/carisa-reyes.jpg"
        }
    ]; 
    
    return(
        <>
        <PageBackground src="/images/about/bg.jpg" />
        <PageHeader heading="Meet Our Lead&nbsp;Teachers" />
        <Container>
            <Headline>
                <img src="/images/teachers/leaders.jpg" />
                <h2>The creators of SHIFT by Yoga Joint, learn how Paige Held and Kelly Green are changing the face of yoga &amp; fitness.</h2>
            </Headline>
            <Row>
                <div>
                    <SingleImage>
                        <img src="/images/about/image_01.jpg" />
                    </SingleImage>
                </div>
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
                            <a sx={{ variant: "buttons.secondary-icon" }}>
                                <InfoIcon />
                                More Info
                            </a>
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
                            <InstructorCard 
                                key={i} 
                                variant="large" 
                                onClick={() => setActiveTeacher(instructor)}
                                {...instructor}
                            />
                        )
                    })}
                </TeamLeaders>
            </TeamLeadersSection>
            <SlidingLayout title={`Studio Leaders`} height={[300, null, null, 460]} stepWidth={296} >
                {instructors.map((instructor, i) => {
                    return(
                        <InstructorCard 
                            key={i}
                            onClick={() => setActiveTeacher(instructor)}
                            name={instructor.name}
                            image={instructor.image}
                            location="TEST"
                        />
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
        {activeTeacher && <TeacherLightbox {...activeTeacher} {...{onClose}} />}
        </>
    )
}

export default TeachersPage;