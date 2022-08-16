import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/auth";
import CreateFilm from "./pages/CreateFilms";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
  const { logged } = useAuth();
  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/create-film" element={<CreateFilm />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
      <Route path="*" element={<Navigate to={logged ? "/" : "/login"} replace />} />
    </Routes>
  );
};

export default Router;
