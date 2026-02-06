<?php
$jsonPath = __DIR__ . '/timetable.json';
$data = json_decode(file_get_contents($jsonPath), true);
$subjects = $data['subjects'];
$timetable = $data['timetable'];

$template = '<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} | Boysun IM</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../style.css">
    <style>
        body { background-color: #0b0f1a; color: #f1f5f9; font-family: "Plus Jakarta Sans", sans-serif; }
        .glass-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); backdrop-filter: blur(20px); border-radius: 24px; padding: 2rem; margin-top: 2rem; }
        .lesson-num { font-weight: 800; color: #6366f1; font-size: 1.2rem; }
        .subject-name { font-weight: 600; background: rgba(99, 102, 241, 0.1); padding: 0.6rem 1.2rem; border-radius: 12px; display: inline-block; color: #fff; }
        .btn-back { background: rgba(255, 255, 255, 0.05); border: none; color: #fff; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: 0.3s; text-decoration: none; }
        .btn-back:hover { background: #6366f1; transform: scale(1.1); }
        .header { height: 70px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: space-between; padding: 0 1.5rem; }
    </style>
</head>
<body class="dark-mode">
    <div class="header">
        <div class="d-flex align-items-center">
            <a href="../index.html" class="btn-back me-3"><i class="fas fa-arrow-left"></i></a>
            <h1 class="h4 mb-0">{{CLASS}} - {{DAY}}</h1>
        </div>
        <div class="text-primary font-weight-bold">Boysun IM</div>
    </div>
    <div class="container">
        <div class="glass-card">
            <table class="table table-borderless align-middle text-white">
                <thead>
                    <tr><th width="100">Soat</th><th>Fan</th></tr>
                </thead>
                <tbody>
                    {{ROWS}}
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>';

foreach ($timetable as $class => $days) {
    foreach ($days as $day => $lessons) {
        $rows = "";
        foreach ($lessons as $lesson) {
            $sName = isset($subjects[$lesson[1]]) ? $subjects[$lesson[1]] : $lesson[1];
            $rows .= "<tr><td><span class='lesson-num'>{$lesson[0]}</span></td><td><span class='subject-name'>{$sName}</span></td></tr>";
        }
        
        $html = str_replace(
            ['{{TITLE}}', '{{CLASS}}', '{{DAY}}', '{{ROWS}}'],
            ["{$class} {$day}", $class, $day, $rows],
            $template
        );
        
        $filename = strtolower(str_replace([' ', '-'], '_', $class)) . "_" . strtolower($day) . ".html";
        file_put_contents($filename, $html);
        echo "Yaratildi: $filename\n";
    }
}
echo "Barcha .html fayllar muvaffaqiyatli yaratildi!";
?>
