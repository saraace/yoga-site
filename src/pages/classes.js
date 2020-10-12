import { Container } from "theme-ui"; 
import Tabs from "../components/Tabs"; 
import MasonrySection from "../containers/MasonrySection"; 
import ClassCard from "../components/Cards/ClassCard";

export default function ClassPage() {
  return (
    <Container>
        <Tabs tabs={tabs} />
        <MasonrySection>
            {classes.map((c, i) => (
                <ClassCard key={i} {...c} variant="tall" />
            ))}
        </MasonrySection>            
    </Container>
  )
}
