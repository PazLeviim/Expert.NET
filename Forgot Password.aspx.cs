using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

public partial class Forgot_Password : System.Web.UI.Page
{
    public void Get_Q_Sec(string sqlcmd)
    {
        SqlConnection connection = new SqlConnection(ConnectServer());
        SqlCommand command = new SqlCommand(sqlcmd, connection);
        connection.Open();
        SqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            Session["q1"] = reader["Sec Q1"];
            Session["q2"] = reader["Sec Q2"];
            Session["user"] = reader["User name"];
        }
        connection.Close();
    }
    public void Check_Answers(string sqlcmd)
    {
        SqlConnection connection = new SqlConnection(ConnectServer());
        SqlCommand command = new SqlCommand(sqlcmd, connection);
        connection.Open();
        Session["my_name"] = command.ExecuteScalar();
        connection.Close();
    }
    public string ConnectServer()
    {
        return @"Data Source=(LocalDB)\MSSQLLocalDB;
AttachDbFilename=|DataDirectory|\Users.mdf;
Integrated Security=True";
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        Session["error_login"] = null;
        Session["error_forgot"] = null;
        if (Session["connection"] != null || Request.Cookies["user"] != null)
            Response.Redirect("Home.aspx");
        Session["forgot"] = Request.Form["Submit"];
        if (Request.Form["Submit"] == "Submit1")
        {
            switch (Request.Form["connect_account"])
            {
                case "user":
                    Session["forgot_connection"] = Request.Form["user"];
                    Session["column"] = "User name";
                    break;
                case "email":
                    Session["forgot_connection"] = Request.Form["email"].ToLower();
                    Session["column"] = "Email";
                    break;
                default:
                    Session["forgot_connection"] = Request.Form["phone"];
                    Session["column"] = "Phone";
                    break;
            }
            string sql = string.Format("SELECT * FROM Users WHERE [{0}]='{1}'", Session["column"], Session["forgot_connection"]);
            Get_Q_Sec(sql);
            if (Session["q1"] == null || Session["q2"] == null)
            {
                Session["forgot"] = null;
                Session["error_forgot"] = "Error";
            }
        }
        else if (Request.Form["Submit"] == "Submit2")
        {
            string sql = string.Format("SELECT [Name] FROM Users WHERE [{0}]='{1}' AND A1='{2}' AND A2='{3}'", Session["column"], Session["forgot_connection"], Request.Form["a1"], Request.Form["a2"]);
            Check_Answers(sql);
            if (Session["my_name"] == null)
            {
                Session["forgot"] = "Submit1";
                Session["error_forgot"] = "Error";
            }
        }
        else if (Request.Form["Submit"] == "Cancel")
            Response.Redirect("Login.aspx");
    }
}