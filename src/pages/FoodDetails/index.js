import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";
import detalhes from "../../images/abstract_japanese_wave_pattern_design_1606.jpg";

export function FoodDetails(props) {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({});

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await api.get(`/menu/details/${params.id}`);
        console.log(response.data);
        setFood(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchFood();
  }, [params.id]);

  console.log(food);
  const navigate = useNavigate();
  function handleSubmit() {
    const clone = [...props.props.foodOrder];
    clone.push(food);
    props.props.setFoodOrder(clone);

    navigate("/order");
  }
  console.log(props);
  return (
    <div
      style={{
        backgroundColor: "#ffecde",
        backgroundSize: "100vw 100vh",
        height: "96vh",
        textAlign: "-webkit-center",
      }}
    >
      {!isLoading && (
        <>
          <div style={{ fontFamily: "Macondo", fontSize: "20px" }}>
            <div>
              <img
                alt={food.prato}
                src={food.imagem}
                style={{
                  width: "500px",
                  paddingTop: "200px",
                  paddingBottom: "10px",
                }}
              />
              <h1 style={{ fontSize: "40px" }}>{food.prato}</h1>
              <div>
                <p>
                  <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                    Descrição:
                  </span>
                  {food.descrição}
                </p>

                <div>
                  <p>
                    <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      Tempo de preparo:
                    </span>
                    {food.preparo}
                  </p>
                  <p>
                    <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      Calorias:
                    </span>
                    {food.calorias}
                  </p>
                  <p>
                    <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      Porção:
                    </span>
                    {food.quantidade} porções
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "200px",
                  fontFamily: "Macondo",
                  fontSize: "20px",
                  fontWeight: "bolder",
                  borderRadius: "10px",
                  border: "solid 2px #f09d38",
                  padding: "5px",
                  marginTop: "10px",
                }}
              >
                <button onClick={handleSubmit}>Fazer Pedido</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
