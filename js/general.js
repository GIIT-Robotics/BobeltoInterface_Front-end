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
