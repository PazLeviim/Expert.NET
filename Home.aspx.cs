using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
public partial class Home :  System.Web.UI.Page
{
    public string user;
    public string ConnectServer()
    {
        return @"Data Source=(LocalDB)\MSSQLLocalDB;
AttachDbFilename=|DataDirectory|\Users.mdf;
Integrated Security=True";
    }
    public void CheckUserDetail(string sqlcmd)
    {
        SqlConnection connection = new SqlConnection(ConnectServer());
        SqlCommand command = new SqlCommand(sqlcmd, connection);
        connection.Open();
        SqlDataReader reader= command.ExecuteReader();
        while (reader.Read())
        {
            Session["user"] = reader["User name"];
            Session["connection"] = reader["Name"];
        }
        connection.Close();
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        Session["error_login"] = null;
        if (Session["connection_login"]==null)
            switch (Request.Form["connect_account"])
            {
                case "user":
                    Session["connection_login"] = Request.Form["user"];
                    Session["column"] = "User name";
                    break;
                case "email":
                    Session["connection_login"] = Request.Form["email"].ToLower();
                    Session["column"] = "Email";
                    break;
                default:
                    Session["connection_login"] = Request.Form["phone"];
                    Session["column"] = "Phone";
                    break;
            }
        if (Session["connection_login"] != null)
        {
            if (Session["connection"] == null)
            {
                Session["q1"] = null;
                Session["q2"] = null;
                Session["stay_connected"] = Request.Form["connected"];
                string password = Request.Form["password"];
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
                string sql = string.Format("SELECT * FROM Users WHERE [{0}]='{1}' AND [Secret]='{2}'", Session["column"], Session["connection_login"], password);
                CheckUserDetail(sql);
                Session["connection_login"] = null;
                if (Session["connection"]==null)
                {
                    Session["error_login"] = "Error";
                    Response.Redirect("Login.aspx");
                }
                else
                {
                    Session.Timeout = 60 * 24 * 365;
                    if (Session["stay_connected"] != null)
                    {
                        HttpCookie cookie = new HttpCookie("user");
                        cookie.Value = (string)Session["user"];
                        cookie.Expires = DateTime.Now.AddYears(120);
                        Response.Cookies.Add(cookie);
                    }
                }
            }
        }
    }
    public string Time()
    {
        if (Session["connection"] == null && Request.Cookies["user"] == null)
            user = "אורח";
        else
        {
            if (Request.Cookies["user"] != null)
            {
                string sql = "SELECT * FROM Users WHERE [User name]='" + Request.Cookies["user"].Value + "'";
                CheckUserDetail(sql);
            }
            user = (string)Session["connection"];
        }
        return user;
    }
}