const Shipping = () => {
    return(
        <div className="p-12">
           <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
                <div className="flex gap-4">
                    <i className="ri-shopping-cart-line text-2xl font-medium"></i>
                    <div>
                        <h2 className="font-medium text-lg">Free delivery</h2>
                        <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <i className="ri-store-2-line text-2xl font-medium"></i>
                    <div>
                        <h2 className="font-medium text-lg">Free delivery</h2>
                        <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <i className="ri-shield-keyhole-line text-2xl font-medium"></i>
                    <div>
                        <h2 className="font-medium text-lg">100% secure payment</h2>
                        <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <i className="ri-gift-line text-2xl font-medium"></i>
                    <div>
                        <h2 className="font-medium text-lg">Quality guarantee</h2>
                        <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Shipping