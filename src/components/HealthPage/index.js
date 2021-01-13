import { Container } from "theme-ui";
import PageBackground from "../PageBackground";
import PageHeader from "../PageHeader";

import { Section, Section01, Section02, Section03, Section04, TextCol, Gallery, Image, SingleImage, Col, Model, FlexSection } from "./styles";

const HealthPage = () => {
    return(
        <> 
            <PageBackground src="/images/health-and-safety/bg.jpg" />
            <Container>
                <PageHeader heading="Keeping Our Memers Safe!">
                    <p>Since reopening our studios in October, Yoga Joint has implemented several enhanced safety procedures for your safety and ours.</p>
                </PageHeader>
                <Section01>
                    <TextCol>
                        <h2>Enhanced Cleaning Procedures</h2>
                        <ul>
                            <li>Yoga Joint uses commercial-grade CDC-approved cleaning products and disinfectants to sanitize all of our facilities.</li>
                            <li>The reception area, entrance doors, doorknobs, and handles are wiped down on an hourly basis with an alcohol-based sanitizer.</li>
                            <li>All yoga &amp; fitness studios are cleaned after every class.</li>
                            <li>Our retail boutique is cleaned before opening and the register area wiped down regularly throughout the day with an alcohol-based sanitizer.</li>
                            <li>Restrooms are cleaned on an hourly basis.</li>
                            <li>Removable bolster covers are laundered after each use.</li>
                        </ul>
                        <Gallery>
                            <Image>
                                <img src="/images/health-and-safety/image_01.jpg" />
                            </Image>
                            <Image>
                                <img src="/images/health-and-safety/image_02.jpg" />
                            </Image>
                        </Gallery>
                    </TextCol>
                    <Col>
                        <Model>
                            <img src="/images/locations/model.png" />
                        </Model>
                    </Col>
                </Section01>
                <Section02>
                    <TextCol>
                        <h2>Social Distancing Guidelines</h2>
                        <ul>
                            <li>All Yoga Joint members are required to wear a mask and maintain a 6-foot distance while entering and leaving the studio, during check-in, and in the common areas such as the retail boutique, front-desk area, bathrooms, and hallways.</li>
                            <li>All Yoga Joint staff must wear face masks while teaching as well as in the common areas.</li>
                            <li>All Yoga Joint staff must maintain a 6-foot distance from members while teaching in-studio classes.</li>
                            <li>Daily touch-free temperature checks are required for all staff and service providers.</li>
                            <li>Before class, a staff member will ask for permission to check your temperature using a touchless device.</li>
                        </ul>
                    </TextCol>
                    <Col className="imageCol">
                        <SingleImage>
                            <img src="/images/health-and-safety/image_03.jpg" />
                        </SingleImage>
                    </Col>
                </Section02>
                <Section03>
                    <Col className="imageCol">
                        <SingleImage>
                            <img src="/images/health-and-safety/image_04.jpg" />
                        </SingleImage>
                    </Col>
                    <TextCol>
                        <h2>In-Studio Class Guidelines</h2>
                        <ul>
                            <li>All Yoga Joint in-studio classes are limited to 25% capacity. Members are encouraged to pre-register for class online or by phone.</li>
                            <li>While our lockers are still available, Yoga Joint encourages all members to use them for personal belongings only if necessary.</li>
                            <li>Members are asked to maintain a 6-foot distance from one another while checking in for class and while in the common areas.</li>
                            <li>Once members have checked in and chosen a spot in the studio, they are permitted to take off their masks for class.</li>
                            <li>During in-studio classes, no physical touch of any kind, including physical adjustments, will be made.</li>
                            <li>Props will be provided for classes on a limited basis.</li>
                            <li>Members are encouraged to bring their own yoga mats and accessories, if and when possible.</li>
                            <li>All teachers will submit to a touch-free temperature check before class.</li>
                        </ul>
                    </TextCol>
                </Section03>
                <Section04>
                    <div>
                        <h2>How to Keep Safe</h2>
                        <h3>If you have any of the following symptoms, have traveled domestically or internationally in the last 14 days, or live with someone who is sick or quarantined, we ask that you please cancel your class and stay home.</h3>
                        <FlexSection>
                            <TextCol>
                                <ul>
                                    <li>fever,  dry cough, tiredness, aches and pains</li>
                                    <li>sore throat, diarrhea, conjunctivitis, headache</li>
                                    <li>loss of taste or smell</li>
                                    <li>a rash on the skin, or discoloration of fingers or toes</li>
                                    <li>difficulty breathing or shortness of breath</li>
                                    <li>chest pain or pressure</li>
                                    <li>loss of speech or movement</li>
                                </ul>
                            </TextCol>
                            <Gallery>
                                <Image>
                                    <img src="/images/health-and-safety/image_05.jpg" />
                                </Image>
                                <Image>
                                    <img src="/images/health-and-safety/image_06.jpg" />
                                </Image>
                            </Gallery>
                        </FlexSection>
                    </div>
                </Section04>
            </Container>
        </>
    )
}

export default HealthPage;