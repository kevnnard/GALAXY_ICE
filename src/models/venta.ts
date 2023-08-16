import mongoose from "mongoose";

const VentaSchema = new mongoose.Schema({
	vasoIce: [
		{
			sabor: { type: String, required: true },
			metodoPago: { type: String, required: true },
			cantidad: { type: Number, required: true },
			precio: { type: Number, required: true },
		},
	],
	fecha: { type: Date, required: true, default: Date.now() },
});

export default mongoose.model("Venta", VentaSchema);
