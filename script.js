function pizzaOven(crustType, sauceType, cheeses, toppings){
      var pizza = {}
      pizza.crustType = crustType;
      pizza.sauceType = sauceType;
      pizza.cheeses = cheeses;
      pizza.toppings = toppings;
      return pizza;
  }
  
  var opt1 = pizzaOven("deep dish", "tradicional", ["mozzarella"], ["pepperoni", "sausage"]);
  var opt2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
  var opt3 = pizzaOven("hand tossed", "pesto", ["vegan"], ["tomato", "onions"]);
  var opt4 = pizzaOven("sourdough", "white", ["vegan"], ["herbs, spinach"]);
  
  console.log(opt1);
  console.log(opt2);
  console.log(opt3);
  console.log(opt4);
  
  
  