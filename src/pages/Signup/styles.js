import styled from "styled-components";
import fundo from "../../images/fundo.jpg";

export const Container = styled.div`
  text-align: center;
  background-image: url(${fundo});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-family: Macondo;
  color: black;
  text-align: center;
  padding-top: 340px;
`;

export const Form = styled.div`
  width: 300px;
  heigth: 100vh;
  display: inline-block;
`;

export const Button = styled.button`
  color: black;
  font-size: 20px;
  font-family: "Macondo";
  font-weight: bold;
  padding: 5px 0px 0px 20px;
`;

export const Paragraph = styled.div`
  text-align: start;
`;
