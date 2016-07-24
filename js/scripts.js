//backend logic

function userPizza(size, sauce, pizzaStyle, cost, toGo) {
  this.size = size;
  this.sauce = sauce;
  this.pizzaStyle = pizzaStyle;
  this.cost = 700;
  this.toGo = false;
}

customerPizza.prototype.totalPrice = function() {
  if (this.size === "medium") {
    this.cost += 300;
  } else if (this.size === "large") {
    this.cost += 500;
  } else if (this.size === "extraLarge") {
    this.cost += 700;
  }

  if (this.sauce === "alfredo") {
    this.cost += 200;
  } else if (this.sauce === "redSauce") {
    this.cost += 0;
  }

  if (this.pizzaStyle === "pepperoni") {
    this.cost += 50;
  } else if (this.pizzaStyle === "tropical") {
    this.cost += 300;
  } else if (this.pizzaStyle === "everything") {
    this.cost += 400;
  } else if (this.pizzaStyle === "cheese") {
    this.cost += 0;
  }

    if (this.togo === true) {
      this.cost -= 200;
    }
};


$(document).ready(function() {
  $("form#pizzaBuilder").submit(function(event) {
    event.preventDefault();

  });
 });
