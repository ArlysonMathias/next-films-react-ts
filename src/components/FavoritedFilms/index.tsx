import * as Styled from "./style"
import { Favorites } from "../../types"
import Card from "../Card"


interface FavoritedProps {
    list: Favorites
}

const FavoritedFilms = ({list}: FavoritedProps) => {
    return (
        <Styled.Main>
            <h1>Filmes Favoritados</h1>
      {list.map((element) => (
        <Card film={element} key={element.id} />
      ))}
    </Styled.Main>
    )
}

export default FavoritedFilms;