/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from "next/link";
import { Container } from "theme-ui";
import PageHeader from "../PageHeader";
import YogaJointEmblem from "../../assets/svgs/yoga-joint-emblem.svg";
import { Intro, TextCol, Emblem, Section01, Section02, SingleImage, ButtonRow, FormSection, FormIntro } from "./styles";
import WorkplaceWellnessForm from './Form';

const WorkplaceWellnessPage = () => {

    return(
        <>
            <PageHeader heading="Workplace Wellness"/>
            <Container>
                <Intro>
                    <div>
                        <Emblem><YogaJointEmblem /></Emblem>
                    </div>
                    <TextCol>
                        <h2>Investing in the health and well-being of your team has benefits that extend beyond the physical.</h2>
                        <p>Together with reducing stress and promoting mindfulness, research suggests that group wellness programs can help foster a sense of camaraderie, increase productivity and job satisfaction, and lead to few days off from injuries or illness.</p>
                    </TextCol>
                </Intro>
                <Section01>
                    <div className="imageCol">
                        <SingleImage>
                            <img src="/images/workplace-wellness/image_01.jpg" />
                        </SingleImage>
                    </div>
                    <TextCol>
                        <h2>Team Building for a Remote Office?</h2>
                        <p>Whether you're a company or organization looking to cultivate a positive mindset and promote health and wellness, or a remote office eager to boost morale among your team members, Yoga Joint is the place for you.</p>
                        <p>With a boutique team of yoga &amp; fitness teachers, we offer a curated library of yoga, FIIT, and restore classes that you and your team members can enjoy from the comfort of home at a time most convenient to your schedule.</p>
                    </TextCol>
                </Section01>
                <Section02>
                    <TextCol>
                        <h2>Unique Options for Unique Team</h2>
                        <p>Yoga Joint encourages a body-positive environment where members of all shapes, sizes, and levels of fitness and ability are welcome with open arms. Our classes (like our teachers) are vibrant, inspiring, and encouraging. So leave that virtual desk behind you and enjoy us for a complimentary class today!</p>
                        <ButtonRow>
                            <Link href="#">
                                <a sx={{ variant: "buttons.primary" }}>Schedule A Class</a>
                            </Link>
                            <Link href="#">
                                <a sx={{ variant: "buttons.secondary" }}>More Info</a>
                            </Link>
                        </ButtonRow>
                    </TextCol>
                    <div className="imageCol">
                        <SingleImage>
                            <img src="/images/workplace-wellness/image_02.jpg" />
                        </SingleImage>
                    </div>
                </Section02>
                <FormSection>
                    <FormIntro>
                        <h3>Yoga Joint offers a FREE group class to companies, groups, and organizations looking to promote better health &amp; wellness amongst their team.</h3>
                        <p>Fill out the form below to try a FREE group class today!</p>
                        <h2>Let’s SHIFT!</h2>
                        <WorkplaceWellnessForm />
                    </FormIntro>
                </FormSection>
            </Container>
        </>
    )
}

export default WorkplaceWellnessPage;