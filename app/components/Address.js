import React from "react";

const Address = ({ address, onDelete, onChange }) => {
    if (!address) {
        return null;
    }

    return (
        <>
            <div className="flex justify-between mt-4">
                <p className=" font-medium text-lg">{address}</p>

                <div className="flex gap-2 text-sm text-primary ">
                    <button
                        className=" border-r-2 border-gray-300 pr-2 hover:text-hoverColor"
                        onClick={onChange}
                    >
                        Cập nhật
                    </button>
                    <button onClick={onDelete}>Xóa</button>
                </div>
            </div>
            <hr className="mt-4 mb-8" />
        </>
    );
};

export default Address;
