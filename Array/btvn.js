var array=[];
function save(){
    var a={
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        prdname: document.getElementById("prdname").value,
        qty: document.getElementById("qty").value,
        price: document.getElementById("price").value,
    }
    console.log(a);
    array.push(a);
}
function show(){
    var html='';
    for (i in array){
        var n = i;
        n++;
        html += "<tr>";
        html += "<td>" + (n) + "</td>";
        html += "<td>" + array[i].name + "</td>";
        html += "<td>" + array[i].id + "</td>";
        html += "<td>" + array[i].prdname +"</td>";
        html += "<td>" + array[i].qty +"</td>";
        html += "<td>" + array[i].price + "</td>";
        html += "<td>" + (0.15*(array[i].price* array[i].qty ))+"</td>";
        html += "<td>" + (array[i].price* array[i].qty )+"</td>";
        html += "<td>" + ((array[i].price* array[i].qty )-(0.15*(array[i].price* array[i].qty )))+"</td>";
        html += "</tr>";
    }
    document.getElementById("tbl").innerHTML= html;
}
function reset(){
    document.getElementById("name").value='';
    document.getElementById("id").value='';
    document.getElementById("prdname").value='';
    document.getElementById("qty").value='';
    document.getElementById("price").value='';
}