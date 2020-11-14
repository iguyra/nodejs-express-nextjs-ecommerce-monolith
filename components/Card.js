import Link from "next/link";
import AddToCartButton from "../components/cart/AddToCartButton";

const Card = ({ product }) => {
  return (
    <li className="product__item">
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
    </li>
  );
};

export default Card;
