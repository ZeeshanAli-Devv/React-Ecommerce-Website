import { useState } from "react"

const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false)

    return(
        <nav className="p-4 lg:pl-12 lg:pr-20 shadow-md">
            
            <div className="flex justify-between items-center hidden md:flex">  
                <a href="#home" className="outline-none">
                    <img src="./image/logo.png" alt="logo" className="w-44"/>
                </a>
                <ul className="flex gap-12">
                    <li className="outline-none hover:text-red-400 font-medium"><a href="#home">Home</a></li>
                    <li className="outline-none hover:text-red-400 font-medium"><a href="#product">Product</a></li>
                    <li className="outline-none hover:text-red-400 font-medium"><a href="#blog">Blog</a></li>
                    <li className="outline-none hover:text-red-400 font-medium"><a href="#contact-us">Contact us</a></li>
                </ul>
            </div>

            <div className="flex justify-between items-center md:hidden">    
                <a href="#" className="outline-none">
                    <img src="./image/logo.png" alt="logo" className="w-44"/>
                </a>      
                {isOpen && 
                    <ul className="flex flex-col absolute top-16 left-0 gap-6 w-full bg-white shadow-lg p-2 px-6">
                        <li className="outline-none hover:text-red-400 font-medium"><a href="#home">Home</a></li>
                        <li className="outline-none hover:text-red-400 font-medium"><a href="#product">Product</a></li>
                        <li className="outline-none hover:text-red-400 font-medium"><a href="#blog">Blog</a></li>
                        <li className="outline-none hover:text-red-400 font-medium"><a href="#contact-us">Contact us</a></li>
                    </ul>
                }
               <button 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-full outline-none md:hidden"
                    onClick={()=>{setIsOpen(!isOpen)}}
                    >     
                    <i className={isOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
                </button>
            </div>
        </nav>
    )
}
export default Navbar