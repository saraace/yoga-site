import { Container } from "theme-ui"; 
import PageBackground from "../PageBackground"; 
import PageHeader from "../PageHeader"; 
import CareersForm from "./Form";

const CareersPage = () => {
    return(
        <>
            <PageBackground src="/images/careers/bg.jpg" />
            <Container variant="small">
                <PageHeader heading="Careers">
                    <p>A big part of our overall mission here at Yoga Joint is to bring awareness of the benefits of yoga and fitness to others all around the globe. If that sounds like a message you can connect to, feel free to reach out and tell us a little bit about yourself.</p>
                </PageHeader>
                <CareersForm />
            </Container>
        </>
    )
}

export default CareersPage;