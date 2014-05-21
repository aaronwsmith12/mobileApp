function calculate()
{
	var costPerPerson;
	var totalCost;
	var people;
<<<<<<< HEAD
	var pizzas;
	var slicesPerPizzas = 5;
	var slicesPerPerson;
	
	totalCost = document.getElementById('total_cost').value;
	people = document.getElementById('number_of_people').value;
	pizzas = document.getElementById('').value;

	costPerPerson = totalCost/people;
	slicesPerPerson = (pizzas * slicesPerPizzas) / people;
	
	
=======
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

>>>>>>> a424c8aff4906102cc6ae2a5b05e7479255a96e7
	document.getElementById('costPerPerson').innerHTML = costPerPerson;
	document.getElementById('').innerHTML = slicesPerPerson;

	document.getElementById('pizzaSize').innerHTML = slicesPerPerson;
	

}
