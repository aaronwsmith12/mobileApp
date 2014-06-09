< !DOCTYPE html > < html > < head > < title > pizza calculator < /title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">

  <link rel="stylesheet" type="text/css
" href="
pizza_calculator.css ">
  <script type="
text / javascript " src="
pizza.js "></script>
  <body>
    <h1>Pizza Calculator</h1>
    <section class="
info ">
      <ul>
<<<<<<< HEAD
        <li><label for="
number_of_people ">How many people are getting pizza</label></br>
      <select id="
people_drop ">
        <option>ONE</option>
        <option>TWO</option>
        <option>THREE</option>
      </select>
        <input type="
text " name="
number_of_people " id="
number_of_people " required></br>
        <li><label for="
total_cost ">How much did the pizza cost</label></br></li>
      <input type="
text " name="
total_cost " id="
total_cost " required></br>
      <li><label for="
number_of_pizza ">How many pizza's did you buy</label></br>
      <select id="
pizza_drop ">
        <option>ONE</option>
        <option>TWO</option>
        <option>THREE</option>
      </select>
      <input type="
text " name="
number_of_pizza " id="
number_of_pizza " required></br>
      <label for="
pizzaSize ">What size do you want</label></br>

      <input type="
radio " name="
pizzasize " id="
small " value="
small " class="
pizza_size ">
      <label for="
small ">small</label>

      <input type="
radio " name="
pizzasize " id="
medium " value="
medium " class="
pizza_size ">
      <label for="
medium ">medium</label>

      <input type="
radio " name="
pizzasize " id="
large " value="
large " class="
pizza_size ">
      <label for="
large ">large</label></br>
=======
        <li><label for="
number_of_people ">How many people are getting pizza</label></br>
          <select>
            <option>ONE</option>
            <option>TWO</option>
            <option>THREE</option>
          </select>
          <input type="
text " name="
number_of_people " id="
number_of_people " required></br>
          <li><label for="
total_cost ">How much did the pizza cost</label></br></li>
          <input type="
text " name="
total_cost " id="
total_cost " required></br>
          <li><label for="
number_of_pizza ">How many pizza's did you buy</label></br>
            <select>
              <option>ONE</option>
              <option>TWO</option>
              <option>THREE</option>
            </select>
            <input type="
text " name="
number_of_pizza " id="
number_of_pizza " required></br>
            <label for="
pizzaSize ">What size do you want</label></br>

            <input type="
radio " name="
pizzasize " id="
small " value="
small ">
            <label for="
small ">small</label>

            <input type="
radio " name="
pizzasize " id="
medium " value="
medium ">
            <label for="
medium ">medium</label>

            <input type="
radio " name="
pizzasize " id="
large " value="
large ">
            <label for="
large ">large</label></br>
>>>>>>> d61d1a3b1c31141362a769799f453684d74009a7

            <!--<a href="
pizzaimg.jpg " class="
btn ">Calculate</a>-->
    <div>
            <input type="
image " src="
pizzaimg.jpg " width="
100 " height="
100 " name="
saveForm " class="
button " id="
saveForm " onclick="
calculate()
" />
    </div>
            <!--<button type="
button " onclick="
calculate()
"> calculate</button>-->
            <div id="
costPerPerson "></div>
            <div id="
slicePerPerson "></div>
          </section>
        </body>
        </html>