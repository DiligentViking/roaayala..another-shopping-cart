import { Link } from "react-router";
import styles from "./HomeCategories.module.css";
import { ArrowRight } from "lucide-react";
import { capitalizeWord } from "../../helpers";

function HomeCategories({ categories }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Explore our product by categories</h3>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            key={category.id}
            to="/shop"
            state={{ selectedCategory: category.category }}
            className={styles.link}
          >
            <span className={styles.name}>
              {capitalizeWord(category.category)}
            </span>
            <span>
              <ArrowRight size={18} className={styles.icon} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeCategories;
