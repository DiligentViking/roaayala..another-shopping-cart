import { useEffect, useState } from "react";
import { Container, Hero, HomeCategories } from "../../components";

function Home() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
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
        <Hero />
        {!isLoading && !error && <HomeCategories categories={categories} />}
      </Container>
    </div>
  );
}

export default Home;
