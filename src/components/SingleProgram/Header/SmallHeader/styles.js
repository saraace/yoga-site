import styled from '@emotion/styled';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h1`
    line-height: 1.255em;
    margin: 0 0 19px;
`;

export const Description = styled.p`
    font-size: 18px; 
    line-height: 1.5em;
`;

export const Col = styled.div`
    width: 672px;
`;

export const Section = styled.div`
    margin-bottom: 56px;
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