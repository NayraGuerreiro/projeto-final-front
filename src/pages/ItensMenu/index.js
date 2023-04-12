import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";
import * as S from "./styles";

import { Link } from "react-router-dom";
export function ItensMenu() {
  const { loggedInUser } = useContext(AuthContext);
  const [menu, setMenu] = useState([]);

  console.log(menu, "teste");

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await api.get("/menu");
        console.log(response);
        setMenu([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMenu();
  }, [setMenu]);
  return (
    <S.Container>
      <S.Title>
        <h1>Narani</h1>
      </S.Title>

      {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
        <S.TextContainer>
          <S.SubTitle>
            <Link to={`/createfood`}>
              <button>Criar Prato</button>
            </Link>
          </S.SubTitle>
        </S.TextContainer>
      ) : null}

      {menu.map((currentMenu) => {
        return (
          <div>
            <div style={{ display: "flex", width: "100%" }}>
              <S.TextContainer style={{ paddingBottom: "20px" }}>
                <S.SubTitle>
                  <h3>{currentMenu.prato}</h3>
                </S.SubTitle>
              </S.TextContainer>
            </div>

            <div>
              <S.Image alt="foto do prato" src={currentMenu.imagem} />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <S.Paragraph>
                <p>
                  <b>Descrição:</b> {currentMenu.descrição}
                </p>

                <p>
                  <b>Porção:</b> {currentMenu.quantidade}
                </p>

                <p>
                  <b>Tempo de preparo:</b> {currentMenu.preparo}
                </p>

                <p>
                  <b>Calorias:</b> {currentMenu.calorias}
                </p>
              </S.Paragraph>
            </div>

            <div>
              <S.Button>
                <Link to={`/details/${currentMenu._id}`}>
                  <button class="tracking-wider">Detalhes</button>
                </Link>
              </S.Button>
              {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
                <S.Button>
                  <Link to={`/edit/${currentMenu._id}`}>
                    <button>Gerenciar</button>
                  </Link>
                </S.Button>
              ) : null}
            </div>
          </div>
        );
      })}
    </S.Container>
  );
}
