import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const ProductItemList = [
    {id:1,
      title: "vadapav",
      price: 10,
      description: "taste and cheap",
    },
    {id:2,
      title: "misal",
      price: 20,
      description: "kolhapur famous",
    },
    {
      id:3,
      title: "pizza",
      price: 100,
      description: "Dominozz special",
    },
    {id:4,
      title: "chole bature",
      price: 50,
      description: "try it",
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ProductItemList.map((item) => {
          return (
            <ProductItem
              title={item.title}
              price={item.price}
              description={item.description}
              id={item.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
