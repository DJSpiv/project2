// this pizza array will be get info from Node.js
let candles=[
{name:"Java", img:"rustic_java.jpg", price:5.99},
{name:"City", img:"rustic_city.jpg", price:12.99},
{name:"lemon", img:"rustic_lemon.jpg", price:7.99},
{name:"orange", img:"rustic_orange.jpg", price:5.99},
{name:"patchouli", img:"rustic_patch.jpg",price:5.99},
{name:"pineapple", img:"rustic_pineapple.jpg",price:8.99},
{name:"pumpkin", img:"rustic_pumpkin.jpg", price:7.99},
{name:"red currant", img:"rustic_red.jpg", price:8.99},
{name:"rosemary", img:"rustic_rose.jpg", price:5.99},
{name:"signature silk", img:"rustic_silk.png", price:13.99},
{name:"spruce", img:"rustic_spruce.jpg", price:8.99},
{name:"tea", img:"rustic_spruce.jpg", price:5.99},
{name:"wood", img:"rustic_wood.jpg", price:5.99},
{name:"coco", img:"sample_coco.jpg", price: 8.99},
{name:"farm", img:"sample_farm.jpg", price: 8.99},
{name:"fruit", img:"sample_fruit.jpg", price:8.99}
];
function registerButtonEvents()
{
	let buttons = document.getElementsByTagName("button");
	for (let i=0; i<buttons.length-1;i++)
	{
		buttons[i].addEventListener("click", function (){
			addToCart(i);
		});
	}
	let number=localStorage.getItem("cart")
	if(number===null)	//shopping cart is empty	
		number=0;
	document.getElementById("numItem").innerHTML=number;

}

function addToCart(pID)
{
	let cartJ=localStorage.getItem("cart")
	let cart;
	if(cartJ===null)	//shopping cart is empty
	{
		cart = [];
	}
	else
		cart=cartJ.split(",");



	cart.push(pID);
	let number=localStorage.getItem("number");
	if(number === null)
		number=0;
	
	document.getElementById("numItem").innerHTML=`${++number}`;
	localStorage.setItem("cart",cart.toString());
	localStorage.setItem("number",number);	
}

function clearCart()
{
	localStorage.removeItem("cart");
	localStorage.removeItem("number");
}

function showCart()
{
	let cartJ=localStorage.getItem("cart");
	let cart=[];
	let info="";
	if(cartJ===null)
		document.getElementById("cart").innerHTML=
			"<h2> You have no items in the cart!</h2>";
	else
	{
		cart=cartJ.split(",");
		

	for(let i of cart)
	{	
		let item=cart[i];
		info+=`
		
		<div id ="cart">
	<div class ="row">
			<div class="col-md-3 text-center">
					<h3>${item.name}</h3>
					</div>
					<div class="col-md-2">
					<img class="store_stock" src="./images/${item.img}" alt="cotton">
					</div>
					<div class="col-md-3 text-center">
						<h3>${item.price}</h3>
					</div>
				</div>
			</div>
		`;
	}//end of loop

	document.getElementById("cart").innerHTML=info;
		}// end of else

		
}