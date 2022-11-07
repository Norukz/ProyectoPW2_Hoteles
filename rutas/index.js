import express from 'express'
import { paginaInicio } from '../controller/paginasControlador.js'
import {
  eliminarGerente,
  paginaGerentes,
  paginaNuevoGerente,
  modificarGerentes,
  paginaRegistrarGerente,
} from '../controller/gerentes.js'
import {
  paginaHoteles,
  paginaNuevoHotel,
  modificarHoteles,
  eliminarHoteles,
  paginaRegistrarHotel,
} from '../controller/hoteles.js'
import {
  eliminarHabitaciones,
  paginaHabitaciones,
  paginaNuevaHabitacion,
  registrarHabitacion,
  modificarHabitaciones,
} from '../controller/habitaciones.js'

const rutas = express.Router()
rutas.get('/', paginaInicio)
//GERENTES
rutas.get('/gerentes', paginaGerentes)
rutas.get('/eliminarGerente', eliminarGerente)
rutas.get('/modificarGerente', modificarGerentes)
rutas.get('/nuevoGerente', paginaRegistrarGerente)
rutas.post('/nuevoGerente', paginaNuevoGerente)

//HOTELES
rutas.get('/hoteles', paginaHoteles)
rutas.get('/eliminarHoteles', eliminarHoteles)
rutas.get('/modificarHoteles', modificarHoteles)
rutas.post('/modificarHoteles', modificarHoteles)
rutas.post('/nuevoHotel', paginaNuevoHotel)
rutas.get('/nuevoHotel', paginaRegistrarHotel)

//HABITACIONES
rutas.get('/habitaciones', paginaHabitaciones)
rutas.get('/eliminarHabitaciones', eliminarHabitaciones)
rutas.get('/modificarHabitacion', modificarHabitaciones)
rutas.post('/modificarHabitacion', modificarHabitaciones)
rutas.get('/registrarHabitacion', paginaNuevaHabitacion)
rutas.post('/registrarHabitacion', registrarHabitacion)

export default rutas
