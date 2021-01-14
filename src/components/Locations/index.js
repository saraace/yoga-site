/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from "next/link";
import { Container } from "theme-ui";
import PageBackground from "../PageBackground";
import PageHeader from "../PageHeader";
import LocationCard from "../Cards/LocationCard";
import { LocationsWrapper, CardWrapper, Safety, Model, Bg, TextCol, CTA } from "./styles";

const Locations = () => {

    const locations = [
        {
            title: "North Fort Lauderdale",
            address: "Gym location",
            link: "/locations/1",
            image: "/images/locations/image_01.jpg"
        }, 
        {
            title: "Downtown Fort Lauderdale",
            address: "Gym location",
            link: "/locations/1",
            image: "/images/locations/image_02.jpg"
        }, 
        {
            title: "West Boca Raton",
            address: "Gym location",
            link: "/locations/1",
            image: "/images/locations/image_03.jpg"
        }, 
        {
            title: "Davie",
            address: "Gym location",
            link: "/locations/1",
            image: "/images/locations/image_04.jpg"
        }, 
        {
            title: "Deerfield Beach",
            address: "Gym location",
            link: "/locations/1",
            image: "/images/locations/image_05.jpg"
        }, 
        {
            title: "Central Boca Raton",
            address: "Gym location",
            link: "/locations/1",
            image: "/images/locations/image_06.jpg"
        }, 
        {
            title: "Pembroke Pines",
            description: "Opening January 2021!",
            address: "Gym location",
            link: "/locations/1",
            image: "/images/locations/image_07.jpg"
        }
    ]; 

    return(
        <>
            <PageBackground src="/images/locations/bg.jpg" />
            <Container>
                <PageHeader heading="Locations">
                    <p>Visit One of Our Physical Locations Today</p>
                </PageHeader>
                <LocationsWrapper>
                    {locations.map((location, i) => {
                        return(
                            <CardWrapper key={i}>
                                <LocationCard {...location} >
                                    <h3>{location.description}</h3>
                                </LocationCard>
                            </CardWrapper>
                        )
                    })}
                </LocationsWrapper>
                <Safety>
                    <TextCol>
                        <h3>Social Distancing &amp; Health Guidelines</h3>
                        <p>In light of our “new normal,” Yoga Joint has implemented increased health and safety measures to ensure the safety of all our staff and members. They include enhanced cleaning protocols with commercial-grade CDC-approved cleaning products, decreased class sizes, no physical touching during class, and mandatory masks for all teachers and members.</p>
                        <p>For a complete list of guidelines, please <Link href="#"><a className="link">click here</a></Link>.</p>
                        <CTA>
                            <h2>I'm Ready to SHIFT!</h2>
                            <Link href="/contact">
                                <a sx={{ variant: "buttons.primary" }}>Contact Us</a>
                            </Link>
                        </CTA>
                    </TextCol>
                    <Model>
                        <Bg src="/images/locations/bg-safety.png" />
                        <img src="/images/locations/model.png" />    
                    </Model>
                </Safety>
            </Container>
        </>
    )
}

export default Locations;