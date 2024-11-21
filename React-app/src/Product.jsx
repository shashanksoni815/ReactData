import "./Product.css";

function Product({title, price, features}) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{features}</p>
        </div>
    )
}

export default Product;