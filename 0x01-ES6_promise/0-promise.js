function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "API response" };
      resolve(data);
    }, 1000);
  });
}

export default getResponseFromAPI;
