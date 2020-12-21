import { FullScreen, TextContainer, Content, Text, Renew, Shift, Transform, Row, Categories, Yoga, Fiit, Restore } from "./styles"; 

const StaticScene = () => {
    return(
        <FullScreen>
            <TextContainer variant="small">
                <Content initial="initial" animate="animate" exit="exit">
                    <Text>
                        <Row>
                            <Renew>Renew</Renew>
                            <Shift>Shift</Shift>
                            <Transform>Transform</Transform>
                        </Row>
                        <Categories>
                            <Yoga>Yoga</Yoga>
                            <Fiit>Fiit</Fiit>
                            <Restore>Restore</Restore>
                        </Categories>
                    </Text>
                </Content>
            </TextContainer>
        </FullScreen>
    )
}

export default StaticScene;