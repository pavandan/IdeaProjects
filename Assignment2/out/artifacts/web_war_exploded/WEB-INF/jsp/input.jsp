<%--
  Created by IntelliJ IDEA.
  User: Vandan
  Date: 2019-01-16
  Time: 2:29 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link type="text/css" rel="stylesheet" href="css/main.css">
    <title>Input</title>
</head>
<body>
<h1>Input</h1>
<div>
<form action="process" method="get">
    <p>
    <label for="user">User Name</label>
    <input id="user" type="text" name="userName">
    </p>
    <p>
    <label for="email">Email Id</label>
     <input id ="email" type="text" name="emailId">
    </p>
    <p>
        <input type="submit" value="Send">
    </p>
</form>
</div>
</body>
</html>
