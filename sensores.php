<?php

$url_acel = 'http://127.0.0.1:5000/acelerometro';
$acelerometro_x = "ax";
$acelerometro_y = "ay";
$acelerometro_z = "az";

$url_ori = 'http://127.0.0.1:5000/orientacion';
$orientacion_x = "ox";
$orientacion_y = "oy";
$orientacion_z = "oz";

$url_prox = 'http://127.0.0.1:5000/proximidad';
$proximidad = "prox";

$url_mag = 'http://127.0.0.1:5000/magnetometro';
$magnetometro_x = "mx";
$magnetometro_y = "my";
$magnetometro_z = "mz";

$url_presion = 'http://127.0.0.1:5000/presion';
$presion = "presion";

header('Content-Type: application/json');

try {
    //code...
    $orientacion = file_get_contents($url_ori);
    $acelerometro = file_get_contents($url_acel);
    $proximidad = file_get_contents($url_prox);
    $magnetometro = file_get_contents($url_mag);
    $presion = file_get_contents($url_presion);

    $response["orientacion"] = json_decode($orientacion);
    $response["acelerometro"] = json_decode($acelerometro);
    $response["proximidad"] = json_decode($proximidad);
    $response["magnetometro"] = json_decode($magnetometro);
    $response["presion"] = json_decode($presion);

    $response = json_encode($response);

    echo $response;

} catch (Exception $e) {
    //throw $th;
    throw $e -> getMessage();
}

?>
