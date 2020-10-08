import styled from '@emotion/styled';

const Links = styled.ul`
    margin: 0; 
    padding: 0; 
    list-style: none;
    display: flex;
`; 

export const SocialLink = styled.li`
    margin: 0 0 0 10px;
`; 

export const SocialButton = styled.a`
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.highlight};
    line-height: 1;
    display: flex;
    justify-content: center; 
    align-items: center;
    border-radius: 50%;
    transition: 0.3s all ease;

    svg path{
        fill: ${({ theme }) => theme.colors.highlight};
        transition: 0.3s all ease;
    }

    &:hover{
        background: ${({ theme }) => theme.colors.highlight};
        svg path{
            fill: ${({ theme }) => theme.colors.dark};
        }
    }
`;

export const InstagramButton = styled(SocialButton)`
    width: 40px;
    height: 40px;
    svg{
        width: 24px;
        height: 24px;
    }
`;

export const FacebookButton = styled(SocialButton)`
    width: 40px;
    height: 40px;
    svg{
        width: 12px;
        height: 24px;
    }
`;

export default Links;