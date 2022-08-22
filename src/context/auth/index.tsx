import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { User } from "../../assets/types/types";
import { api } from "../../Services/index";

// interfaces
interface AuthProviderProps {
  children: ReactNode;
}

interface LoginParams {
  token: string;
  user: User;
}

interface AuthproviderData {
  logged: boolean;
  login: (params: LoginParams) => void;
  logout: () => void;
}

//context
const AuthContext = createContext<AuthproviderData>({} as AuthproviderData);

// provider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [logged, setLogged] = useState<boolean>(false);

  const login = ({ token, user }: LoginParams) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setLogged(true);
    navigate("/");
    toast.success("Login bem sucedido");
  };

  const logout = () => {
    localStorage.clear();
    setLogged(false);
    navigate("/login");
  };

  const checkTokenExpiration = () => {
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
        navigate("/");
      })
      .catch(() => {
        logout();
        toast.success("Necessário fazer login novamente");
      });
  };

  // na montagem da página, checa se existe um token e se ele é válido
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) checkTokenExpiration();
  }, []);

  return (
    <AuthContext.Provider value={{ logged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
