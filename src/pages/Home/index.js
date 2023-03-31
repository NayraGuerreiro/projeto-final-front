import portal from "../../images/portal.png";
import cerejeira from "../../images/é essa.png";
export function Home() {
  return (
    <div
      style={{
        textAlign: "-webkit-center",
      }}
    >
      <div style={{ textAlign: "-webkit-rigth" }}>
        <img src={cerejeira} />
      </div>
      <div style={{ textAlign: "-webkit-center", paddingTop: "0px" }}>
        <img alt="portal" src={portal} />
      </div>
      <h3
        style={{
          fontFamily: "Macondo",
          color: "black",
          textAlign: "center",
          fontSize: "70px",
          paddingLeft: "35px",
          paddingTop: "10px",
        }}
      >
        Narani
      </h3>
      <p
        style={{
          color: "black",
          fontFamily: "Macondo",
          fontWeight: 100,
          fontSize: "30px",
          textAlign: "center",
          paddingLeft: "35px",
        }}
      >
        Uma experiência gastronômica que vai te surpreender
      </p>
      <button
        style={{
          color: "white",
          fontSize: "25px",
          fontFamily: "Macondo",
          fontWeight: "bold",
          paddingTop: "5px",
          paddingLeft: "35px",
        }}
      >
        Entrar!
      </button>
    </div>
  );
}
