import styled from '@emotion/styled';

const ContentWrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start;
    height: 100%;

    header, 
    footer, 
    & > div{
        width: 100%;
    }
    header{
        align-self: flex-start;
    }
    & > div{
        flex-grow: 1;
    }
    footer{
        align-self: flex-end;
    }
`; 

export const Page = styled.div`
    width: 100%;
`; 

export default ContentWrapper;