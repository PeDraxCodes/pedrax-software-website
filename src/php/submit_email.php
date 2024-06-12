<?php
$DB_SERVER = getenv('DB_SERVER');
$DB_USERNAME = getenv('DB_USERNAME');
$DB_PASSWORD = getenv('DB_PASSWORD');
$DB_DATABASE = getenv('DB_DATABASE');

// Connect to database
$conn = new mysqli($DB_SERVER, $DB_USERNAME, $DB_PASSWORD, $DB_DATABASE);

// Check connection
if ($conn->connect_error) {
    die("Datenbank-Fehler!");
}

// get properties from POST request
$email = $_POST['email'];
$vorname = $_POST['vorname'];
$nachname = $_POST['nachname'];

if (empty($vorname)) {
    $vorname = null;
}
if (empty($nachname)) {
    $nachname = null;
}

// Insert into database table. Use prepared statement to prevent SQL injection
$stmt = $conn->prepare("INSERT INTO user_email (vorname, name, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $vorname, $nachname, $email);

// prepare WhatsApp message
$url = getenv('WHATSAPP_URL');
$date = date('d-m-Y h:i:s a', time());
$options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query([
            'message' => "Ein neuer Benutzer hat ein Setup am $date angefragt."
        ])
        ]
        ];


if ($stmt->execute()) {
    // send WhatsApp message
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    echo "E-Mail-Adresse erfolgreich gespeichert.";
} else {
    echo "Fehler: " . $stmt->error;
}

// Close prepared statement and database connection
$stmt->close();
$conn->close();
