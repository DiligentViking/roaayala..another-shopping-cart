import { capitalizeWord } from "../../helpers";
import styles from "./CategoriesContainer.module.css";

function CategoriesContainer({
  productCategories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <ul
      className={styles.categories}
      onClick={(e) => {
        const target = e.target.closest("li");

        if (!target) return;

        const targetName = target.getAttribute("data-category");
        setActiveCategory(targetName === "null" ? null : targetName);
      }}
    >
      <li
        data-category="null"
        className={`${styles.category} ${activeCategory === null ? styles.active : ""}`}
      >
        All
      </li>
      {productCategories.map((category) => (
        <li
          key={category.id}
          data-category={category.name}
          className={`${styles.category} ${activeCategory === category.name ? styles.active : ""}`}
        >
          {capitalizeWord(category.name)}
        </li>
      ))}
    </ul>
  );
}

export default CategoriesContainer;
