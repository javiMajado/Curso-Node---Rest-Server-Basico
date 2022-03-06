const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const {q, nombre, apellido} = req.query

    res.status(403).json({
        ok: true,
         msg:'get API - controlador',
         q: q,
         nombre: nombre,
         apellido: apellido
        });
}

const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.status(403).json({
        ok: true, 
        msg:'put API - controlador',
        id: id
    });
}

const usuariosPost = (req, res = response) => {
    const body = req.body;
    console.log(body);
    

    res.status(200).json({
        ok: true,
        msg:'post API - controlador',
        body: body
    });
}

const usuariosDelete = (req, res = response) => {
    res.status(403).json({ok: true, msg:'delete API - controlador'});
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}