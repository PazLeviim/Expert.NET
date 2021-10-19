<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Registration.aspx.cs" Inherits="Registration"%>
<!DOCTYPE html>
<html>
<head>
    <title>Registration to my site</title>
    <link href="Registration Login ForgotPassword More.css" type="text/css" rel="stylesheet" />
    <link href="Pictures/Logo Icon.png" rel="shortcut icon" />
    <script type="text/javascript" src="Registration.js"></script>
    <script src='https://www.google.com/recaptcha/api.js?hl=en'></script>
	<meta charset="utf-8" />
</head>
<body id="registration">
    <img src="Pictures/Full Logo.png" id="logo_reg" alt="Golden International"/>
    <form action="Login.aspx" id="tab_reg" method="post" onsubmit="return Submit()">
        <table align="center">
            <tr>
                <th><h4><ins>All fileds in * are required</ins></h4></th>
            </tr>
            <tr>
                <th id="wrong" hidden></th>
            </tr>
            <tr>
                <td><br /></td>
            </tr>
            <tr>
                <th id="check_user"><label id="user_word" class="req_text">*Username</label><br /><input id="user" name="user" type="text" placeholder="Username" class="input_user" <%Response.Write("onkeyup='User(\"" + Session["usernames"] + "\")'");%> /> </th>
            </tr>
            <tr>
                <td class="remarks">*Please set user at least 7 characters that isn't build from<br />space and special characters exclude from . and -<br />and in the first letter and last letter can't include all special characters and space</td>
            </tr>
            <tr>
                <th><label class="req_text" id="pass_text">*Password</label><br /><input id="pass" name="pass" type="password" placeholder="Password" class="input_user" onkeyup="Pass()" /></th>
                <th hidden id="all_progress">
                    <div class="progress">
                        <div class="progress" style="top:-2px;position:relative;left:-3px;"></div>
                    </div>
                    <b id="word_pass"></b>
                </th>
            </tr>
            <tr>
                <td class="remarks">*Please set password at least length 10 characters that build from<br />digits, special characters, small letters and big letters</td>
            </tr>
            <tr>
                <th id="check_pass"></th>
            </tr>
            <tr>
                <th id="check_email"><label class="req_text" id="email_word">*Email</label><br /><input type="email" id="email" name="email" placeholder="account@mail.something" class="input_user" <%Response.Write("onkeyup='Email(\"" + Session["emails"] + "\")'");%> /> </th>
            </tr>
            <tr>
                <th><label class="req_text" id="req_fname">*First Name</label><br /><input type="text" id="fname" name="fname" placeholder="First Name" class="input_user" /></th>
            </tr>
            <tr>
                <th><label class="req_text" id="req_lname">*Last Name</label><br /><input type="text" id="lname" name="lname" placeholder="Last Name" class="input_user" /></th>
            </tr>
            <tr>
                <th id="check_phone">
                    <label id="phone_word" class="req_text">*Phone</label><br />
                    <select class="input_user" name="prefix_phone">
                        <option class="prefix_phone" id="prefix0" <%Response.Write("onclick='Phone(\"" + Session["phones"] + "\")'");%> value="">Prefix</option>
                        <option class="prefix_phone" id="prefix1" <%Response.Write("onclick='Phone(\"" + Session["phones"] + "\")'");%> value="050">050</option>
                        <option class="prefix_phone" id="prefix2" <%Response.Write("onclick='Phone(\"" + Session["phones"] + "\")'");%> value="052">052</option>
                        <option class="prefix_phone" id="prefix3" <%Response.Write("onclick='Phone(\"" + Session["phones"] + "\")'");%> value="054">054</option>
                        <option class="prefix_phone" id="prefix4" <%Response.Write("onclick='Phone(\"" + Session["phones"] + "\")'");%> value="055">055</option>
                        <option class="prefix_phone" id="prefix5" <%Response.Write("onclick='Phone(\"" + Session["phones"] + "\")'");%> value="057">057</option>
                    </select>
                    <input type="tel" id="phone" name="phone" placeholder="Phone number" maxlength="7" class="input_user" <%Response.Write("onkeyup='Phone(\"" + Session["phones"] + "\")'");%> /> 
                </th>
            </tr>
            <tr>
                <th><label id="req_date" class="req_text">*Date of birth</label><br /><content id="date"><input type="tel" id="day" name="day" class="input_user" placeholder="dd" maxlength="2" onkeyup="Date_DMY()" onblur="Date_Complete()" />/<input type="tel" id="month" name="month" class="input_user" placeholder="mm" maxlength="2" onkeyup="Date_DMY()" onblur="Date_Complete()" />/<input type="tel" id="year" name="year" class="input_user" placeholder="yyyy" maxlength="4" onkeyup="Date_DMY()" onblur="Date_Complete()" /></content></th>
            </tr>
            <tr>
                <th>
                    <label id="gender_word" class="req_text">*Gender</label><br />
                    <select class="input_user" name="S">
                        <option class="S" id="s0" value=""></option>
                        <option class="S" id="s1" value="Male">Male</option>
                        <option class="S" id="s2" value="Female">Female</option>
                        <option class="S" id="s3" value="Other">Other</option>
                    </select>
                </th>
            </tr>
            <tr>
                <th>
                    <label class="req_text" id="req_city">*City</label><br /><input type="text" list="City" id="city" name="City" placeholder="City" class="input_user" />
                    <datalist id="City">
                        <option value="Rishon Lezion">Rishon Lezion</option>
                        <option value="Jerusalem">Jerusalem</option>
                        <option value="Tel Aviv">Tel Aviv</option>
                    </datalist>
                </th>
            </tr>
            <tr>
                <th>
                    <label>Address</label><br />
                    <input type="text" class="input_user" placeholder="Address" id="address" name="address" />
                </th>
            </tr>
            <tr>
                <th>
                    <label id="account_word" class="req_text">*What is your account type?</label><br />
                    <label><input type="radio" name="account" value="Private" onclick="Account('Private')" />Private</label><br />
                    <label><input type="radio" name="account" value="Commercial" onclick="Account('Commercial')" />Commercial</label><br />
                    <div id="company">
                    </div>
                </th>
            </tr>
            <tr>
                <th>
                    What is your status?<br />
                    <label><input type="radio" name="status" id="status1" value="Single" onclick="part_status()">Single</label>
                    <label><input type="radio" name="status" id="status2" value="Married" onclick="part_status()">Married</label>
                    <label id="other_status_label" class="req_text"><input type="radio" name="status" id="status3" value="Other" onclick="part_status()">Other</label> <input type="text" id="other_status" name="other_status" disabled />
                </th>
            </tr>
            <tr>
                <th class="req_text" id="hobbies">*What are your hobbies? (Check one least)</th>
                <td class="hobbie">
                    <label><input type="checkbox" name="hobbie" id="hobbie1" value="Programing" />Programming</label><br />
                    <label><input type="checkbox" name="hobbie" id="hobbie2" value="Solve problems" />Solving problems (Troubleshooting)</label><br />
                    <label><input type="checkbox" name="hobbie" id="hobbie3" value="Play games" />Playing games</label><br />
                    <label><input type="checkbox" name="hobbie" id="hobbie4" value="Study" />Studying</label><br />
                    <label id="other_hobbie_label" class="req_text"><input type="checkbox" name="hobbie" id="hobbie5" value="Other" onclick="part_hobbie()" />Other</label> <input type="text" id="other_hobbie" name="other_hobbie" disabled />
                </td>
            </tr>
            <tr>
                <th class="req_text" id="sec_q_word">*Security Questions:</th>
            </tr>
            <tr>
                <td class="remarks">
                    *Every answer to question need to be at least length of 5 characters<br /><br />
                    <select class="input_user" onchange="SelectQ(1)" name="q1">
                        <option class="q1" id="q1_0" value="">Select Question</option>
                        <option class="q1" id="q1_1" value="What the name of your child?">What is the name of your child?</option>
                        <option class="q1" id="q1_2" value="What the name of your pet?">What is the name of your pet?</option>
                        <option class="q1" id="q1_3" value="What the name of your mother?">What is the name of your mother?</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><input type="text" id="a1" name="a1" disabled /></td>
            </tr>
            <tr>
                <th>
                    <br />
                    <select class="input_user" onchange="SelectQ(2)" name="q2">
                        <option class="q2" id="q2_0" value="">Select Question</option>
                        <option class="q2" id="q2_1" value="What the name of your favorite color?">What is the name of your favorite color?</option>
                        <option class="q2" id="q2_2" value="What the name of your favorite animal?">What is the name of your favorite animal?</option>
                        <option class="q2" id="q2_3" value="What the name of your favorite car model?">What is the name of your car model?</option>
                    </select>
            </tr>
            <tr>
                <td><input type="text" id="a2" name="a2" disabled /></td>
            </tr>
            <tr>
                <td colspan="2"><textarea class="input_user" placeholder="If you want to tell more about yourself please write here" id="more" name="more"></textarea></td>
            </tr>
            <tr>
                <td><div class="g-recaptcha" data-callback="recaptcha" data-error-callback="no_internet" data-expired-callback="expired_checked" data-sitekey="6LfR4j4UAAAAAGuflR3kU_bxyoapTj0BBrq_1Tk9"></div></td>
            </tr>
            <tr>
                <th id="recaptcha_index"></th>
            </tr>
            <tr>
                <td colspan="2"><button type="submit" name="submit" class="button">Submit</button></td>
            </tr>
            <tr>
                <td colspan="2"><button type="reset" class="button" id="reset" onclick="Reset()">Clear</button></td>
            </tr>
        </table>
    </form>
</body>
</html>