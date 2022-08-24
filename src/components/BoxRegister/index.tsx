import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Logo from "../../assets/icons/logo.png";
import { ErrorMessage, FormButton } from "../Styles/styles";
import * as Styled from "./style";

interface RegisterData {
  email: string;
  name: string;
  password: string;
  confirmPassword?: string;
}

const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),

  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("E-mail obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Senha obrigatória"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não correspondem")
    .required("Confirmação de senha obrigatória"),
});

const BoxRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(registerSchema) });

  const handleCreateUser = (data: RegisterData) => {
    delete data.confirmPassword;
    axios
      .post("https://nextfilms-api-production.up.railway.app/users", data)
      .then(() => {
        toast.success("Usuário criado com sucesso."),
        navigate("/login")});
  };

  return (
    <Styled.BoxRegister>
      <Styled.BoxRegisterLogo src={Logo} alt="Logo" />
      <Styled.BoxRegisterForm onSubmit={handleSubmit(handleCreateUser)}>
        <input placeholder="Nome" {...register("name")} />
        <input type="text" placeholder="E-mail" {...register("email")} />
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />
        <ErrorMessage>
          {errors.name?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.confirmPassword?.message}
        </ErrorMessage>
        <FormButton role="button" type="submit">
          Registrar
        </FormButton>
      </Styled.BoxRegisterForm>
      <Styled.BoxRegisterFooter>
        <p>
          {" "}
          Já possui uma conta?{" "}
          <button onClick={() => navigate("/login")}>Fazer login</button>{" "}
        </p>
      </Styled.BoxRegisterFooter>
    </Styled.BoxRegister>
  );
};

export default BoxRegister;
