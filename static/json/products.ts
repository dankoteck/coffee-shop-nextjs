export type Product = {
  id: number;
  slug: string;
  category: string;
  title: string;
  price: number;
  star: number;
  rating: number;
  description: string;
  origin: string;
  type: string;
  sizes: string[];
  images?: string[];
};

const Products: Product[] = [
  {
    id: 1,
    slug: "espresso",
    category: "Espresso",
    title: "Espresso Shot",
    price: 2.99,
    star: 4.5,
    rating: 123,
    description: "A single shot of rich and bold espresso.",
    origin: "Italian Roast",
    type: "Hot",
    sizes: ["Single", "Double"],
    images: ["/images/espresso-shot-1.jpg"],
  },
  {
    id: 2,
    slug: "latte",
    category: "Latte",
    title: "Caramel Latte",
    price: 4.49,
    star: 4.7,
    rating: 98,
    description: "Creamy latte with a hint of caramel flavor.",
    origin: "Brazilian Roast",
    type: "Hot",
    sizes: ["Regular", "Large"],
  },
  {
    id: 3,
    slug: "iced-coffee",
    category: "Iced Coffee",
    title: "Iced Coffee",
    price: 3.99,
    star: 4.2,
    rating: 64,
    description: "Chilled coffee with ice cubes.",
    origin: "Colombian Roast",
    type: "Iced",
    sizes: ["Regular", "Large"],
  },
  {
    id: 4,
    slug: "cappuccino",
    category: "Cappuccino",
    title: "Classic Cappuccino",
    price: 3.79,
    star: 4.4,
    rating: 87,
    description:
      "A classic cappuccino with rich espresso, steamed milk, and foamed milk.",
    origin: "Ethiopian Yirgacheffe",
    type: "Hot",
    sizes: ["Small", "Medium"],
  },
  {
    id: 5,
    slug: "frappuccino",
    category: "Frappuccino",
    title: "Mocha Frappuccino",
    price: 4.99,
    star: 4.6,
    rating: 105,
    description:
      "A delightful blend of chocolate, coffee, and ice, topped with whipped cream.",
    origin: "Sumatran Roast",
    type: "Iced",
    sizes: ["Tall", "Grande"],
  },
  {
    id: 6,
    slug: "tea",
    category: "Tea",
    title: "Green Tea",
    price: 2.49,
    star: 4.8,
    rating: 55,
    description:
      "A refreshing cup of green tea, perfect for any time of the day.",
    origin: "Japanese Sencha",
    type: "Hot",
    sizes: ["Small", "Medium"],
  },
  {
    id: 7,
    slug: "espresso",
    category: "Espresso",
    title: "Italian Espresso",
    price: 2.99,
    star: 4.7,
    rating: 95,
    description:
      "A strong and bold Italian espresso shot that awakens your senses.",
    origin: "Italian Blend",
    type: "Hot",
    sizes: ["Single Shot", "Double Shot"],
  },
  {
    id: 8,
    slug: "latte",
    category: "Latte",
    title: "Vanilla Latte",
    price: 4.49,
    star: 4.6,
    rating: 81,
    description:
      "A creamy latte with a hint of vanilla sweetness, topped with foam.",
    origin: "Colombian Roast",
    type: "Hot",
    sizes: ["Regular", "Large"],
  },
  {
    id: 9,
    slug: "americano",
    category: "Americano",
    title: "Black Americano",
    price: 3.19,
    star: 4.5,
    rating: 69,
    description:
      "A pure black Americano coffee for those who enjoy simplicity.",
    origin: "Kenyan AA",
    type: "Hot",
    sizes: ["Small", "Medium"],
  },
  {
    id: 10,
    slug: "latte",
    category: "Latte",
    title: "Caramel Latte",
    price: 4.99,
    star: 4.7,
    rating: 90,
    description:
      "A delightful caramel-infused latte with a smooth and rich flavor.",
    origin: "Brazilian Blend",
    type: "Hot",
    sizes: ["Regular", "Large"],
  },
  {
    id: 11,
    slug: "tea",
    category: "Tea",
    title: "Chai Tea",
    price: 3.29,
    star: 4.5,
    rating: 73,
    description: "A spicy and aromatic chai tea blend that warms your soul.",
    origin: "Indian Masala Chai",
    type: "Hot",
    sizes: ["Small", "Medium"],
  },
  {
    id: 12,
    slug: "frappuccino",
    category: "Frappuccino",
    title: "Caramel Frappuccino",
    price: 4.99,
    star: 4.8,
    rating: 99,
    description:
      "A sweet and creamy caramel frappuccino topped with caramel drizzle.",
    origin: "Colombian Roast",
    type: "Iced",
    sizes: ["Tall", "Grande"],
  },
  {
    id: 13,
    slug: "espresso",
    category: "Espresso",
    title: "Decaf Espresso",
    price: 2.99,
    star: 4.2,
    rating: 65,
    description:
      "A decaffeinated espresso with all the flavor and none of the caffeine.",
    origin: "Decaf Blend",
    type: "Hot",
    sizes: ["Single Shot", "Double Shot"],
  },
  {
    id: 14,
    slug: "latte",
    category: "Latte",
    title: "Hazelnut Latte",
    price: 4.49,
    star: 4.6,
    rating: 78,
    description: "A nutty and indulgent hazelnut latte with a velvety finish.",
    origin: "Guatemalan Roast",
    type: "Hot",
    sizes: ["Regular", "Large"],
  },
  {
    id: 15,
    slug: "product-8",
    category: "Tea",
    title: "Green Tea Blend",
    price: 8.99,
    star: 4.5,
    rating: 15,
    description: "A refreshing blend of green tea with a hint of citrus.",
    origin: "Japan",
    type: "Loose Leaf",
    sizes: ["50g", "100g", "250g"],
  },
  {
    id: 16,
    slug: "product-9",
    category: "Coffee",
    title: "Espresso Roast",
    price: 10.99,
    star: 4.2,
    rating: 12,
    description: "A rich and intense espresso roast with a bold flavor.",
    origin: "Italy",
    type: "Ground Coffee",
    sizes: ["250g", "500g"],
  },
  {
    id: 17,
    slug: "product-10",
    category: "Tea",
    title: "Chamomile Herbal Tea",
    price: 7.49,
    star: 4.8,
    rating: 18,
    description: "A soothing and caffeine-free chamomile herbal tea.",
    origin: "Egypt",
    type: "Tea Bags",
    sizes: ["25 bags", "50 bags"],
  },
  {
    id: 18,
    slug: "product-11",
    category: "Coffee",
    title: "Decaf Mocha Java",
    price: 11.99,
    star: 4.4,
    rating: 14,
    description:
      "A decaffeinated blend with the flavors of Mocha and Java beans.",
    origin: "Ethiopia, Indonesia",
    type: "Whole Bean",
    sizes: ["250g", "500g"],
  },
  {
    id: 19,
    slug: "product-12",
    category: "Tea",
    title: "Oolong Tea",
    price: 9.99,
    star: 4.6,
    rating: 16,
    description: "A semi-fermented oolong tea with a fruity and floral aroma.",
    origin: "Taiwan",
    type: "Loose Leaf",
    sizes: ["50g", "100g", "250g"],
  },
  {
    id: 20,
    slug: "product-13",
    category: "Coffee",
    title: "French Roast",
    price: 10.49,
    star: 4.3,
    rating: 13,
    description: "A dark and bold French roast coffee with a smoky flavor.",
    origin: "France",
    type: "Ground Coffee",
    sizes: ["250g", "500g"],
  },
];

export default Products;