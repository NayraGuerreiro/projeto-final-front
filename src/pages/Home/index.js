import { Link } from "react-router-dom";
import portal from "../../images/portal.png";
import cerejeira from "../../images/é essa.png";
import * as S from "./styles";
export function Home() {
  return (
    <S.Container>
      <S.Logo>
        <img src={cerejeira} alt="cerejeira" />
      </S.Logo>
      <S.MainLogo>
        <img src={portal} alt="portal" />
      </S.MainLogo>
      <div>
        <S.Title>Narani</S.Title>
        <S.Paragraph>
          Uma experiência gastronômica que vai te surpreender
        </S.Paragraph>
        <Link to={"/login"}>
          <S.Button>Entrar!</S.Button>
        </Link>
      </div>
    </S.Container>
  );
}
