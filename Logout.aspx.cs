using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Logout : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
       Session.Abandon();
        HttpCookie cookie = Request.Cookies["user"];
        if (cookie != null)
        {
            cookie.Expires = DateTime.Now.AddYears(-120);
            Response.Cookies.Add(cookie);
        }
        System.Threading.Thread.Sleep(1000);
        Response.Redirect("Home.aspx");
    }
}