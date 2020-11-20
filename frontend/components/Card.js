import Link from "next/link";
import AddToCartButton from "./cart/AddToCartButton";

const Card = ({ product }) => {
  return (
    <div className="product__item">
      <Link key={product.price} href={`/products/[product]}`} as={`/products/${product._id}`}>
        <a className="product__link">
          <img src={product.image} alt="" className="product__img" />
          <div className="product__details">
            <p className="product__name">{product.name}</p>
            <p className="product__price">GH {product.price}</p>
          </div>
        </a>
      </Link>

      <div className="product__addtocart">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default Card;
