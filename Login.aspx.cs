using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;

public partial class Login : System.Web.UI.Page
{
    public void InsertUpdateDB(string sqlcmd)
    {
        SqlConnection connection = new SqlConnection(ConnectServer());
        SqlCommand command = new SqlCommand(sqlcmd, connection);
        connection.Open();
        int count_success = command.ExecuteNonQuery();
        connection.Close();
    }
    public string ConnectServer()
    {
        return @"Data Source=(LocalDB)\MSSQLLocalDB;
AttachDbFilename=|DataDirectory|\Users.mdf;
Integrated Security=True";
    }
    string status,hobbies;
    protected void Page_Load(object sender, EventArgs e)
    {
        Session["q1"] = null;
        Session["q2"] = null;
        Session["forgot"] = null;
        if (Session["connection"] != null || Request.Cookies["user"] != null)
            Response.Redirect("Home.aspx");
        if (Request.Form["other_status"] != null)
            status = Request.Form["other_status"];
        else
            status = Request.Form["status"];
        hobbies = Request.Form["hobbie"];
        if (Request.Form["other_hobbie"] != null)
            hobbies += "(" + Request.Form["other_hobbie"] + ")";
        if (Request.Form["submit"]!=null&&Request.Form["submit"].Length != 0&&Request.Form["user"]!=null)
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
            string sql = string.Format("INSERT INTO Users VALUES ('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}','{9}','{10}','{11}','{12}','{13}','{14}','{15}','{16}','{17}')"
                , Request.Form["user"], password, Request.Form["email"].ToLower(), Request.Form["fname"] + ' ' + Request.Form["lname"]
                , Request.Form["prefix_phone"] + Request.Form["phone"], Request.Form["year"] + '-' + Request.Form["month"] + '-' + Request.Form["day"],
                Request.Form["S"], Request.Form["City"], Request.Form["address"], Request.Form["account"], Request.Form["qaccount"]
                , status, hobbies, Request.Form["q1"], Request.Form["a1"], Request.Form["q2"], Request.Form["a2"], Request.Form["more"]);
            InsertUpdateDB(sql);
        }
        if (Request.Form["Submit"] != null && Request.Form["Submit"] != "Cancel" && Request.Form["Submit"].Length > 0)
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
            string sql = string.Format("UPDATE Users SET [Secret]='{0}' WHERE [User name]='{1}'", password, Session["user"]);
            InsertUpdateDB(sql);
        }
    }
}