import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const shops = [
  {
    id: "shop-01",
    title: "Shop 01",
    img: "http://placehold.it/350x150?text=Shop%2001",
    category: "Chinese Cuisine"
  },
  {
    id: "shop-02",
    title: "Shop 02",
    img: "http://placehold.it/350x150?text=Shop%2002",
    category: "Western Cuisine"
  },
  {
    id: "shop-03",
    title: "Shop 03",
    img: "http://placehold.it/350x150?text=Shop%2003",
    category: "Indian Cuisine"
  },
  {
    id: "shop-04",
    title: "Shop 04",
    img: "http://placehold.it/350x150?text=Shop%2004",
    category: "Malay Cuisine"
  },
  {
    id: "shop-05",
    title: "Shop 05",
    img: "http://placehold.it/350x150?text=Shop%2005",
    category: "Japanese Cuisine"
  },
  {
    id: "shop-06",
    title: "Shop 06",
    img: "http://placehold.it/350x150?text=Shop%2006",
    category: "Korean Cuisine"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (shop) => {
  return replaceAll(shop.title, ' ', '-');
};

class ShopApi {
  static getAllShops() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], shops));
      }, delay);
    });
  }
}

export default ShopApi;
