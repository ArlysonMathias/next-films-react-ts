import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Film } from "../../assets/types/types";
import { useFilms } from "../../context/films";
import { api } from "../../Services";

const SettingsFilms = () => {
  const { films } = useFilms();
  const navigate = useNavigate()
  const[logged, setLogged] = useState<boolean>(false)

  const user = JSON.parse(localStorage.getItem("user") || "");
    const token = localStorage.getItem("token");
    

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    api
      .get(`users/${user.id}`, headers)
      .then(() => {
        setLogged(true);
        navigate("/settings-film");
      })
      .catch(() => {
        toast.success("Necessário fazer login novamente");
      });


  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [film, setFilm] = useState<Film | undefined>(undefined)

  //função para alterar o modal
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  //Função para alterar estado do modal de delete
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };

  return (
    <div>
        <header>
            <button>Início</button>
            <button>Criar Filme</button>
            <button>Criar Categoria</button>
            <button>Sair</button>
        </header>
      <div></div>
    </div>
  );
};

export default SettingsFilms;
