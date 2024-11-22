import Product from "./Product"
import './Product.css';

function ProductTab() {
    return (
            <>
            <Product title="phone" price="25000" />
            <Product title="laptop" price="50000" />
            <Product title="pen" price="10" />
            </>
    )
}

export default ProductTab;