import "./ProductList.css"
import Product from "../product/Product"
import { products } from "../../Data" 

const ProductList = () => {
    return (
        <div className= "pl">
            <div className= "pl-texts">
                <h1 className= "pl-title">My Publications</h1>
                <p className= "p-desc">There are publications that I have written to explain how I develop my projects.</p>
            </div>
            <div className= "pl-list">
                {products.map(item =>(
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
                
            </div>
        </div>
    )
}

export default ProductList
