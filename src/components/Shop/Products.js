import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMT_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 20,
    title: "My Second book",
    description: "This is a Second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMT_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
