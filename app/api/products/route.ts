import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/product";
import { NextResponse } from "next/server";

export async function GET() {
  await initMongoose();
  const products = await Product.find();
  return NextResponse.json(products);
}
