import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffecde;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 60px;
  font-family: Macondo;
  color: black;
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const SubTitle = styled.div`
  font-size: 30px;
  font-family: Macondo;
  color: black;
  text-align: center;
  padding-top: 10px;

  border-bottom: 2px solid orange;
  width: 400px;
`;

export const Image = styled.img`
  width: 400px;
  heigth: 100px;
  box-shadow: 5px 5px rgb(255, 221, 197);
  text-align: center;
  display: inline-flex;
`;

export const Paragraph = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 40px;
  font-family: Macondo;
  font-size: 20px;
`;

export const Button = styled.button`
  font-size: 20px;
  font-family: Macondo;
  color: black;
  box-shadow: 1px 1px gray;
  margin-bottom: 20px;
  margin-left: 20px;
`;
