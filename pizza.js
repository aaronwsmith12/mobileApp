function calculate() {
    var costPerPerson;
    var totalCost;
    var people;
    var pizzas;
    var slicesPerPizzas;
    var slicesPerPerson;
    var pizzaSize;
    var pizzaSlices;
    var slicesPerPerson;


    totalCost = document.getElementById('total_cost').value;
    people = document.getElementById('number_of_people').value;
    pizzas = document.getElementById('number_of_pizza').value;
    pizzaSize = document.getElementsByName('pizzasize').value;


    costPerPerson = totalCost / people;
    slicesPerPerson = (pizzas * slicesPerPizzas) / people;


    document.getElementById('costPerPerson').innerHTML = costPerPerson;





    costPerPerson = "Cost Per Person: " + (totalCost / people);



    if (pizzaSize === small) {
        pizzaSlices = 8;

    } else if (pizzaSize === large) {
        pizzaSlices = 16;

    } else {
        pizzaSlices = 12;
    }

    costPerPerson = (totalCost / people).toFixed(2);

    slicesPerPerson = "Slices Per Person: " + ((pizzaSlices * pizzas) / people).toFixed(0);

    document.getElementById('costPerPerson').innerHTML = costPerPerson;
    document.getElementById('slicePerPerson').innerHTML = slicesPerPerson;
}