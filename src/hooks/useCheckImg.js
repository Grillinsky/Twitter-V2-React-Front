export const useCheckImg = (img) => {
  if (img) {
    if (img.includes("http")) {
      return img;
    } else {
      return `http://localhost:3000/img/${img}`;
    }
  }
  return "/src/assets/twitter-icons/icons/default_profile_400x400.png";
};
