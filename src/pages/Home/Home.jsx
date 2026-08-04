import { useEffect, useState } from "react";
import { Container, Hero, HomeCategories } from "../../components";

function Home() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(1);

  function retryFetch() {
    setRetry(() => retry + 1);
  }

  useEffect(
    () => () => {
      setIsLoading(true);
      setError(null);

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
    },
    [retry],
  );

  return (
    <div>
      <Container>
        <Hero />
        {isLoading ? (
          <p role="status">Loading...</p>
        ) : error ? (
          <>
            <p role="alert">Failed to load categories. Error: {error}</p>
            <button onClick={retryFetch}>Try again?</button>
          </>
        ) : (
          <HomeCategories categories={categories} />
        )}
      </Container>
    </div>
  );
}

export default Home;
