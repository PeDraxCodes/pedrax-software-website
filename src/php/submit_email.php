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

// Get email from POST request
$email = $_POST['email'];

// Insert into database table. Use prepared statement to prevent SQL injection
$stmt = $conn->prepare("INSERT INTO user_email (vorname, name, email) VALUES ('test', 'nachname', ?)");
$stmt->bind_param("s", $email);

if ($stmt->execute()) {
    echo "E-Mail-Adresse erfolgreich gespeichert.";
} else {
    echo "Fehler: " . $stmt->error;
}

// Close prepared statement and database connection
$stmt->close();
$conn->close();
