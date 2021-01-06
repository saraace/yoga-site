import styled from '@emotion/styled';

export const Headline = styled.div`
    position: relative;

    img{
        width: 100%; 
        border-radius: 12px; 
        line-height: 1;
    }
    h2{
        font-weight: 400;
        position: absolute; 
        left: 75px; 
        right: 75px;
        bottom: 53px;
        text-align: center;
    }
`; 

export const Row = styled.div`
    display: flex;
    margin: 100px 0 129px;
`;

export const Col = styled.div`
    img{
        border-radius: 12px;
        width: 566px; 
        height: 354px;
        object-fit: fill;
    }
`;

export const TextCol = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};

    &.right{
        margin: 0 0 0 60px;
    }
    &.left{
        margin: 0 60px 0 0;

        h3{
            font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
            font-weight: 400;
            line-height: 1.255;
        }
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    margin: 50px 0 0 0;

    a{
        margin: 0 10px 0 0;
    }
`;  

export const TeamLeadersSection = styled.div`
    margin: 120px 0 108px;
`; 

export const TeamLeaders = styled.div`
    display: flex;
`;

export const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'};
    margin-bottom: 12px;
    font-weight: 700;
`;

export const CTA = styled.div`
    text-align: center; 
    padding: 145px 0;

    p{
        margin: 0 0 27px; 
        font-size: ${({ theme }) => theme.fontSizes[3]+'px'};
        line-height: 1.33;
        font-weight: 600;
    }
    h1{
        margin: 0 0 64px;
        font-size: ${({ theme }) => theme.fontSizes[4]+'px'};
        line-height: 1.255;
        font-weight: 600;
    }

`; 