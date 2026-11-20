const LOGO="assets/logo.png";
const M=[
["Breakfast","Work hard, breakfast harder!",["Classic English Breakfast~330~n~Bacon, sausage, fried eggs, mushroom, beans, grilled tomato, toast, tea or coffee","American Breakfast~350~n~2 pancakes, bacon or chicken ham, sausages, eggs, beans, mushroom, tea or coffee","Herbivore's English Breakfast~320~v~Mushroom, eggs or cottage cheese, beans, tomato, mash, salad, toast, tea or coffee","Keto Breakfast~330~n~Mushrooms, paneer, sausages, scrambled eggs, bacon or ham, sauteed veggies","Classic Chicken Breakfast~330~n~Sausages, ham, fried eggs, mushrooms, beans, tomato, toast","Classic Waffle~150~v~Whipped cream and maple syrup","Chocolate Waffle~150~v~Vanilla ice cream and chocolate syrup","Pancakes~150~v~Banana and maple syrup","French Toast~170~v~With scrambled eggs and regular tea or coffee","Cheese French Toast~180~v~With scrambled eggs and regular tea or coffee","Honey Toast~170~v~With scrambled eggs and regular tea or coffee","Nutella French Toast~180~v~With scrambled eggs and regular tea or coffee"]],
["Eggs","Egg-scuses!",["Scrambled~130~~With buttered toast (2)","Sunny Side Up~120~~With buttered toast (2)","Boiled~120~~With buttered toast (2)","Shakshuka~240~~2 eggs poached in spiced tomato sauce, buttered toast","Bacon & Eggs~220~n~2 fried eggs, 3 slices bacon, cherry tomatoes, spices","Turkish Eggs~240~~Poached eggs on garlicky yogurt, spicy butter sauce, red pepper flakes","Fried Eggs with Spinach & Mushrooms~210~~On a bed of sauteed spinach and mushrooms","Eggs Benedict~260~n~Bun halves with avocado, bacon, poached eggs, hollandaise, potato wedges"]],
["Omelettes","For frying out loud! Served with buttered toast (2).",["Egg White Omelette~250~~Egg whites only","Mexican Omelette~220~~Onion, tomato, capsicum, coriander, green chilli","Cheese Omelette~220~~Cheese","Masala Omelette~220~~Indian spices","Chicken Omelette~250~n~Chicken","Stuffed Omelette~250~n~Mushrooms and sausages","Spanish Omelette~220~~Onion and potato slices","Classic Denver Omelette~250~n~Capsicum, chicken ham, cheese","Chicken Pepperoni Omelette~250~n~Onion, pepperoni, cheese","Mediterranean Omelette~250~~Cherry tomatoes, spinach, parsley, black olives, feta"]],
["Appetizers","Count the memories, not the calories.",["French Fries~120~v","Peri Peri Fries~140~v","Cheesy Fries~200~v","Peri Peri Cheesy Fries~210~v","Veg Nuggets~140~v","Cheesy Garlic Bread~220~v","Cheese Corn Balls~220~v","Butter Garlic Mushrooms~260~v","Chilli Garlic Mushrooms~260~v","Chilli Garlic Paneer~260~v","Tomato Basil Bruschetta~200~v","Mushroom Bruschetta~250~v","Chicken Wings (Sweet & Spicy)~250~n","Cajun Style Wings~250~n","Peri Peri Wings~250~n","Butter Garlic Prawns~330~n","Chilli Garlic Prawns~330~n","Fish & Chips~350~n","Fish Fingers~320~n","Chicken Fingers~200~n","Dynamite Chicken~230~n","Dynamite Prawns~330~n","Chicken Popcorn~170~n","Chicken Bruschetta~230~n","Chicken Skewers~250~n","Prawns Skewers~330~n","Bacon Wrapped Shrimp~390~n"]],
["Sandwiches","Great in bread!",["Peanut Butter & Jam~120~v","Grilled Cheese~170~v","Veg Grill (Paneer)~190~v","Veg Grill (Mushroom)~190~v","Spinach Corn~180~v","Bombay Grilled~190~v","Egg Mayo~160~n","Egg Mayo & Chicken Ham Club~230~n","Classic Chicken~180~n","Chicken Ham~200~n","Chicken Club~230~n","Egg Mayo & Bacon Club~250~n"]],
["Burgers","Eyes on the fries!",["Veg Burger~200~v","Paneer Burger~220~v","Chicken Hot Dog~200~n","Chicken Burger~250~n","Fried Chicken Burger~260~n","Barbequed Chicken Burger~250~n","Peri Peri Chicken Burger~250~n","Lamb Burger~290~n","Pork Burger~290~n","The Almighty Burger~360~n~1 chicken patty, 1 fried chicken patty, 2 sausages, 2 bacon or chicken ham, egg, cheese, veggies","Double Cheese Burger~260 / 330 / 380~~Veg / Chicken / Lamb, 2 patties, 2 cheese slices, pickle"]],
["Pizzas","Another one bites the crust!",["Mexican Pizza~260~v~Corn, capsicum, jalapeno, tomato, onion, black olives","Margherita Pizza~220~v~Cheese, cherry tomatoes, basil","Garden Fresh Pizza~280~v~Capsicum, onion, tomato, broccoli, black olives","Cottage Cheese Pizza~280~v~Paneer, onion, capsicum","Pesto Pizza~260~v~Capsicum, onion, tomato, broccoli, pesto","Corn Cheese Pizza~250~v~Corn and cheese","Classic Chicken Pizza~280~n~Chicken, onion, capsicum","Peri Peri Chicken Pizza~280~n~Chicken, onion, capsicum, peri peri spice","Chicken Bolognese Pizza~300~n~Chicken mince, capsicum","Lamb Bolognese Pizza~330~n~Lamb mince, capsicum","BBQ Chicken Pizza~280~n~Chicken, jalapeno, BBQ sauce","Meat Lover's Pizza~320~n~Chicken mince, chicken sausages","Chicken Pepperoni Pizza~290~n","Pesto Chicken Pizza~290~n~Chicken, onion, capsicum in pesto sauce"]],
["Pastas","Legalize marinara! Veg / Chicken / Seafood.",["Spaghetti in Marinara Sauce~230 / 260 / 300","Penne in Alfredo Sauce~250 / 280 / 320","Penne in Pesto Sauce~230 / 260 / 300","Spaghetti in Pink Sauce~230 / 260 / 300","Spaghetti in Lemon Butter Sauce~230 / 260 / 300","Aglio e Olio~230 / 260 / 330~~Spaghetti tossed in olive oil and spices","Carbonara~280~n~Spaghetti with bacon","Spaghetti & Meatballs~280 / 320~n~Chicken / Lamb","Mac n Cheese~200~v"]],
["Main course","Meat, herbs, spice and everything nice! Served with mash or rice.",["Peri Peri Cottage Cheese Steak~310~v~Creamy buttery peri peri sauce, sauteed vegetables","Cauliflower Steak in Mustard Sauce~280~v~Grilled with spices, creamy mustard sauce","Chicken Florentine~330~n~Chicken breast filled with cashew, spinach, paneer, brown sauce","Chicken Steak~330~n~Cheese-filled breast, red wine brown sauce","Pork Rib Steak~370~n~Seasoned ribs in brown pepper sauce","Fish in Lemon Butter Sauce~370~n~Basa fillet, creamy lemon butter","Pesto Fish Steak~370~n~Basa fillet marinated in pesto, creamy pesto sauce","Lamb Steak~400~n~Seasoned lamb, mushroom pepper sauce","Chicken Stroganoff~350~n~Creamy mushroom sauce with white wine, herbed rice","Mushroom Broccoli Stroganoff~330~v~Creamy mushroom sauce, herbed rice","Creamy Prawns in Red Wine~350~n~With mash and salad","Lasagna~300 / 330 / 380~~Veg / Chicken / Lamb"]],
["Salads & Wraps","Leaf me and my salad alone! Wrap your tastebuds!",["Caesar Salad~190 / 220 / 260~~Veg / Chicken / Seafood","Russian Salad~190 / 220 / 260~~Veg / Chicken / Seafood","Greek Salad~190 / 220 / 260~~Veg / Chicken sausage / Seafood","Sauteed Veggies~220 / 250 / 280~~Veg / Chicken sausage / Seafood","Veg Wrap~200~v","Paneer Wrap~240~v","Egg Wrap~220","Chicken Wrap~250~n"]],
["Soups","Soup-herb!",["Cream of Tomato~170~v","Cream of Broccoli~170~v","Cream of Mushroom~170~v","Creamy Chicken~170~n","Clear Veg~150~v","Clear Chicken~160~n"]],
["Desserts","Always save some room!",["Plain Brownie~100~v","Brownie Sundae~140~v","Strawberry Sundae~120~v","Chocolate Sundae~120~v","Affogato~150~v~Hot espresso poured over 2 scoops of ice cream","Banana Split~180~v~Banana with 3 scoops of ice cream and sauce"]],
["Hot drinks","Fancy a cup?",["Tea~80~v","Ginger Tea~80~v","Coffee (Regular)~80~v","Coffee (Filter)~80~v","Cappuccino~130~v","Milk~50~v","Espresso~80~v~100% Arabica","Americano~120~v~Espresso and hot water","Black Tea / Black Coffee / Lemon Tea / Green Tea~80~v","Hot Chocolate~150~v"]],
["Cold drinks","Shaken, iced and mocktailed.",["Iced Tea (Lemon / Peach)~100~v","Cold Coffee~140~v","Greek Frappe~140~v~Whisked coffee with ice and milk","Chocolate / Vanilla / Banana Milk Shake~150~v","Iced Americano~100~v","Lemon Juice~70~v","Lemon Soda~90~v","Coffee Lemonade~140~v~Fresh lemon juice, ice and espresso","Spanish Latte~150~v~Coffee shaken with condensed milk and honey","Salted Caramel Latte / Iced Mocha Latte~180~v","Virgin Mojito~100~v","Black Mojito~120~v","Blue Sky~120~v~Mocktail","Cinderella~120~v~Mocktail","Purple Rain~120~v~Mocktail","Blue Hawaiian Punch~150~v~Mocktail","Strawberry / Mango Punch~150~v~Mocktail","Litchi Lemonade~150~v~Mocktail","Strawberry Colada~150~v~Mocktail"]]
];
const $=s=>document.querySelector(s);let cat="All",ft="",qq="";
document.querySelectorAll("[data-logo]").forEach(i=>i.src=LOGO);
// awning + lights + vines
$("#awn").innerHTML="<i></i>".repeat(Math.ceil(innerWidth/44)+40);
(()=>{const n=4,k=4,W=1000;let d="",h="";for(let s=0;s<n;s++){const x0=s*W/n,x1=(s+1)*W/n;d+=(s?"":`M${x0} 8`)+` Q${(x0+x1)/2} 48 ${x1} 8`;
for(let i=1;i<k;i++){const t=i/k,x=x0+(x1-x0)*t,y=8+80*t*(1-t);h+=`<b style="left:${x/W*100}%;top:${y}px;animation-delay:${(Math.random()*3).toFixed(2)}s"></b>`}}
$("#wire").setAttribute("d",d);$("#lights").insertAdjacentHTML("beforeend",h)})();
function vine(el,n){let h="";for(let i=0;i<n;i++)h+=`<u style="top:${14+i*26}px;left:${i%2?20:-6}px;transform:rotate(${i%2?-25:205}deg);background:hsl(${145+Math.random()*20},45%,${28+Math.random()*14}%)"></u>`;el.style.height=(n*26+20)+"px";el.innerHTML=h}
vine($("#v1"),9);vine($("#v2"),13);
// marquee
const w=["Filter coffee","Shakshuka","Peri peri fries","Brownie sundae","Spanish latte","Pesto pizza","Eggs Benedict","Black mojito"];
$("#mq").innerHTML=w.map(x=>`<span>${x}</span>`).join("");
// menu
function chips(){$("#chips").innerHTML=["All",...M.map(m=>m[0])].map(c=>`<button class="${c===cat?"on":""}" data-c="${c}">${c}</button>`).join("")}
function itemDescription(name,description,category){
 const specific={
  "French Fries":"Golden potato fries with a crisp outside and a soft centre. A familiar savoury snack that is easy to share.",
  "Peri Peri Fries":"Crisp fries tossed with peri peri seasoning for a warm, spicy kick. A punchy twist on a café favourite.",
  "Cheesy Fries":"Hot, crisp fries finished with a generous layer of cheese. A comforting, savoury snack for sharing.",
  "Peri Peri Cheesy Fries":"Crisp fries topped with cheese and peri peri seasoning. Expect a satisfying mix of creamy, savoury and spicy flavours.",
  "Veg Nuggets":"Golden, crunchy vegetable bites with a tender centre. A simple, savoury starter that is easy to enjoy and share.",
  "Cheesy Garlic Bread":"Toasted bread layered with garlic and melted cheese. Crisp at the edges and soft in the middle, it makes a warm starter.",
  "Cheese Corn Balls":"Crisp golden bites with a cheesy corn filling. A warm, savoury snack that is made for sharing.",
  "Butter Garlic Mushrooms":"Mushrooms sautéed with butter and garlic until tender and full of savoury flavour. A warm, hearty starter.",
  "Chilli Garlic Mushrooms":"Mushrooms tossed with chilli and garlic for a savoury, gently spicy bite. A flavourful starter to enjoy warm.",
  "Chilli Garlic Paneer":"Paneer tossed with chilli and garlic for a bold, savoury flavour. A warm vegetarian starter with a little heat.",
  "Tomato Basil Bruschetta":"Toasted bread topped with tomato and basil for a fresh, savoury bite. A light starter with classic café flavours.",
  "Mushroom Bruschetta":"Toasted bread topped with savoury mushrooms. Warm, satisfying and easy to share as a starter.",
  "Chicken Wings (Sweet & Spicy)":"Chicken wings coated in a sweet-and-spicy flavour. Served as a savoury, hands-on starter for the table.",
  "Cajun Style Wings":"Chicken wings seasoned in a Cajun-inspired style for a savoury, gently spiced bite. A hearty starter to share.",
  "Peri Peri Wings":"Chicken wings with peri peri seasoning and a lively, spicy flavour. A bold, satisfying starter for the table.",
  "Butter Garlic Prawns":"Prawns cooked with butter and garlic for a rich, savoury flavour. Enjoy them warm as a seafood starter.",
  "Chilli Garlic Prawns":"Prawns tossed with chilli and garlic for a savoury kick. A flavourful seafood starter served warm.",
  "Fish & Chips":"A classic pairing of fish and crisp chips, served hot for a hearty savoury bite. A filling café favourite.",
  "Fish Fingers":"Crisp, golden fish fingers with a tender centre. A simple seafood starter that is easy to enjoy.",
  "Chicken Fingers":"Tender chicken pieces in a crisp coating, served as a familiar savoury snack. Great for sharing or enjoying on your own.",
  "Dynamite Chicken":"Crisp chicken pieces with a bold, spicy-style finish. A lively starter for guests who enjoy strong flavours.",
  "Dynamite Prawns":"Prawns prepared with a bold, spicy-style finish. A punchy seafood starter served warm.",
  "Chicken Popcorn":"Bite-sized chicken pieces with a crisp coating. A fun, savoury snack that is easy to share around the table.",
  "Chicken Bruschetta":"Toasted bread topped with chicken for a warm, savoury starter. A satisfying café-style bite to share.",
  "Chicken Skewers":"Chicken pieces cooked on skewers and served as a warm, savoury starter. A simple choice for sharing at the table.",
  "Prawns Skewers":"Prawns cooked on skewers for a warm, savoury seafood starter. A satisfying option to enjoy fresh from the kitchen.",
  "Bacon Wrapped Shrimp":"Shrimp wrapped in bacon for a savoury combination of seafood and smoky flavour. A rich, special-occasion style starter.",
  "Peanut Butter & Jam":"A familiar pairing of peanut butter and jam in a simple café sandwich. Sweet, nutty and satisfying for a quick bite.",
  "Grilled Cheese":"A warm grilled sandwich with melted cheese between toasted bread. Crisp outside and comforting inside.",
  "Veg Grill (Paneer)":"A grilled vegetarian sandwich with paneer for a hearty filling. Toasted until warm and easy to enjoy as a light meal.",
  "Veg Grill (Mushroom)":"A grilled vegetarian sandwich filled with mushrooms. Served warm with a savoury filling and toasted bread.",
  "Spinach Corn":"A café sandwich pairing spinach and corn in a mellow, savoury filling. Grilled warm for a comforting bite.",
  "Bombay Grilled":"A toasted café sandwich inspired by the familiar Bombay-style grilled favourite. Warm, savoury and satisfying for a quick meal.",
  "Egg Mayo":"A simple sandwich filled with egg and creamy mayonnaise. A familiar, satisfying choice for a light café meal.",
  "Egg Mayo & Chicken Ham Club":"A layered club sandwich with egg mayonnaise and chicken ham. A hearty combination for a filling lunch.",
  "Classic Chicken":"A café-style chicken sandwich prepared fresh and served between bread. A straightforward, savoury choice for a quick meal.",
  "Chicken Ham":"A simple sandwich filled with chicken ham for a savoury, satisfying bite. Prepared fresh for an easy café lunch.",
  "Chicken Club":"A hearty club sandwich with chicken layered between bread. A filling, savoury choice for lunch or a relaxed café meal.",
  "Egg Mayo & Bacon Club":"A layered club sandwich combining egg mayonnaise and bacon. Rich, savoury and satisfying as a filling café meal.",
  "Veg Burger":"A vegetarian burger with a savoury vegetable patty in a bun. Prepared fresh for a satisfying, easy-to-enjoy meal.",
  "Paneer Burger":"A burger featuring paneer in a bun for a hearty vegetarian bite. A satisfying choice when you want a fuller meal.",
  "Chicken Hot Dog":"A chicken sausage served in a soft hot dog roll. A familiar, savoury café favourite for a quick bite.",
  "Chicken Burger":"A classic chicken burger served in a bun. Prepared fresh for a satisfying meal with familiar, savoury flavours.",
  "Fried Chicken Burger":"A chicken burger with a crisp fried coating. A hearty, satisfying choice for guests who enjoy a little crunch.",
  "Barbequed Chicken Burger":"A chicken burger with a barbecue-inspired savoury flavour. Prepared fresh in a bun for a filling café meal.",
  "Peri Peri Chicken Burger":"A chicken burger seasoned with peri peri flavour for a lively, spicy bite. A hearty choice with a little extra kick.",
  "Lamb Burger":"A savoury lamb patty served in a burger bun. A hearty café favourite, prepared fresh for a satisfying meal.",
  "Pork Burger":"A savoury pork patty served in a burger bun. Prepared fresh for a rich, filling café-style meal.",
  "Chicken Pepperoni Pizza":"A freshly baked pizza topped with chicken pepperoni. A savoury, satisfying choice for sharing around the table.",
  "Double Cheese Burger":"Choose a veg, chicken or lamb patty, stacked with two patties and two cheese slices, then finished with pickle. A rich, filling burger made for a hearty meal.",
  "Spaghetti in Marinara Sauce":"Spaghetti served with marinara, a tomato-based sauce with a bright, savoury flavour. Choose a veg, chicken or seafood version.",
  "Penne in Alfredo Sauce":"Penne coated in a creamy Alfredo-style sauce for a comforting pasta meal. Choose a veg, chicken or seafood version.",
  "Penne in Pesto Sauce":"Penne tossed in a fragrant pesto-style sauce for a savoury, herb-led flavour. Choose a veg, chicken or seafood version.",
  "Spaghetti in Pink Sauce":"Spaghetti served with a creamy pink sauce that balances rich and tangy flavours. Choose a veg, chicken or seafood version.",
  "Spaghetti in Lemon Butter Sauce":"Spaghetti finished with a lemon-butter sauce for a bright, mellow flavour. Choose a veg, chicken or seafood version.",
  "Spaghetti & Meatballs":"Spaghetti paired with meatballs for a hearty, comforting pasta plate. Choose chicken or lamb.",
  "Mac n Cheese":"Macaroni coated in a creamy cheese sauce for a warm, comforting meal. A familiar favourite for cheese lovers.",
  "Lasagna":"Layers of pasta baked with your choice of vegetable, chicken or lamb filling. A hearty, comforting main served warm.",
  "Caesar Salad":"A crisp Caesar-style salad with your choice of veg, chicken or seafood. A fresh, savoury option for a lighter meal.",
  "Russian Salad":"A creamy Russian-style salad with your choice of veg, chicken or seafood. A cool, satisfying option for a lighter meal.",
  "Greek Salad":"A fresh Greek-style salad with your choice of veg, chicken sausage or seafood. A colourful, savoury choice for a lighter meal.",
  "Sauteed Veggies":"A warm plate of sautéed vegetables, with a choice of veg, chicken sausage or seafood. A simple, satisfying option.",
  "Veg Wrap":"A soft wrap filled with a vegetarian filling for a light, easy-to-enjoy meal. Prepared fresh and served ready for the table.",
  "Paneer Wrap":"A soft wrap filled with paneer for a hearty vegetarian bite. Prepared fresh as a satisfying lunch or snack.",
  "Egg Wrap":"A soft wrap filled with egg for a simple, savoury meal. Prepared fresh for a quick and satisfying bite.",
  "Chicken Wrap":"A soft wrap filled with chicken for a hearty, savoury meal. Prepared fresh and easy to enjoy at the table.",
  "Cream of Tomato":"A smooth tomato soup with a mellow, savoury flavour. Served warm as a comforting starter or light meal.",
  "Cream of Broccoli":"A creamy broccoli soup with a gentle, savoury taste. A warm and comforting choice for a light meal.",
  "Cream of Mushroom":"A smooth mushroom soup with a rich, earthy flavour. Served warm for a comforting start or light meal.",
  "Creamy Chicken":"A warm chicken soup with a creamy, savoury finish. A comforting bowl for a light meal or a cosy start.",
  "Clear Veg":"A light, clear vegetable soup served warm. A simple and soothing way to begin a meal.",
  "Clear Chicken":"A light chicken soup with a clear, savoury broth. Served warm for a soothing starter or lighter choice.",
  "Plain Brownie":"A rich chocolate brownie with a soft, dense centre. A small, satisfying treat for a sweet finish.",
  "Brownie Sundae":"A chocolate brownie served with ice cream for a warm-and-cold dessert combination. A satisfying treat to share or enjoy solo.",
  "Strawberry Sundae":"A chilled ice-cream sundae with strawberry flavour. A cool, fruity dessert to finish your meal.",
  "Chocolate Sundae":"A chilled ice-cream sundae with chocolate flavour. A creamy, sweet finish for chocolate lovers.",
  "Tea":"A freshly brewed cup of tea served warm. A familiar, comforting drink to enjoy with a meal or on its own.",
  "Ginger Tea":"Warm tea with a gently spicy ginger flavour. A soothing cup for a relaxed café break.",
  "Coffee (Regular)":"A freshly prepared cup of regular coffee, served warm. A simple café classic for any time of day.",
  "Coffee (Filter)":"A warm cup of filter coffee with a deep, familiar coffee flavour. A comforting choice for a slow café moment.",
  "Cappuccino":"Espresso topped with steamed milk and a light layer of foam. A smooth, warming coffee classic.",
  "Milk":"A simple glass of milk served as a light, straightforward drink. Enjoy it on its own or alongside a meal.",
  "Espresso":"A short, concentrated coffee made with 100% Arabica beans. Bold in flavour and served in a small cup.",
  "Americano":"Espresso lengthened with hot water for a smooth, bold cup. A simple coffee choice without milk.",
  "Black Tea / Black Coffee / Lemon Tea / Green Tea":"Choose black tea, black coffee, lemon tea or green tea, freshly prepared and served warm. A simple drink to enjoy at any time.",
  "Hot Chocolate":"A warm chocolate drink with a smooth, comforting taste. A sweet café classic for a cosy break.",
  "Iced Tea (Lemon / Peach)":"Choose lemon or peach iced tea, served chilled for a refreshing break. A light, easy-to-enjoy drink.",
  "Cold Coffee":"A chilled coffee drink with a smooth, refreshing finish. A cool café pick for coffee lovers.",
  "Chocolate / Vanilla / Banana Milk Shake":"Choose chocolate, vanilla or banana in a cool, creamy milkshake. A sweet and filling drink served chilled.",
  "Iced Americano":"Espresso and cold water served over ice for a crisp, refreshing coffee. A bold chilled choice without milk.",
  "Lemon Juice":"Fresh lemon juice served chilled for a bright, citrusy refreshment. A simple drink to enjoy with a meal.",
  "Lemon Soda":"A sparkling lemon drink with a crisp, citrusy finish. Served chilled for a refreshing café break.",
  "Salted Caramel Latte / Iced Mocha Latte":"Choose a salted caramel latte or an iced mocha latte. A smooth coffee drink with a sweet finish, served warm or chilled.",
  "Virgin Mojito":"A cool, minty lime-style mocktail served without alcohol. A refreshing choice for a relaxed café visit.",
  "Black Mojito":"A dark, refreshing mocktail with a lively citrus-style finish. Served chilled as a bold alternative to a classic mojito.",
  "Blue Sky":"A colourful, alcohol-free mocktail served chilled. A bright and refreshing drink to enjoy with your meal.",
  "Cinderella":"A colourful, alcohol-free mocktail served chilled. A sweet, refreshing choice for a relaxed café break.",
  "Purple Rain":"A vibrant, alcohol-free mocktail with a refreshing finish. Served chilled for a little colour with your meal.",
  "Blue Hawaiian Punch":"A tropical-style, alcohol-free punch served chilled. A bright, fruity refreshment for a warm day.",
  "Strawberry / Mango Punch":"Choose strawberry or mango punch, mixed fresh and served chilled. A fruity, refreshing drink for any time of day.",
  "Litchi Lemonade":"A chilled lemonade with a sweet litchi twist. Bright, fruity and refreshing with a meal or on its own.",
  "Strawberry Colada":"A chilled colada-style drink with strawberry flavour. Smooth, fruity and refreshing for a sweet café treat."
 };
 if(specific[name]) return specific[name];
 const endings={
  "Breakfast":"A hearty, comforting plate that makes an easy start to the day.",
  "Eggs":"Cooked fresh to order, it is a simple and satisfying breakfast choice.",
  "Omelettes":"Freshly cooked and served with buttered toast for a filling breakfast.",
  "Appetizers":"A savoury café starter, made for enjoying at the table or sharing.",
  "Sandwiches":"Made fresh for a satisfying, easy-to-enjoy café meal.",
  "Burgers":"A hearty, freshly prepared choice for a relaxed café meal.",
  "Pizzas":"Baked until hot and ready to share around the table.",
  "Pastas":"A comforting, freshly prepared plate for an easy lunch or dinner.",
  "Main course":"A generous, satisfying plate for a relaxed meal.",
  "Salads & Wraps":"A fresh, easy-to-enjoy choice for a lighter meal.",
  "Soups":"Served warm for a comforting start or a light meal.",
  "Desserts":"A sweet, satisfying finish to your café visit.",
  "Hot drinks":"Prepared fresh and served warm, one cup at a time.",
  "Cold drinks":"Mixed fresh and served chilled for a refreshing break."
 };
 if(description){
  const detail=description.trim().replace(/[. ]+$/,"");
  if(/^on a bed of\s/i.test(detail)){
   return `${name} is served on a bed of ${detail.replace(/^on a bed of\s/i,"").toLowerCase()}. ${endings[category]||"A fresh café favourite, prepared to order."}`;
  }
  if(/^with\s/i.test(detail)){
   return `${name} is prepared fresh and served ${detail.replace(/^with\s/i,"with ").toLowerCase()}. ${endings[category]||"A freshly prepared café favourite."}`;
  }
  if(/^mocktail$/i.test(detail)){
   return `${name} is a refreshing, alcohol-free mocktail, mixed fresh and served chilled. ${endings[category]||"A refreshing choice to enjoy with your meal."}`;
  }
  return `${name} brings together ${detail.charAt(0).toLowerCase()+detail.slice(1)}. ${endings[category]||"A satisfying café favourite, prepared fresh to order."}`;
 }
 const descriptions={
  "Breakfast":`${name} is a freshly prepared breakfast favourite, served as a satisfying plate to enjoy at your own pace. ${endings[category]}`,
  "Eggs":`${name} is cooked fresh to order for a familiar, comforting breakfast. ${endings[category]}`,
  "Omelettes":`${name} is a freshly cooked omelette with a soft, satisfying centre. ${endings[category]}`,
  "Appetizers":`${name} is a savoury starter prepared fresh for the table. ${endings[category]}`,
  "Sandwiches":`${name} is a freshly assembled café sandwich, made for a simple and satisfying bite. ${endings[category]}`,
  "Burgers":`${name} is a hearty café-style burger, prepared fresh and served hot. ${endings[category]}`,
  "Pizzas":`${name} is a freshly baked pizza with a savoury, oven-finished base. ${endings[category]}`,
  "Pastas":`${name} is a comforting pasta dish, prepared fresh and served warm. ${endings[category]}`,
  "Main course":`${name} is a hearty café main, freshly prepared as a complete and satisfying meal. ${endings[category]}`,
  "Salads & Wraps":`${name} is a fresh, easy-to-enjoy café choice prepared to order. ${endings[category]}`,
  "Soups":`${name} is a warm, comforting soup prepared fresh for the table. ${endings[category]}`,
  "Desserts":`${name} is a sweet café treat, prepared to make a lovely finish to your meal. ${endings[category]}`,
  "Hot drinks":`${name} is a classic café drink, prepared fresh and served warm. ${endings[category]}`,
  "Cold drinks":`${name} is a refreshing café drink, mixed fresh and served chilled. ${endings[category]}`
 };
 return descriptions[category]||`${name} is prepared fresh to order as a satisfying café favourite. ${endings[category]||"Enjoy it as part of your visit."}`;
}
function render(){
 let h="";
 M.forEach(([t,tag,items])=>{
  if(cat!=="All"&&cat!==t)return;
  const r=items.map(s=>s.split("~")).filter(([n,p,v,d])=>(!ft||v===ft)&&(!qq||(n+" "+(d||"")).toLowerCase().includes(qq)));
  if(!r.length)return;
  h+=`<div class="cat"><h3>${t}</h3><p>${tag}</p><div class="items">`+r.map(([n,p,v,d])=>{
   const prices=p.split("/").map(x=>Number(x.trim()));
   let variantOptions="";
   if(prices.length>1){
    let labels=["Veg","Chicken","Seafood"];
    if(d&&d.includes("/"))labels=d.split("/").map((x,i)=>i===0?x.trim():x.split(",")[0].trim());
    if(labels.length!==prices.length)labels=prices.map((_,i)=>`Option ${i+1}`);
    variantOptions=`<select class="variant" aria-label="Choose option for ${n}">${prices.map((price,i)=>`<option value="${price}" data-label="${labels[i]||`Option ${i+1}`}">${labels[i]||`Option ${i+1}`} - Rs ${price}</option>`).join("")}</select>`;
   }
   const description=itemDescription(n,d&& !d.includes("/")?d:"",t);
   const displayPrice=prices.length>1?`Rs ${prices[0]}–${prices[prices.length-1]}`:`Rs ${prices[0]}`;
   return `<div class="it" data-category="${t}" data-name="${n}"><div class="item-copy"><div class="nm">${v?`<span class="d ${v}"></span>`:""}<button class="it-name-button" type="button" aria-expanded="false">${n}</button></div></div><div class="add-row"><span class="pr">${displayPrice}</span>${variantOptions}<div class="menu-control"></div></div><div class="item-details" hidden><p>${description}</p></div></div>`;
  }).join("")+`</div></div>`;
 });
 $("#out").innerHTML=h||`<p class="none">No dishes match. Clear the search or choose All.</p>`;
 updateMenuControls();
}
$("#chips").onclick=e=>{const c=e.target.dataset.c;if(!c)return;cat=c;chips();render()};
$("#f").onclick=e=>{if(e.target.dataset.f===undefined)return;ft=e.target.dataset.f;document.querySelectorAll("#f button").forEach(b=>b.classList.toggle("on",b===e.target));render()};
$("#q").oninput=e=>{qq=e.target.value.trim().toLowerCase();render()};

const cart=new Map();
function cartKey(name,label){return label?name+"|"+label:name}
function updateCart(){
 let count=0,total=0;
 let html="";
 cart.forEach((line,key)=>{
  count+=line.qty;
  total+=line.price*line.qty;
  html+=`<div class="cart-line"><div><strong>${line.name}</strong>${line.label?`<small>${line.label}</small>`:""}</div><div class="qty"><button type="button" data-cart-key="${key}" data-change="-1" aria-label="Decrease quantity">−</button><span>${line.qty}</span><button type="button" data-cart-key="${key}" data-change="1" aria-label="Increase quantity">+</button></div></div>`;
 });
 $("#cartLines").innerHTML=html||`<p class="lead">Your cart is empty. Add a few favourites to start your shortlist.</p>`;
 $("#cartCount").textContent=count;
 $("#cartCountFloat").textContent=count;
 $("#cartTotal").textContent=total;
 updateMenuControls();
}
function updateMenuControls(){
 document.querySelectorAll("#out .it").forEach(row=>{
  const select=row.querySelector(".variant");
  const selected=select&&select.selectedOptions[0];
  const label=selected?selected.dataset.label||"": "";
  const line=cart.get(cartKey(row.dataset.name,label));
  const control=row.querySelector(".menu-control");
  if(line){
   control.innerHTML=`<div class="menu-qty"><button class="menu-action" type="button" data-change="-1" aria-label="Remove one ${row.dataset.name}">−</button><span aria-live="polite">${line.qty}</span><button class="menu-action" type="button" data-change="1" aria-label="Add one ${row.dataset.name}">+</button></div>`;
  }else{
   control.innerHTML=`<button class="add-btn menu-action" type="button" data-change="1" aria-label="Add ${row.dataset.name} to cart">Add</button>`;
  }
 });
}
$("#out").addEventListener("click",e=>{
 const nameButton=e.target.closest(".it-name-button");
 if(nameButton){
  const details=nameButton.closest(".it").querySelector(".item-details");
  const expanded=nameButton.getAttribute("aria-expanded")==="true";
  details.hidden=expanded;
  nameButton.setAttribute("aria-expanded",String(!expanded));
  return;
 }
 const action=e.target.closest(".menu-action");
 if(!action)return;
 const row=action.closest(".it");
 const select=row.querySelector(".variant");
 let price=Number(row.querySelector(".pr").textContent.replace(/[^\d]/g,"")),label="";
 if(select){const selected=select.selectedOptions[0];price=Number(selected.value);label=selected.dataset.label||""}
 const key=cartKey(row.dataset.name,label);
 const existing=cart.get(key);
 const qty=(existing?existing.qty:0)+Number(action.dataset.change);
 if(qty<=0)cart.delete(key);
 else cart.set(key,{name:row.dataset.name,label,price,qty});
 updateCart();
});
$("#out").addEventListener("change",e=>{
 if(e.target.matches(".variant"))updateMenuControls();
});
$("#cartLines").onclick=e=>{
 const button=e.target.closest("[data-cart-key]");
 if(!button)return;
 const key=button.dataset.cartKey;
 const line=cart.get(key);
 if(!line)return;
 line.qty+=Number(button.dataset.change);
 if(line.qty<=0)cart.delete(key);else cart.set(key,line);
 updateCart();
};
const toggleCart=()=>$("#cartDrawer").classList.toggle("open");
$("#cartOpen").onclick=toggleCart;
$("#cartFloat").onclick=toggleCart;
$("#cartClose").onclick=()=>$("#cartDrawer").classList.remove("open");
let lastScrollY=window.scrollY;
window.addEventListener("scroll",()=>{
 const currentScrollY=window.scrollY;
 if(currentScrollY<70) document.body.classList.remove("nav-hidden");
 else if(currentScrollY-lastScrollY>4) document.body.classList.add("nav-hidden");
 else if(lastScrollY-currentScrollY>4) document.body.classList.remove("nav-hidden");
 if(Math.abs(currentScrollY-lastScrollY)>4) lastScrollY=currentScrollY;
},{passive:true});
updateCart();
chips();render();

// Table-aware QR landing
const tableNumber=new URLSearchParams(location.search).get("table");

$("#moodOptions").addEventListener("click",event=>{
 const button=event.target.closest("[data-category]");
 if(!button)return;
 cat=button.dataset.category;
 chips();
 render();
 $("#moodMessage").textContent=`A little ${button.textContent.toLowerCase()} inspiration—here's our ${cat.toLowerCase()} menu.`;
 $("#menu").scrollIntoView({behavior:"smooth",block:"start"});
});

$("#placeOrder").addEventListener("click",()=>{
 if(!cart.size){
  $("#orderConfirmation").hidden=false;
  $("#orderConfirmation").innerHTML="<strong>No items yet</strong><p>Add a dish before showing the order at the counter.</p>";
  return;
 }
 const table=tableNumber&&/^[a-zA-Z0-9 -]{1,12}$/.test(tableNumber)?`Table ${tableNumber.trim()}`:"Order for counter";
 const lines=[...cart.values()].map(line=>`<li>${line.qty} × ${line.name}${line.label?` (${line.label})`:""} — Rs ${line.price*line.qty}</li>`).join("");
 $("#orderConfirmation").hidden=false;
 $("#orderConfirmation").innerHTML=`<strong>${table}</strong><ul>${lines}</ul><p><b>Total: Rs ${$("#cartTotal").textContent}</b></p><p>Please show this screen to the billing counter to confirm and pay.</p>`;
 $("#orderConfirmation").scrollIntoView({behavior:"smooth",block:"nearest"});
});
