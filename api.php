<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit(); }

// 1. Get Path
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
if (strpos($path, 'api.php') !== false) {
    $parts = explode('api.php', $path);
    $path = end($parts);
}

// 2. Auth Check
function checkAuth() {
    $headers = getallheaders();
    $authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';
    return strpos($authHeader, 'Bearer admin_token_boysun2026') !== false;
}

// ---------------------------------------------------------
// ENDPOINTS
// ---------------------------------------------------------

// --- GET Timetable ---
if ($path === '/api/timetable' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $content = file_get_contents(__DIR__ . '/timetable-data.js');
    // Find content between timetableData: { and }, // END_TIMETABLE_DATA
    preg_match('/timetableData:\s*({[\s\S]*?})\s*,\s*\/\/ END_TIMETABLE_DATA/s', $content, $matches);
    echo isset($matches[1]) ? $matches[1] : json_encode([]);
    exit();
}

// --- POST Timetable (SAVE TO SERVER FILE) ---
if ($path === '/api/timetable' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    // Note: Temporary disabled auth for debug, enable if needed
    $newJson = file_get_contents('php://input');
    $newData = json_decode($newJson, true);
    
    if (!$newData) { http_response_code(400); echo json_encode(['error'=>'Invalid JSON']); exit(); }
    
    $file = __DIR__ . '/timetable-data.js';
    $content = file_get_contents($file);
    $formatted = json_encode($newData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
    // Replacement logic
    $pattern = '/(timetableData:\s*){[\s\S]*?}(\s*,\s*\/\/ END_TIMETABLE_DATA)/s';
    $replacement = '$1' . $formatted . '$2';
    $newContent = preg_replace($pattern, $replacement, $content);
    
    if ($newContent && file_put_contents($file, $newContent)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500); echo json_encode(['error'=>'File write failed']);
    }
    exit();
}

// --- GET Teachers ---
if ($path === '/api/teachers' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $content = file_get_contents(__DIR__ . '/teacher_data.js');
    preg_match('/const\s+teacherData\s*=\s*(.*);/s', $content, $matches);
    echo isset($matches[1]) ? $matches[1] : json_encode([]);
    exit();
}

// --- POST Teachers ---
if ($path === '/api/teachers' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $newJson = file_get_contents('php://input');
    $newData = json_decode($newJson, true);
    $formatted = json_encode($newData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
    $file = __DIR__ . '/teacher_data.js';
    $newContent = "const teacherData = " . $formatted . ";";
    
    if (file_put_contents($file, $newContent)) {
        echo json_encode(['success' => true]);
    } else { http_response_code(500); }
    exit();
}

// --- Login Auth ---
if ($path === '/api/auth/login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if ($data['username'] === 'admin' && $data['password'] === 'boysun2026') {
        echo json_encode(['success' => true, 'token' => 'admin_token_boysun2026']);
    } else { http_response_code(401); }
    exit();
}

http_response_code(404);
?>
