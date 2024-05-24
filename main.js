let totalCost = 0;
let orderItems = [];
let cart = [];

function addItem(itemName, price, img) {
    totalCost += price;
    document.getElementById("total_cost").value = totalCost.toFixed(2);

    let item = {
        prod_name: itemName,
        prod_price: price
    };
    orderItems.push(item);

    updateCustOrder();
    updateOrderList();
    console.log("Added item: " + itemName + " (Ⓥ" + price + ")");

    var newItem = {
        name: itemName,
        price: price,
        img: img
    };
    cart.push(newItem);
    saveCart();
}

function updateCustOrder() {
    document.getElementById("cust_order").value = JSON.stringify(orderItems);
}

function updateOrderList() {
    let ulMyOrder = document.getElementById("ulMyOrder");
    ulMyOrder.innerHTML = '';
    orderItems.forEach((item, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `<h5 class="mb-0"><strong>${item.prod_name}</strong></h5>
                        <p>Ⓥ${item.prod_price.toFixed(2)}</p>
                        <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">REMOVE</button>`;
        ulMyOrder.appendChild(li);
    });
}

function removeItem(index) {
    totalCost -= orderItems[index].prod_price;
    document.getElementById("total_cost").value = totalCost.toFixed(2);

    orderItems.splice(index, 1);
    cart.splice(index, 1);

    updateCustOrder();
    updateOrderList();
    saveCart();
    displayCart();
}

function loadCart() {
    try {
        if (localStorage.getItem("cart") !== null) {
            var cart_str = localStorage.getItem("cart");
            cart = JSON.parse(cart_str);
        }
        displayCart();
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
    }
}

function displayCart() {
    var cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<li class="list-group-item">Your cart is empty.</li>';
    } else {
        cart.forEach(function(item) {
            var li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = `<img src="${item.img}" alt="${item.name}" class="img-thumbnail" style="width: 50px; height: 50px;"> ${item.name} - Ⓥ${item.price}`;
            cartItems.appendChild(li);
        });
    }

    updateTotalCost();
}

function saveCart() {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
    }
}

function clearCart() {
    if (cart.length === 0) {
        alert("Your cart is already empty.");
    } else {
        var confirmation = confirm("Are you sure you want to clear your cart?");
        if (confirmation) {
            localStorage.removeItem("cart");
            cart = [];
            clearOrder();
            displayCart();
        }
    }
}

function clearOrder() {
    document.getElementById("ulMyOrder").innerHTML = "";
    orderItems = [];
    totalCost = 0;
    document.getElementById("total_cost").value = totalCost.toFixed(2);
    updateCustOrder();
}



function Skins() {
    document.getElementById('cardTitle1').innerText = 'MYSTBLOOM PHANTOM';
    document.getElementById('price1').innerText = 'Ⓥ 2175';
    document.getElementById('img1').src = 'img/Mystbloom_Phantom.png';
    document.getElementById('item1').setAttribute('onclick', "addItem('MYSTBLOOM PHANTOM', 2175, 'img/Mystbloom_Phantom.png')");
    document.getElementById('item1').setAttribute('data-name', 'MYSTBLOOM PHANTOM');
    document.getElementById('item1').setAttribute('data-price', '2175');

    document.getElementById('cardTitle2').innerText = 'MYSTBLOOM KUNAI';
    document.getElementById('price2').innerText = 'Ⓥ 4350';
    document.getElementById('img2').src = 'img/Mystbloom_Kunai.png';
    document.getElementById('item2').setAttribute('onclick', "addItem('MYSTBLOOM KUNAI', 4350, 'img/Mystbloom_Kunai.png')");
    document.getElementById('item2').setAttribute('data-name', 'MYSTBLOOM KUNAI');
    document.getElementById('item2').setAttribute('data-price', '4350');

    document.getElementById('cardTitle3').innerText = 'ONI VANDAL';
    document.getElementById('price3').innerText = 'Ⓥ 1775';
    document.getElementById('img3').src = 'img/Oni_Vandal.png';
    document.getElementById('item3').setAttribute('onclick', "addItem('ONI VANDAL', 1775, 'img/Oni_Vandal.png')");
    document.getElementById('item3').setAttribute('data-name', 'ONI VANDAL');
    document.getElementById('item3').setAttribute('data-price', '1775');

    document.getElementById('cardTitle4').innerText = 'ONIMARU KUNITSUNA';
    document.getElementById('price4').innerText = 'Ⓥ 4350';
    document.getElementById('img4').src = 'img/Onimaru_Kunitsuna.png';
    document.getElementById('item4').setAttribute('onclick', "addItem('ONIMARU KUNITSUNA', 4350, 'img/Onimaru_Kunitsuna.png')");
    document.getElementById('item4').setAttribute('data-name', 'ONIMARU KUNITSUNA');
    document.getElementById('item4').setAttribute('data-price', '4350');

    document.getElementById('cardTitle5').innerText = 'REAVER PHANTOM';
    document.getElementById('price5').innerText = 'Ⓥ 1775';
    document.getElementById('img5').src = 'img/Reaver_Phantom.png';
    document.getElementById('item5').setAttribute('onclick', "addItem('REAVER PHANTOM', 1775, 'img/Reaver_Phantom.png')");
    document.getElementById('item5').setAttribute('data-name', 'REAVER PHANTOM');
    document.getElementById('item5').setAttribute('data-price', '1775');

    document.getElementById('cardTitle6').innerText = 'REAVER KARAMBIT';
    document.getElementById('price6').innerText = 'Ⓥ 4350';
    document.getElementById('img6').src = 'img/Reaver_Karambit.png';
    document.getElementById('item6').setAttribute('onclick', "addItem('REAVER KARAMBIT', 4350, 'img/Reaver_Karambit.png')");
    document.getElementById('item6').setAttribute('data-name', 'REAVER KARAMBIT');
    document.getElementById('item6').setAttribute('data-price', '4350');

    document.getElementById('cardTitle7').innerText = 'SENTINELS OF LIGHT VANDAL';
    document.getElementById('price7').innerText = 'Ⓥ 2175';
    document.getElementById('img7').src = 'img/Sentinels_of_Light_Vandal.png';
    document.getElementById('item7').setAttribute('onclick', "addItem('SENTINELS OF LIGHT VANDAL', 2175, 'img/Sentinels_of_Light_Vandal.png')");
    document.getElementById('item7').setAttribute('data-name', 'SENTINELS OF LIGHT VANDAL');
    document.getElementById('item7').setAttribute('data-price', '2175');

    document.getElementById('cardTitle8').innerText = 'RELIC STONE DAGGERS';
    document.getElementById('price8').innerText = 'Ⓥ 4350';
    document.getElementById('img8').src = 'img/Relic_Stone_Daggers.png';
    document.getElementById('item8').setAttribute('onclick', "addItem('RELIC STONE DAGGERS', 4350, 'img/Relic_Stone_Daggers.png')");
    document.getElementById('item8').setAttribute('data-name', 'RELIC STONE DAGGERS');
    document.getElementById('item8').setAttribute('data-price', '4350');
}

function PCards() {
    document.getElementById('cardTitle1').innerText = 'MYSTBLOOM CARD';
    document.getElementById('price1').innerText = 'Ⓥ 375';
    document.getElementById('img1').src = 'img/Mystbloom_Card.png';
    document.getElementById('item1').setAttribute('onclick', "addItem('MYSTBLOOM CARD', 375, 'img/Mystbloom_Card.png')");
    document.getElementById('item1').setAttribute('data-name', 'MYSTBLOOM CARD');
    document.getElementById('item1').setAttribute('data-price', '375');

    document.getElementById('cardTitle2').innerText = 'ONI 2.0 CARD';
    document.getElementById('price2').innerText = 'Ⓥ 375';
    document.getElementById('img2').src = 'img/Oni2C_Ep_6_Card.png';
    document.getElementById('item2').setAttribute('onclick', "addItem('ONI 2.0 CARD', 375, 'img/Oni2C_Ep_6_Card.png')");
    document.getElementById('item2').setAttribute('data-name', 'ONI 2.0 CARD');
    document.getElementById('item2').setAttribute('data-price', '375');

    document.getElementById('cardTitle3').innerText = 'REAVER CARD';
    document.getElementById('price3').innerText = 'Ⓥ 375';
    document.getElementById('img3').src = 'img/Reaver2C_EP_5_Card.png';
    document.getElementById('item3').setAttribute('onclick', "addItem('REAVER CARD', 375, 'img/Reaver2C_EP_5_Card.png')");
    document.getElementById('item3').setAttribute('data-name', 'REAVER CARD');
    document.getElementById('item3').setAttribute('data-price', '375');

    document.getElementById('cardTitle4').innerText = 'GLITCHPOP CARD';
    document.getElementById('price4').innerText = 'Ⓥ 375';
    document.getElementById('img4').src = 'img/Glitchpop2C_EP_2_Card.png';
    document.getElementById('item4').setAttribute('onclick', "addItem('GLITCHPOP CARD', 375, 'img/Glitchpop2C_EP_2_Card.png')");
    document.getElementById('item4').setAttribute('data-name', 'GLITCHPOP CARD');
    document.getElementById('item4').setAttribute('data-price', '375');

    document.getElementById('cardTitle5').innerText = 'SENTINEL OF LIGHT CARD';
    document.getElementById('price5').innerText = 'Ⓥ 375';
    document.getElementById('img5').src = 'img/Sentinels_of_Light_2C_Ep_7_Card.png';
    document.getElementById('item5').setAttribute('onclick', "addItem('SENTINEL OF LIGHT CARD', 375, 'Sentinels_of_Light_2C_Ep_7_Card.png')");
    document.getElementById('item5').setAttribute('data-name', 'SENTINEL OF LIGHT CARD');
    document.getElementById('item5').setAttribute('data-price', '375');

    document.getElementById('cardTitle6').innerText = 'BE MINE: JETT CARD';
    document.getElementById('price6').innerText = 'Ⓥ 375';
    document.getElementById('img6').src = 'img/Be_Mine_Jett_Card.png';
    document.getElementById('item6').setAttribute('onclick', "addItem('BE MINE: JETT CARD', 375, 'img/Be_Mine_Jett_Card.png')");
    document.getElementById('item6').setAttribute('data-name', 'BE MINE: JETT CARD');
    document.getElementById('item6').setAttribute('data-price', '375');

    document.getElementById('cardTitle7').innerText = 'COMMANDER BRUNO';
    document.getElementById('price7').innerText = 'Ⓥ 375';
    document.getElementById('img7').src = 'img/Commander_Bruno_Card.png';
    document.getElementById('item7').setAttribute('onclick', "addItem('COMMANDER BRUNO', 375, 'img/Commander_Bruno_Card.png')");
    document.getElementById('item7').setAttribute('data-name', 'COMMANDER BRUNO');
    document.getElementById('item7').setAttribute('data-price', '375');

    document.getElementById('cardTitle8').innerText = 'LIVING THE NIGHTMARE';
    document.getElementById('price8').innerText = 'Ⓥ 375';
    document.getElementById('img8').src = 'img/Living_The_Nightmare_Card.png';
    document.getElementById('item8').setAttribute('onclick', "addItem('LIVING THE NIGHTMARE', 375, 'img/Living_The_Nightmare_Card.png')");
    document.getElementById('item8').setAttribute('data-name', 'LIVING THE NIGHTMARE');
    document.getElementById('item8').setAttribute('data-price', '375');
}

function Buddies() {
    document.getElementById('cardTitle1').innerText = 'HAPPY DUMPLING';
    document.getElementById('price1').innerText = 'Ⓥ 475';
    document.getElementById('img1').src = 'img/Happy_Dumpling_Buddy.png';
    document.getElementById('item1').setAttribute('onclick', "addItem('HAPPY DUMPLING', 475, 'img/Happy_Dumpling_Buddy.png')");
    document.getElementById('item1').setAttribute('data-name', 'HAPPY DUMPLING');
    document.getElementById('item1').setAttribute('data-price', '475');

    document.getElementById('cardTitle2').innerText = 'ONI BUDDY';
    document.getElementById('price2').innerText = 'Ⓥ 475';
    document.getElementById('img2').src = 'img/Oni_Buddy.png';
    document.getElementById('item2').setAttribute('onclick', "addItem('ONI BUDDY', 475, 'img/Oni_Buddy.png')");
    document.getElementById('item2').setAttribute('data-name', 'ONI BUDDY');
    document.getElementById('item2').setAttribute('data-price', '475');

    document.getElementById('cardTitle3').innerText = 'GOOD BOY BRUNO';
    document.getElementById('price3').innerText = 'Ⓥ 475';
    document.getElementById('img3').src = 'img/Good_Boy2C_Bruno_Buddy.png';
    document.getElementById('item3').setAttribute('onclick', "addItem('GOOD BOY BRUNO', 475, 'img/Good_Boy2C_Bruno_Buddy.png')");
    document.getElementById('item3').setAttribute('data-name', 'GOOD BOY BRUNO');
    document.getElementById('item3').setAttribute('data-price', '475');

    document.getElementById('cardTitle4').innerText = 'CELESTIAL BUDDY';
    document.getElementById('price4').innerText = 'Ⓥ 475';
    document.getElementById('img4').src = 'img/Celestial_Buddy.png';
    document.getElementById('item4').setAttribute('onclick', "addItem('CELESTIAL BUDDY', 475, 'img/Celestial_Buddy.png')");
    document.getElementById('item4').setAttribute('data-name', 'CELESTIAL BUDDY');
    document.getElementById('item4').setAttribute('data-price', '475');

    document.getElementById('cardTitle5').innerText = 'ANCIENT MYSTERIES REVEALED';
    document.getElementById('price5').innerText = 'Ⓥ 475';
    document.getElementById('img5').src = 'img/Ancient_Mysteries_Revealed_Buddy.png';
    document.getElementById('item5').setAttribute('onclick', "addItem('ANCIENT MYSTERIES REVEALED', 475, 'Ancient_Mysteries_Revealed_Buddy.png')");
    document.getElementById('item5').setAttribute('data-name', 'ANCIENT MYSTERIES REVEALED');
    document.getElementById('item5').setAttribute('data-price', '475');

    document.getElementById('cardTitle6').innerText = 'REAVER BUDDY';
    document.getElementById('price6').innerText = 'Ⓥ 475';
    document.getElementById('img6').src = 'img/Reaver 2C_EP_5_Buddy.png';
    document.getElementById('item6').setAttribute('onclick', "addItem('REAVER BUDDY', 475, 'img/Reaver 2C_EP_5_Buddy.png')");
    document.getElementById('item6').setAttribute('data-name', 'REAVER BUDDY');
    document.getElementById('item6').setAttribute('data-price', '475');

    document.getElementById('cardTitle7').innerText = 'FIST BUMP';
    document.getElementById('price7').innerText = 'Ⓥ 475';
    document.getElementById('img7').src = 'img/Fist_Bump_Buddy.png';
    document.getElementById('item7').setAttribute('onclick', "addItem('FIST BUMP', 475, 'img/Fist_Bump_Buddy.png')");
    document.getElementById('item7').setAttribute('data-name', 'FIST BUMP');
    document.getElementById('item7').setAttribute('data-price', '475');

    document.getElementById('cardTitle8').innerText = 'DAYDREAMS';
    document.getElementById('price8').innerText = 'Ⓥ 475';
    document.getElementById('img8').src = 'img/Daydreams_Buddy.png';
    document.getElementById('item8').setAttribute('onclick', "addItem('DAYDREAMS', 475, 'img/Daydreams_Buddy.png')");
    document.getElementById('item8').setAttribute('data-name', 'DAYDREAMS');
    document.getElementById('item8').setAttribute('data-price', '475');
}

function Sprays() {
    document.getElementById('cardTitle1').innerText = 'DUMPSTER FIRE';
    document.getElementById('price1').innerText = 'Ⓥ 325';
    document.getElementById('img1').src = 'img/Dumpster_Fire_Spray.png';
    document.getElementById('item1').setAttribute('onclick', "addItem('DUMPSTER FIRE SPRAY', 325, 'img/Dumpster_Fire_Spray.png')");
    document.getElementById('item1').setAttribute('data-name', 'DUMPSTER FIRE SPRAY');
    document.getElementById('item1').setAttribute('data-price', '325');

    document.getElementById('cardTitle2').innerText = "DUO'S DAY LEFT";
    document.getElementById('price2').innerText = 'Ⓥ 325';
    document.getElementById('img2').src = 'img/Duo 27s_Day_Left_Spray.png';
    document.getElementById('item2').setAttribute('onclick', "addItem('DUOS DAY LEFT', 325, 'img/Duo 27s_Day_Left_Spray.png')");
    document.getElementById('item2').setAttribute('data-name', "DUO'S DAY LEFT");
    document.getElementById('item2').setAttribute('data-price', '325');

    document.getElementById('cardTitle3').innerText = "DUO'S DAY RIGHT";
    document.getElementById('price3').innerText = 'Ⓥ 325';
    document.getElementById('img3').src = 'img/Duo 27s_Day_Right_Spray.png';
    document.getElementById('item3').setAttribute('onclick', "addItem('DUOS DAY RIGHT', 325, 'img/Duo 27s_Day_Right_Spray.png')");
    document.getElementById('item3').setAttribute('data-name', "DUO'S DAY RIGHT");
    document.getElementById('item3').setAttribute('data-price', '325');

    document.getElementById('cardTitle4').innerText = 'EMBARRASSING SPRAY';
    document.getElementById('price4').innerText = 'Ⓥ 325';
    document.getElementById('img4').src = 'img/Embarrassing 21_Spray.png';
    document.getElementById('item4').setAttribute('onclick', "addItem('EMBARRASSING SPRAY', 325, 'img/Embarrassing 21_Spray.png')");
    document.getElementById('item4').setAttribute('data-name', 'EMBARRASSING SPRAY');
    document.getElementById('item4').setAttribute('data-price', '325');

    document.getElementById('cardTitle5').innerText = 'MATCHA BREAK';
    document.getElementById('price5').innerText = 'Ⓥ 325';
    document.getElementById('img5').src = 'img/Matcha_Break_Spray.png';
    document.getElementById('item5').setAttribute('onclick', "addItem('MATCHA BREAK', 325, 'Matcha_Break_Spray.png')");
    document.getElementById('item5').setAttribute('data-name', 'MATCHA BREAK');
    document.getElementById('item5').setAttribute('data-price', '325');

    document.getElementById('cardTitle6').innerText = 'NICE TO ZAP YOU';
    document.getElementById('price6').innerText = 'Ⓥ 325';
    document.getElementById('img6').src = 'img/Nice_To_Zap_You_Spray.png';
    document.getElementById('item6').setAttribute('onclick', "addItem('NICE TO ZAP YOU', 325, 'img/Nice_To_Zap_You_Spray.png')");
    document.getElementById('item6').setAttribute('data-name', 'NICE TO ZAP YOU');
    document.getElementById('item6').setAttribute('data-price', '325');

    document.getElementById('cardTitle7').innerText = 'OCTO ATTACK 2';
    document.getElementById('price7').innerText = 'Ⓥ 325';
    document.getElementById('img7').src = 'img/Octo_Attack_2_Spray.png';
    document.getElementById('item7').setAttribute('onclick', "addItem('OCTO ATTACK 2', 325, 'img/Octo_Attack_2_Spray.png')");
    document.getElementById('item7').setAttribute('data-name', 'OCTO ATTACK 2');
    document.getElementById('item7').setAttribute('data-price', '325');

    document.getElementById('cardTitle8').innerText = "WHAT'S THAT SPRAY";
    document.getElementById('price8').innerText = 'Ⓥ 325';
    document.getElementById('img8').src = 'img/What 27s_That_Spray.png';
    document.getElementById('item8').setAttribute('onclick', "addItem('WHATS THAT SPRAY', 325, 'img/What 27s_That_Spray.png')");
    document.getElementById('item8').setAttribute('data-name', "WHAT'S THAT?");
    document.getElementById('item8').setAttribute('data-price', '325');
}

loadCart();
