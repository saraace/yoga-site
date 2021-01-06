import { Container } from "theme-ui";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return(
        <Container variant="small">
            <PageHeader heading="Something on Your Mind?">
                <p>For anything and everything to do with Yoga Joint, including our SHIFT program, fill out this contact form and we will be in touch as soon as we’re able.</p>
            </PageHeader>
            <ContactForm />
        </Container>
    )
}

export default Contact;