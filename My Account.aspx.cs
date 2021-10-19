using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Text.RegularExpressions;

public partial class My_Account : System.Web.UI.Page
{
    public string[] date = new string[3];
    public string[] phone = new string[2];
    public string ConnectServer()
    {
        return @"Data Source=(LocalDB)\MSSQLLocalDB;
AttachDbFilename=|DataDirectory|\Users.mdf;
Integrated Security=True";
    }
    public void UpdateUserDetail(string sqlcmd)
    {
        SqlConnection connection = new SqlConnection(ConnectServer());
        SqlCommand command = new SqlCommand(sqlcmd, connection);
        connection.Open();
        int count_success = command.ExecuteNonQuery();
        connection.Close();
    }
    public void CheckUserDetail(string sqlcmd)
    {
        SqlConnection connection = new SqlConnection(ConnectServer());
        SqlCommand command = new SqlCommand(sqlcmd, connection);
        connection.Open();
        SqlDataReader check_user;
        check_user = command.ExecuteReader();
        while (check_user.Read())
        {
            Session["user"] = check_user["User name"];
            Session["email"] = check_user["Email"];
            Session["name"] = check_user["Name"];
            Session["phone"] = check_user["Phone"];
            Session["date"] = Convert.ToDateTime(check_user["Date of birth"]).ToString("dd/MM/yyyy");
            Session["gender"] = check_user["Gender"];
            Session["city"] = check_user["City"];
            Session["address"] = check_user["Address"];
            Session["account"] = check_user["Account type"];
            Session["company"] = check_user["Company name"];
            switch ((string)check_user["Status"])
            {
                case "Single":
                case "Married":
                    Session["status"] = check_user["Status"];
                    Session["other_status"] = null;
                    break;
                default:
                    Session["status"] = check_user["Status"];
                    Session["other_status"] = check_user["Status"];
                    break;
            }
            Session["hobbies"] = check_user["Hobbies"];
            if (Regex.IsMatch((string)check_user["Hobbies"], "Other")) {
                int start_index = Convert.ToString(check_user["Hobbies"]).IndexOf('(') + 1;
                Session["other_hobbie"] = Convert.ToString(check_user["Hobbies"]).Substring(start_index, Convert.ToString(check_user["Hobbies"]).Length-start_index-1);
            }
            Session["q1"] = check_user["Sec Q1"];
            Session["a1"] = check_user["A1"];
            Session["q2"] = check_user["Sec Q2"];
            Session["a2"] = check_user["A2"];
            Session["more"] = check_user["More"];
        }
        connection.Close();
    }
    public void GetDataUsers(string sqlcmd)
    {
        SqlConnection connection = new SqlConnection(ConnectServer());
        SqlCommand command = new SqlCommand(sqlcmd, connection);
        connection.Open();
        SqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            Session["emails"] += (string)reader["Email"] + ',';
            Session["phones"] += (string)reader["Phone"] + ',';
        }
        connection.Close();
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["connection"] == null && Request.Cookies["user"] == null)
            Response.Redirect("Home.aspx");
        string sql;
        Session["edit_user"] = Request.Form["edit"];
        if (Session["edit_user"] == null || Convert.ToString(Session["edit_user"]).Length == 0)
            Session["edit_user"] = 0;
        if (Convert.ToInt32(Session["edit_user"]) == 2)
        {
            string status, hobbies;
            if (Request.Form["other_status"] != null)
                status = Request.Form["other_status"];
            else
                status = Request.Form["status"];
            hobbies = Request.Form["hobbie"];
            if (Request.Form["other_hobbie"] != null)
                hobbies += "(" + Request.Form["other_hobbie"] + ")";
            if (Request.Form["pass"] != "********")
            {
                string password = Request.Form["pass"];
                int index = 0;
                foreach (char letter in password)
                {
                    if (letter == '\'')
                    {
                        password = password.Insert(index, "'");
                        index++;
                    }
                    index++;
                }
                sql = string.Format("UPDATE Users SET [Secret]='{0}',Email='{1}',[Name]='{2}',Phone='{3}',[Date of birth]='{4}'," +
                    "Gender='{5}',City='{6}',[Address]='{7}',[Account type]='{8}',[Company name]='{9}',[Status]='{10}',Hobbies='{11}',[Sec Q1]='{12}'," +
                    "A1='{13}',[Sec Q2]='{14}',A2='{15}',More='{16}' WHERE [User name]='{17}'"
                , password, Request.Form["email"].ToLower(), Request.Form["my_name"]
                , Request.Form["prefix_phone"] + Request.Form["phone"], Request.Form["year"] + '-' + Request.Form["month"] + '-' + Request.Form["day"],
                Request.Form["S"], Request.Form["City"], Request.Form["address"], Request.Form["account"], Request.Form["qaccount"]
                , status, hobbies, Request.Form["q1"], Request.Form["a1"], Request.Form["q2"], Request.Form["a2"], Request.Form["more"], Session["user"]);
            }
            else
                sql = string.Format("UPDATE Users SET Email='{0}',[Name]='{1}',Phone='{2}',[Date of birth]='{3}'," +
                    "Gender='{4}',City='{5}',[Address]='{6}',[Account type]='{7}',[Company name]='{8}',[Status]='{9}',Hobbies='{10}',[Sec Q1]='{11}'," +
                    "A1='{12}',[Sec Q2]='{13}',A2='{14}',More='{15}' WHERE [User name]='{16}'"
                , Request.Form["email"].ToLower(), Request.Form["my_name"]
                , Request.Form["prefix_phone"] + Request.Form["phone"], Request.Form["year"] + '-' + Request.Form["month"] + '-' + Request.Form["day"],
                Request.Form["S"], Request.Form["City"], Request.Form["address"], Request.Form["account"], Request.Form["qaccount"]
                , status, hobbies, Request.Form["q1"], Request.Form["a1"], Request.Form["q2"], Request.Form["a2"], Request.Form["more"], Session["user"]);
            Session["connection"] = Request.Form["my_name"];
            UpdateUserDetail(sql);
            sql = "SELECT * FROM Users WHERE [User name]='" + Session["user"] + "'";
            CheckUserDetail(sql);
        }
        else
        {
            if (Request.Cookies["user"] != null)
                sql = "SELECT * FROM Users WHERE [User name]='" + Request.Cookies["user"].Value + "'";
            else
                sql = "SELECT * FROM Users WHERE [User name]='" + Session["user"] + "'";
            CheckUserDetail(sql);
            if (Convert.ToInt32(Session["edit_user"]) == 1) {
                date[0] = Convert.ToString(Session["date"]).Substring(0, 2); ;
                date[1] = Convert.ToString(Session["date"]).Substring(3, 2);
                date[2] = Convert.ToString(Session["date"]).Substring(6);
                phone[0] = Convert.ToString(Session["phone"]).Substring(0, 3);
                phone[1] = Convert.ToString(Session["phone"]).Substring(3);
                sql = "SELECT * FROM Users WHERE [User name]!='" + Session["user"] + "'";
                GetDataUsers(sql);
            }
        }
    }
}