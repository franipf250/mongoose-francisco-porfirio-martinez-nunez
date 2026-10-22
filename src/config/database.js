import mongoose from mongoose;

export const startDB=async=> {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/tlp_mongo")
        console.log("Conectado correctamente")
    }catch(error){
        console.log("No se pudo realizar la conexion",error)
    }
    
};