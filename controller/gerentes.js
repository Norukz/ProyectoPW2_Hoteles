import { response } from "express";
import { Gerente } from "../models/Gerente.js";

const paginaGerentes = async (req, res) => {
    const gerentes = await Gerente.findAll({
        attributes: ['id_grt', 'nombre', 'ap_paterno', 'ap_materno', 'telefono']
    });

    res.render("gerentes", {
        pagina : "Gerentes",
        gerentes
    });
}

const eliminarGerente = async (req, res) => {
    console.log('Listo para borrar ' + req.query.id);
        //Eliminar en la base de datos
        try {
            await Gerente.destroy({
                where: {
                        id_grt: req.query.id,
                }
            }
        );
            res.redirect("/gerentes");
        }   catch(error) {
            console.log(error);
        }
    
};

//const paginaNuevoGerente = async (req, res = response) => {
//    const gerentes = await Gerente.findAll({
//        attributes: ['id_grt','nombre', 'ap_paterno', 'ap_materno', 'telefono']
//    });

//    console.log(gerentes)

//    res.render("nuevoGerente", {
//        pagina: "Nuevo Gerente",
//        gerentes
//    });
//};

const paginaNuevoGerente = async (req, res) => {
    const { id_grt, nombre, ap_paterno,ap_materno, telefono} = req.body;
    const errores = [];

    console.log(req.body);

    if (nombre === "") {
        errores.push({ mensaje: "El nombre no debe ser vacio" });
    }
    if (ap_paterno === "") {
        errores.push({ mensaje: "La opcion no debe ser vacia" });
    }
    if (ap_materno === "") {
        errores.push({ mensaje: "La opcion no debe estar vacia" });
    }
    if (telefono === "") {
        errores.push({ mensaje: "La opcion no debe estar vacia" });
    }
    if (errores.length > 0) {
        res.render("gerente", {
            pagina: "Gerentes",
            errores,
            nombre,
            ap_paterno,
            ap_materno,
            telefono
            
        });
    } else {
        console.log(id_grt);
        if (id_grt > 0) {
            //Actualizar
            console.log("actualizar");
            try {
                await Gerente.update({
                    nombre,
                    ap_paterno,
                    ap_materno,
                    telefono
                }, { where: { id_grt: id_grt } });
                res.redirect('/gerentes');
            } catch (error) {
                console.log(error);
            }
        } else {
            //almacenar en la base de datos
            try {
                await Gerente.create({
                    
                    nombre,
                    ap_paterno,
                    ap_materno,
                    telefono
                });
                res.redirect('/gerentes');
            } catch (error) {
                console.log(error);
            }
        }
    }
}




const paginaRegistrarHoteles = async (req, res = response) => {
    const gerentes = await Gerente.findAll({
        attributes: ['id_grt', 'nombre', 'ap_paterno', 'ap_materno']
    });

    console.log(gerentes)

    res.render("nuevoHotel", {
        pagina: "Registrar Hoteles",
        gerentes
    });
};


const modificarGerentes = async (req, res) => {
    //Con req.query.id utilizamos la llave para saber cual id y traer la informacion de ese id 
    console.log('Listo ' + req.query.id)
    try {
        //findByPk hace query con el id y trae datos 
        //const hotel = await Hotel.findByPk(req.query.id);
        const gerente = await Gerente.findByPk(gerente.id_grt);

        const gerentes = await Gerente.findAll({
            attributes: ['id_grt', 'nombre', 'ap_paterno', 'ap_materno', 'telefono']
        });

        const errores = [];
        res.render("nuevoGerente", {
            pagina: "Añadir Gerentes",
            errores,
                id_grt: gerente.id_grt,
                nombre: gerente.nombre,
                ap_paterno: gerente.ap_paterno,
                ap_materno: gerente.ap_materno
            
        });

    } catch (error) {
        console.log(error);
    }
}
export {
    paginaGerentes,
    paginaNuevoGerente,
    eliminarGerente,
    modificarGerentes,
    paginaRegistrarHoteles
}