import BoxRegisterFilm from "../../components/BoxRegisterFilm";
import * as Styled from "./style";
import BoxCreateCategory from "../../components/BoxCreateCategory";
import Header from "../../components/Header";

const CreateFilm = () => {
  return (
    <Styled.CreateFilm>
        <BoxRegisterFilm />
        <BoxCreateCategory />
    </Styled.CreateFilm>
  );
};

export default CreateFilm;
