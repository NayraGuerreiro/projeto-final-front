import { api } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function FinishOrder() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function feftchOrders() {
      try {
        const response = await api.get("/order");

        setOrders([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    feftchOrders();
  }, []);
  console.log(orders);
  return (
    <div
      style={{
        backgroundColor: "#ffecde",
        backgroundSize: "100vw 100vh",
        height: "100%",
        textAlign: "-webkit-center",
        fontFamily: "Mocondo",
        fontSize: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "Macondo",
          fontSize: "50px",
          paddingTop: "30px",
          paddingBottom: "20px",
        }}
      >
        <h1>Meus Pedidos</h1>
      </div>

      {orders.map((currentOrder) => {
        return currentOrder.pedido.map((food) => {
          return (
            <div>
              <img
                alt={food.prato}
                src={food.imagem}
                style={{ paddingTop: "50px" }}
              />
              <h2
                style={{
                  paddingTop: "10px",
                  fontFamily: "Macondo",
                  fontSize: "40px",
                }}
              >
                {food.prato}
              </h2>

              <p>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    fontFamily: "Macondo",
                  }}
                >
                  Quantidade:
                </span>
                {food.quantidade}
              </p>
            </div>
          );
        });
      })}
    </div>
  );
}

export { FinishOrder };
