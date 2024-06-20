import { NextResponse } from "next/server";
import Order from "../../models/order";
import CartItem from "../../models/cart-item";
import Cart from "../../models/cart";
import OrderDetail from "../../models/order-detail";

export async function POST(req, res) {
    try {
        const data = await req.json();

        if (
            !data.userId ||
            !data.phone ||
            !data.address ||
            !data.total ||
            !data.cartId
        ) {
            return NextResponse.json(
                { error: "Thiết thông tin cần thiết" },
                { status: 400 }
            );
        }

        const newOrder = new Order({
            user_id: data.userId,
            detail_id: [],
            phone: data.phone,
            address: data.address,
            note: data.note,
            total: data.total,
            status: "0",
        });

        await newOrder.save();

        // Tìm tất cả các CartItem liên quan đến cartId
        const cartItems = await CartItem.find({
            cart_id: data.cartId,
        }).populate({
            path: "product_item_id",
        });

        // Tạo và lưu OrderDetail cho mỗi CartItem
        let orderDetailsCreated = [];
        for (let item of cartItems) {
            const price = item.product_item_id.price * item.item_quantity;
            const orderDetail = new OrderDetail({
                product_item_id: item.product_item_id._id,
                order_id: newOrder._id, // Sử dụng ID của Order mới tạo
                quantity: item.item_quantity,
                price: price,
            });

            const savedOrderDetail = await orderDetail.save();
            orderDetailsCreated.push(savedOrderDetail._id); // Lưu ID của OrderDetail
        }

        newOrder.detail_id = orderDetailsCreated;
        await newOrder.save();

        const deletedItems = await CartItem.deleteMany({
            cart_id: data.cartId,
        });

        const cart = await Cart.findById(data.cartId);
        cart.cart_item_id = [];
        await cart.save();

        return NextResponse.json(newOrder, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
