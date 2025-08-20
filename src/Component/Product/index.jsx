import { useState } from "react"

const Product = ()=>{

    const [count, setCount] = useState(1)
    
    const increment = ()=>{
        setCount(count + 1)
    }

    const decrement = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    const products = [
        {
            img : './image/thumb-bananas.png',
            title : 'Sunstar Fresh Bananas',
            price : '$18.00',
        },
        {
            img : './image/thumb-raspberries.png',
            title : 'Sunstar Fresh Strawberry',
            price : '$20.00',
        },
        {
            img : './image/thumb-milk.png',
            title : 'Sunstar Fresh Milk',
            price : '$15.00',
        },
        {
            img : './image/thumb-biscuits.png',
            title : 'Sunstar Fresh Biscuit',
            price : '$25.00',
        },
        {
            img : './image/thumb-tomatoes.png',
            title : 'Sunstar Fresh Tomotos',
            price : '$19.00',
        },
        {
            img : './image/thumb-biscuits.png',
            title : 'Sunstar Fresh Biscuit',
            price : '$25.00',
        },
        {
            img : './image/thumb-bananas.png',
            title : 'Sunstar Fresh Bananas',
            price : '$18.00',
        },
        {
            img : './image/thumb-tomatoes.png',
            title : 'Sunstar Fresh Tomotos',
            price : '$19.00',
        },
        {
            img : './image/thumb-raspberries.png',
            title : 'Sunstar Fresh Strawberry',
            price : '$20.00',
        },
        {
            img : './image/thumb-milk.png',
            title : 'Sunstar Fresh Milk',
            price : '$15.00',
        },
    ]

    
    return(
        <div className="lg:p-12 p-8">
            <h1 className="lg:text-4xl text-3xl font-medium">Trending Products</h1>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 mt-16 lg:gap-12 gap-20" id="product">
                {products.map((item, index)=>{
                    return(
                        <div key={index} className="shadow-lg rounded-md p-4 lg:w-64 hover:shadow-xl">
                            {/* Product Top Section */}
                                
                            <div className="bg-gray-100 p-4 rounded-lg relative">

                                <div className="flex justify-between items-center">
                                    <span className="h-6 w-12 bg-green-400 text-xs flex justify-center items-center rounded-md text-white font-medium">-30%</span>
                                    <span className="border bg-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-red-500 hover:text-white">
                                        <i className="ri-heart-line text-current"></i>
                                    </span>
                                </div>

                                {/* Product Image */}
                                <div className="flex justify-center items-center mt-4 h-24">
                                    <img
                                        src= {item.img}
                                        alt={item.img}
                                        className="object-cover w-48"
                                    />
                                </div>
                            </div>

                            {/* Product Details */}

                            <div className="mt-4 space-y-2">
                                
                                <h1 className="text-lg font-semibold leading-tight">{item.title}</h1>

                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <p>1 Unit</p>
                                    <span>⭐</span>
                                    <span className="text-gray-700 font-medium">4.5</span>
                                </div>
                                <h1 className="text-xl font-bold text-green-600">{item.price}</h1>

                                <div className="flex justify-between items-center mt-2">
                                    <div className="flex items-center gap-2">
                                        
                                        <button
                                            onClick={decrement} 
                                            className="border border-gray-300 w-8 h-8 flex justify-center items-center rounded-lg text-lg active:bg-gray-100">
                                        -
                                        </button>
                                        
                                        <p>{count}</p>
                                        
                                        <button
                                            onClick={increment}
                                            className="border border-gray-300 w-8 h-8 flex justify-center items-center rounded-lg text-lg active:bg-gray-100"
                                        >
                                        +
                                        </button>
                                        
                                    </div>


                                    <button className="bg-green-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition">
                                        Add to Cart
                                    </button>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Product