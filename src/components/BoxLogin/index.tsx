import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Logo from "../../assets/icons/logo.png";
import { useAuth } from "../../context/auth";
import { api } from "../../Services";
import { FormButton } from "../Styles/styles";
import * as Styled from "./style";
import { ErrorMessage } from "../Styles/styles"

//interfaces
interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("Campo e-mail, obrigatório"),

  password: yup
    .string()
    .min(8, "Sua senha deve ter no mínimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no mímino 1 caracter especial, um número e uma letra maiúscula"
    )
    .required("Campo obrigatório"),
});

const BoxLogin = () => {
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post("auth/login", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("Usuário ou senha inválidos");
      });
  };

  return (
    <Styled.BoxLogin>
      <Styled.BoxLoginLogo src={Logo} alt="Logo" />
      <Styled.BoxLoginForm onSubmit={handleSubmit(handleLogin)}>
        <input placeholder="E-mail" {...register("email")} />
        <input type="password" placeholder="Senha" {...register("password")}/>
        <ErrorMessage>{errors.email?.message || errors.password?.message}</ErrorMessage>
      <FormButton role="button" type="submit" >Entrar</FormButton>
      </Styled.BoxLoginForm>
      <Styled.BoxLoginFooter>
        <p>
          {" "}
          Não tem uma conta?{" "}
          <button onClick={() => navigate("/register")}>Cadastre-se</button>
        </p>
      </Styled.BoxLoginFooter>
    </Styled.BoxLogin>
  );
};

export default BoxLogin;
