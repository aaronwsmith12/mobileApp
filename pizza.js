function calculate()
{
	var costPerPerson;
	var totalCost;
	var people;
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

	} else if (pizzaSize == medium) {
		pizzaSlices = 12;

	} else {
		pizzaSlices = 16;

	}


	document.getElementById('costPerPerson').innerHTML = costPerPerson;
	

}