using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

public partial class Registration : System.Web.UI.Page
{
    public string ConnectServer()
    {
        return @"Data Source=(LocalDB)\MSSQLLocalDB;
AttachDbFilename=|DataDirectory|\Users.mdf;
Integrated Security=True";
    }
    public void GetDataUsers(string sqlcmd)
    {
        SqlConnection connection = new SqlConnection(ConnectServer());
        SqlCommand command = new SqlCommand(sqlcmd, connection);
        connection.Open();
        SqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            Session["usernames"] += (string)reader["User name"]+',';
            Session["emails"] += (string)reader["Email"] + ',';
            Session["phones"] += (string)reader["Phone"] + ',';
        }
        connection.Close();
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        Session["q1"] = null;
        Session["q2"] = null;
        Session["error_login"] = null;
        if (Session["connection"] != null||Request.Cookies["user"]!=null)
            Response.Redirect("Home.aspx");
        string sql = "SELECT * FROM Users";
        GetDataUsers(sql);
    }
}