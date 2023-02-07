function listproducts(){
    man.forEach(valueman =>{
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width:20rem;">';
        demo += '<img src="' + valueman.image+'" class="card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<p class="card-text">'+valueman.name +'</p>'
        demo += '<p class="card-text">'+valueman.price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>'
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+=demo;
    })
    woment.forEach(valuewoment =>{
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width:20rem;">';
        demo += '<img src="' + valuewoment.image+'" class="card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<p class="card-text">'+valuewoment.name +'</p>'
        demo += '<p class="card-text">'+valuewoment.price+'</p>' ;
        demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>'
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woman").innerHTML+=demo;
    })
}