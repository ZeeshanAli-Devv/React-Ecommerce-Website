const Category = () => {
   
    const grocerry = [
        {
            image : './image/icon-vegetables-broccoli.png',
            grocerryName : 'Fruits & Vages'
        },
        {
            image : './image/icon-bread-baguette.png',
            grocerryName : 'Breads & Sweets'
        },
        {
            image : './image/icon-animal-products-drumsticks.png',
            grocerryName : 'Meat & Veges'
        },
        {
            image : './image/icon-soft-drinks-bottle.png',
            grocerryName : 'Drinks & Vages'
        },
        {
            image : './image/icon-bread-herb-flour.png',
            grocerryName : 'Jars & Vages'
        },
        {
            image : './image/icon-wine-glass-bottle.png',
            grocerryName : 'Coke & Vages'
        },
        
    ]
    
    return(
        <div className="p-12">
            <h1 className="text-4xl font-medium">Category</h1>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 mt-16 gap-12">
                {grocerry.map((item, index)=>(
                    <div className="py-12 rounded-lg shadow-md transform transition duration-300 hover:-translate-y-4 hover:shadow-xl" key={index}>
                        <div className="flex flex-col justify-center items-center gap-6">
                            <img 
                                src= {item.image} 
                                alt="broccoli" 
                                className="w-10"
                            />
                            <h2 className="text-xl">{item.grocerryName}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category