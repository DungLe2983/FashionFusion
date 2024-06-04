const ProductImages = (image) => {
    return (
        <div className='md:h-[30rem] md:w-[30rem] '>
            <img
                className='h-full w-full object-cover'
                src={image.image}
                alt='img'
            />
        </div>
    );
};

export default ProductImages;
