<?php
if (isset($_POST['nev'])) {
  $nev = htmlspecialchars($_POST['nev'], ENT_QUOTES, 'UTF-8');
  echo "Üdvözlünk, $nev!";
}
?>
