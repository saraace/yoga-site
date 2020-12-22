import { Laptop, TextContainer } from "./styles";

const LaptopSequenceStatic = ({ content }) => {
    return(
        <Laptop>
            <TextContainer>
                { content }
            </TextContainer>
        </Laptop>
    )
}

export default LaptopSequenceStatic;