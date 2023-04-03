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
    <div>
      <div></div>
      <div>MEUS PEDIDOS</div>

      <div className="flex justify-items-center items-center flex-col">
        {orders.map((currentOrder) => {
          return currentOrder.pedido.map((food) => {
            return (
              <div className="flex flex-col max-auto my-8 bg-[#e09e6e] border-2 border-orange-500  rounded-3xl">
                <img
                  alt={food.prato}
                  src={food.imagem}
                  className="rounded-xl border-2 border-orange-500 w-96"
                />
                <h1 className="pt-3 text-center text-3xl font-bold w-96">
                  {food.prato}
                </h1>

                <p className="pb-4 text-center font-semibold">
                  <span>Quantidade: </span>
                  {food.quantidade}
                </p>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export { FinishOrder };
