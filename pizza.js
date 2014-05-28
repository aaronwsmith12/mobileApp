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
	pizzas = document.getElementById('number_of_pizza').value;

	costPerPerson = totalCost/people;
	slicesPerPerson = (pizzas * slicesPerPizzas) / people;
	
	
	document.getElementById('costPerPerson').innerHTML = costPerPerson;
	
	var pizzaSize;
	var pizzaSlices;
	var slicesPerPerson;
	var pizzas;
	
	totalCost = document.getElementById('total_cost').value;
	people = document.getElementById('number_of_people').value;
	pizzaSize = document.getElementsByName('pizzasize').value;

	costPerPerson = totalCost/people;

	

	if (pizzaSize == small) {
		pizzaSlices = 8;

	} else if (pizzaSize == large) {
		pizzaSlices = 16;

	} else {
		pizzaSlices = 12;
	}

	costPerPerson = (totalCost/people).toFixed(2);

	slicesPerPerson = ((pizzaSlices * pizzas) /people).toFixed(0);
	
	document.getElementById('costPerPerson').innerHTML = costPerPerson;
	document.getElementById('slicePerPerson').innerHTML = slicesPerPerson;
}
