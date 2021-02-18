---
permalink: /todo
layout: customblank
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple ToDo</title>
    <link rel="stylesheet" href="./style/todo.css">
</head>
<body>
    <h1>Simple ToDo</h1>
    <div class="two-column-wrapper">
        <div class="column">
            <h2>Tasks To Do</h2>
            <div class="task-cards-wrapper">
            </div>
        </div>
        <div class="column">
            <div class="input-wrapper">
                <h2>Add New Task</h2>
                <div>
                    Task: <br>
                    <textarea name="" id="task-content" cols="30" rows="5"></textarea><br>
                    Category: <br>
                    <input type="text" name="" id="task-category"><br>
                    <input type="submit" id="task-submit" value="Add New">
                </div>
            </div>
        </div>
    </div>
    <script src="./script/todo.js"></script>
</body>
</html>