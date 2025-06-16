<?php
// Nastavení příjemce
$to = "ondrejmlcak14@gmail.com"; // ZMĚŇ na svůj email

// Získání a filtrování dat z formuláře
$name = htmlspecialchars(trim($_POST['name'] ?? ''));
$email = htmlspecialchars(trim($_POST['email'] ?? ''));
$phone = htmlspecialchars(trim($_POST['phone'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

// Ověření, že všechna pole jsou vyplněna
if (empty($name) || empty($email) || empty($phone) || empty($message)) {
    echo "Prosím vyplňte všechna pole.";
    exit;
}

// Kontrola platnosti emailu
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Zadejte platnou emailovou adresu.";
    exit;
}

// Složení zprávy
$subject = "Nová zpráva z webu od $name";
$body = "Jméno: $name\nEmail: $email\nTelefon: $phone\n\nZpráva:\n$message";
$headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

// Odeslání emailu
if (mail($to, $subject, $body, $headers)) {
    echo "Zpráva byla úspěšně odeslána.";
} else {
    echo "Odeslání zprávy selhalo. Zkuste to znovu.";
}
?>
