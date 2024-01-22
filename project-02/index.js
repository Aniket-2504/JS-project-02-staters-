const time = document.getElementById('clock')


setInterval(function () {

 let  date = new Date();

 clock.innerHTML = date.toLocaleString(date);

    
},  1000);