import dbConnect from "../../../utils/db";
import Product from "../../../models/product";
// Thư viện tìm kiếm
import Fuse from "fuse.js";

const { NextResponse } = require("next/server");

export async function GET(req, res, context) {
  // try {
  //     const url = new URL(req.url);
  //     let input = url.searchParams.get("query");

  //     await dbConnect();

  //     const products = await Product.find();

  //     return NextResponse.json(products, { status: 200 });
  // } catch (error) {
  //     return NextResponse.json({ error: error.message }, { status: 500 });
  // }
  const url = new URL(req.url);
  let query = url.searchParams.get("query"); // Lấy tham số truy vấn từ URL

  try {
    await dbConnect(); // Kết nối đến cơ sở dữ liệu

    const products = await Product.find().populate("product_item_id"); // Lấy tất cả sản phẩm từ cơ sở dữ liệu

    if (!query) {
      return NextResponse.json(products, { status: 200 }); // Nếu không có tham số truy vấn, trả về tất cả sản phẩm
    }

    const options = {
      keys: ["name"], // Chỉ định cột nào được sử dụng để tìm kiếm
      threshold: 0.5, // Độ chính xác của kết quả tìm kiếm
      location: 0, // Vị trí bắt đầu tìm kiếm
      distance: 100, // Khoảng cách tối đa giữa hai ký tự trong kết quả tìm kiếm
    };

    const fuse = new Fuse(products, options); // Tạo đối tượng Fuse với cấu hình tùy chỉnh
    const results = fuse.search(query); // Thực hiện tìm kiếm gần đúng

    return NextResponse.json(
      results.map((result) => result.item),
      { status: 200 }
    ); // Trả về kết quả tìm kiếm
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 }); // Xử lý lỗi
  }
}
