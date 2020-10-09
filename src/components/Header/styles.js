import styled from '@emotion/styled';

const PageHeader = styled.header`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    padding: 40px 24px;
    position: relative;
    z-index: 200;
    
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        padding: 44px 64px;
    }
`;

export const LogoCol = styled.div`
    z-index: 1;
`;

export const NavCol = styled.div`
    display: none; 
    
    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;
    }
`;

export const ButtonCol = styled.div`
    display: none; 

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: block;
    }
`;

export const MobileNavCol = styled.div`

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}){
        display: none;
    }
`; 

export default PageHeader;