// business logic
function Pizza(size, pizzaStyle, toGo, cost, eater) { //main constructor - pizza
  this.size = size;
  this.pizzaStyle = pizzaStyle;
  this.toGo = toGo;
  this.cost = 7.11;
  this.eater = eater;
}

Pizza.prototype.totalPrice = function() { //prototype totalPrice - waiting for front end user inputs of size style and togo
  if (this.size === "Medium") {
    this.cost += 3;
  } else if (this.size === "Large") {
    this.cost += 5;
  } else if (this.size === "Extra Large") {
    this.cost += 7;
  } else if (this.size === "Small") {
    this.cost += 0;
  }

  if (this.pizzaStyle === "Artisan Pepperoni") {
    this.cost += 0.50;
  } else if (this.pizzaStyle === "Tropical Island") {
    this.cost += 1.25;
  } else if (this.pizzaStyle === "Meat Trio Combo") {
    this.cost += 4.0;
  } else if (this.pizzaStyle === "Four Cheese") {
    this.cost += 0;
  }

  if (this.toGo === "Eat In") {
    this.cost *= 1.15; //15% tip required
  } else if (this.toGo === "toGo") {
    this.cost -= 2; //toGo discount of $2.00
  }

  // var num = this.cost;
  // var fixedCost = num.toFixed(2);
};


// front-end logic
$(document).ready(function() {
  $("#orderForm").submit(function(event) {
    event.preventDefault(); //prevent automatic form submission upon page load
    var pizzaSize = $("input:radio[name=size]:checked").val();
    var orderPizzaStyle = $("#pizzaStyle").val();
    var ordertoGo = $("#toGo").val(); //this could be a boolean. for time purposes,
    var orderEater = $("input#eater").val(); //user name
    var pizzaOrdered = new Pizza(pizzaSize, orderPizzaStyle, ordertoGo, orderEater);

    pizzaOrdered.totalPrice(); //calls upon backend protoype to display price of combination from user input

    var num = pizzaOrdered.cost;
    var fixedCost = num.toFixed(2); //added to round to two decimals to simulate money

    $("#costDisplay").text(fixedCost);// pushes new pizza and other variables to the html page via .text
    $("#sizeDisplay").text(pizzaOrdered.size);
    $("#pizzaStyleDisplay").text(pizzaOrdered.pizzaStyle);
    $("#orderEater").text(orderEater);
    $("#ordertoGo").text(ordertoGo);
    console.log(ordertoGo); //troubleshooting
    console.log(fixedCost); //troubleshooting
    console.log(orderEater); //troubleshooting
    $("#orderForm").hide();//hides form after form submit
    $("#pizzaDisplay").show();

  });
});
