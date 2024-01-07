let nextId = 20230420;

const generateId = (text = `${nextId++}`) => {
  const m = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]; // 0 ~ 9
  let hash = "";

  for (let i = 0; i < text.length; i++) {
    if (i > text.length / 2) {
      hash += text[i];
    } else {
      hash += m[Number(text[i])];
    }
  }
  return hash.toUpperCase();
};

const generateDate = (date = new Date()) => {
  return date.toLocaleString();
};

const defaultOrder = {
  id: generateId(),
  orderDate: generateDate(),
  status: "Delivery Success",
  name: "Black Bean Noodle",

  totalPrice: 70,
  paymentMethod: "My pay",
  productPrice: 60,
  deliveryPrice: 30,
  discountPrice: 20,

  deliveryAddress: "Seoul",
  deliveryContact: "010-1111-2222",
  messageToShop: "No fork",
  messageToRider: "Please, knock",
};

const data = {
  products: [
    {
      id: generateId(),
      name: "Seafood egg Ramen",
      price: 60,
      thumbnail: "./images/menu-seafoodeggramen.jpg",
    },
    {
      id: generateId(),
      name: "Ham Vegi Toast",
      price: 80,
      thumbnail: "./images/menu-hamvegitoast.jpg",
    },
    {
      id: generateId(),
      name: "Fresh Kebab",
      price: 80,
      thumbnail: "./images/menu-freshkebab.jpg",
    },
    {
      id: generateId(),
      name: "Cheese Burger",
      price: 150,
      thumbnail: "./images/menu-cheeseburger.jpg",
    },
    {
      id: generateId(),
      name: "Spicy Crab Curry",
      price: 200,
      thumbnail: "./images/menu-spicycrabcurry.jpg",
    },
  ],

  order: defaultOrder,
};

const findProducts = (id = "") => {
  if (id) {
    return data.products.find((product) => product.id === id);
  }
  return data.products;
};

const createOrder = (order) => {
  data.order = {
    ...defaultOrder,
    id: generateId(),
    orderDate: generateDate(),
    ...order,
  };
  return data.order;
};

const findOrder = () => {
  return data.order;
};

export const database = {
  findProducts,

  findOrder,
  createOrder,
};
