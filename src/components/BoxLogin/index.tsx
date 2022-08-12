import * as Styled from "./style";
import Logo from "../../assets/icons/logo.png";
import ButtonLarge from "../ButtonLarge";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useAuth } from "../../context/auth";

const BoxLogin = () => {
  const { login} = useAuth()
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };

      return axios
        .post(
          "https://nextfilms-api-production.up.railway.app/auth/login",
          data
        )
        .then((res) => {
         login({ token: res.data.token, user: res.data.user})
        }).catch((err) => {
         return toast.error("Usuário ou senha inválidos")
        });
      }

      toast.error("Preencha todos os campos!");
    };
  return (
    <Styled.BoxLogin>
      <Styled.BoxLoginLogo src={Logo} alt="Logo" />
      <Styled.BoxLoginForm>
        <input
          value={email}
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Styled.BoxLoginForm>
      <ButtonLarge value="Entrar" type="button" onClick={handleLogin} />
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
