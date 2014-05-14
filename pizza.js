<!--
function calculate()
{
	var costPerPerson;
	var totalCost;
	var people;
	var pizzas;
	var slicesPerPizzas = 5;
	var slicesPerPerson;
	
	totalCost = document.getElementById('total_cost').value;
	people = document.getElementById('number_of_people').value;
	pizzas = document.getElementById('').value;

	costPerPerson = totalCost/people;
	slicesPerPerson = (pizzas * slicesPerPizzas) / people;
	
	
	document.getElementById('costPerPerson').innerHTML = costPerPerson;
	document.getElementById('').innerHTML = slicesPerPerson;

}
-->