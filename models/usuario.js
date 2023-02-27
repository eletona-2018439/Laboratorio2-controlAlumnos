const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    }, 
    rol: {
        type: String,
        required: true,
        enum: ['ROL_MAESTRO', 'ROL_ALUMNO'],
        default: 'ROL_ALUMNO'
    }, 
    cursos: [
        { type: Schema.Types.ObjectId, ref: 'curso' 
    }],
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Usuario', UsuarioSchema)