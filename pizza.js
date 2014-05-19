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
	pizzas = document.getElementById('number_of_pizza').value;

	if (document.getElementById('small').checked) {
  pizzaSlices = 8;
  	}

  	else if (document.getElementById('large').checked) {
  pizzaSlices = 16;
  	}

  	else {
  pizzaSlices = 12;
  	}

	costPerPerson = (totalCost/people).toFixed(2);

	slicesPerPerson = ((pizzaSlices * pizzas) /people).toFixed(0);

	document.getElementById('costPerPerson').innerHTML = costPerPerson;

	document.getElementById('pizzaSize').innerHTML = slicesPerPerson;
	

}