var tableFirstNum = +prompt("Enter Your Table Number");
var tableLirstNum = +prompt("Enter Your Table End Number");

for(var i = 1; i<=tableLirstNum; i++){
    document.write(`${tableFirstNum} x ${i} = ${tableFirstNum*i} <br>`)
}if(tableFirstNum==null){
    alert("Please enter Table Number");
}else if(tableLirstNum==null){
    document.write("Enter Your Ending Point");
}