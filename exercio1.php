<?php
$a = 3;
$b = 6;
$c=0;

 $s = $a + $b;
echo "Soma: $s<br>";


 $d = $a / $b;
echo "Divisão: $d<br>";


 $m = $a * $b;
echo "Multiplicação: $m<br>";


    $delta=$b^2-4*$a*$c;
    if ($delta > 0){
        $X=-$b +sqrt($delta)/2*$a;
        $x1=-$b -sqrt($delta)/2*$a;
        $total=$X/$x1;
        echo"o valor de x:$X e o valor de $x1 e o total: $total <br>";
    } else{
        echo" nao existe";
    }

?>
