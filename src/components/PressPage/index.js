/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from "next/link";
import { Container } from "theme-ui";
import PageHeader from "../PageHeader";
import { Section, Entry, ImageWrapper, CTA } from "./styles";

const PressPage = () => {

    const years = [
        {
            title: '2020',
            entries: [
                {
                    title: 'Conversation With Paige Held of The Yoga Joint.', 
                    description: 'Yoga Joint offers a fun and modern take on yoga. Their classes are infused with modern music and are designed to accommodate students of all levels within one class...',
                    image: '/images/press/2020.jpg'
                }
            ]
        }, 
        {
            title: '2019', 
            entries: [
                {
                    title: 'Paige Held, What’s In Your Yoga Bag?', 
                    description: 'The beach-loving Hot Yoga Fusion teacher and entrepreneur dishes on her daily essentials....', 
                    image: '/images/press/2019.jpg'
                }
            ]
        }, 
        {
            title: '2018', 
            entries: [
                {
                    title: 'Just Do It: Paige Held', 
                    description: 'A long time ago, I read a quote: “A person who is fit is capable of living life to the fullest.” I realized that being fit is not just about exercising your body, but your mind and soul as well....',
                    image: '/images/press/2018.jpg'
                }
            ]
        },
        {
            title: '2017', 
            entries: [
                {
                    title: 'Paige Held, Staying Focused On What Matters', 
                    description: 'Yoga Joint offers a fun and modern take on yoga. Their classes are infused with modern music and are designed to accommodate students of all levels within one class...', 
                    image: '/images/press/2017_1.jpg'
                }, 
                {
                    title: '5Q Interview With Kelly Green', 
                    description: 'Yoga Joint offers a fun and modern take on yoga. Their classes are infused with modern music and are designed to accommodate students of all levels within one class...', 
                    image: '/images/press/2017_2.jpg'
                }, 
                {
                    title: '10 Things You Should Know About Yoga Teacher Paige Held', 
                    description: 'Yoga Joint offers a fun and modern take on yoga. Their classes are infused with modern music and are designed to accommodate students of all levels within one class...', 
                    image: '/images/press/2017_3.jpg'
                }
            ]
        }, 
        {
            title: '2016', 
            entries: [
                {
                    title: 'Kelly Green Walks the Talk at Yoga Joint', 
                    description: 'Yoga Joint offers a fun and modern take on yoga. Their classes are infused with modern music and are designed to accommodate students of all levels within one class...', 
                    image: '/images/press/2016_1.jpg'
                },
                {
                    title: 'Try Turning Your Yoga Practice Upside Down Featuring Kelly Green', 
                    description: 'Yoga Joint offers a fun and modern take on yoga. Their classes are infused with modern music and are designed to accommodate students of all levels within one class...', 
                    image: '/images/press/2016_2.jpg'
                },
                {
                    title: 'Paige Held Shares How to Be Mindful On + Off the Mat', 
                    description: 'Yoga Joint offers a fun and modern take on yoga. Their classes are infused with modern music and are designed to accommodate students of all levels within one class...', 
                    image: '/images/press/2016_3.jpg'
                }
            ]
        }, 
        {
            title: '2015', 
            entries: [
                {
                    title: 'The Yoga Joint Opened Its First Studio Beyond Fort Lauderdale. Next, They Plan To Take The Concept Nationwide.',
                    description: 'Yoga Joint offers a fun and modern take on yoga. Their classes are infused with modern music and are designed to accommodate students of all levels within one class...', 
                    image: '/images/press/2015.jpg'
                }
            ]
        }
    ]
    return(
        <Container>
            <PageHeader heading="Press &amp; Media "></PageHeader>
            {years.map((year, i) => {
                return(
                    <Section key={i}>
                        {year.entries.map((entry, j) => {
                            return(
                                <Entry key={j}>
                                    <ImageWrapper>
                                        <img src={entry.image} />
                                    </ImageWrapper>
                                    <div>
                                        {j=== 0 && <h2>{year.title}</h2>}
                                        <h3>{entry.title}</h3>
                                        <p>{entry.description}</p>
                                    </div>
                                </Entry>
                            )
                        })}
                    </Section>
                )
            })}
            <CTA>
                <h1>I’m Ready to Make the SHIFT!</h1>
                <Link href="/contact">
                    <a sx={{ variant: "buttons.primary" }}>Contact Us</a>
                </Link>
            </CTA>
        </Container>
    )
}

export default PressPage;