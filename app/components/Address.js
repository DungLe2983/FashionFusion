import React from 'react';
import toast from 'react-hot-toast';

const Address = ({ address, onChange, email, onDeleteSuccess }) => {
    if (!address) {
        return null;
    }

    async function handleDelete(email, address) {
        console.log('address: ', address);

        try {
            const res = await fetch(`/api/users/${email}/addresses`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ address: address }),
            });

            if (res.ok) {
                toast.success('Xóa địa chỉ thành công!');
                onDeleteSuccess(address);
            } else {
                toast.error('Lỗi xóa');
            }
        } catch (err) {
            toast.error(err);
        }
    }

    return (
        <>
            <div className='flex justify-between mt-4'>
                <p className=' font-medium text-gray-600 text-md'>{address}</p>

                <div className='flex gap-2 text-sm text-primary '>
                    <button
                        className=' border-r-2 pr-2 hover:text-hoverColor'
                        onClick={onChange}
                    >
                        Cập nhật
                    </button>
                    <button
                        className=' hover:text-red-500'
                        onClick={() => {
                            handleDelete(email, address);
                        }}
                    >
                        Xóa
                    </button>
                </div>
            </div>
            <hr className='mt-4 mb-8' />
        </>
    );
};

export default Address;
