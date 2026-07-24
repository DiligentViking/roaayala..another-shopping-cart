export const capitalizeWord = (word) => {
  return word
    .split(" ")
    .map((w) => w.at(0).toUpperCase() + w.slice(1))
    .join(" ");
};
