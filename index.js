const { readFile } = require("fs/promises");

const main = async () => {
  const response = await readFile("example.json").then((r) => JSON.parse(r));
  const categories = Object.entries(response.data.vendor.products).map(
    ([product_id, category]) => {
      return { product_id: Number(product_id), ...category };
    }
  );

  console.log(categories);
};

main();
