import { useState } from "react";

const Add = () => {
    const [quantity, setQuantity] = useState(1);

    const stock = 5;

    const handleQuantity = (type: "i" | "d") => {
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }

        if (type === "i" && quantity < stock) {
            setQuantity((prev) => prev + 1);
        }
    };

    return (
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
            </div>

            <button className="bg-primary rounded py-4 px-8 text-white mt-6 flex gap-2 text-sm">
                <i className="ri-shopping-cart-2-fill "></i>
                <span>Add to Cart</span>
            </button>
        </>
    );
};

export default Add;
