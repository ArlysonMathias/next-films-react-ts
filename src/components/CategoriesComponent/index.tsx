import { Film } from "../../assets/types/types"
import Card from "../Card"
import * as Styled from "./style"

interface FilmsListProps {
    filmFilters: Film[]
}

const CategoriesComponent = ({filmFilters}: FilmsListProps) => {

  
    return (
        <Styled.Row>    
            {filmFilters.map((element, index) => (
                <Card film={element} key={index}/>
            ))}
        </Styled.Row>
    )
}

export default CategoriesComponent;