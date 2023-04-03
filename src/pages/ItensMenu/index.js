import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";

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
    <div class=" bg-[#ffecde]">
      <div class="text-center py-3 text-7xl tracking-widest font-normal antialiased border-b border-orange-300 mx-20 py-10">
        <h1 style={{ fontFamily: "Macondo", marginTop: "20px" }}>Narani</h1>

        <div class="w-20 inline-block"></div>

        {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
          <div
            class="text-center py-3 text-2xl tracking-widest  antialiased  mx-20 py-10"
            style={{ fontFamily: "Macondo" }}
          >
            <Link to={`/createfood`}>
              <button>Criar Prato</button>
            </Link>
          </div>
        ) : null}
      </div>
      {menu.map((currentMenu) => {
        return (
          <div class=" px-4 border-b border-orange-300 mx-20  flex-col">
            <div class="text-center py-8">
              <h3
                class="text-2xl font-bold tracking-wider"
                style={{ fontFamily: "Macondo" }}
              >
                {currentMenu.prato}
              </h3>
            </div>
            <div class="flex flex-row w-full">
              <div class="w-48 h-48 m-10 mt-0 ">
                <img
                  class="w-48 h-48 shadow-2xl shadow-gray-900"
                  alt="foto do prato"
                  src={currentMenu.imagem}
                />
              </div>
              <div
                class="w-3/5 pl-10 mt-10 mb-10"
                style={{ fontFamily: "Macondo", fontSize: "20px" }}
              >
                <p>
                  <b class="tracking-widest">Descrição:</b>{" "}
                  {currentMenu.descrição}
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
              </div>
              <div class=" w-1/12 flex items-center justify-end">
                <div
                  style={{
                    fontFamily: "Macondo",
                    fontSize: "20px",
                    fontWeight: "bolder",
                    borderRadius: "10px",
                    border: "solid 2px #f09d38",
                    padding: "5px",
                  }}
                >
                  <Link to={`/details/${currentMenu._id}`}>
                    <button class="tracking-wider">Detalhes</button>
                  </Link>
                </div>
                {loggedInUser && loggedInUser.user.role === "ADMIN" ? (
                  <div>
                    <div
                      style={{
                        fontFamily: "Macondo",
                        fontSize: "20px",
                        fontWeight: "bolder",
                        borderRadius: "10px",
                        border: "solid 2px #f09d38",
                        padding: "5px",
                        marginLeft: "20px",
                      }}
                    >
                      <Link to={`/edit/${currentMenu._id}`}>
                        <button>Gerenciar</button>
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
