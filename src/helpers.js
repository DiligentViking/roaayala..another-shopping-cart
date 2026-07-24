export const capitalizeWord = (word = "") => {
  if (word === "") return word;
  return word
    .split(" ")
    .map((w) => (w ? w.at(0).toUpperCase() + w.slice(1) : ""))
    .join(" ")
    .trim();
};
