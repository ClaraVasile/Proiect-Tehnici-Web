<?php
switch($_SERVER["REQUEST_METHOD"])
{ 
    case "GET":

    $val = $_GET["com"];

    switch($val)
    {
        case "1":
        echo "REVIEWS / ADDRESSES / NEWS / PHONE NUMBERS";
        break;
        case "2":
        echo "Test";
        break;
        case "3":
        echo "Test";
        break;
    }
    break;

    case "POST":

    $val = $_POST["com"];

    switch($val)
    {
        case "1":
        echo "
              Deoarece stim cat de dificil este sa alegi locul potrivit in care sa iti petreci weekend-urile cu prietenii, sa iei pranzul cu familia sau sa iti bei cafeaua dimineata, am conceput un loc unde vei descoperi noi locatii atragatoare, atat in Bucuresti cat si in alte orase ale tarii. Exploreaza localurile prin ochii mei in galeria de poze si construieste-ti o parere pe baza review-urilor. 
              SEEK, Eat & Enjoy!";
        break;
        case "2":
        echo "Test";
        break;
        case "3":
        echo "Test";
        break;
    }
    break;

    case "PUT":

    $val = $_GET["com"];

    switch($val)
    {
        case "1":
        echo "Actualizarea a fost realizata cu succes!";
        break;
        case "2":
        echo "Test";
        break;
        case "3":
        echo "Test";
        break;
    }
    break;

    case "DELETE":

    $val = $_GET["com"];

    switch($val)
    {
        case "1":
        echo "Test";
        break;
        case "2":
        echo "Continutul a fost sters!";
        break;
        case "3":
        echo "Test";
        break;
    }
    break;
}
?>
