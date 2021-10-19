<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Home.aspx.cs" Inherits="Home"%>
<!DOCTYPE html>
<html>
<head>
    <title>דף הבית שלי</title>
	<meta charset="utf-8" />
    <link rel="stylesheet" type="text/css" href="Home About Products Shoping.css">
    <link href="Pictures/Logo Icon.png" rel="shortcut icon" />
        <script type="text/javascript" src="Home.js"></script>
</head>
<body onload="Welcome(),EnableSlide()">
        <ul id="menu">
            <li><a href="Home.aspx" class="menu" id="home"><img src="Pictures/Home Logo.png" id="home_logo" alt="Home"/></a></li>
            <li><a href="About.aspx" class="menu">About</a></li>
            <%if (Session["connection"] == null&& Request.Cookies["user"] == null)
                    Response.Write("<li><a href=Login.aspx class=menu>Sign In</a></li>");
              else
                Response.Write("<li><a href='Products Shoping.aspx' class=menu>Shop Products</a></li><li><a href=Logout.aspx class=menu>Sign Out</a></li>");
                %>
        </ul>
    <div class="no_menu">
        <a href="Home.aspx"><img src="Pictures/Full Logo.png" id="logo_in_home" alt="Golden International"/></a>
        </div>
    <div id="cont_home">
        <%if(Session["connection"]!=null|| Request.Cookies["user"] != null)
            Response.Write("<a href='My Account.aspx' id=account>My Account</a><div id='welcome_user' style='position:relative;top:-50px;'>"); %>
        <b class="welcome"><b id="welcome"></b><%=Time()%>!</b>
        <%if (Session["connection"] != null)
                        Response.Write("</div>");%>
        <b id="timenow" class="time"></b>
        <b id="datenow" class="time"></b>
            <%if (Session["connection"] != null|| Request.Cookies["user"] != null)
            {
                Response.Write("<a href='Products Shoping.html' id=link_hot><table align=center id=hot><tr><th colspan=2><img src='Pictures/Hot1.png' id='slide'/></th></tr></table></a>");
                Response.Write("<table align=center><tr><td><div class=image id=image1 onclick='Image_Choose(1)'></div></td><td><div class=image id=image2 onclick='Image_Choose(2)'></div></td><td><div class=image id=image3 onclick='Image_Choose(3)'></div></td>");
                Response.Write("<td><div class=image id=image4 onclick='Image_Choose(4)'></div></td><td><div class=image id=image5 onclick='Image_Choose(5)'></div></td></tr></table>");
            }
            else
                Response.Write("<h1 id=to_connect>אנא התחבר אל האתר כדי שתוכל לגשת למוצרים שלנו</h1>");%>
    </div>
</body>
</html>