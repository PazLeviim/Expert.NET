<%@ Page Language="C#" AutoEventWireup="true" CodeFile="About.aspx.cs" Inherits="About" %>
<!DOCTYPE html>
<html>
<head>
    <title>אודות</title>
    <link href="Home About Products Shoping.css" type="text/css" rel="stylesheet" />
    <link href="Pictures/Main Logo.png" rel="shortcut icon" />
	<meta charset="utf-8" />
</head>
<body id="about">
    <ul id="menu">
        <li><a href="Home.aspx" class="menu" id="home"><img src="Pictures/Home Logo.png" id="home_logo" alt="Home"/></a></li>
       <%if (Session["connection"] == null)
               Response.Write("<li><a href=Login.aspx class=menu>Sign In</a></li>");
         else
               Response.Write("<li><a href='Products Shoping.aspx' class=menu>Shop Products</a></li><li><a href=Logout.aspx class=menu>Sign Out</a></li>");%>
    </ul>
    <div id="cont">
        <a href="Home.aspx"><img src="Pictures/Full Logo.png" id="logo_in_about" alt="Golden International" /></a>
        <div id="cont_about">
            <h1 class="main"><ins>אודות</ins></h1>
            <div id="block">
                <ul>
                    <li><h1>תוכן עניינים:</h1></li>
                    <content><br /></content>
                    <li><a href="#p1" class="p">הקמת החברה</a></li>
                    <content><br /></content>
                    <li><a href="#p2" class="p">אחריות החברה</a></li>
                    <content><br /></content>
                    <li><a href="#p3" class="p">עם הפנים אל העתיד</a></li>
                    <content><br /></content>
                    <li><a href="#p4" class="p">כללי האתר</a></li>
                    <content><br /></content>
                    <li><a href="#sites" class="p">אתרים מומלצים</a></li>
                    <content><br /></content>
                    <li><a href="#contect" class="p">צור קשר</a></li>
                    <content><br /></content>
                </ul>
            </div>
            <h1 id="p1"><ins>הקמת החברה</ins></h1>
            <b class="cp">
                חברת גולדן בינלאומי
                נוסדה בשנת 2017 על ידי פז לויים שהוא סטודנט שעושה הנדסאי במכללת נעמת שבראשון לציון.
                <br />פז חשב על רעיון איך הוא ימכור מוצרי אלקטורניקה של החברה שלו ולכן הוא
                פיתח אתר לחברתו שנקראת גולדן בינלואומי<br />ומטרתה העסקית היא לשווק מוצרי אלקטרוניקה ומחשבים
                לא רק בארץ אלא גם ברחבי העולם וכך שכל לקוח יהיה מרוצה מהשירות של גולדן בינלאומי.<br /><br />
            </b>
            <a href="#menu" class="p">העבר אותי ללמעלה</a>
            <h1 id="p2"><ins>אחריות החברה</ins></h1>
            <b class="cp" id="cp2">
                החברה היא אחראית למכור את מוצריה באופן שיווקי ועסקי ולא תהיה
                אפליה על הלקוחות של החברה בעניין להעלות את המחירים ולהיפך.<br />
                על החברה למכור את המוצרים באופן תקין ועל שליחת המוצר תהיה בדיקה שהיא הגיע באמת ללקוח
                באופן תקין ושהמוצר לא נפגם, במידה ואחד הדברים קרו על הלקוח ליצור קשר עם התמיכה  במייל שנמצא
                בדף אודות בנושא של יצירת קשר, והלקוח חייב לשלוח אימייל תוך 30 יום מאז הגעת המוצר אליו,
                ובמידה והלקוח מראה את ההוכחות הקיימות שהוא קיבל את המוצר לא תקין או פגום, הלקוח
                יקבל החזר כספי מלא על המוצר עצמו.<br />
                על העובדים בחברה שיוצרים קשר עם הלקוחות אין לעשות עבירה מסוימת כגון הטרדה ועוד.<br /><br />
            </b>
            <a href="#menu" class="p">העבר אותי ללמעלה</a>
            <h1 id="p3"><ins>עם הפנים אל העתיד</ins></h1>
            <b class="cp">
                אין ספק, כי קצב הצמיחה המרשים של גולדן בינלאומי ומובילותה בשווקים בהם היא פועלת,
                נוטעים בחברה אופטימיות, כי תמשיך<br />ותצמח בקצב גבוה גם בשנים הקרובות.
                <br />מובילות בונים עם שירות איכותי,
                טכנולוגיה מצוינת וחזון עסקי ברור - ובכל אלו אוחזת גולדן בינלאומי ביד רמה.
            </b><br /><br />
            <a href="#menu" class="p">העבר אותי ללמעלה</a>
            <h1 id="p4"><ins>כללי האתר</ins></h1>
            <h2>על מנת שיהיה סדר באתר הוחלט שיהיו כללים באתר והם:<br /></h2>
            <ol>
                <li>
                    אין תוכן פוגעני או תוכן לא חוקי, אסור ו/או מפר זכויות יוצרים
                    ואין לפרסם אמירות בעלות אופי פוגעני או לא הולם.
                </li>
                <li>
                    האתר גולדן בינלאומי משמש כאתר במסגרת פרוייקט לימודי בלבד
                    ואין להפנות פניות רשמיות לאתר ככתובת לבעיות הקיימות בגולדן בינלאומי (אם יש אתר כזה) ואין לבוא בטענות ליצרן האתר
                    לאתר עצמו יש לוגו של גולדן בינלאומי שמופיע באתר כחלק מפעילות הפרוייקט בלבד ואין לה שימוש למטרה אחרת.
                </li>
                <li>
                    אין לשלוח לטפסי האתר תכנים אסורים המוזכרים בכלל מספר 1 כמו: תוכן פוגעני, לא חוקי, אסור ו/או מפר
                    זכויות יוצרים ואין לפרסם אמירות בעלות אופי פוגעני או לא הולם.
                </li>
                <li>אין להעתיק מהאתר תכנים ללא רשות מנהל האתר.</li>
                <li>
                    א.הגולש מסכים כי מנהל האתר רשאי לשנות ו/או להוסיף
                    כללים לאתר ולבצע שינויים באתר ללא התראה מראש על כך לגולש עצמו.
                </li>
                <li>
                    ב.רק למנחה של הפרוייקט ו/או לבוחן/ת החיצוני/ת מתחייב מנהל האתר להודיע על כל
                    שינוי אשר חל מסיבה כלשהי ביום הבחינה או לפניה כמיטב יכולתו.
                </li>
                <li>
                    כל הנעשה באתר כולל התשובות הנשלחות לטפסים
                    הם כחלק של פרוייקט לימודי בלבד.
                </li>
                <li>
                    אין להתחזות בטפסים ו/או בקבוצת הדיון לגורם רשמי כלשהו או לכל גולש אחר.
                </li>
                <li>
                    נושאים אשר אין להם התייחסות בכללי האתר
                    יטופלו ע"י מנהל האתר ויקבלו מענה בנוגע למה מותר ולמה אסור לעשות.
                </li>
                <content><br /></content>
                <li>
                    שתהיה לכם המשך גלישה נעימה ומהנה!
                </li>
            </ol>
            <a href="#menu" class="p">העבר אותי ללמעלה</a><br />
            <h1 class="main"><ins>אתרים מומלצים</ins></h1>
            <div id="sites">
                <a href="https://he.aliexpress.com/" target="_blank"><img id="img_sites1" class="img_sites" src="Pictures/Aliexpress.png" alt="Ali Express" /></a>
                <a href="https://www.linkedin.com/company/alibaba-group" target="_blank"><img id="img_sites2" class="img_sites" src="Pictures/linkedin.png" alt="Linked In" /></a>
                <a href="https://www.amazon.com/" target="_blank"><img id="img_sites3" class="img_sites" src="Pictures/Amazon.png" alt="Amazon" /></a>
                <a href="https://www.ebay.com/" target="_blank"><img id="img_sites4" class="img_sites" src="Pictures/ebay.gif" alt="Ebay"/></a>
                <a href="https://www.walmart.com/cp/electronics/3944" target="_blank"><img id="img_sites5" class="img_sites" src="Pictures/Walmart.gif" alt="Walmart"/></a>
                <a href="https://www.overstock.com/Electronics/2/store.html" target="_blank"><img id="img_sites6" class="img_sites" src="Pictures/OverStock.gif" alt="Over Stock"/></a>
                <a href="https://ksp.co.il/" target="_blank"><img id="img_sites7" class="img_sites" src="Pictures/KSP.png" alt="KSP"/></a>
                <a href="https://www.wish.com/" target="_blank"><img id="img_sites8" class="img_sites" src="Pictures/Wish.png" alt="Wish"/></a>
                <a href="http://www.qvc.com/" target="_blank"><img id="img_sites9" class="img_sites" src="Pictures/QVC.png" alt="QVC"/></a>
            </div>
            <a href="#menu" class="p">העבר אותי ללמעלה</a><br />
            <h1 class="main" id="contect"><ins>צור קשר</ins></h1>
            <b class="mail">מייל:</b>
            <a href="mailto:pazx999@gmail.com" class="mail"><b>pazx999@gmail.com</b></a><br /><br />
            <a href="#menu" class="p">העבר אותי ללמעלה</a><br />
        </div>
        <p>&copy;כל הזכויות שמורות לפז לויים</p>
    </div>
</body>
</html>
