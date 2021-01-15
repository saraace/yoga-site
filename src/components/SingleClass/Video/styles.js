import styled from '@emotion/styled';
import Play from "../../../assets/svgs/play-circle-icon.svg";


export const VideoWrapper = styled.div`
    width: 100%; 
    height: 500px;
    background: #2c4263;
    margin: 0 auto;
    display: flex; 
    justify-content: center; 
    align-items: center;
`; 

export const PlayButton = styled(Play)`
    width: 80px; 
    height: 80px;
`;