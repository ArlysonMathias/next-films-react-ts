import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxCreateCategory from "../../components/BoxCreateCategory";
import BoxRegisterFilm from "../../components/BoxRegisterFilm";
import { useAuth } from "../../context/auth";
import * as Styled from "./style";

const CreateFilm = () => {

  const navigate = useNavigate();
  const { logout } = useAuth();
  const [filmRender, setFilmRender] = useState(false);
  const [categoryRender, setCategoryRender] = useState(false);

  const handleFilmRender = () => {
    setFilmRender(true);
    setCategoryRender(false);
  };

  const handleCategoryRender = () => {
    setFilmRender(false);
    setCategoryRender(true);
  };
  return (
    <Styled.CreateFilm>
      <Styled.CreateFilmHeader>
        <button onClick={() => navigate("/")}>Início</button>
        <button onClick={handleFilmRender}>Criar filme</button>
        <button onClick={handleCategoryRender}>Criar categoria</button>
        <button onClick={logout}>Sair</button>
      </Styled.CreateFilmHeader>
      <Styled.CreateFilmContent>
        {filmRender ? <BoxRegisterFilm /> : <BoxCreateCategory />}
      </Styled.CreateFilmContent>
    </Styled.CreateFilm>
  );
};

export default CreateFilm;
