db = db.getSiblingDB('EatEZ')
db.createCollection('restaurants')
restaurantsCollection = db.getCollection('restaurants')
restaurantsCollection.remove({})
restaurantsCollection.insert(
{
	  _id:1,
	  restaurantName: "RedHawks Cafeteria",
	  restaurantAddress: "Seattle University, Seattle, WA 98109",
	  phoneNumber: "+1-2035674567",
	  restaurantImageUrl:"https://pbs.twimg.com/profile_images/990973421835071489/ZYY6dIm9_400x400.jpg"
}
)
restaurantsCollection.insert(
{
	  _id:2, 
	  restaurantName: "Cactus",
	  restaurantAddress: "Seattle 600 Pine St #403, Seattle, WA 98101",
	  phoneNumber: "+1-4086456767",
	  restaurantImageUrl: "https://ehc-west-0-bucket.s3.us-west-2.amazonaws.com/web/documents/cactuscoffeeshop/promo_5c8fbfc008184.png"
	  
}
)
restaurantsCollection.insert(
{
	  _id:3,
	  restaurantName: "Cheese Wizards",
	  restaurantAddress: "Pike Place Market, Seattle, WA 98109",
	  phoneNumber: "+1-9017694560",
	  restaurantImageUrl: "https://i.pinimg.com/originals/55/dc/c0/55dcc028a9f7d9e7250c7cc7520c5214.jpg"
	  
}
)

restaurantsCollection.insert(
	{
		  _id:4,
		  restaurantName: "Chipotle",
		  restaurantAddress: "Pike Place Market, Seattle, WA 98109",
		  phoneNumber: "+1-9017694900",
		  restaurantImageUrl: "https://pbs.twimg.com/profile_images/970669059917471744/_KaAvCGb_400x400.jpg"
		  
	}
	)
db.createCollection('restaurantMenu')
menuCollection = db.getCollection("restaurantMenu")
menuCollection.remove({})

menuCollection.insert(
{
 	  restaurantId: 1,
	  itemName:"Pancakes",
	  itemDescription: "A California roll is a fresh take on traditional Japanese rice rolls. Filled with avocado, crab, and cucumber, it's fresh and crunchy and makes a filling meal. You can use real or imitation crab.",
	  itemPrice: 9,
	  menuItemImageUrl: "https://bakingamoment.com/wp-content/uploads/2020/10/IMG_9322-chocolate-chip-pancakes.jpg"
}
)
menuCollection.insert(
	{
		   restaurantId: 1,
		  itemName:"waffles",
		  itemDescription: "A creame roll is a fresh take on traditional Japanese rice rolls. Filled with avocado, crab, and cucumber, it's fresh and crunchy and makes a filling meal. You can use real or imitation crab.",
		  itemPrice: 10,
		  menuItemImageUrl:"https://www.cookedbyjulie.com/wp-content/uploads/2020/03/blueberry-waffles-one-500x500.jpg"
	}
	)

menuCollection.insert(
{
	  restaurantId:1, 
	  itemName: "Hash Browns",
	  itemDescription: "Thinly sliced Brussels sprouts using a mandoline. Tossed  with the olive oil, lemon juice, pine nuts, cranberries, pecorino cheese, chives, and pinches of salt and pepper.",
	  itemPrice: 8,
	  menuItemImageUrl:"https://i5.walmartimages.com/asr/319b5b23-8b3b-43f9-b80f-82315edf351b_1.fc992fad516f6b3003950ceabdcd2ecb.jpeg"
}
)

menuCollection.insert(
	{
	restaurantId:2,
	itemName:"Breakfast Tacos",
	itemDescription: "Authentic Korean kimchi, chives, and glass noodles are finely chopped and folded into our savory Kurobuta pork filling. Fresh kimchi juice is rolled into the dough, giving them their signature orange hue.*Contains shellfish.",
	itemPrice: 12,
	menuItemImageUrl:"https://www.lemonblossoms.com/wp-content/uploads/2019/06/Breakfast-Tacos-S5-500x500.jpg"
	}
)

menuCollection.insert(
	{
	restaurantId:2,
	itemName:"Brewed Coffee",
	itemDescription: "Our delicious, thick Hot & Sour Soup is chock full of fresh ingredients, including sliced bamboo shoots, silky eggs, crunchy wood ear mushrooms, and buttery-soft tofu. Topped with fresh green onion and our house seasoning, it’s perfect for any occasion.",
	itemPrice: 10,
	menuItemImageUrl:"https://www.willowcrestlane.com/wp-content/uploads/2020/04/Maple-Cinnamon-Latte-5-500x500.jpg"
	}
)

menuCollection.insert(
	{
	restaurantId:2,
	itemName:"Bubble Tea",
	itemDescription: "Bubble tea is a Taiwanese recipe made by blending a tea base with milk, fruit and fruit juices, then adding the signature “bubbles” - yummy tapioca pearls that sit at the bottom.",
	itemPrice: 5,
	menuItemImageUrl:"https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2-500x500.jpg"
	}
)

menuCollection.insert(
	{
	restaurantId:2,
	itemName:"Matcha Latte",
	itemDescription: "Freshly-cut string beans, coated with minced garlic and tossed over high heat for a savory, umami-packed bite.",
	itemPrice: 6,
	menuItemImageUrl:"https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2-500x500.jpg"
	}
)


menuCollection.insert(
	 {
		restaurantId:3,
		itemName:"The Goblin King Sandwich",
		itemDescription: "Emmentaler Swiss and monterey jack cheeses, cream cheese, roasted red peppers, chicken breast, and mild sriracha black pepper aioli.",
		itemPrice: 8,
		menuItemImageUrl:"https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2-500x500.jpg"
	 }
)

menuCollection.insert(
	{
	restaurantId:3,
	itemName:"The ForestLord Sandwich",
	itemDescription: "Provolone and mozzarella, cream cheese, mortadella, salami, black forest ham, and herbed olive muffaletta.",
	itemPrice: 8,
	menuItemImageUrl:"https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2-500x500.jpg"
	}
)

menuCollection.insert(
	 {
		restaurantId:3,
		itemName:"Tomato Basil Power-Up Soup",
		itemDescription: "Delicious nutritious proportions",
		itemPrice: 10,
		menuItemImageUrl:"https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2-500x500.jpg"
	 }
)

menuCollection.insert(
	 {
		restaurantId:3,
		itemName:"Tim's Gourmet Chips",
		itemDescription: "BBQ, Original, Jalapeno, Maui Onion.",
		itemPrice: 5,
		menuItemImageUrl:"https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2-500x500.jpg"
	 }

)