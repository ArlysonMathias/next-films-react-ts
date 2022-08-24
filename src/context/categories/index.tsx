import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Categories } from "../../assets/types/types";
import { api } from "../../Services";
import { useAuth } from "../auth";

//interfaces
interface CategoryProviderProps {
    children: ReactNode;
  }

interface CategoryProviderData {
    category: Categories[];
    handleGetCategory: () => void
}

//context
const CategoryContext = createContext<CategoryProviderData>({} as CategoryProviderData)

//provider 

export const CategoryProvider = ({children}: CategoryProviderProps) => {
    const { logged } = useAuth()


    const[category, setCategory] = useState<Categories[]>([])

    const handleGetCategory = () => {

        const token = localStorage.getItem("token");

        const headers = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        api.get("/categories", headers).then((res) => {
            setCategory(res.data)
        })
    }

    useEffect(() => {
       if (logged) handleGetCategory()

    }, [logged])


    return (
        <CategoryContext.Provider value={{category, handleGetCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => useContext(CategoryContext)