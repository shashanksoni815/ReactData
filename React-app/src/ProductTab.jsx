import Product from "./Product"
import './Product.css';

function ProductTab() {
    let features = ["hi-tech", "durable", "fast"];
    return (
            <>
            <Product title="phone" price="25000" features={features} />
            <Product title="laptop" price="50000" />
            <Product title="pen" price="10" />
            </>
    )
}

export default ProductTab;