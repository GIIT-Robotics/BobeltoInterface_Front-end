function startLiveUpdate (){
    const textViewCount = document.getElementById('ori');

    setInterval(function (){
        fetch('sensores.php').then(function(response){
            return response.json();
        }).then(function (data){
            //console.log(data);
            var orientacion_x = data.orientacion.orientacion_x;
            console.log(orientacion_x);
            textViewCount.textContent = orientacion_x;
        }).catch(function(error){
            console.log(error);
        });

    }, 500);
}

document.addEventListener('DOMContentLoaded', function(){
    startLiveUpdate();
});


var slider1 = document.getElementById("rango-velocidad 1");
var output1 = document.getElementById("value 1");

output1.innerHTML= slider1.value;

slider1.oninput = function (){
    output1.innerHTML = this.value;
}
var slider2 = document.getElementById("rango-velocidad 2");
var output2 = document.getElementById("value 2");

output2.innerHTML= slider2.value;

slider2.oninput = function (){
    output2.innerHTML = this.value;
}

var slider3 = document.getElementById("rango-velocidad 3");
var output3 = document.getElementById("value 3");

output3.innerHTML= slider3.value;

slider3.oninput = function (){
    output3.innerHTML = this.value;
}

var slider4 = document.getElementById("rango-presion1");
var output4 = document.getElementById("presion1");

output4.innerHTML= slider4.value;

slider4.oninput = function (){
    output4.innerHTML = this.value;
}

var slider5 = document.getElementById("rango-presion2");
var output5 = document.getElementById("presion2");

output5.innerHTML= slider5.value;

slider5.oninput = function (){
    output5.innerHTML = this.value;
}