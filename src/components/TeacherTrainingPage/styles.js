import styled from '@emotion/styled';
import { Button } from "theme-ui";

export const FormSection = styled.div`
    margin: 0 0 45px; 
`;

export const SectionTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes[3]+'px'}; 
    font-weight: 600; 
    line-height: 1.33;
    margin: 0 0 43px;
`;

export const Row = styled.div`
    display: flex;
`;

export const Col = styled.div`
    & > div{
        margin: 0 10px 30px;
    }

    textarea{
        height: 157px;
    }
`;

export const Col12 = styled(Col)`
    width: 100%;
`;

export const Col6 = styled(Col)`
    width: 50%;
`;

export const Address = styled(FormSection)``;

export const Referral = styled(Col12)`
    .wrapper{
        display: flex;
        flex-wrap: wrap;

        & > label{
            margin: 0 34px 0 0;

            div{
                text-transform: none;
            }
        }
    }
`;

export const CheckboxField = styled.div`
    margin: 0 10px 10px !important;

    label{ 
        align-items: flex-start !important;
    }
    
    .label{
        text-transform: none;
        line-height: 1.4; 
    }
`;

export const SubmitButton = styled(Button)`
    padding: 17px 212px;
    margin: 0 0 50px;
`;

