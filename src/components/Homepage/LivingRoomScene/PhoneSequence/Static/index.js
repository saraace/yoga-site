import { FullScreen, TextContainer, Text, LeftText, RightText } from "./styles";

const PhoneSequenceStatic = ({ leftContent, rightContent }) => {
    return(
        <FullScreen>
            <TextContainer>
                <Text>
                    <LeftText>
                        <div>
                            { leftContent }
                        </div>
                    </LeftText>
                    <RightText>
                        <div>
                            { rightContent }
                        </div>
                    </RightText>
                </Text>
            </TextContainer>
        </FullScreen>
    )
}

export default PhoneSequenceStatic;