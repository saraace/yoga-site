/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import SmallHeader from '../../components/SingleProgram/Header/SmallHeader'; 
import ProgramTabs from '../../components/SingleProgram/ProgramTabs';

const SingleProgram = () => {

    const program = {
        title: 'Hips and Legs: Fiding Freedom through Foundation',
        description: 'Starting from the ground up, learn how to establish a stable foundation in the feet that will translate up the entire leg and pelvis.',
        date: 'Aug 17, 2020 - Aug 29, 2020',
        location: 'Yoga Joint Downtown Ft. Lauderdale', 
        schedule: [
            {
                title: 'Week 1', 
                schedule: [
                    {
                        title: 'Today', 
                        date: '07/27', 
                        description: 'Let’s start this week off with a calm body and mind.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Tomorrow', 
                        date: '07/28', 
                        description: 'Strengthen the core.', 
                        classes: [
                            {
                                title: "Legs & Core", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Tue, July 28th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }, 
                            {
                                title: "Standing Poses", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Tue, July 28th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Wednesday', 
                        date: '07/29', 
                        description: 'Let’s start with basics.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Thursday', 
                        date: '07/30', 
                        description: 'Let’s start this week off with a calm body and mind.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'Week 2', 
                schedule: [
                    {
                        title: 'Week 2 Today', 
                        date: '07/27', 
                        description: 'Let’s start this week off with a calm body and mind.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Tomorrow', 
                        date: '07/28', 
                        description: 'Strengthen the core.', 
                        classes: [
                            {
                                title: "Legs & Core", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Tue, July 28th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }, 
                            {
                                title: "Standing Poses", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Tue, July 28th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Wednesday', 
                        date: '07/29', 
                        description: 'Let’s start with basics.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Thursday', 
                        date: '07/30', 
                        description: 'Let’s start this week off with a calm body and mind.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'Week 3', 
                schedule: [
                    {
                        title: 'Week 3 Today', 
                        date: '07/27', 
                        description: 'Let’s start this week off with a calm body and mind.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Tomorrow', 
                        date: '07/28', 
                        description: 'Strengthen the core.', 
                        classes: [
                            {
                                title: "Legs & Core", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Tue, July 28th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }, 
                            {
                                title: "Standing Poses", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Tue, July 28th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Wednesday', 
                        date: '07/29', 
                        description: 'Let’s start with basics.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Thursday', 
                        date: '07/30', 
                        description: 'Let’s start this week off with a calm body and mind.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }
                ]
            }, 
            {
                title: 'Week 4', 
                schedule: [
                    {
                        title: 'Week 4 Today', 
                        date: '07/27', 
                        description: 'Let’s start this week off with a calm body and mind.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Tomorrow', 
                        date: '07/28', 
                        description: 'Strengthen the core.', 
                        classes: [
                            {
                                title: "Legs & Core", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Tue, July 28th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }, 
                            {
                                title: "Standing Poses", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Tue, July 28th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Wednesday', 
                        date: '07/29', 
                        description: 'Let’s start with basics.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }, 
                    {
                        title: 'Thursday', 
                        date: '07/30', 
                        description: 'Let’s start this week off with a calm body and mind.', 
                        classes: [
                            {
                                title: "Workout Name", 
                                instructor: "Teacher", 
                                difficulty: "Advanced",  
                                duration: "20 mins", 
                                type: "yoga",
                                date: "Mon, July 25th", 
                                time: "10:15pm", 
                                image: "/images/classes/image-01.png", 
                                link: "/classes/1"
                            }
                        ]
                    }
                ]
            }
        ]
    }

    return(
        <>
            <Container>
                <SmallHeader {...program} />
            </Container>
            <Container>
                <ProgramTabs schedule={program.schedule} />
            </Container>
        </>
    )
}

export default SingleProgram;