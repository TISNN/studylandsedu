<?php
http_response_code(410);
header('Content-Type: application/json; charset=UTF-8');

echo json_encode(
    array(
        'message' => 'Contact form endpoint is disabled.'
    ),
    JSON_UNESCAPED_UNICODE
);
