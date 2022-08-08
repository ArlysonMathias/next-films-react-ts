import { Route, Routes } from "react-router-dom";
import CreateFilm from "./pages/CreateFilms";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";


const Router = () =>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/create-film" element={<CreateFilm/> }/>
        </Routes>
    )
}

export default Router;