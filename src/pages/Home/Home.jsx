import { useEffect, useState } from "react";
import { Container, Hero } from "../../components";
import { Link } from "react-router";
import { capitalizeWord } from "../../helpers";
import { ArrowRight, PackageSearch } from "lucide-react";

import styles from "./Home.module.css";

function Home() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setIsLoading(true);
        if (!res.ok) throw new Error("Cannot fetch categories");

        return res.json();
      })
      .then((result) => {
        const categories = result.map((category) => ({
          id: crypto.randomUUID(),
          category,
        }));

        setCategories(categories);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Container>
        <div className={styles.homeWrapper}>
          <Hero />
          <div className={styles.categoriesContainer}>
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/shop"
                state={{ selectedCategory: category.category }}
                className={styles.categoryCardLink}
              >
                <div className={styles.categoryCard}>
                  <div className={styles.categoryCardCover}>
                    <PackageSearch size={64} />
                  </div>
                  <div className={styles.categoryCardActions}>
                    <button className={styles.button}>
                      <span>{capitalizeWord(category.category)}</span>
                      <span>
                        <ArrowRight size={18} />
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
