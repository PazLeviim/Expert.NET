<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Forgot Password.aspx.cs" Inherits="Forgot_Password" %>
<!DOCTYPE html>
<html>
<head>
    <title>Forgot Details</title>
	<meta charset="utf-8" />
    <link href="Registration Login ForgotPassword More.css" type="text/css" rel="stylesheet" />
    <link href="Pictures/Logo Icon.png" rel="shortcut icon"/>
    <script type="text/javascript" src="Forgot Password.js"></script>
    <%if ((string)Session["forgot"] == "Submit2")
            Response.Write("<script src='https://www.google.com/recaptcha/api.js?hl=en'></script>");%>
</head>
<body <%if (Session["error_forgot"] != null)
        Response.Write("onload='Error(\""+Session["forgot"]+"\",\""+Session["column"]+"\")'");%>>
    <ul id="menu">
        <li><a href="Home.aspx" class="menu" id="home"><img src="Pictures/Home Logo.png" id="home_logo" alt="Home"/></a></li>
        <li><a href="About.aspx" class="menu">About</a></li>
        <li><a href="Login.aspx" class="menu">Sign In</a></li>
    </ul>
    <a href="Home.aspx"><img src="Pictures/Full Logo.png" id="logo_forgot" alt="Golden International"/></a>
    <form id="tab_forgot" <%if ((string)Session["forgot"] != "Submit2")
            Response.Write("action='Forgot Password.aspx'");
        else
            Response.Write("action='Login.aspx' style=left:300px;width:600px;height:535px;");%>action="Login.aspx" method="post">
        <table align="center" <%if ((string)Session["forgot"] == "Submit2")
                Response.Write("style=position:relative;left:50px;");%>>
                <%if (Session["forgot"] == null)
                    {
                        Session["error_forgot"] = null;
                        Response.Write("<tr><th><h2>Please set your personal data<br />to reset the password:</h2><div id=error_message></div></th></tr>" +
                            "<tr><th><h4>Type of personal data of account:</h4>" +
                            "<label><input type=radio name=connect_account class=connect checked value='user' onclick='Connect(\"Username\")'/>Username</label>" +
                            "<label><input type=radio name=connect_account class=connect value='email' onclick='Connect(\"Email\")'/>Email</label>" +
                            "<label><input type=radio name=connect_account class=connect value='phone' onclick='Connect(\"Phone\")'/>Phone</label></th></tr>" +
                            "<tr><th class=con_connect id=user_connect><label class=input_user>Username<br /></label><input type=text placeholder=Username class=input_user id=user name='user'/></th></tr>" +
                            "<tr><th><button type=submit name=Submit value=Submit1 class='loginbutton' onclick='return Submit_forgot()'>Submit</button> <button type=reset class=loginbutton id=reset onclick=login_reset()>Clear</button></th></tr>");
                    }
                    else if ((string)Session["forgot"] == "Submit1")
                    {
                        Session["error_forgot"] = null;
                        Response.Write("<tr><th><h2>Please answer on secure questions<br />to reset the password:</h2><div id=error_message></div></th></tr>" +
                            "<tr><th><br/>" + Session["q1"] + "</th></tr>" +
                            "<tr><th><input type=text class=input_user placeholder=Answer name='a1'/></th></tr>" +
                            "<tr><th>" + Session["q2"] + "</th></tr>" +
                            "<tr><th><input type=text class=input_user placeholder=Answer name='a2'/></th></tr>" +
                            "<tr><th><button type=submit name=Submit value=Submit2 class='loginbutton'>Submit</button>  <button type=submit class=loginbutton id=reset name=Submit value='Cancel'>Cancel</button></th></tr>");
                    }
                    else
                        Response.Write("<tr><th><h2>Hello " + Session["my_name"] + "<br/>please set new password:</h2><div id=error_message hidden></div></th></tr><tr>" +
                            "<tr><th><label class=req_text id=pass_text><br/>*Password</label>" +
                            "<br/><input id='pass' name=pass type=password placeholder=Password class=input_user onkeyup='Pass()'/></th>" +
                            "<th hidden id=all_progress><div class=progress><div class=progress style=top:-2px;position:relative;left:-3px;></div>" +
                "</div><b id=word_pass></b></th></tr>" +
                "<tr><td class=remarks>*Please set password at least length 10 characters that build from<br />digits, special characters, small letters and big letters</td></tr>" +
                "<tr><th id=check_pass></th></tr><tr><td><div class='g-recaptcha' data-callback='recaptcha' data-error-callback='no_internet' data-expired-callback='expired_checked' data-sitekey='6LfR4j4UAAAAAGuflR3kU_bxyoapTj0BBrq_1Tk9'></div></td>" +
           "</tr><tr><th id=recaptcha_index></th></tr>" +
                "<tr><th style=position:relative;left:100px;><button type=submit name=Submit class='loginbutton' onclick='return Submit_Send()'>Submit</button>  <button type=submit class=loginbutton id=reset name=Submit value='Cancel'>Cancel</button></th></tr>");%>   
        </table>
</form>
</body>
</html>
