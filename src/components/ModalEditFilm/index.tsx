import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { Film } from "../../assets/types/types";
import { useCategory } from "../../context/categories";
import { useFilms } from "../../context/films";
import { api } from "../../Services";
import Button from "../Button";
import { ErrorMessage, ModalOverlay } from "../Styles/styles";
import * as Styled from "./style";

interface EditFilmModalProps {
  film: Film;
  handleModalEdit: () => void;
}

interface EditFilmData {
  name?: string;
  description?: string;
  image?: string;
  categoryId?: string;
}

const updateFilmSchema = yup.object().shape({
  name: yup.string().required("Nome do filme obrigatório"),

  description: yup.string().required("Descrição obrigatória."),

  image: yup
    .string()
    .url("Formato de URL inválido")
    .required("Link com a imagem obrigatório"),
});

const ModalEditFilm = ({ film, handleModalEdit }: EditFilmModalProps) => {
  const { handleGetFilms } = useFilms();
  const { category } = useCategory();
  const [categoryId, setCategoryId] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFilmData>({ resolver: yupResolver(updateFilmSchema) });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleUpdateFilm = (data: EditFilmData) => {
    data.categoryId = categoryId;

    api
      .patch(`/films/${film.id}`, data, headers)
      .then(() => {
        toast.success("Produto atualizado com sucesso");
        handleGetFilms();
        handleModalEdit();
      })
      .catch(() => toast.error("Erro ao editar filme."));
  };

  return (
    <ModalOverlay>
      <Styled.ModalOverlayContent>
        <h1>Editar Filme</h1>
        <Styled.ModalForm onSubmit={handleSubmit(handleUpdateFilm)}>
          <input defaultValue={film.name} type="text" {...register("name")} />
          <input defaultValue={film.image} type="text" {...register("image")} />
          <input
            defaultValue={film.description}
            type="text"
            {...register("description")}
          />
          <Styled.Select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option>Selecione a categoria</option>
            {category.map((element) => (
              <option key={element.id} value={element.id}>
                {element.name}
              </option>
            ))}
          </Styled.Select>
          <ErrorMessage>
            {errors.name?.message ||
              errors.description?.message ||
              errors.image?.message}
          </ErrorMessage>
          <div>
            <Button
              text="Cancelar"
              onClick={() => {
                handleModalEdit();
              }}
            />
            <Button text="Editar" type="submit" />
          </div>
        </Styled.ModalForm>
      </Styled.ModalOverlayContent>
    </ModalOverlay>
  );
};

export default ModalEditFilm;
