<?php

$acelerometro_x = "ax";
$acelerometro_y = "ay";
$acelerometro_z = "az";

$orientacion_x = "ox";
$orientacion_y = "oy";
$orientacion_z = "oz";

$proximidad = "prox";

$magnetometro_x = "mx";
$magnetometro_y = "my";
$magnetometro_z = "mz";

$presion = "presion";






header('Content-Type: application/json');

$data = [
    'viewCount' => (time() % 10000 *3)
];

echo json_encode($data);

?>
