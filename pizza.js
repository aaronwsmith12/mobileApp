function calculate() {
    var costPerPerson;
    var totalCost;
    var people;
    var pizzas;
    var slicesPerPizza;
    var slicesPerPerson;
    var pizzaSize;
    var pizzaSlices;
    var slicesPerPerson;
    var people_slider;
    var pizza_slider;
    var cost_slider


    totalCost = document.getElementById('total_cost').value;
    people = document.getElementById('number_of_people').value;
    pizzas = document.getElementById('number_of_pizza').value;
    pizzaSize = document.getElementsByName('pizzasize').value;
    people_slider = document.getElementById('people_slider').value;
    pizza_slider = document.getElementById('pizza_slider').value;
    cost_slider = document.getElementById('cost_slider').value;

    pizzas = pizza_slider;

    people = people_slider;

    totalCost = cost_slider;

    if (pizzaSize = document.getElementById('small').checked) {
        pizzaSlices = 8;

    } else if (pizzaSize = document.getElementById('large').checked) {
        pizzaSlices = 16;

    } else {
        pizzaSlices = 12;
    }

    costPerPerson = ("The cost per person is " + "$" + (totalCost / people).toFixed(2));
    slicesPerPerson = ("Each person gets " + ((pizzas * pizzaSlices) / people).toFixed(1) + " pieces of pizza");

    document.getElementById('costPerPerson').innerHTML = costPerPerson;
    document.getElementById('slicePerPerson').innerHTML = slicesPerPerson;
}

function showPeople(people) {
    document.getElementById("number_of_people").innerHTML = people;
}

function showPizza(pizza) {
    document.getElementById("number_of_pizza").innerHTML = pizza;
}

function showCost(cost) {
    document.getElementById("total_cost").innerHTML = cost;
}