import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  background-color: #ffecde;
  height: 100%;

  @media screen and (min-width: 425px) and (max-width: 1023px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const Title = styled.h3`
  font-family: Macondo;
  color: black;
  text-align: center;
  font-size: 70px;
  padding-left: 35px;
  padding-top: 10px;

  @media screen and (min-width: 425px) and (max-width: 1023px) {
    font-size: 50px;
  }
`;

export const Paragraph = styled.p`
  color: black;
  font-family: Macondo;
  font-weight: 100%;
  font-size: 30px;
  text-align: center;
  padding-left: 35px;

  @media screen and (min-width: 425px) and (max-width: 1023px) {
    font-size: 25px;
  }
`;

export const Button = styled.button`
  color: black;
  font-size: 25px;
  font-family: "Macondo";
  font-weight: bold;
  padding: 5px 0px 40px 30px;
`;

export const Logo = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 425px) and (max-width: 1023px) {
    width: 100%;
    height: 30vh;
    justify-content: center;
  }
`;

export const MainLogo = styled.div`
  height: 40%;
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 425px) and (max-width: 1023px) {
    height: 35%;
    width: 98%;
  }
`;
