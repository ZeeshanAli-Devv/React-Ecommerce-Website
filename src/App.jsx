import 'remixicon/fonts/remixicon.css';

import Navbar from "./Component/Navbar"
import Home from './Component/Home';
import Category from './Component/Category';
import Product from './Component/Product';
import Ads from './Component/Ads';
import Discount from './Component/Discount';
import Footer from './Component/Footer';
import Blog from './Component/Blog';
import Shipping from './Component/Shipping';



const App  = () => {
    return(
        <div>
            
            <Navbar />
            <Home />
            <Category />
            <Product />
            <Ads />
            <Blog />
            <Discount />
            <Shipping />
            <Footer />
            
        </div>
    )
}

export default App