const { readFile } = require("fs/promises");

const main = async () => {
  const response = await readFile("example.json").then((r) => JSON.parse(r));

  const categories = [];

  Object.entries(response.data.vendor.products).forEach(
    ([product_id, category]) => {
      categories.push({ product_id, ...category });
    }
  );
  console.log(categories);
};

main();
