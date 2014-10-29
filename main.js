/**
 * Created by Smax on 10/25/2014.
 */


//global vars
var ticker = 0;
var orders = {
    cheese: "0",
    patties: "0",
    fry: "0",
    drink: "0",
    pickles: "0",
    tomatoes: "0"
};
var orderTicker = 0;
var currentOrder = {};
var order1 = "";
var bagAmount = 0;
var myVar = {};

var count=30;
var counter=setInterval(startTimer, 1000); //1000 will  run it every 1 second


$(window).bind("load", function () {

    order1 = a1text;
    currentOrder = a1order[0];

    startTimer();

    makeOrder();
});

//toggle amount
$('body').on('click', '.btn', function () {

    var thisBtn = $(this).next().find('h3');
    var currentAmtValue = $(this).next().find('h3').html();

    //console.log(currentAmtValue);
    if(currentAmtValue < 3){
        ++currentAmtValue;
        $(this).next().find('h3').html(currentAmtValue);
    }
    else{
        $(this).next().find('h3').html('0');
    }
});


$('body').on('click', 'div.midBtnCol > .btn', function () {
    $(this).find('div.lightBox').addClass("btnFade");
    setTimeout(function(){ $('div.lightBox').removeClass("btnFade"); }, 100);
});

$('body').on('click', 'div.genBtn', function () {


    //pull the burger selections
    burgerSelections();


    //find lightbox3 in div and make it glow
    $('div.lightBox3').addClass("btnFade3");

    //fade back to yellow
    setTimeout(function(){ $('div.lightBox3').removeClass("btnFade3"); }, 100);

    //turn off buttons
    $('div.lightBox2').removeClass("btnFade2");
    $('div.lightBox2').removeClass("btnFade4");

    //reset Amts
    $('.buttonSec').find('h3').html('0');
});

$('body').on('click', 'div#col1 > .btn', function () {

    if($(this).find('div.lightBox2').hasClass("btnFade2")) {
        $(this).find('div.lightBox2').removeClass("btnFade2");
    }
    else
    {
        $(this).find('div.lightBox2').addClass("btnFade2");
    }
});

$('body').on('click', 'div#col3 > .btn', function () {

    if($(this).find('div.lightBox2').hasClass("btnFade4")) {
        $(this).find('div.lightBox2').removeClass("btnFade4");
    }
    else
    {
        $(this).find('div.lightBox2').addClass("btnFade4");
    }
});




var i = 0;

function burgerSelections(){
    //from click on generate button
    var thisFrySize = "";
    var thisDrinkSize = "";



    //set burger selections as variables
    //find h2 != 0 and .btnFade2
    $('.btnFade2').each(function(){
        thisFrySize = $(this).parent().closest('.btn').attr('id');
        //console.log("dude faded on: " + disId);

        //currentOrder.others = disId;

        ++i;

    });

    $('.btnFade4').each(function(){
        thisDrinkSize = $(this).parent().closest('.btn').attr('id');
        //console.log("dude faded on: " + disId);

        //currentOrder.others = disId;


    });
    orders.fry = thisFrySize;
    orders.drink = thisDrinkSize;

    ++i;
    //get burger amounts

    var patties = $('h3#patties').html();
    var cheese = $('h3#cheese').html();
    var pickles = $('h3#pickles').html();
    var tomatoes = $('h3#tomatoes').html();
    //console.log(patties + cheese + pickles + tomatoes);
    orders.patties = patties;
    orders.cheese = cheese;
    orders.pickles = pickles;
    orders.tomatoes = tomatoes;

    if(patties+cheese+pickles+tomatoes != 0){


        $('div.burgerBag:nth-child(2)').animate({
            'opacity':'1.0',
            'height':'100%'
        }, 300, function() {
            // Animation complete.
        });
    };
    ++i;

    switch(orders.drink){
        case "":
            console.log("no drink");
            break;
        case "small":
        case "medium":
        case "large":
            $('div.burgerBag:first-child').animate({
                'opacity':'1.0',
                'height':'100%'
            }, 300, function() {
                // Animation complete.
            });
            break;
    }
    switch(orders.fry){
        case "":
            console.log("no fry");
            break;
        case "small":
        case "medium":
        case "large":
            $('div.burgerBag:nth-child(3)').animate({
                'opacity':'1.0',
                'height':'100%'
            }, 300, function() {
                // Animation complete.
            });
            break;
    }





    checkOrder(orders);


};

//global var that contains items of current order


function makeOrder() {

    console.log("making an order with: ");
    console.log(currentOrder);



    setTimeout(function(){
        $('div.statusText h1').html("Incoming");
        $('div.statusText h1').css("color","gold");}, 2000);

    /*
     currentOrder = {
     cheese: "2",
     drink: "large",
     fry: "small",
     patties: "2",
     pickles: "0",
     tomatoes: "0"
     }
     */
    $('div.orderText h1').empty();

    // newText = order1;
    clearInterval(myVar);
    ticker = 0;
    console.log(orderTicker);
    printer(a1text[orderTicker]);


}


function printer(order){

    var orderLength = order.length;

    myVar=setInterval(function () {
        if(ticker < orderLength){
            $('div.orderText h1').append(order[ticker]);
        }
        else{
            clearInterval(myVar);
        }
        ++ticker;
    }, 50);




}

//check the order, if nothing invalid do nothing, if invalid wipe, if success end
function checkOrder(){



    $('div.statusText h1').html("Checking");
    $('div.statusText h1').css("color","lightblue");

    $('div.dropZoneCover').animate({
        'opacity':'1.0',
        'height':'120px'
    }, 400, function() {
        // Animation complete.
    });


    setTimeout(function(){

        console.log("The request is: ");
        console.log(currentOrder);
        console.log("The submission is: ");
        console.log(orders);

        if(orders.fry === currentOrder.fry &&
            orders.cheese === currentOrder.cheese &&
            orders.drink === currentOrder.drink &&
            orders.patties === currentOrder.patties &&
            orders.pickles === currentOrder.pickles &&
            orders.tomatoes === currentOrder.tomatoes){
            console.log("Wiiiiiiiiiiiiiiiiiiiiiinner");

            $('div.statusText h1').html("Success");
            $('div.statusText h1').css("color","lime");

            ++orderTicker;

            order1 = a1text[orderTicker];
            currentOrder = [];
            currentOrder = a1order[orderTicker];

            console.log(currentOrder);
            ticker = 0;


            makeOrder();
            destroyBags();


        }
        else{
            $('div.statusText h1').html("Failure");
            $('div.statusText h1').css("color","red");
            console.log("you suck");
            destroyBags();
        };

        $('div.dropZoneCover').animate({

            'height':'0px'
        }, 400, function() {
            // Animation complete.
        });
    }, 2000);
}

function destroyBags(){
    $('div.burgerBag').animate({
        'height':'0px'
    }, 300, function() {
        // Animation complete.
    });
}

function startTimer()
{
    count=count-1;
    $('div.timer h2').html(count);
    if (count <= 0)
    {
        clearInterval(counter);
        //counter ended, do something here
        console.log("game over dude.")
        return;
    }

    //Do code for showing the number of seconds here
}