function calculate()
{
	var costPerPerson;
	var totalCost;
	var people;
	var pizzas;
	var slicesPerPizzas;
	var slicesPerPerson;
	
	totalCost = document.getElementById('total_cost').value;
	people = document.getElementById('number_of_people').value;
	pizzas = document.getElementById('').value;

	costPerPerson = totalCost/people;
	slicesPerPerson = (pizzas * slicesPerPizzas) / people;
	
	
	document.getElementById('costPerPerson').innerHTML = costPerPerson;
	document.getElementById('').innerHTML = slicesPerPerson;
	
	var pizzaSize;
	var pizzaSlices;
	var slicesPerPerson;
	var pizzas;
	
	totalCost = document.getElementById('total_cost').value;
	people = document.getElementById('number_of_people').value;
	pizzaSize = document.getElementById('pizzaSize').value;

	costPerPerson = totalCost/people;

	slicesPerPerson = (pizzaSlices * pizzas) /people;

	if (pizzaSize == small) {
		pizzaSlices = 8;

	} else if (pizzaSize == large) {
		pizzaSlices = 16;

	} else {
		pizzaSlices = 12;
	}


	document.getElementById('costPerPerson').innerHTML = costPerPerson;
}
