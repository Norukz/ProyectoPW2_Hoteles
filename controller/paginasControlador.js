import { response } from "express"

const paginaInicio= (req, res = response) =>{
    res.render("inicio",{
        pagina: "Inicio",
    })
};

export{
    paginaInicio
}