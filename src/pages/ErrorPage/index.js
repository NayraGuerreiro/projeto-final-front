import { Link } from "react-router-dom";
export function ErrorPage() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "200px",
        fontFamily: "Macondo",
        background: "#ffecde",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "70px" }}>Desculpe,</h1>
      <span style={{ fontSize: "30px" }}>Não encontramos essa página</span>
      <p style={{ fontSize: "40px" }}>
        verifique se o endereço está correto, se quiser retornar ao início
        clique no link abaixo
      </p>
      <span style={{ fontSize: "30px" }}>
        <Link to="/" className=" text-blue-700">
          NARANI's home page
        </Link>
      </span>
    </div>
  );
}
