import { TAILWIND_RANDOM_COLORS } from "../config/randomcolors";

const useRandomColors = (count) => {
  const generateRandomColor = () => {
    const randomIndex = Math.floor(
      Math.random() * TAILWIND_RANDOM_COLORS.length
    );
    return TAILWIND_RANDOM_COLORS[randomIndex];
  };

  const generateColors = () => {
    let colors = [];
    for (let j = 0; j < count; j++) {
      colors.push(generateRandomColor());
    }
    return colors;
  };

  const colors = generateColors();

  return [colors];
};

export default useRandomColors;
