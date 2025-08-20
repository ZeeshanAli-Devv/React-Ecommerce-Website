const Blog = () =>{
    return(
        <div className="lg:p-12 md:p-12 p-4">
            <h1 className="text-4xl font-medium">Our Recent Blog</h1>
            <div className="grid lg:grid-cols-3 gap-12 mt-20" id="blog">
                
                <div className="border border-grey-200 rounded-sm p-8 shadow-lg">
                    <div className="space-y-4">
                        <img src="./image/post-thumb-1.jpg" alt="blog-1" className="rounded-md"/>
                        <h2 className="font-semibold lg:text-3xl md:text-3xl text-xl">
                            Top 10 casual look ideas to dress up your kids
                        </h2>
                        <p className="text-gray-500 lg:text-lg md:text-lg text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...
                        </p>
                    </div>
                </div>

               <div className="border border-grey-200 rounded-sm p-8 shadow-lg">
                    <div className="space-y-4">
                        <img src="./image/post-thumb-2.jpg" alt="blog-1" className="rounded-md"/>
                        <h2 className="font-semibold lg:text-3xl md:text-3xl text-xl">
                            Latest trends of wearing street wears supremely
                        </h2>
                        <p className="text-gray-500 lg:text-lg md:text-lg text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...
                        </p>
                    </div>
                </div>

                <div className="border border-grey-200 rounded-sm p-8 shadow-lg">
                    <div className="space-y-4">
                        <img src="./image/post-thumb-3.jpg" alt="blog-1" className="rounded-md"/>
                        <h2 className="font-semibold lg:text-3xl md:text-3xl text-xl">
                            10 Different Types of comfortable clothes ideas for women
                        </h2>
                        <p className="text-gray-500 lg:text-lg md:text-lg text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog