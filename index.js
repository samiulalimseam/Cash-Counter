


function calculate () {
    var items = prompt('Enter the number of items');
var arrItemName = [];
var arrItemQuantity = [];
var arrItemPrice = [];
var itemSubTotal, itemQuantity, bill=0;
var outputArr= '';
    for(var i = 0; i<items; i++){
        arrItemName[i] =  prompt('Enter the name of item no '+(i+1));
        itemSubTotal = prompt('Enter the price of '+arrItemName[i]);
        arrItemPrice[i] = itemSubTotal;
        itemQuantity = prompt('Enter the quantity of '+arrItemName[i]);
        arrItemQuantity [i] = itemQuantity; 
        bill = bill + (itemSubTotal*itemQuantity);
    } 
    for(i= 0; i<arrItemName.length;i++){
        outputArr = outputArr +  ((i+1))+'.'+arrItemName[i] +'(s), Quantity- '+arrItemQuantity[i]+ ','+ ' Unit price- '+arrItemPrice[i]+ ','+' Subtotal: '+(arrItemQuantity[i]* arrItemPrice[i] + '<br>');
        
    }
    
    document.getElementById('bill1').innerHTML =( outputArr+ '<br>'+'Total: '+ bill);
    
}



