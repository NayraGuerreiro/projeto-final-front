import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import fundo from "../../images/fundo.jpg";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/user/signup", { ...form });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
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
          fontSize: "70px",
          fontFamily: "Macondo",
          paddingTop: "120px",
        }}
      >
        <h1>Cadastro</h1>
      </div>
      <div style={{ width: "400px", alignSelf: "center" }}>
        <form
          onSubmit={handleSubmit}
          class="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input
            id="formName"
            placeholder="Nome"
            name="name"
            type="text"
            class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={form.name}
            onChange={handleChange}
          />

          <label htmlFor="formEmail" class="sr-only">
            E-mail:
          </label>
          <input
            id="formEmail"
            name="email"
            placeholder="E-mail"
            type="email"
            class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={form.email}
            onChange={handleChange}
          />

          <label htmlFor="formPassword" class="sr-only">
            Senha:
          </label>
          <input
            id="formPassword"
            name="password"
            placeholder="Senha"
            type="password"
            class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={form.password}
            onChange={handleChange}
          />

          <label htmlFor="formConfirmPassword" class="sr-only">
            Confirmação de senha
          </label>
          <input
            id="formConfirmPassword"
            type="password"
            placeholder="Confirme a Senha"
            name="confirmPassword"
            class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <div
            style={{
              fontFamily: "Macondo",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            <button type="submit">Finalizar Cadastro</button>
          </div>
        </form>
      </div>
    </div>
  );
}
