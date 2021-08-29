import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Section = styled.div`
  margin: 40px 0 0 0;
  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin: 0 0 40px 0;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes[2] + "px"};
  margin-bottom: 12px;
  font-weight: 700;
`;

export const SectionSubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes[2] + "px"};
  line-height: 1.4;
  font-weight: 400;
`;

export const Slider = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 100%;
    margin-left: 50px;
    z-index: 10;
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const Control = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  z-index: 100;
  display: flex;
  align-items: center;
  cursor: pointer;
  display: none;

  div {
    line-height: 1;
    padding: 10px;

    svg {
      width: 27px;
      opacity: 0.5;
      transition: 0.3s all ease;
    }

    &:hover {
      svg {
        opacity: 1;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: flex;
  }
`;

export const PrevControl = styled(Control)`
  left: -50px;
  justify-content: flex-start;
  padding: 0 0 0 50px;

  /* background: rgb(11,21,37);
    background: -moz-linear-gradient(90deg, rgba(11,21,37,1) 0%, rgba(11,21,37,0) 95%);
    background: -webkit-linear-gradient(90deg, rgba(11,21,37,1) 0%, rgba(11,21,37,0) 95%);
    background: linear-gradient(90deg, rgba(11,21,37,1) 0%, rgba(11,21,37,0) 95%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0b1525",endColorstr="#0b1525",GradientType=1); */
`;

export const NextControl = styled(Control)`
  right: -50px;
  justify-content: flex-end;
  padding: 0 74px 0 0;

  background: rgb(11, 21, 37);
  background: -moz-linear-gradient(90deg, rgba(11, 21, 37, 0) 0%, rgba(11, 21, 37, 1) 95%);
  background: -webkit-linear-gradient(90deg, rgba(11, 21, 37, 0) 0%, rgba(11, 21, 37, 1) 95%);
  background: linear-gradient(90deg, rgba(11, 21, 37, 0) 0%, rgba(11, 21, 37, 1) 95%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0b1525",endColorstr="#0b1525",GradientType=1);
`;

export const SliderContents = styled(motion.div)`
  position: absolute;
  display: flex;

  & > *:last-child {
    margin-right: 24px;

    @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
      //margin-right: 150px;
      margin-right: 0;
    }
  }

  &.dashed {
    border: 2px dashed rgba(0, 0, 0, 0.2);
    border-radius: 52px;
    padding: 24px;
  }
`;
