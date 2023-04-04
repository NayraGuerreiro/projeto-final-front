import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import fundo from "../../images/fundo.jpg";

export function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/itensMenu");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="login"
      style={{
        textAlign: "-webkit-center",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(${fundo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
        height: "96vh",
      }}
    >
      <div
        style={{
          width: "400px",
          alignSelf: "center",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            fontSize: "70px",
            fontFamily: "Macondo",
          }}
        >
          <h1>Bem Vindos</h1>
        </div>
        <form
          onSubmit={handleSumit}
          class="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <label for="email-address" class="sr-only">
            E-mail:
          </label>
          <input
            id="email-address"
            autocomplete="email"
            required
            class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <label class="sr-only">Senha:</label>
          <input
            id="password"
            autocomplete="current-password"
            required
            class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Senha"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <div
            style={{
              fontSize: "25px",
              fontFamily: "Macondo",
              fontWeight: "bold",
            }}
          >
            <button type="submit">Login</button>
          </div>
          <div style={{ marginTop: "4px" }}>
            <p class="mr-3" style={{ fontFamily: "Macondo", fontSize: "20px" }}>
              Ainda não tem cadastro?
            </p>
            <span
              style={{
                fontFamily: "Macondo",
                fontSize: "20px",
                fontWeight: "bolder",
              }}
            >
              <Link to="/signup">Clique aqui!</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
