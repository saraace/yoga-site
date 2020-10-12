import { useState } from "react";
import { Container } from "theme-ui"; 
import LibraryTopRow from "../components/LibraryTopRow"; 
import MasonrySection from "../containers/MasonrySection"; 
import ClassCard from "../components/Cards/ClassCard";

export default function ClassPage() {

    const tabs = ["On-Demand", "Live", "Local"];
    const subTabs = {
        "On-Demand": ["Individual Classes", "Programs"], 
        "Live": ["Tab 1", "Tab 2"], 
        "Local": ["Tab 11", "Tab 22"]
    }

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [activeSubTab, setActiveSubTab] = useState(subTabs[activeTab][0])

    const onTabClick = (tab) => {
        setActiveTab(tab);
    }

    const onSubTabClick = (subTab) =>{
        setActiveSubTab(subTab);
    }

    const classes = [
        {
            title: "Workout Name", 
            instructor: "Teacher", 
            difficulty: "Advanced",  
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-01.png", 
            link: "/sign-up"
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
            link: "/sign-up"
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
            link: "/sign-up"
        }, 
        {
            title: "Workout Name", 
            instructor: "Teacher", 
            difficulty: "Advanced",  
            duration: "20 mins", 
            type: "follow",
            date: "Mon, July 25th", 
            time: "10:15pm", 
            image: "/images/classes/image-01.png", 
            link: "/sign-up"
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
            link: "/sign-up"
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
            link: "/sign-up"
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
            link: "/sign-up"
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
            link: "/sign-up"
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
            link: "/sign-up"
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
            link: "/sign-up"
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
            link: "/sign-up"
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
            link: "/sign-up"
        }
    ]

    return (
        <Container>
            <LibraryTopRow {...{tabs}} {...{activeTab}} {...{onTabClick}} {...{subTabs}} {...{activeSubTab}} {...{onSubTabClick}} filters="true" />
            <MasonrySection>
                {classes.map((c, i) => (
                    <ClassCard key={i} {...c} className="tall" />
                ))}
            </MasonrySection>            
        </Container>
    )
}
