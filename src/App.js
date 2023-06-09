import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { ItensMenu } from "./pages/ItensMenu";
import { NavBar } from "./pages/NavBar";
import { ProtectedAdminRoute } from "./components/ProtectedAdminRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { EditFood } from "./pages/EditFood";
import { FoodDetails } from "./pages/FoodDetails";
import { Home } from "./pages/Home";

import { YourOrder } from "./pages/Order";
import { FinishOrder } from "./pages/finishOrder";
import { useState } from "react";
import { CreateFood } from "./pages/CreateFood";

function App() {
  const [foodOrder, setFoodOrder] = useState([]);
  return (
    <>
      <AuthContextComponent>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/itensmenu" element={<ItensMenu />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route
            path="/createfood"
            element={<ProtectedAdminRoute component={CreateFood} />}
          />
          <Route
            path="/edit/:id"
            element={<ProtectedAdminRoute component={EditFood} />}
          />

          <Route
            path="/details/:id"
            element={
              <ProtectedRoute
                component={FoodDetails}
                foodOrder={foodOrder}
                setFoodOrder={setFoodOrder}
              />
            }
          />

          <Route
            path="/order"
            element={
              <ProtectedRoute
                component={YourOrder}
                foodOrder={foodOrder}
                setFoodOrder={setFoodOrder}
              />
            }
          />
          <Route
            path="/finishOrder"
            element={<ProtectedRoute component={FinishOrder} />}
          />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
