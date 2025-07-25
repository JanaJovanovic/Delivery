import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST FOOD IN TOWN</h1>
      <p className={styles.desc}>
      Welcome to Juicy, where flavor reigns supreme and every bite is a journey of culinary delight. Nestled in the heart of the city, Juicy Restaurant is a haven for food enthusiasts seeking an unforgettable dining experience.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
