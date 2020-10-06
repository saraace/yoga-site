import styled from '@emotion/styled';

const ContentWrapper = styled.div`
    display: flex; 
    flex-wrap: wrap; 
    height: 100%;

    header, 
    footer{
        width: 100%;
    }
    footer{
        align-self: flex-end;
    }
`; 

export default ContentWrapper;