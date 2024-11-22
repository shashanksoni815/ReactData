import "./Product.css";
import Price from "./price";

function Product({title, idx}) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "1,200", "350"];
    let description = ["8,000 DIP", "intutive surface", "Designed For iPad", "Wireless"];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx] }</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    )
}

export default Product;