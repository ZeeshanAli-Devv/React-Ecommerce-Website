const Home = () =>{
    return(
        <div className="grid lg:grid-cols-2 lg:p-12 p-4 lg:space-y-0 space-y-12" id="home">
            
            <div className="bg-blue-50 p-6 lg:flex md:flex justify-between items-center rounded-sm">
                <div className="space-y-4">
                    <h2 className="text-3xl text-orange-400 font-[new-romans]">100% Natural</h2>
                    <h1 className="text-5xl font-semibold">Fresh Smoothie <br /> Summer Juice</h1>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex dolorem possimus.
                    </p>
                    <button className="bg-black px-6 py-2.5 text-white rounded border-2 border-black hover:bg-transparent hover:text-black">
                        SHOP NOW
                    </button>
                </div>

                <div>
                    <img src="./image/product-thumb-1.png" alt="bg-image" className="w-[480px]" />
                </div>
            </div>

            <div className="lg:px-6 flex flex-col gap-12">
                
                <div className="bg-[#EEF5E5] lg:flex md:flex justify-between items-center rounded-sm pl-12 pt-8">
                    <div>
                        <div className="space-y-2">
                            <h2 className="text-4xl font-[new-romans]">20% off</h2>
                            <div className="flex  justify-start items-center gap-2">
                                <hr className="w-24 border-1 border-black"/>
                                <p className="font-[new-romans] text-lg">SALE</p>
                            </div>
                            <h1 className="text-3xl font-medium">Fruits & Vegetables</h1>
                            <div className="flex justify-start items-center gap-2 pt-2">
                                <h2 className="text-gray-400">Shop Collection</h2>
                                <i className="ri-arrow-right-line text-gray-500 mt-0.5"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./image/ad-image-1.png" alt="" />
                    </div>
                </div>

                <div className="bg-[#F9EBE7] lg:flex md:flex justify-between items-center rounded-sm pl-12 pt-8">
                    <div>
                        <div className="space-y-2">
                            <h2 className="text-4xl font-[new-romans]">15% off</h2>
                            <div className="flex  justify-start items-center gap-2">
                                <hr className="w-24 border-1 border-black"/>
                                <p className="font-[new-romans] text-lg">SALE</p>
                            </div>
                            <h1 className="text-3xl font-medium">Baked Products</h1>
                            <div className="flex justify-start items-center gap-2 pt-2">
                                <h2 className="text-gray-400">Shop Collection</h2>
                                <i className="ri-arrow-right-line text-gray-500 mt-0.5"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./image/ad-image-2.png" alt="" />
                    </div>
                </div>
               
            </div>

        </div>
    )
}

export default Home