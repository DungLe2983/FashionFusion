import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";

const CustomizeProducts = (pros) => {
    //Customize
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    let displayedSizes = [];
    const [displayedColors, setDisplayedColors] = useState([]);
    const [items, setItems] = useState([]);

    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState(1);

    // get cartID
    const session = useSession();
    const userEmail = session.data?.session.user.email;
    const [cartId, setCartId] = useState("");

    const getCart = async (email) => {
        try {
            const res = await fetch(`/api/users/${email}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                const user = await res.json();
                const userId = user._id;

                if (userId) {
                    try {
                        const response = await fetch("/api/cart", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ user_id: userId }),
                        });

                        if (response.ok) {
                            const cart = await response.json();
                            if (cart) {
                                setCartId(cart._id);
                            }
                        } else {
                            console.error(
                                "Error fetching cart:",
                                response.statusText
                            );
                        }
                    } catch (error) {
                        console.error("Error:", error);
                    }
                } else {
                    console.error("User not found or response is empty.");
                }
            } else {
                console.error("Error fetching user:", res.statusText);
            }
        } catch (error) {
            console.error("Error in fetch:", error);
        }
    };

    //fetch product item data
    const fetchItems = async () => {
        let combinedItems = [];

        try {
            for (const i of pros.data) {
                const response = await fetch(
                    `/api/products/${pros.id}/${i._id}/`,
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    }
                );

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const itemData = await response.json();
                combinedItems.push(itemData); // Thêm dữ liệu của từng item vào mảng kết hợp
            }

            // Cập nhật trạng thái với tất cả
            setItems(combinedItems);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    useEffect(() => {
        fetchItems();
        if (userEmail) {
            getCart(userEmail);
        }
    }, [userEmail]);

    const handleSizeClick = (sizeDescription, sizeId) => {
        setSelectedSize(sizeDescription);
        setSelectedColor(null);

        // Lọc items dựa trên kích thước mới
        const filteredItems = items.filter(
            (item) => item.size_id._id === sizeId
        );

        // Cập nhật displayedColors dựa trên các màu sắc của items mới
        const newDisplayedColors = filteredItems.reduce((acc, item) => {
            // Kiểm tra xem colorId đã tồn tại trong acc chưa
            const existingIndex = acc.findIndex(
                (obj) => obj.colorId === item.color_id._id
            );
            if (existingIndex === -1) {
                // Nếu chưa tồn tại, thêm đối tượng mới vào acc
                acc.push({ colorId: item.color_id._id, sizeId: sizeId });
            }
            return acc;
        }, []);

        setDisplayedColors(newDisplayedColors);
    };

    const handleColorClick = (color, id, size_name) => {
        setSelectedColor(color);
        const itemStock = items.filter((item) => item._id == id);
        setQuantity(1);
        setStock(itemStock[0].quantity);
        pros.onPriceChange(itemStock[0].price);
    };

    // Render sizes
    const renderedSizes = items.map((size) => {
        if (!displayedSizes.includes(size.size_id._id)) {
            displayedSizes.push(size.size_id._id);
            return (
                <button
                    key={size.size_id._id}
                    className={`px-10 py-2 ${
                        selectedSize === size.size_id.description
                            ? "bg-primary text-white"
                            : "bg-slate-200"
                    } text-center rounded-xl`}
                    onClick={() =>
                        handleSizeClick(
                            size.size_id.description,
                            size.size_id._id
                        )
                    }
                >
                    {size.size_id.name}
                </button>
            );
        }
        return null;
    });

    // Render colors
    const renderedColors = displayedColors.map((colorSizeId) => {
        const colorItem = items.find(
            (item) =>
                item.color_id._id === colorSizeId.colorId &&
                item.size_id._id === colorSizeId.sizeId
        );

        if (colorItem) {
            return (
                <button
                    key={colorItem.color_id._id}
                    className={`px-10 py-2 ${
                        selectedColor === colorItem.color_id.description
                            ? "bg-primary text-white"
                            : "bg-slate-200"
                    } text-center rounded-xl`}
                    onClick={() =>
                        handleColorClick(
                            colorItem.color_id.description,
                            colorItem._id,
                            colorItem.size_id.name
                        )
                    }
                >
                    {colorItem.color_id.name}
                </button>
            );
        }
        return null;
    });

    // Select quantity
    const handleQuantity = function (type) {
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }

        if (type === "i" && quantity < stock) {
            setQuantity((prev) => prev + 1);
        }
    };

    // Add to cart click
    const handleAddClick = async () => {
        const selectedItem = items.find(
            (item) =>
                item.size_id.description === selectedSize &&
                item.color_id.description === selectedColor
        );

        if (selectedItem) {
            console.log(
                "Selected Item ID:",
                selectedItem._id,
                ", Selected Quantity:",
                quantity,
                ", Cart_id:",
                cartId
            );
            try {
                const res = await fetch("/api/cart-item", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        cart_id: cartId,
                        product_item_id: selectedItem._id,
                        item_quantity: quantity,
                    }),
                });

                if (res.ok) {
                    const respone = await res.json();
                    console.log("respone:", respone);
                } else {
                    console.error("Error fetching cart:", res.statusText);
                }
            } catch (error) {
                console.error("Error in fetch:", error);
            }
        } else {
            console.log("No item selected");
        }
    };

    return (
        <>
            {items && (
                <>
                    {/* Customize */}
                    <>
                        <p className="font-semibold text-sm mt-6">
                            Kích thước:{" "}
                            <span className="text-gray-500 ">
                                {selectedSize &&
                                    items.find(
                                        (s) =>
                                            s.size_id.description ===
                                            selectedSize
                                    ).size_id.description}
                            </span>
                        </p>
                        <div className="mt-4 flex gap-2 text-sm flex-wrap ">
                            {renderedSizes}
                        </div>

                        <p className="font-semibold text-sm mt-6">
                            Màu sắc:
                            <span className="text-gray-500 ml-2">
                                {selectedColor &&
                                    items.find(
                                        (s) =>
                                            s.color_id.description ===
                                            selectedColor
                                    ).color_id.description}
                            </span>
                        </p>
                        <div className="mt-4 flex gap-2 text-sm flex-wrap ">
                            {renderedColors}
                        </div>
                    </>

                    {/* Confirm */}
                    <>
                        <p className="mt-6 font-semibold text-sm">Số lượng :</p>
                        <div className="flex gap-6"></div>
                        <div className="flex flex-row items-center my-2">
                            <button
                                className="inline-flex items-center justify-center border-r-0 text-sm font-medium h-8 w-8 text-gray-500 bg-white border border-gray-300"
                                onClick={() => handleQuantity("d")}
                            >
                                -
                            </button>
                            <input
                                id="first_product"
                                value={quantity}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block h-8 w-10  text-center outline-none"
                                required
                            />
                            <button
                                className="inline-flex items-center justify-center h-8 w-8 border-l-0 text-sm font-medium text-gray-500 bg-white border border-gray-300"
                                onClick={() => handleQuantity("i")}
                            >
                                +
                            </button>
                            <p className="mx-5 text-sm">
                                Còn lại{" "}
                                <span className=" text-orange-500 font-bold">
                                    {stock}
                                </span>{" "}
                                sản phẩm
                            </p>
                        </div>

                        <button
                            className="bg-primary rounded py-4 px-8 text-white mt-6 flex gap-2 text-sm"
                            onClick={handleAddClick}
                        >
                            <i className="ri-shopping-cart-2-fill "></i>
                            <span>Add to Cart</span>
                        </button>
                    </>
                </>
            )}
        </>
    );
};

export default CustomizeProducts;
