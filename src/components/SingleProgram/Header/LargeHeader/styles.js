import styled from '@emotion/styled';

export const Header = styled.div``;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes[7]+'px'}; 
    line-height: 1.114em;
    margin: 0 0 24px;
`;

export const Description = styled.p`
    font-size: 18px; 
    line-height: 1.5em;
    margin: 0 0 24px;
`;

export const Row = styled.div`
    display: flex;
    padding: 72px 0;
`;

export const Col = styled.div`
    padding: 0 0 0 45px;
    margin: 0 100px 0 0;
`;

export const Section = styled.div`
    margin-bottom: 33px;
`;

export const SectionTitle = styled.div`
    position: relative; 
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
    line-height: 1.33;
    font-weight: 600;
    margin-bottom: 3px;

    svg{
        position: absolute; 
        top: 3px; 
        left: -45px;
        height: 22px;
    }
`;

export const SectionContent = styled.div``;