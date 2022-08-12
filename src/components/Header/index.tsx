import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import { useAuth } from "../../context/auth";
import Search from "../Search";
import * as Styled from "./style";

type HeaderListProps = {
  searchInputValue: string;
  handleSearchInputChange: (
    event: React.ChangeEvent<{ value: string }>
  ) => void;
};

const Header = ({
  searchInputValue,
  handleSearchInputChange,
}: HeaderListProps) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  return (
    <Styled.Header>
      <Styled.HeaderLogo src={Logo} />
      <Styled.HeaderMenu>
        <button onClick={() => navigate("/")}>Início</button>
        <button>Categorias</button>
        <button>Favoritos</button>
        <button
          onClick={() => {
            logout();
            toast.success("Logout bem sucedido");
          }}
        >
          Sair
        </button>
      </Styled.HeaderMenu>
      <Search
        searchInputValue={searchInputValue}
        handleSearchInputChange={handleSearchInputChange}
      />
    </Styled.Header>
  );
};

export default Header;
