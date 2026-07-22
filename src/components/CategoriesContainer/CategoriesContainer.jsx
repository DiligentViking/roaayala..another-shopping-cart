function CategoriesContainer({ productCategories, setActiveCategory }) {
  return (
    <ul
      onClick={(e) => {
        const target = e.target.closest("li");

        if (!target) return;

        const targetName = target.getAttribute("data-category");
        setActiveCategory(targetName === "null" ? null : targetName);
      }}
    >
      <li data-category="null">All</li>
      {productCategories.map((category) => (
        <li key={category.id} data-category={category.name}>
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoriesContainer;
