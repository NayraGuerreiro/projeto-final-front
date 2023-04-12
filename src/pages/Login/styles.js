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
  padding-top: 325px;

  @media screen and (min-width: 425px) and (max-width: 1023px) {
    font-size: 45px;
    padding-top: 350px;
  }
`;

export const Form = styled.div``;

export const Senha = styled.div`
  margin-top: 10px;
`;

export const Button = styled.button`
  color: black;
  font-size: 25px;
  font-family: "Macondo";
  font-weight: bold;
  padding: 5px 0px 0px 10px;
`;

export const Sentence = styled.div`
  color: black;
  font-size: 20px;
  font-family: "Macondo";
  text-align: center;
  font-weight: bolder;
`;
