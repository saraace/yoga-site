import styled from '@emotion/styled';
import { Button } from "theme-ui";

export const ClassInfo = styled.div`
    text-align: center;
`;

export const ClassDetails = styled.div`
    line-height: 1.134;
    font-size: 13.14px;
    font-weight: 500;
    margin: 16px 0 50px;

    span{
        opacity: 0.8;
        margin: 0 7px 0 0;
        &:after{
            content: "|";
            opacity: 0.5;
            margin: 0 0 0 7px;
        }
        &:last-child{
            &:after{
                display: none;
            }
        }
    }
`;

export const Location = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes[2]+'px'}; 
    line-height: 1.315;
    margin: 24px 0 0;

    svg{
        width: 16px;
        margin: 0 10px 0 0;
    }
`;

export const Title = styled.div`
    text-align: center; 
    font-size: 18px; 
    line-height: 1.315;
    margin: 0 0 12px;
`;

export const ClassroomLayout = styled.form`
    .wrapper{
        padding: 34px 10px 10px;
    }
    .label-wrapper{
        text-align: center;
    }
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 24px;
`;

export const SubmitButton = styled(Button)`
    display: block; 
    width: auto;
    padding: 15px 90px;
    margin: 30px auto;
`; 

export const CancelButton = styled(Button)`
    display: block;
    width: auto; 
    padding: 15px 90px; 
    margin: 30px auto;
`;