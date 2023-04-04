import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export function NavBar() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  function handleLoggout() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    Navigate("/");
  }

  return (
    <div
      class="relative flex h-12 items-center bg-[#88001b] px-1 justify-center "
      style={{ fontFamily: "Macondo" }}
    >
      <div class="relative flex h-12 items-center justify-around w-1/2 text-white  ">
        <Link
          to="/"
          class="hover:bg-[#6f0016] block rounded-md px-3 py-2 text-base "
          style={{ fontSize: "25px" }}
        >
          Home
        </Link>
        <Link
          to="/ItensMenu"
          class="hover:bg-[#6f0016]  block rounded-md px-3 py-2 text-base text-white"
          style={{ fontSize: "25px" }}
        >
          Menu
        </Link>
        {loggedInUser && (
          <>
            <Link
              to="/finishOrder"
              class="hover:bg-[#6f0016]  block rounded-md px-3 py-2 text-base text-white"
              style={{
                fontSize: "25px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                minWidth: "150px",
              }}
            >
              Acompanhe seus Pedidos
            </Link>
            <div>
              <button
                onClick={handleLoggout}
                class="hover:bg-[#6f0016]  block rounded-md px-3 py-2 text-base  text-white"
                style={{ fontSize: "25px" }}
              >
                Sair
              </button>
            </div>
          </>
        )}

        {!loggedInUser && (
          <>
            <Link
              to="/login"
              class="hover:bg-[#6f0016]  block rounded-md px-3 py-2 text-base  text-white"
              style={{ fontSize: "25px" }}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
