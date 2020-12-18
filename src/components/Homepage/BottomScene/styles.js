import styled from '@emotion/styled';

export const Scene = styled.div`
    position: relative;
    overflow: hidden;
`; 

export const LocationsContent = styled.div`
    position: relative; 
    
    &:before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0;
        background: rgb(12,37,72);
        background: -moz-linear-gradient(180deg, rgba(12,37,72,1) 0%, rgba(11,21,37,1) 50%, rgba(12,37,72,1) 100%);
        background: -webkit-linear-gradient(180deg, rgba(12,37,72,1) 0%, rgba(11,21,37,1) 50%, rgba(12,37,72,1) 100%);
        background: linear-gradient(180deg, rgba(12,37,72,1) 0%, rgba(11,21,37,1) 50%, rgba(12,37,72,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c2548",endColorstr="#0c2548",GradientType=1);
    }
`;

export const SignUpContent = styled.div`
    position: relative; 
        
    &:before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 0; 
        bottom: 0; 
        left: 0; 
        right: 0;
        background: rgb(12,37,72);
        background: -moz-linear-gradient(180deg, rgba(12,37,72,1) 0%, rgba(11,21,37,1) 100%);
        background: -webkit-linear-gradient(180deg, rgba(12,37,72,1) 0%, rgba(11,21,37,1) 100%);
        background: linear-gradient(180deg, rgba(12,37,72,1) 0%, rgba(11,21,37,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c2548",endColorstr="#0b1525",GradientType=1);
    }
`;

export const ImageWrapper = styled.div`
    position: absolute;
    left: 150px;
    right: 150px;

    img{
        width: 100%;
    }
`;