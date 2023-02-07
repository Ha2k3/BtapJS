function birthday(){
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var d = new Date(prompt("Input your birthday: "))
    var day = weekday[d.getDay()];
    var year = d.getFullYear()
    var date = d.getDate()
    var month = d.getMonth() + 1
    alert("Sinh vao thu: " + day)
    alert("Sinh vao ngay: " + date)
    alert("Sinh vao thang: " + month)
    alert("Sinh vao nam: " + year)
    var currentDate = new Date()
    var currentYear = currentDate.getFullYear()
    alert("Tuoi: " + (currentYear - year))
}
