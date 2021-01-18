import styled from '@emotion/styled';

export const BackButton = styled.div`
    width: 24px; 
    position: absolute;
    top: 120px;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover{
        opacity: 0.5;
    }

    path{
        fill: #fff;
        stroke: #fff;
    }
`;

export const GetStarted = styled.div`
    width: 600px; 
    text-align: center;
    margin: 0 auto;

    h2{
        width: 420px;
        margin: 0 auto;
    }

    button{
        margin: 20px 0 0;
    }
`; 

export const Steps = styled.div`
    width: 470px; 
    margin: 0 auto;
`;