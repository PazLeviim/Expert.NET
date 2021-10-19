<%@ Page Language="C#" AutoEventWireup="true" CodeFile="My Account.aspx.cs" Inherits="My_Account" %>
<!DOCTYPE html>
<html>
<head>
    <title><%if (Convert.ToInt32(Session["edit_user"]) == 0||Convert.ToInt32(Session["edit_user"]) == 2)
                   Response.Write("My Account");
               else
                   Response.Write("Edit My Account");%></title>
    <link href="Pictures/Logo Icon.png" rel="shortcut icon" />
    <link href="Registration Login ForgotPassword More.css" type="text/css" rel="stylesheet" />
    <script type="text/javascript" src="Edit My Account.js"></script>
    <%if (Convert.ToInt32(Session["edit_user"]) == 1)
            Response.Write("<script src='https://www.google.com/recaptcha/api.js?hl=en'></script>");%>
</head>
<body <%if (Convert.ToInt32(Session["edit_user"]) == 1)
        Response.Write("id=Edit_My_Account onload='Complete()'");
    else
        Response.Write("id=My_Account");%>>
    <ul id="menu">
            <li><a href="Home.aspx" class="menu" id="home"><img src="Pictures/Home Logo.png" id="home_logo" alt="Home"/></a></li>
            <li><a href="About.aspx" class="menu">About</a></li>
            <li><a href="Products Shoping.aspx" class="menu">Shop Products</a></li>
            <li><a href=Logout.aspx class=menu>Sign Out</a></li>
        </ul>
    <a href="Home.aspx"><img src="Pictures/Full Logo.png" id="logo_account" alt="Golden International"/></a>
    <form action="My Account.aspx" method="post">
   <%if (Convert.ToInt32(Session["edit_user"]) == 0 || Convert.ToInt32(Session["edit_user"]) == 2)
       {
           Response.Write("<table align='center' id='my_account'><tr><th><h4><ins>My Profile:</ins></h4></th></tr><tr><th>Username:</th><th>" + Session["user"] + "</th></tr>");
           Response.Write("<tr><th>Email:</th><th>" + Session["email"] + "</th></tr><tr><th>Name:</th><th>" + Session["name"] + "</th></tr>");
           Response.Write("<tr><th>Phone:</th><th>" + Session["phone"] + "</th></tr><tr><th>Date of birth:</th><th>" + Session["date"] + "</th></tr><tr><th>Gender:</th><th>" + Session["gender"] + "</th></tr>");
           Response.Write("<tr><th>City:</th><th>" + Session["city"] + "</th></tr>");
           if (Session["address"] != null && Convert.ToString(Session["address"]).Length != 0)
               Response.Write("<tr><th>Address:</th><th>" + Session["address"] + "</th></tr>");
           Response.Write("<tr><th>My account type:</th><th>" + Session["account"] + "</th></tr>");
           if (Session["company"] != null && Convert.ToString(Session["company"]).Length != 0)
               Response.Write("<tr><th>Company name:</th><th>" + Session["company"] + "</th></tr>");
           if (Session["status"] != null && Convert.ToString(Session["status"]).Length != 0)
               Response.Write("<tr><th>Status:</th><th>" + Session["status"] + "</th></tr>");
           Response.Write("<tr><th>Hobbies:</th><th>" + Session["hobbies"] + "</th></tr>");
           if (Session["more"] != null && Convert.ToString(Session["more"]).Length != 0)
               Response.Write("<tr><th>More about me:</th><th>" + Session["more"] + "</th></tr>");
           Response.Write("<tr><th><button type='submit' class=editbutton id='edit_account' name='edit' value='1'>Edit details</button></th></tr></table>");
       }
       else
       {
           Response.Write("<input id='prefix_phone_delete' value='" + phone[0] + "' hidden/>");
           Response.Write("<input id='gender_delete' value='" + Session["gender"] + "' hidden/>");
           Response.Write("<input id='account_delete' value='" + Session["account"] + "' hidden/>");
           Response.Write("<input id='qaccount_delete' value='" + Session["company"] + "' hidden/>");
           Response.Write("<input id='status_delete' value='" + Session["status"] + "' hidden/>");
           Response.Write("<input id='other_status_delete' value='" + Session["other_status"] + "' hidden/>");
           Response.Write("<input id='hobbies_delete' value='" + Session["hobbies"] + "' hidden/>");
           Response.Write("<input id='other_hobbie_delete' value='" + Session["other_hobbie"] + "' hidden/>");
           Response.Write("<input id='q1_delete' value='" + Session["q1"] + "' hidden/>");
           Response.Write("<input id='q2_delete' value='" + Session["q2"] + "' hidden/>");
           Response.Write("<table align=center id=my_account><tr><th><h4><ins>Edit My Profile:</ins></h4></th></tr>" +
               "<tr><th id=wrong hidden></th></tr><tr><th>Username:<br/><input type=text name=user class=input_user value='" + Session["user"] + "' disabled readonly/></th></tr>");
           Response.Write("<tr><th><label class=req_text id=pass_text>*Password</label><br /><input id=pass name=pass type=password placeholder='Password' value='********' class=input_user onkeyup='Pass()'/></th>");
           Response.Write("<th hidden id=all_progress><div class=progress><div class=progress style=top:-2px;position:relative;left:-3px;></div></div><b id=word_pass></b></th></tr>");
           Response.Write("<tr><td class=remarks>*Please set new password if you want and the password<br />need to be at least length 10 characters that build from<br />digits, special characters, small letters and big letters</td></tr>");
           Response.Write("<tr><th id=check_pass></th></tr>");
           Response.Write("<tr><th id=check_email><label class=req_text id=email_word>*Email</label><br /><input type=email class=input_user id=email placeholder='account@mail.something' name=email value='" + Session["email"] + "' onkeyup='Email(\""+Session["emails"]+"\")'/> </th></tr><tr><th><label class=req_text id=req_name>*Name</label><br/><input type=text id=name placeholder='Full Name' class=input_user name='my_name' value='" + Session["name"] + "'/></th></tr>");
           Response.Write("<tr><th id=check_phone><label id=phone_word class=req_text>*Phone</label><br /><select class=input_user name=prefix_phone><option class=prefix_phone id=prefix1 onclick='Phone(\"" + Session["phones"] + "\")' value=050>050</option><option class=prefix_phone id=prefix2 onclick='Phone(\"" + Session["phones"] + "\")' value=052>052</option>" +
               "<option class=prefix_phone id=prefix3 onclick='Phone(\"" + Session["phones"] + "\")' value=054>054</option><option class=prefix_phone id=prefix4 onclick='Phone(\"" + Session["phones"] + "\")' value=055>055</option><option class=prefix_phone onclick='Phone(\"" + Session["phones"] + "\")' id=prefix5 value=057>057</option></select>");
           Response.Write("<input type=tel id=phone name=phone placeholder='Phone number' maxlength=7 value='" + phone[1] + "' class='input_user' onkeyup='Phone(\""+Session["phones"]+"\")'/> </th></tr><tr><th><label id=req_date class=req_text>*Date of birth:</label><br /><content id=date>" +
               "<input type=tel id=day name=day class=input_user placeholder=dd maxlength=2 value='"+date[0]+"' onkeyup='Date_DMY()' onblur='Date_Complete()'/>/" +
               "<input type=tel id=month name=month class=input_user placeholder=mm maxlength=2 value='"+date[1]+"' onkeyup='Date_DMY()' onblur='Date_Complete()'/>/<input type=tel id=year name=year class=input_user placeholder=yyyy maxlength=4 value='"+date[2]+"' onkeyup='Date_DMY()' onblur='Date_Complete()'/></content></th></tr>");
           Response.Write("<tr><th><label id=gender_word class=req_text>*Gender</label><br /><select class=input_user name=S></option>"+
                        "<option class=S id=s1 value=Male>Male</option>"+
                        "<option class=S id=s2 value=Female>Female</option>"+
                        "<option class=S id=s3 value=Other>Other</option></select></th></tr>");
           Response.Write("<tr><th><label class=req_text id=req_city>*City</label><br /><input type=text list=City id=city name=City placeholder=City class='input_user' value='" + Session["city"] + "'/>" +
                    "<datalist id='City'><option value='Rishon Lezion'>Rishon Lezion</option><option value=Jerusalem>Jerusalem</option><option value='Tel Aviv'>Tel Aviv</option></datalist></th></tr>");
           Response.Write("<tr><th><label>Address</label><br /><input type=text class=input_user placeholder=Address id=address name=address value='"+Session["address"]+"'/></th></tr>");
           Response.Write("<tr><th><label id=account_word class=req_text>*What is your account type?</label><br />" +
                    "<label><input type=radio name=account value=Private onclick=\"Account(\'Private\')\"/>Private</label><br />" +
                    "<label><input type=radio name=account value=Commercial onclick=\"Account(\'Commercial\')\"/>Commercial</label><br />" +
                    "<div id=company></div></th></tr>");
           Response.Write("<tr><th>What is your status?<br /><label><input type=radio name=status id=status1 value=Single onclick='part_status()'>Single</label>" +
                    "<label><input type=radio name=status id=status2 value=Married onclick='part_status()'>Married</label>" +
                    "<label id=other_status_label class=req_text><input type=radio name=status id=status3 value=Other onclick='part_status()'>Other</label>" +
              " <input type=text id=other_status name=other_status disabled/></th></tr>");
           Response.Write("<tr><th class=req_text id=hobbies>*What are your hobbies? (Check one least)</th><td class=hobbie>" +
                    "<label><input type=checkbox name=hobbie id=hobbie1 value='Programing'/>Programming</label><br />" +
                    "<label><input type=checkbox name=hobbie id=hobbie2 value='Solve problems'/>Solving problems (Troubleshooting)</label><br />"+
                    "<label><input type=checkbox name=hobbie id=hobbie3 value='Play games'/>Playing games</label><br />"+
                    "<label><input type=checkbox name=hobbie id=hobbie4 value='Study'/>Studying</label><br />"+
                    "<label id=other_hobbie_label class=req_text><input type=checkbox name=hobbie id=hobbie5 value=Other onclick='part_hobbie()' />Other</label> <input type=text id=other_hobbie name=other_hobbie disabled /></td></tr>");
           Response.Write("<tr><th class=req_text id=sec_q_word>*Security Questions:</th></tr>");
           Response.Write("<tr><td class=remarks>*Every answer to question need to be at least length of 5 characters<br /><br />"+
                    "<select class=input_user onchange='Q(1)' name=q1><option class=q1 id=q1_1 value='What the name of your child?'>What is the name of your child?</option>"+
                        "<option class=q1 id=q1_2 value='What the name of your pet?'>What is the name of your pet?</option>"+
                        "<option class=q1 id=q1_3 value='What the name of your mother?'>What is the name of your mother?</option>"+
                    "</select></td></tr><tr><td><input type=text id=a1 name=a1 placeholder=Answer class=input_user value='"+Session["a1"]+"'/></td></tr>");
           Response.Write("<tr><th><br /><select class=input_user onchange='Q(2)' name=q2><option class=q2 id=q2_1 value='What the name of your favorite color?'>What is the name of your favorite color?</option>"+
                        "<option class=q2 id=q2_2 value='What the name of your favorite animal?'>What is the name of your favorite animal?</option>"+
                        "<option class=q2 id=q2_3 value='What the name of your favorite car model?'>What is the name of your car model?</option>"+
                    "</select></tr><tr><td><input type=text id=a2 name=a2 class=input_user placeholder=Answer value='"+Session["a2"]+"'/></td></tr>");
           Response.Write("<tr><th>More About Me</th></tr><tr><td colspan=2><textarea class=input_user placeholder='If you want to tell more about yourself please write here' id=more name=more>" + Session["more"] + "</textarea></td></tr>");
           Response.Write("<tr><td><div class='g-recaptcha' data-callback='recaptcha' data-error-callback='no_internet' data-expired-callback='expired_checked' data-sitekey='6LfR4j4UAAAAAGuflR3kU_bxyoapTj0BBrq_1Tk9'></div></td>"+
           "</tr><tr><th id=recaptcha_index></th></tr>");
           Response.Write("<tr><th><button type=submit class=editbutton name=edit onclick='return Submit()'>Submit</button>  ");
           Response.Write("<button type=submit id=reset class=editbutton name=edit value=0>Cancel</button></th></tr></table>");
       }%>
        </form>
</body>
</html>
