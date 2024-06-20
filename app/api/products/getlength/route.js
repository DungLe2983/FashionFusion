import Product from '../../../models/product'
import dbConnect from '../../../utils/db';
import { NextResponse } from 'next/server';

export async function GET(req, context) {
    try {
        await dbConnect();

        const products = await Product.find().populate('product_item_id');

        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
