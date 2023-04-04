import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function CreateFood() {
  const [form, setForm] = useState({
    prato: "",
    imagem: "",
    descrição: "",
    quantidade: "",
    preparo: "",
    calorias: "",
  });

  const navigate = useNavigate();
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/menu", { ...form });
      console.log(response);
      navigate("/itensmenu");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      class="flex min-h-full flex-wrap bg-[#ffecde] h-screen pb-24"
      style={{
        whidth: "400px",
        textAlign: "-webkit-center",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "70px",
          fontFamily: "Macondo",
        }}
      >
        <h1>Criar novo prato</h1>
      </div>

      <div style={{ width: "400px", alignSelf: "center" }}>
        <form
          onSubmit={handleSubmit}
          class="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input
            id="input-name"
            name="prato"
            class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={form.prato}
            onChange={handleChange}
            placeholder="Nome do prato"
          />

          <input
            id="input-image"
            name="imagem"
            class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={form.imagem}
            onChange={handleChange}
            placeholder="URL da imagem"
          />

          <textarea
            id="input-description"
            name="descrição"
            class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={form.descrição}
            onChange={handleChange}
            placeholder="Descrição do prato"
          />

          <input
            id="input-quantity"
            name="quantidade"
            class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="number"
            value={form.quantidade}
            onChange={handleChange}
            placeholder="Servem"
          />

          <input
            id="input-preparo"
            name="preparo"
            class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={form.preparo}
            onChange={handleChange}
            placeholder="Tempo de preparo"
          />

          <input
            id="input-caloories"
            name="calorias"
            class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="text"
            value={form.calorias}
            onChange={handleChange}
            placeholder="Calorias por porção"
          />

          <div
            style={{
              fontFamily: "Macondo",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            <button>Criar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
