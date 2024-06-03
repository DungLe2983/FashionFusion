const ProductImages = (image) => {
    return (
        <div className="flex justify-start md:justify-center items-center mb-8 lg:mb-0">
            <img
                className="max-w-[screen] md:max-w-sm lg:max-w-xl h-[38rem] w-[38rem] object-cover"
                src={image.image}
                alt="img"
            />
        </div>
    );
};

export default ProductImages;
