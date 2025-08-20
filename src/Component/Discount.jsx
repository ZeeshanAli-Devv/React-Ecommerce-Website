const Discount = ()=>{
    return(
        <div className="lg:p-12 p-8 lg:mt-12 ">
            <div class="bg-[#E6F3FB] lg:p-24 md:p-12 p-6 rounded-xl grid lg:grid-cols-2 md:grid-cols-2 gap-12" id="contact-us">
                
                <div className="space-y-6">
                    <h1 className="lg:text-6xl text-3xl font-semibold">
                        Get <span className="text-orange-400">25% Discount</span> on your first purchase
                    </h1>
                    <p className="text-gray-600 lg:text-lg  text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, 
                        sit massa posuere maecenas. At tellus ut nunc amet vel egestas.
                    </p>
                </div>

                <form action="" className="space-y-6">
                    <div className="flex flex-col gap-2.5">
                        <label htmlFor="">Name</label>
                        <input
                            className="p-3 rounded-lg" 
                            type="text" 
                            placeholder="Name"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <label htmlFor="">Email</label>
                        <input
                            className="p-3 rounded-lg" 
                            type="email" 
                            placeholder="abc@gmail.com"
                            required
                        />
                    </div>

                    <button className="bg-black text-white px-6 py-3 w-full rounded-md">Submit</button>
                    
                </form>

            </div>
        </div>
    )
}

export default Discount