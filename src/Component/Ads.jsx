const Ads = ()=>{
    return(
        <div className="p-10 flex justify-around items-center flex lg:flex-row flex-col gap-12">
            
            <div className="bg-[#F9EBE7] flex lg:flex-row md:flex-row flex-col justify-between items-center gap-12 rounded-xl pl-12 pt-8 lg:w-[49%]">
                <div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-[new-romans] text-orange-500">Upto 25% Off</h2>
                        <h1 className="text-3xl font-medium">Luxa Dark Chocolate</h1>
                        <p className="text-gray-600">Very tasty & creamy vanilla flavour</p>
                        <button className="bg-black text-white px-6 py-2 rounded-lg">SHOW NOW</button>
                    </div>
                </div>
                <div>
                    <img src="./image/ad-image-3.png" alt="" />
                </div>
            </div>

            <div className="bg-[#E6F3FA] flex lg:flex-row md:flex-row flex-col justify-between items-center rounded-xl pl-12 pt-8 lg:w-[49%] w-[96%]">
                <div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-[new-romans] text-orange-500">Upto 25% Off</h2>
                        <h1 className="text-3xl font-medium">Creamy Muffins</h1>
                        <p className="text-gray-600">Very tasty & creamy vanilla flavour</p>
                        <button className="bg-black text-white px-6 py-2 rounded-lg">SHOW NOW</button>
                    </div>
                </div>
                <div>
                    <img src="./image/ad-image-4.png" alt="" className="w-[270px]"/>
                </div>
            </div>

        </div>
    )
}
export default Ads