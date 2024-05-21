import User from "@/app/models/User";
import dbConnect from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        await dbConnect(); // Kết nối cơ sở dữ liệu

        const email = params.userEmail; // Lấy email từ tham số URL

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { error: "User not found." },
                { status: 404 }
            );
        }

        // Trả về mảng địa chỉ của người dùng
        return NextResponse.json(user.address, { status: 200 });
    } catch (error) {
        console.error("Error fetching addresses:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req, { params }) {
    try {
        await dbConnect();

        const email = params.userEmail;
        const data = await req.json();

        if (!data || typeof data.address !== "string") {
            return NextResponse.json(
                { error: "Invalid address provided." },
                { status: 400 }
            );
        }

        if (!data) {
            return NextResponse.json(
                { error: "No address provided." },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            return NextResponse.json(
                { error: "User not found." },
                { status: 404 }
            );
        }

        user.address.push(data.address);

        await user.save();

        return NextResponse.json(user.address);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    try {
        await dbConnect(); // Kết nối cơ sở dữ liệu

        const email = params.userEmail; // Nhận email từ tham số URL
        const data = await req.json(); // Nhận địa chỉ cần xóa từ body

        if (typeof data.address !== "string") {
            return NextResponse.json(
                { error: "Address to delete must be a string." },
                { status: 400 }
            );
        }

        // Tìm người dùng theo email
        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { error: "User not found." },
                { status: 404 }
            );
        }

        const index = user.address.indexOf(data.address); // Tìm vị trí của địa chỉ trong mảng

        if (index === -1) {
            // Nếu địa chỉ không tồn tại trong mảng
            return NextResponse.json(
                { error: "Address not found." },
                { status: 404 }
            );
        }

        user.address.splice(index, 1); // Xóa địa chỉ tại vị trí index

        // Lưu thay đổi
        await user.save();

        return NextResponse.json(
            { message: "Address deleted successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting address:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(req, { params }) {
    try {
        await dbConnect(); // Kết nối cơ sở dữ liệu

        const email = params.userEmail; // Lấy email từ tham số URL
        const data = await req.json(); // Đọc dữ liệu từ yêu cầu PATCH

        const { oldAddress, newAddress } = data; // Địa chỉ cũ và mới

        if (typeof oldAddress !== "string" || typeof newAddress !== "string") {
            return NextResponse.json(
                { error: "Addresses must be strings." },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { error: "User not found." },
                { status: 404 }
            );
        }

        const index = user.address.indexOf(oldAddress); // Tìm vị trí của địa chỉ cũ

        if (index === -1) {
            // Nếu địa chỉ cũ không tồn tại
            return NextResponse.json(
                { error: "Old address not found." },
                { status: 404 }
            );
        }

        // Cập nhật địa chỉ mới tại vị trí của địa chỉ cũ
        user.address[index] = newAddress;

        await user.save(); // Lưu thay đổi

        return NextResponse.json(
            { message: "Address updated successfully." },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
