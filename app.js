import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("Bienvenido a mi API");
});

app.listen(port,()=>{
    console.log(`\n\nServidor escuchando en: ${port} checa el server en http://localhost:${port}`);
});


export default app;