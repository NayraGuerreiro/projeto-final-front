import { Link } from "react-router-dom";
import portal from "../../images/portal.png";
import cerejeira from "../../images/é essa.png";
export function Home() {
  return (
    <div
      style={{
        whidth: "10vw 50vh",
        textAlign: "-webkit-center",
        backgroundColor: "#ffecde",
        height: "100%",
      }}
    >
      <div style={{ textAlign: "-webkit-rigth" }}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img style={{ height: "28vh" }} src={cerejeira} />
      </div>
      <div style={{ textAlign: "-webkit-center", paddingTop: "0px" }}>
        <img alt="portal" style={{ height: "41vh" }} src={portal} />
      </div>
      <div>
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
        <Link to={"/login"}>
          <button
            style={{
              color: "black",
              fontSize: "25px",
              fontFamily: "Macondo",
              fontWeight: "bold",
              // paddingTop: "5px",
              // paddingLeft: "35px",
              padding: "5px 0px 40px 30px",
              // marginBottom: "40px",
            }}
          >
            Entrar!
          </button>
        </Link>
      </div>
    </div>
  );
}
