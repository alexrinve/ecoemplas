const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")

//Registrar un nuevo usuario /api/usuario/registro

exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"2ahUKEwjp2eu68YH7AhWVnIQIHZjMANIQMygRegUIARD1AQp",
            url:"https://www.google.com.co/imgres?imgurl=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F3%2FAvatar-PNG-Download-Image.png&imgrefurl=https%3A%2F%2Fwww.pngarts.com%2Fes%2Fexplore%2F92210&tbnid=8C7lIS-1cIFLOM&vet=12ahUKEwjp2eu68YH7AhWVnIQIHZjMANIQMygRegUIARD1AQ..i&docid=bZ2L9g85CGXgNM&w=512&h=512&q=avatar%20png&hl=es-419&ved=2ahUKEwjp2eu68YH7AhWVnIQIHZjMANIQMygRegUIARD1AQ"
        }
    })

    res.status(201).json({
        success:true,
        user
    })
})