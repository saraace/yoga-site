import { FullScreen, TextContainer, Text, LeftText, RightText } from "./styles";

const StaticScene = () => {
    return(
        <FullScreen>
            <TextContainer>
                <Text>
                    <LeftText>
                        <div>
                            <p>Live or on-demand.</p>
                            <h2>Online classes featuring live instructor feedback.</h2>
                        </div>
                    </LeftText>
                    <RightText>
                        <div>
                            <h2>Your virtual fitness studio.</h2>
                            <p>You can also book classes to go to your local Yoga Joint studio and workout together.</p>
                        </div>
                    </RightText>
                </Text>
            </TextContainer>
        </FullScreen>
    )
}

export default StaticScene;