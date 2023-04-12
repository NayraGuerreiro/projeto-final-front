import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import * as S from "./styles";

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
    <S.Container>
      <div>
        <S.Title>Bem Vindos</S.Title>
      </div>
      <S.Form>
        <form onSubmit={handleSumit} action="#" method="POST">
          <label for="email-address" class="sr-only">
            E-mail:
          </label>
          <input
            id="email-address"
            autocomplete="email"
            required
            placeholder="E-mail"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <S.Senha>
            <label class="sr-only">Senha:</label>
            <input
              id="password"
              autocomplete="current-password"
              required
              placeholder="Senha"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </S.Senha>
          <S.Button>
            <button type="submit">Login</button>
          </S.Button>
          <S.Sentence>
            <p>Ainda não tem cadastro?</p>
            <span>
              <Link to="/signup">Clique aqui!</Link>
            </span>
          </S.Sentence>
        </form>
      </S.Form>
    </S.Container>
  );
}
