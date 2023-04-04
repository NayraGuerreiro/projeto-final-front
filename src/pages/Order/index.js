import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function YourOrder(props) {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  //const [foodOrder, setFoodOrder] = useState({});
  const navigate = useNavigate();

  //adcionar mais itens
  console.log(props);
  //finalizar pedido
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const response = await api.post("/order", {
        pedido: props.props.foodOrder,
      });
      console.log(response);
      navigate("/finishOrder");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete() {
    props.props.setFoodOrder([]);
  }
  return (
    <div
      style={{
        backgroundColor: "#ffecde",
        backgroundSize: "100vw 80vh",
        height: "90vh",
        textAlign: "-webkit-center",
        fontFamily: "Mocondo",
        fontSize: "20px",
      }}
    >
      <div
        style={{ fontFamily: "Macondo", fontSize: "50px", paddingTop: "30px" }}
      >
        <h1> Pedidos em Andamento </h1>
      </div>
      <div
        style={{
          backgroundColor: "#ffecde",
          paddingTop: "30px",
          paddingBottom: "0px",
          minHeight: "79vh",
        }}
      >
        {props.props.foodOrder &&
          props.props.foodOrder.map((food) => {
            return (
              <div
                style={{
                  fontFamily: "Macondo",
                  fontSize: "20px",
                  paddingBottom: "20px",
                }}
              >
                <img alt={food.prato} src={food.imagem} />
                <h2
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontFamily: "Macondo",
                    fontSize: "40px",
                  }}
                >
                  {food.prato}
                </h2>
                <div>
                  <p>
                    <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      {" "}
                      Descrição:
                    </span>
                    {food.descrição}
                  </p>

                  <div>
                    <p>
                      <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                        Tempo de preparo:{" "}
                      </span>
                      {food.preparo}
                    </p>
                    <p>
                      <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                        Calorias:
                      </span>
                      {food.calorias}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                        Porção:{" "}
                      </span>
                      {food.quantidade}
                    </p>
                    <p>
                      <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                        Tempo de preparo:{" "}
                      </span>
                      {food.preparo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div
        style={{
          height: "44px",
          fontFamily: "Macondo",
          fontSize: "20px",
          fontWeight: "bolder",
          justifyContent: "space-around",
          alignItems: "center",
          display: "flex",
          backgroundColor: "burlywood",
        }}
      >
        <Link to={`/itensmenu`}>
          <button>Adicionar</button>
        </Link>

        <button onClick={handleDelete}>Deletar</button>

        <button onClick={handleSubmit}>Finalizar Pedido</button>
      </div>
    </div>
  );
}

export { YourOrder };
