import User from "@/app/models/User";
import dbConnect from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(req, context) {
    try {
        await dbConnect();

        const email = context.params.userEmail;

        const user = await User.findOne({ email: email });

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req, { params }) {
    try {
        await dbConnect();

        const email = params.userEmail; // Lấy email từ params
        const data = await req.json(); // Lấy dữ liệu từ yêu cầu PUT

        const user = await User.findOneAndUpdate(
            { email: email },
            {
                $set: {
                    name: data.name,
                    phoneNumber: data.phoneNumber,
                    sex: data.sex,
                    birthday: data.birthday,
                },
            },
            { new: true } // Trả về tài liệu mới sau khi cập nhật
        );

        if (!user) {
            return NextResponse.json(
                { error: "User not found", email: email },
                { status: 404 }
            );
        }

        return NextResponse.json(user); // Trả về dữ liệu người dùng đã được cập nhật
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(req, { params }) {
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
