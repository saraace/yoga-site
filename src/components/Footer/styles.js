import styled from '@emotion/styled';

const PageFooter = styled.footer`
    padding: 100px 10px;
`;

export const FooterFlex = styled.div`
    display: flex;
    font-size: ${({ theme }) => theme.fontSizes[0]+'px'};
`;

export const LogoWrapper = styled.div`
    width: 328px;
`; 

export const FooterContent = styled.div`
    flex-grow: 1;
`;

export const CopyrightWrapper = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${({ theme }) => theme.colors.text};
    padding: 12px 0;
`;

export const Copyright = styled.div`
    font-weight: 500;
    a{
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;

export default PageFooter;