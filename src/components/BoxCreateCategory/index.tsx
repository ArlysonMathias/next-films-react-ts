import { ErrorMessage, FormButton, Input } from "../Styles/styles";
import * as Styled from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { api } from "../../Services";
import { useEffect } from "react";
import { useCategory } from "../../context/categories";
import { useFilms } from "../../context/films";

const newCategorySchema = yup.object().shape({
  name: yup.string().required("Nome da categoria obrigatório"),
});

interface NewCategoryData {
  name?: string;
}

const BoxCreateCategory = () => {
  const { handleGetFilms } = useFilms();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCategoryData>({ resolver: yupResolver(newCategorySchema) });

  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleNewCategory = (data: NewCategoryData) => {
    api
      .post("categories", data, headers)
      .then(() => {
        handleGetFilms();
        toast.success("Categoria criada com sucesso.");
      })
      .catch(() => toast.error("Erro ao criar categoria"));
  };

  return (
    <Styled.BoxCreateCategory>
      <h1>Criar Categoria</h1>
      <Styled.BoxCreateCategoryForm onSubmit={handleSubmit(handleNewCategory)}>
        <Input
          type="text"
          placeholder="Nome da categoria"
          {...register("name")}
        />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <FormButton role="button" type="submit">
          Registrar
        </FormButton>
      </Styled.BoxCreateCategoryForm>
    </Styled.BoxCreateCategory>
  );
};

export default BoxCreateCategory;
