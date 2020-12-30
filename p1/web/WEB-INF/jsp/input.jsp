<%--
  Created by IntelliJ IDEA.
  User: Vandan
  Date: 2019-03-04
  Time: 10:45 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link type="text/css" rel="stylesheet" href="../css/main.css">
    <title>Input</title>
</head>
<body>
<h1>Input</h1>
<form action="process" method="get">
    <p>
        <label for="name">Employee Name:</label>
        <input id="name" type="text" name="name">
    </p>

    <p>
        <label>Department </label>
        <input type="radio" name="department" value="Development" checked/>Development
        <input type="radio" name="department" value="Testing">Testing
        <input type="radio" name="department" value="Marketing">Marketing
    </p>

    <p>
        <input type="submit" value="Send">
    </p>
</form>
</body>
</html>
