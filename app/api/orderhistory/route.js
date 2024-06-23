import dbConnect from '../../utils/db';
import { NextResponse } from 'next/server';
import User from '../../models/User';
import Cart from '../../models/cart';
import Order from '../../models/order';
import OrderDetail from '../../models/order-detail';
import ProductItem from '../../models/product-item';
import Product from '../../models/product';
import Color from '../../models/color';
import Size from '../../models/size';

export async function GET(req, context) {
    try {
        await dbConnect();

        const url = new URL(req.url);
        const email = url.searchParams.get('email');

        const user = await User.findOne({ email: email });
        const userId = user._id;

        const orderIDs = await Order.find({ user_id: userId })
            .populate({ path: 'user_id', model: User })
            .populate({ path: 'detail_id', model: OrderDetail });

        const cartItems = await OrderDetail.find({
            order_id: orderIDs,
        }).populate({
            path: 'product_item_id',
            model: ProductItem,
            populate: [
                { path: 'product_id', model: Product },
                { path: 'color_id', model: Color },
                { path: 'size_id', model: Size },
            ],
        });

        console.log('cartItems', cartItems);
        if (orderIDs.length > 0) {
            const order_Ids = orderIDs.map((order) => order._id);
            console.log('Order IDs:', order_Ids);
            return NextResponse.json(cartItems, { status: 200 });
        } else {
            console.error('User not found.');
            return NextResponse.error(new Error('User not found.'), {
                status: 404,
            });
        }
    } catch (error) {
        console.error('Error in API:', error);
        return NextResponse.error(error, { status: 500 });
    }
}
