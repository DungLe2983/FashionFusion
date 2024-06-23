import { NextResponse } from "next/server";
import CartItem from "../../models/cart-item";
import ProductItem from "../../models/product-item";
import Cart from "../../models/cart";
import dbConnect from "../../utils/db";

async function createCartItem(cartId, productItemId, quantity) {
    const newCartItem = new CartItem({
        cart_id: cartId,
        product_item_id: productItemId,
        item_quantity: quantity,
    });
    await newCartItem.save();
    return newCartItem;
}

async function updateProductItemQuantity(productItemId, quantity) {
    await ProductItem.updateOne(
        { _id: productItemId },
        { $set: { quantity: quantity } }
    );
}

async function addCartItemId(cartId, cartItemId) {
    const cart = await Cart.findById(cartId);

    if (!cart) return;

    await Cart.updateOne(
        { _id: cartId },
        { $push: { cart_item_id: cartItemId } }
    );
}

async function updateCartItemQuantity(cartItemId, quantity) {
    await CartItem.updateOne(
        { _id: cartItemId },
        { $set: { item_quantity: quantity } }
    );
}

export async function POST(req, context) {
    try {
        await dbConnect();
        const data = await req.json();

        if (!data.cart_id || !data.product_item_id || !data.item_quantity) {
            return NextResponse.json(
                { error: "Thiếu thông tin cần thiết" },
                { status: 400 }
            );
        }

        // Tìm kiếm item trong giỏ hàng dựa trên product_item_id
        const existingCartItem = await CartItem.findOne({
            product_item_id: data.product_item_id,
            cart_id: data.cart_id,
        });

        let updatedQuantity;
        if (existingCartItem) {
            // Nếu item đã tồn tại, cập nhật số lượng
            updatedQuantity =
                existingCartItem.item_quantity + data.item_quantity;

            // Cập nhật số lượng
            await updateCartItemQuantity(existingCartItem._id, updatedQuantity);
        } else {
            // Nếu item chưa tồn tại, tạo mới với số lượng ban đầu là item_quantity từ request
            updatedQuantity = data.item_quantity;
            const newCartItem = await createCartItem(
                data.cart_id,
                data.product_item_id,
                data.item_quantity
            );
            await addCartItemId(data.cart_id, newCartItem._id);
        }

        // Cập nhật số lượng còn lại trong cửa hàng
        // const productItem = await ProductItem.findById(data.product_item_id);
        // if (productItem) {
        //     const newProductQuantity =
        //         productItem.quantity - data.item_quantity;
        //     await updateProductItemQuantity(
        //         data.product_item_id,
        //         newProductQuantity
        //     );
        // }

        return NextResponse.json("Thành công", { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req, res) {
    try {
        const data = await req.json();

        if (!data || !data.id) {
            return NextResponse.json(
                { error: "Thiếu thông tin cần thiết" },
                { status: 400 }
            );
        }

        await dbConnect();

        const item = await CartItem.findByIdAndDelete(data.id);

        if (!item) {
            return NextResponse.json(
                { error: "Không tìm thấy sản phẩm cần xóa" },
                { status: 404 }
            );
        }

        const cart = await Cart.findById(item.cart_id);

        if (!cart) {
            return NextResponse.json(
                { error: "Cart not found." },
                { status: 404 }
            );
        }

        const index = cart.cart_item_id.indexOf(item._id);

        if (index === -1) {
            return NextResponse.json(
                { error: "Cart Item not found." },
                { status: 404 }
            );
        }

        cart.cart_item_id.splice(index, 1); // Xóa tại vị trí index

        // Lưu thay đổi
        await cart.save();

        return NextResponse.json(
            { message: "Xóa thành công!", item },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req, res) {
    try {
        const data = await req.json();

        if (!data || !data.newQuantity || !data.id) {
            return NextResponse.json(
                { error: "Thiếu thông tin cần thiết" },
                { status: 400 }
            );
        }

        await dbConnect();

        const item = await CartItem.findByIdAndUpdate(data.id, {
            item_quantity: data.newQuantity,
        });

        return NextResponse.json(
            { message: "Cập nhật thành công!" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(req, res) {
    try {
        await dbConnect();

        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        const item = await CartItem.findById(id).populate("product_item_id");

        return NextResponse.json(item, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
