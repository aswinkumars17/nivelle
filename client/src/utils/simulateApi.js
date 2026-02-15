export const simulateApiFailure = () => {
  return new Promise((_, reject) => {
    const delay = Math.floor(Math.random() * 500) + 1000;
    setTimeout(() => {
      reject({
        message: "Operation failed. Please try again."
      });
    }, delay);
  });
};
