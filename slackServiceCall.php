<?php

define('SUBDOMAIN', 'ballerinalang');
define('TOKEN', 'xoxp-143486495379-142849113584-143601653459-09296c2f90bff926144a1e25b15a4efe');

$email = $_POST['email'];
$first = "";
$last = "";

$slackInviteUrl = 'https://' . SUBDOMAIN . '.slack.com/api/users.admin.invite?t=' . time();

$fields = array(
    'email' => urlencode($email),
    'first_name' => urlencode($first),
    'token' => TOKEN,
    'set_active' => urlencode('true'),
    '_attempts' => '1'
);

// url-ify the data for the POST
$fields_string = '';
foreach ($fields as $key => $value) {
    $fields_string .= $key . '=' . $value . '&';
}
rtrim($fields_string, '&');

// open connection
$ch = curl_init();

// set the url, number of POST vars, POST data
curl_setopt($ch, CURLOPT_URL, $slackInviteUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, count($fields));
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);

// exec
$replyRaw = curl_exec($ch);
$reply = json_decode($replyRaw, true);
if ($reply['ok'] == false) {
    echo '<p style="font-family: \'Roboto\', sans-serif; color: #9d3d3d">';
    echo 'Something went wrong, try again!';
    echo '</p>';
    showForm();
} else {
    echo '<p style="font-family: \'Roboto\', sans-serif; color: #719E6F">';
    echo 'Invited successfully. Check your email. It should arrive within a couple minutes';
    echo '</p>';
}

// close connection
curl_close($ch);


?>
