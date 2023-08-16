import Venta from "@/models/venta";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const { vasoIce } = await request.json();
	const nuevaVenta = new Venta({ vasoIce });
	await nuevaVenta.save();
	return NextResponse.json(nuevaVenta);
}

export async function GET() {
	const todasLasVentas = await Venta.find();
	return NextResponse.json(todasLasVentas);
}
