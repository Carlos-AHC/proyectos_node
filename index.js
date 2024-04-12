const exp = require('express');
const app = exp();

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())

const nodemailer = require("nodemailer");


app.get('/productos',async(req,res)=>{
    let listarproductos=await modelProducto.find();
    if(listarproductos)
        res.render('assets/listar_producto',
    {
    "listarProductos":listarproductos})
    else
        res.status(404).json({error:"no se encontraron productos"})
    
})

app.get('/productos/:ref',async(req,res)=>{
    let productoEncontrado=await modelProducto.findOne({referencia:req.params.ref});
    if(productoEncontrado)
        res.status(200).json(productoEncontrado)
    else
        res.status(400).json({"error":"producto no encontrado"})
    
})

app.post('/productos',async(req,res)=>{
    const nuevoProducto={
        referencia:req.body.referenciaProducto,
        nombre:req.body.nombreProducto,
        descripcion:req.body.descripcionProducto,
        precio:req.body.precioProducto,
        stock:req.body.stockProducto,
        imagen:req.body.imagenProducto,
        habilitado:true
    }
    let insercion=await modelProducto.create(nuevoProducto);
    if(insercion)
        res.status(200).json({"mensaje":"registro exitoso"})
    else
        res.status(404).json({"mensaje":"se presentó un error"})
})


app.put('/productos:ref',async(req,res)=>{
    const productoEditado={
        referencia:req.params.ref,
        nombre:req.body.nombreProducto,
        descripcion:req.body.descripcionProducto,
        precio:req.body.precioProducto,
        stock:req.body.stockProducto,
        imagen:req.body.imagenProducto,
        habilitado:true
    }
    let actualizacion=await modelProducto.findOneAndUpdate({referencia:req.params.ref},productoEditado)
    if(actualizacion)
        res.status(200).json({"mensaje":"actualizacion exitoso"})
    else
        res.status(404).json({"mensaje":"se presentó un error"})
})

app.delete('/productos/:id',async(req,res)=>{
    console.log(req.params.id,req.body.referenciaProducto)
    let eliminacion=await modelProducto.findOneAndDelete({referencia:req.params.id})
    if(eliminacion)
        res.status(200).json({"mensaje":"eliminacion exitosa, gracias, vuelve pronto"})
    else
        res.status(404).json({"mensaje":"se presentó un error"})
})

app.get('/enviaremail', async(req,res)=>{

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "andresmao606@gmail.com ",
          pass: `wvjsiudvptmvfqwl`,
        },
      })
    const mailOptions = {
        from: "andresmao606@gmail.com",
        to: "andresmao606@gmail.com",
        subject: "subject",
        text: "hola",
      };
    
      await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Correo enviado "+ info.response);
        }
      });
});
// Esta función se encarga de enviar un correo electrónico por medio de nodemailer
// recibe como parámetros el correo electrónico del usuario, el asunto y el texto del correo.
;

app.listen(process.env.PORT, ( )=>{
    console.log("servidor en linea");
} );