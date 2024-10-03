Рассчитайте общую стоимость продуктов
Создайте функцию, которая принимает массив объектов (продуктов), который вычисляет общую цену и возвращает ее как число. Объект продуктов имеет продукт, количество и цену, например:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

Примеры

// 1 bottle of milk:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

// 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

// 3 bottles of milk:
getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

// Several groceries:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

// Some cheap candy:
getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3

Примечания

Здесь может быть проблема с точностью чисел с плавающей точкой...

## Логика ===>>>
const products =[
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
];
// const productProduct = products.map(pro=>pro.product);
// const quantityQuantity = products.map(pro=>pro.quantity);
// const pricePrice = products.map(q=>q.price);
// const m = 'Milk';
let sum = 0;

for (i = 0; i < products.length; i++) {
  if (products[i]) {
    sum += products[i].quantity * products[i].price;
  };
};
console.log(sum);

### ===>>> Рабочий вариант
const proArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].price * arr[i].quantity;
  };
  return sum;
};
console.log(proArr(products).toFixed(1));

# ===>>> пришлось заменить чтоб написать type
return arr.reduce((total, item) => total + item.price * item.quantity, 0);
 