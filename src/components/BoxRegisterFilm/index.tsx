import { ErrorMessage, FormButton, Input } from "../Styles/styles";
import * as Styled from "./style";
import * as yup from "yup";
import { api } from "../../Services";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCategory } from "../../context/categories";
import { useState } from "react";
import { useFilms } from "../../context/films";

const newFilmSchema = yup.object().shape({
  name: yup.string().required("Nome do filme obrigatório"),

  description: yup.string().required("Descrição obrigatória."),

  image: yup
    .string()
    .url("Formato de URL inválido")
    .required("Link com a imagem obrigatório"),
});

interface NewFilmData {
  name?: string;
  description?: string;
  image?: string;
  categoryId?: string;
}

const BoxRegisterFilm = () => {
  const { category, handleGetCategory } = useCategory();
  const { handleGetFilms } = useFilms();
  const [categoryId, setCategoryId] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewFilmData>({ resolver: yupResolver(newFilmSchema) });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewFilm = (data: NewFilmData) => {
    data.categoryId = categoryId;

    api
      .post("films", data, headers)
      .then(() => {
        handleGetCategory();
        handleGetFilms();
        toast.success("Filme Registrado com sucesso.");
      })
      .catch(() => toast.error("Selecione uma categoria"));
  };

  return (
    <Styled.BoxRegisterFilm>
      <h1>Registrar um filme</h1>
      <Styled.BoxRegisterFilmForm onSubmit={handleSubmit(handleNewFilm)}>
        <Input type="text" placeholder="Nome do filme" {...register("name")} />
        <Input
          type="text"
          placeholder="Descrição do filme"
          {...register("description")}
        />
        <Input
          type="text"
          placeholder="Link da imagem do filme"
          {...register("image")}
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
        <FormButton role="button" type="submit">
          Registrar
        </FormButton>
      </Styled.BoxRegisterFilmForm>
    </Styled.BoxRegisterFilm>
  );
};

export default BoxRegisterFilm;
