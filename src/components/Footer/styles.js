import styled from '@emotion/styled';

const PageFooter = styled.footer`
    padding: 84px 0 100px;
    z-index: -2;
`;

export const FooterFlex = styled.div`
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        flex-direction: row;
    }
`;

export const LogoWrapper = styled.div`
    margin: 0 0 53px 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        width: 328px;
        margin: 0;
    }
`; 

export const FooterContent = styled.div`
    flex-grow: 1;
`;

export const CopyrightWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    border-top: 1px solid ${({ theme }) => theme.colors.text};
    padding: 24px 0 0;

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        flex-direction: row;
        align-items: center;
        padding: 12px 0;
    }
`;

export const Copyright = styled.div`
    font-weight: 500;
    margin: 0 0 24px; 

    a{
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints[1]}){
        margin: 0;
    }
`;

export default PageFooter;