function play() {
    please;
}

function showPeople(people) {
    document.getElementById("number_of_people").innerHTML = people;
    calculate();
}

function showPizza(pizza) {
    document.getElementById("number_of_pizza").innerHTML = pizza;
    calculate();
}

function showCost(cost) {
    document.getElementById("total_cost").innerHTML = cost;
    calculate();
}

function showSize(size) {
    if (size == 1) {
        size = "small";
    } else if (size == 2) {
        size = "medium";
    } else if (size == 3) {
        size = "large";
    } else {
        size = "extra large";
    }
    document.getElementById("size").innerHTML = size;
    calculate();
}

function calculate() {
    var costPerPerson;
    var totalCost;
    var people;
    var pizzas;
    var slices
    var slicesPerPerson;
    var pizzaSize;
    var pizzaSlices;
    var slicesPerPerson;

    people = document.getElementById('people_slider').value;
    pizzas = document.getElementById('pizza_slider').value;
    cost = document.getElementById('cost_slider').value;
    size = document.getElementById('size_slider').value;

    if (size == 1) {
        slices = "8";
    } else if (size == 2) {
        slices = "12";
    } else if (size == 3) {
        slices = "16";
    } else {
        slices = "20";
    }

    costPerPerson = ("The cost per person is " + "$" + (cost / people).toFixed(2));
    slicesPerPerson = ("Each person gets " + ((pizzas * slices) / people).toFixed(0) + " pieces of pizza");

    document.getElementById('costPerPerson').innerHTML = costPerPerson;
    document.getElementById('slicePerPerson').innerHTML = slicesPerPerson;
}