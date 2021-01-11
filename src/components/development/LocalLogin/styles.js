import styled from "@emotion/styled";

export const LocalLogin = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Container = styled.div`
  z-index: 2;
  width: 500px;
  height: 500px;
  background-color: #000;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
`;
