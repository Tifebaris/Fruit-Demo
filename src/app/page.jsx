import Fruits from "./components/Fruits";

const fruits = [
  {
    id: 1,
    name: "Apple",
    botanicalName: "Malus domestica",
    season: "Fall",
    image: "https://robohash.org/apple.jpg",
    description: "Apples are crunchy and juicy fruits that come in a variety of colors and flavors. They are rich in fiber and known for their nutritional benefits."
  },
  {
    id: 2,
    name: "Orange",
    botanicalName: "Citrus sinensis",
    season: "Winter",
    image: "https://robohash.org/orange.jpg",
    description: "Oranges are citrus fruits known for their refreshing taste and high vitamin C content. They are great for boosting immunity and promoting healthy skin."
  },
  {
    id: 3,
    name: "Banana",
    botanicalName: "Musa paradisiaca",
    season: "Year-round",
    image: "https://robohash.org/banana.jpg",
    description: "Bananas are tropical fruits with a creamy texture and a sweet flavor. They are a good source of potassium and provide instant energy."
  },
  {
    id: 4,
    name: "Strawberry",
    botanicalName: "Fragaria × ananassa",
    season: "Spring",
    image: "https://robohash.org/strawberry.jpg",
    description: "Strawberries are small, red fruits with a sweet and tangy taste. They are packed with antioxidants and are often used in desserts and smoothies."
  },
  {
    id: 5,
    name: "Grapes",
    botanicalName: "Vitis vinifera",
    season: "Summer",
    image: "https://robohash.org/grapes.jpg",
    description: "Grapes are small, juicy fruits that come in various colors. They are a rich source of antioxidants and are commonly used for making wine."
  },

  {
    id: 6,
    name: "Watermelon",
    botanicalName: "Citrullus lanatus",
    season: "Summer",
    image: "https://robohash.org/watermelon.jpg",
    description: "Watermelons are large, refreshing fruits with a sweet and hydrating flesh. They are perfect for hot summer days and are low in calories."
  },
  {
    id: 7,
    name: "Pineapple",
    botanicalName: "Ananas comosus",
    season: "Summer",
    image: "https://robohash.org/pineapple.jpg",
    description: "Pineapples are tropical fruits known for their sweet and tangy taste. They are rich in vitamin C and bromelain, which aids digestion."
  },
  {
    id: 8,
    name: "Mango",
    botanicalName: "Mangifera indica",
    season: "Summer",
    image: "https://robohash.org/mango.jpg",
    description: "Mangoes are juicy fruits with a tropical flavor and a smooth, creamy texture. They are a good source of vitamin C and are often used in desserts and smoothies."
  },
  {
    id: 9,
    name: "Pear",
    botanicalName: "Pyrus communis",
    season: "Fall",
    image: "https://robohash.org/pear.jpg",
    description: "Pears are sweet and juicy fruits with a distinctive bell-like shape. They are high in fiber and are a great choice for snacking or adding to salads."
  },
  {
    id: 10,
    name: "Cherry",
    botanicalName: "Prunus avium",
    season: "Spring",
    image: "https://robohash.org/cherry.jpg",
    description: "Cherries are small, round fruitswith a sweet and tart flavor. They come in a variety of colors and are rich in antioxidants. Cherries are often enjoyed as a snack or used in desserts and baked goods."
  },
  {
    id: 11,
    name: "Kiwi",
    botanicalName: "Actinidia deliciosa",
    season: "Fall",
    image: "https://robohash.org/kiwi.jpg",
    description: "Kiwi is a small fruit with a fuzzy brown exterior and a vibrant green interior. It has a tangy and slightly sweet flavor and is an excellent source of vitamin C and dietary fiber."
  },
  {
    id: 12,
    name: "Pomegranate",
    botanicalName: "Punica granatum",
    season: "Fall",
    image: "https://robohash.org/pomegranate.jpg",
    description: "Pomegranates are known for their ruby-red seeds packed with sweet-tart juice. They are rich in antioxidants and have been associated with various health benefits."
  }
];

export default function page() {
  return (
    <div>
      <Fruits list = {fruits}/>
    </div>
  )
}
