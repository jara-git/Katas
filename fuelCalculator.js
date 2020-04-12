/* write a function that takes litres and pricePerLiter as arguments. Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per liter cannot be more than 25 cents. round answer to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
*/
function fuelPrice(litres, pricePerLiter) {
    let discount = 0;
    if ((litres >= 2) && (litres < 4)) {discount = 0.05}
    else if ((litres >= 4) && (litres < 6)) {discount = 0.1}
    else if ((litres >= 6) && (litres < 8)) {discount = 0.15}
    else if ((litres >= 8) && (litres < 10)) {discount = 0.20}
    else if ((litres >= 10) && (litres < 12)) {discount = 0.25}
    
    return (litres * (pricePerLiter - discount));
  
  fuelPrice(5, 1.23)// 5.65);
  fuelPrice(8, 2.5)// 18.40);
  fuelPrice(5, 5.6)// 27.50);

  /*
const fuelPrice = (litres, pricePerLiter) => {
  let discount = 0
  if (litres >= 2) discount = 0.05
  if (litres >= 4) discount = 0.1
  if (litres >= 6) discount = 0.15
  if (litres >= 8) discount = 0.2
  if (litres >= 10) discount = 0.25
  const totalPrice = litres * pricePerLiter - litres * discount
  return totalPrice.toFixed(2)
}
*/