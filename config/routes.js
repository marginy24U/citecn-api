let express = require('express');
let router  = express.Router();

/******************** Controllers ********************/
const ClientesController  = require('../src/controllers/ClientesController')
const ProductosController  = require('../src/controllers/ProductosController')
const UsuariosController  = require('../src/controllers/UsuariosController')
const CategoriasController  = require('../src/controllers/CategoriasController')
const VentasController  = require('../src/controllers/VentasController')
const LibroController  = require('../src/controllers/LibroController')
const MateriaPrimaController  = require('../src/controllers/MateriaPrimaController')
const ProveedoresController  = require('../src/controllers/ProveedoresController')


/******************** middleware ********************/
// const Middleware     = require('../src/middleware')


/******************** Routes ********************/

router.get('/', function(req, res) {
    res.send('Estás conectado');
});

// Clientes
router.get('/clientes', ClientesController.index);
router.get('/clientes/all', ClientesController.all);
router.get('/clientes/:id', ClientesController.byId);
router.post('/clientes/', ClientesController.add);
router.put('/clientes/:id', ClientesController.update);
// "Eliminacion"
router.put('/clientes/del/:id', ClientesController.delete);

// Proveedores
router.get('/proveedores', ProveedoresController.index);
router.get('/proveedores/all', ProveedoresController.all);
router.get('/proveedores/:id', ProveedoresController.byId);
router.post('/proveedores/', ProveedoresController.add);
router.put('/proveedores/:id', ProveedoresController.update);
// "Eliminacion"
router.put('/proveedores/del/:id', ProveedoresController.delete);

// Productos
router.get('/productos', ProductosController.index);
router.get('/productos/all', ProductosController.all);
router.get('/productos/existance', ProductosController.existance);
router.get('/productos/:id', ProductosController.byId);
router.post('/productos/', ProductosController.add);
router.put('/productos/:id', ProductosController.update);
// "Eliminacion"
router.put('/productos/del/:id', ProductosController.delete);

// Usuarios
router.get('/usuarios', UsuariosController.index);
router.get('/usuarios/all', UsuariosController.all);
router.get('/usuarios/:id', UsuariosController.byId);
router.get('/usuarios/:nick/:pass', UsuariosController.Auth);
router.post('/usuarios/', UsuariosController.add);
router.put('/usuarios/:id', UsuariosController.update);
router.put('/usuarios/psd/:id', UsuariosController.updatePass);
// "Eliminacion"
router.put('/usuarios/del/:id', UsuariosController.delete);

// Libro
router.get('/libro', LibroController.index);
router.get('/libro/all', LibroController.all);
router.get('/libro/:id', LibroController.byId);
router.post('/libro/', LibroController.add);
router.put('/libro/:id', LibroController.update);
// "Eliminacion" 
router.put('/libro/del/:id', LibroController.delete);

// Materia Prima
router.get('/materia', MateriaPrimaController.index);
router.get('/materia/all', MateriaPrimaController.all);
router.get('/materia/:id', MateriaPrimaController.byId);
router.post('/materia/', MateriaPrimaController.add);
router.put('/materia/:id', MateriaPrimaController.update);
// "Eliminacion"
router.put('/materia/del/:id', MateriaPrimaController.delete);

// Categorias
router.get('/categorias', CategoriasController.index);
router.get('/categorias/all', CategoriasController.all);
router.get('/categorias/:id', CategoriasController.byId);
router.post('/categorias/', CategoriasController.add);
router.put('/categorias/:id', CategoriasController.update);
// "Eliminacion"
router.put('/categorias/del/:id', CategoriasController.delete);

// Ventas 
router.get('/ventas', VentasController.index);
router.get('/ventas/all', VentasController.all);
router.get('/ventas/today', VentasController.today);
router.get('/ventas/:fec1/:fec2', VentasController.byFec);
router.post('/ventas/', VentasController.add);

 
module.exports = router;