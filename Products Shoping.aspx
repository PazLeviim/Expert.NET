<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Products Shoping.aspx.cs" Inherits="Products_Shoping" %>
<!DOCTYPE html>
<html>
<head>
    <title>מוצרים</title>
	<meta charset="utf-8" />
    <link href="Pictures/Logo Icon.png" rel="shortcut icon"/>
    <link href="Home About Products Shoping.css" type="text/css" rel="stylesheet" />
</head>
<body>
    <ul id="menu">
        <li><a href="Home.aspx" class="menu" id="home"><img src="Pictures/Home Logo.png" id="home_logo" alt="Home" /></a></li>
        <li><a href="About.aspx" class="menu">About</a></li>
        <li><a href=Logout.aspx class=menu>Sign Out</a></li>
    </ul>
    <div class="no_menu">
        <a href="Home.aspx"><img src="Pictures/Full Logo.png" id="logo_in_shoping" alt="Golden International" /></a>
    </div>
    <table id="main_products" align="center">
        <tr>
            <td>
                <table align="center">
                    <tr>
                        <td class="products"></td>
                        </tr>
                    <tr>
                        <td><img src="Pictures/Laptop1.jpg" class="product_image" /></td>
                        <th class="price_detail">ליחידה <b class="price">1849.90 NIS</b><br />משלוח חינם</th>
                        <th class="description">
                            15.6 אינץ המעבד Intel Core i7 מעבד 8 GB<br />RAM + 240 GB SSD + 750 GB HDD
                            מובנה WIFI<br /> Bluetooth DVD-ROM Windows 7/10 מחשב נייד
                        </th>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table align="center">
                    <tr>
                        <td class="products"></td>
                    </tr>
                    <tr>
                        <td><img src="Pictures/Laptop2.jpg" class="product_image" /></td>
                        <th class="price_detail">ליחידה <b class="price">1030.00 NIS</b><br />משלוח חינם</th>
                        <th class="description">
                            6 gb ram 1000 gb hdd 15.6 אינץ 1920x1080 p fhd intel מעבד מערכת<br />windows 10 wifi bluetooth 4.0 ultrathin מחשב נייד
                        </th>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table align="center">
                    <tr>
                        <td class="products"></td>
                    </tr>
                    <tr>
                        <td><img src="Pictures/Laptop3.jpg" class="product_image" /></td>
                        <th class="price_detail">ליחידה<br /><b class="price">1139.90 NIS</b><br />משלוח חינם</th>
                        <th class="description">
                            T-באו אינץ X7 מחשבי מחשבים ניידים 14.1<br />inch 2 GB DDR3 RAM 32 GB EMMC <br />האחסון Intel דובדבן שביל Z8350 מחשב נייד מחשבים ניידים
                        </th>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table align="center">
                    <tr>
                        <td class="products"></td>
                    </tr>
                    <tr>
                        <td><img src="Pictures/Laptop4.jpg" class="product_image" /></td>
                        <th class="price_detail">ליחידה<br /><b class="price">2349.90 NIS</b><br />משלוח חינם</th>
                        <th class="description">
                            מחשב נייד HP עם גודל 13.3 אינץ' עם מערכת הפעלה של Windows 10<br />עם מעבד מסוג Intel 
                            Core i7-6500U וזיכרון 8 GB RAM<br />עם מקום אחסון של 256 GB SSD
                        </th>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table align="center">
                    <tr>
                        <td class="products"></td>
                    </tr>
                    <tr>
                        <td><img src="Pictures/Laptop5.png" class="product_image" /></td>
                        <th class="price_detail">ליחידה<br /><b class="price">2349.90 NIS</b><br />משלוח חינם</th>
                        <th class="description">
                            מחשב נייד Acer עם גודל של 15.6 <br />אינץ' (1920x1080) עם מעבד Intel Core i5-7200U,
                             זיכרון 8 GB RAM<br />עם מערכת הפעלה של Windows 10 ומקום אחסון של 1 TB HDD
                        </th>
                    </tr>
                    <tr>
                        <td id="last_product"></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>