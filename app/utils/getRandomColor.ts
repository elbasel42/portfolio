export const getRandomColor = () => {
  const randomColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

  return randomColor;
};
