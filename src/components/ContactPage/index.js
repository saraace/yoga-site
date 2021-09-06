import { Container } from "theme-ui";
import PageBackground from "../PageBackground";
import PageHeader from "../PageHeader";
import ContactForm from "./Form";

const ContactPage = () => {
  return (
    <>
      <PageBackground src="/images/contact/bg.jpg" />
      <Container variant="small">
        <PageHeader heading="Something on Your Mind?">
          <p>
            For anything and everything to do with Yoga, including our SHIFT program, fill out this contact form and we
            will be in touch as soon as we’re able.
          </p>
        </PageHeader>
        <ContactForm />
      </Container>
    </>
  );
};

export default ContactPage;
