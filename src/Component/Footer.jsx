const Footer = () =>{
    return(
        <div className="lg:p-12 p-8">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
                
                <div className="space-y-8">
                    <a href="#">
                        <img src="./image/logo.png" alt="logo" />
                    </a>
                    <p className="text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero!
                    </p>
                </div>
                <div>
                    <h1 className="font-medium text-2xl mb-4">Ultras</h1>
                    <div className="flex flex-col gap-2">
                        <a href="#">
                            <p className="text-gray-500">About us</p>
                        </a>
                        <a href="#">
                            <p className="text-gray-500">Conditions</p>
                        </a>
                        <a href="#">
                            <p className="text-gray-500">Our Journals</p>
                        </a>
                        <a href="#">
                            <p className="text-gray-500">Careers</p>
                        </a>
                        <a href="#">
                            <p className="text-gray-500">Affiliate Programme</p>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-medium text-2xl mb-4">Customer Service</h1>
                    <a href="#">
                        <p className="text-gray-500">FAQ</p>
                    </a>
                    <a href="#">
                        <p className="text-gray-500">Contact</p>
                    </a>
                    <a href="#">
                        <p className="text-gray-500">Privacy Policy</p>
                    </a>
                    <a href="#">
                        <p className="text-gray-500">Returns & Refunds</p>
                    </a>
                    <a href="#">
                        <p className="text-gray-500">Cookie Guidelines</p>
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-medium text-2xl mb-4">Subscribe Us</h1>
                    <p className="text-gray-500">
                        Subscribe to our newsletter to get updates about our grand offers.
                    </p>
                    <form action="" className="mt-4">
                        <input type="email"  required name="emai" placeholder="Email Address" className="p-2 border rounded-md outline-none"/>
                        <button className="lg:mt-0 mt-2 bg-black text-white p-2 rounded-md">Subscribe</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Footer