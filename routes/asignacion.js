const {Router} = require('express');
const { getAsignacion, postAsignacion, putAsignacion, deleteAsignacion } = require('../controllers/asignacion');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esMaestroRole } = require('../middlewares/validar-roles');

const router = Router();

router.get('/cursos/:id', [
    validarJWT
], getAsignacion);

router.post('/agregar', [
    validarJWT,
], postAsignacion);

router.put('/editar/:id', [
    validarJWT,
    esMaestroRole
], putAsignacion);

router.delete('/eliminar/:id', [
    validarJWT,
    esMaestroRole
], deleteAsignacion);

module.exports = router