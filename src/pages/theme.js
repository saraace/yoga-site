/** @jsx jsx */
import { jsx, Container, Heading, Flex, Box, Button } from 'theme-ui';
import theme from "../utils/theme";

export default function Theme(){
    return (
        <Container>
            <Heading>Colors</Heading>
            <Flex sx={{ mt: 2, mb: 4 }}>
            {Object.keys(theme.colors).map((key, idx) =>{
                return (
                <Box key={idx} sx={{ mr: 2 }}>
                    <div sx={{ background: theme.colors[key], height: '85px', width: '85px' }}></div>
                    <small>{key}</small>
                </Box>
                );
            })}
            </Flex>
            <Heading>Typography</Heading>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Etiam porta sem malesuada magna mollis euismod. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
            <p>Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <Heading>Buttons</Heading>
            {Object.keys(theme.colors).map((key, idx) =>{
                if(theme.buttons.hasOwnProperty(key)){
                    return (
                    <Flex sx={{ mt: 2, mb: 2 }}>
                        <Box key={idx} sx={{ mr: 2 }}>
                            <Button variant={key}>{key}</Button>
                        </Box>
                        <Box key={idx} sx={{ mr: 2 }}>
                            <Button variant={key+'-outline'}>{key}</Button>
                        </Box>
                    </Flex>
                    );
                }
            })}
        </Container>
    )   
}