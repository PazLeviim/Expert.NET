<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>
<!DOCTYPE html>
<html>
<head>
    <title>Login to my site</title>
    <link href="Registration Login ForgotPassword More.css" type="text/css" rel="stylesheet" />
    <link href="Pictures/Logo Icon.png" rel="shortcut icon" />
    <script type="text/javascript" src="Login.js"></script>
	<meta charset="utf-8" />
</head>
<body id="login" <%if (Session["error_login"] != null)
        Response.Write("onload='Error(\""+Session["column"]+"\",\""+Session["stay_connected"]+"\")'");%>>
    <ul id="menu">
        <li><a href="Home.aspx" class="menu" id="home"><img src="Pictures/Home Logo.png" id="home_logo" /></a></li>
        <li><a href="About.aspx" class="menu">About</a></li>
        <li><a href="Registration.aspx" class="menu">Sign Up</a></li>
    </ul>
    <a href="Home.aspx"><img src="Pictures/Full Logo.png" id="logo_login" alt="Golden International"/></a>
    <form action="Home.aspx" method="post" id="tab_login" onsubmit="return login()">
        <table align="center">
            <tr>
                <th>
                    <h4>Type of connecting to account:</h4>
                    <label><input type="radio" name="connect_account" class="connect" id="connect_user" value="user" checked onclick="Connect('Username')" />Username</label>
                    <label><input type="radio" name="connect_account" class="connect" id="connect_email" value="email" onclick="Connect('Email')" />Email</label>
                    <label><input type="radio" name="connect_account" class="connect" id="connect_phone" value="phone" onclick="Connect('Phone')" />Phone</label>
                </th>
            </tr>
            <tr>
                <th id="error_message"></th>
            </tr>
            <tr>
                <th class="con_connect" id="user_connect"><label class="input_user">Username<br /></label><input type="text" placeholder="Username" class="input_user" name="user" id="user" /></th>
            </tr>
            <tr>
                <th><label>Password</label><br /><input type="password" id="password" placeholder="Password" name="password" class="input_pass" /></th>
            </tr>
            <tr>
                <th><label><input type="checkbox" id="connected" name="connected" value="V" />Stay connected</label><br /></th>
            </tr>
            <tr>
                <td><a href="Forgot Password.aspx" id="forgot">Forgot your password?</a><br /></td>
            </tr>
            <tr>
                <th><input type="submit" value="Submit" class="loginbutton" /> <button type="reset" class="loginbutton" id="reset" onclick="login_reset()">Clear</button></th>
            </tr>
        </table>
    </form>
</body>
</html>