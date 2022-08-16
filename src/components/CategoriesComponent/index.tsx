import { useState } from "react"
import { Categories } from "../../assets/types/types"
import { useCategory } from "../../context/categories"
import * as Styled from "./style"

const CategoriesComponent = () => {

    
  const { category } = useCategory()

  const[categories, setCategories] = useState<Categories>(category[0])

 
    return (
        <Styled.Row>
            <div>
                
            </div>
        </Styled.Row>
    )
}

export default CategoriesComponent;