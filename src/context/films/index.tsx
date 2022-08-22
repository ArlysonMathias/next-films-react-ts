import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Film } from "../../assets/types/types";
import { api } from "../../Services";
import { useAuth } from "../auth";

//interfaces
interface FilmsProviderProps {
    children: ReactNode;
  }

interface FilmsProviderData {
    films: Film[];
    handleGetFilms: () => void
}

//context
const FilmsContext = createContext<FilmsProviderData>({} as FilmsProviderData)

//provider 

export const FilmsProvider = ({children}: FilmsProviderProps) => {
    const { logged } = useAuth()


    const[films, setFilms] = useState<Film[]>([])

    const handleGetFilms = () => {

        const token = localStorage.getItem("token");

        const headers = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        api.get("/films", headers).then((res) => {
            setFilms(res.data)
        })
    }

    useEffect(() => {
       if (logged) handleGetFilms()
    }, [logged])


    return (
        <FilmsContext.Provider value={{films, handleGetFilms}}>
            {children}
        </FilmsContext.Provider>
    )
}

export const useFilms = () => useContext(FilmsContext)