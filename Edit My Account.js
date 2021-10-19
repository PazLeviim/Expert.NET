function create_account() {
    var qaccount = document.createElement("label");
    var text_qaccount = [document.createTextNode("*Name of your company:"), document.createElement("br")];
    var input_qaccount = document.createElement("input");
    qaccount.setAttribute("id", "req_account");
    qaccount.setAttribute("class", "req_text");
    input_qaccount.setAttribute("class", "input_user");
    input_qaccount.setAttribute("id", "account_type");
    input_qaccount.setAttribute("placeholder", "Company Name");
    input_qaccount.setAttribute("name", "qaccount");
    if (text_count == 0) {
        for (var text = 0; text < text_qaccount.length; text++)
            qaccount.appendChild(text_qaccount[text]);
        var company = document.getElementById("company");
        company.appendChild(qaccount);
        company.appendChild(input_qaccount);
        text_count++;
    }
}
function Complete() {
    var edit_form = document.getElementsByTagName("form");
    var prefix_phone_delete = document.getElementById("prefix_phone_delete");//prefix phone
    var prefixes = document.getElementsByClassName("prefix_phone");
    for (var index = 0; index < prefixes.length; index++)
        if (prefix_phone_delete.value == prefixes[index].value)
            prefixes[index].setAttribute("selected", "");
    var gender_delete = document.getElementById("gender_delete");//gender
    var S = document.getElementsByClassName("S");
    for (var index = 0; index < S.length; index++)
        if (S[index].value == gender_delete.value)
            S[index].setAttribute("selected", "");
    var account_delete = document.getElementById("account_delete");//type account
    var account = document.getElementsByName("account");
    for (var index = 0; index < account.length; index++)
        if (account[index].value == account_delete.value)
            account[index].setAttribute("checked", "");
    if (account[account.length - 1].checked)
        create_account();
    var commercial = document.getElementById("account_type");
    var qaccount_delete = document.getElementById("qaccount_delete");
    if (commercial != null)
        commercial.value = qaccount_delete.value;
    var status_delete = document.getElementById("status_delete");//status
    var status = document.getElementsByName("status");
    for (var index = 0; index < status.length; index++)
        if (status[index].value == status_delete.value)
            status[index].setAttribute("checked", "");
    var other_status_delete = document.getElementById("other_status_delete");
    if (other_status_delete.value.length != 0) {
        var other_status = document.getElementById("other_status");
        other_status.removeAttribute("disabled");
        other_status.setAttribute("class", "input_user");
        other_status.setAttribute("placeholder", "Other");
        status[status.length - 1].setAttribute("checked", "");
        other_status.value = other_status_delete.value;
    }
    var hobbies_delete = document.getElementById("hobbies_delete");//hobbies
    var hobbie = document.getElementsByName("hobbie");
    for (var index = 0; index < hobbie.length; index++)
        if (hobbies_delete.value.match(hobbie[index].value))
            hobbie[index].setAttribute("checked", "");
    var other_hobbie_delete = document.getElementById("other_hobbie_delete");
    if (hobbie[hobbie.length - 1].checked) {
        var other_hobbie = document.getElementById("other_hobbie");
        other_hobbie.removeAttribute("disabled");
        other_hobbie.setAttribute("class", "input_user");
        other_hobbie.setAttribute("placeholder", "Other");
        other_hobbie.value = other_hobbie_delete.value;
    }
    var q1_delete = document.getElementById("q1_delete");//qsecurity
    var q2_delete = document.getElementById("q2_delete");
    var q1 = document.getElementsByClassName("q1");
    var q2 = document.getElementsByClassName("q2");
    for (var num = 0; num < q1.length; num++)
        if (q1[num].value == q1_delete.value)
            q1[num].setAttribute("selected", "");
    for (var num = 0; num < q2.length; num++)
        if (q2[num].value == q2_delete.value)
            q2[num].setAttribute("selected", "");
    q_sub_1 = q1_delete.value;
    q_sub_2 = q2_delete.value;
    var elements_delete = [prefix_phone_delete, gender_delete, qaccount_delete, account_delete, status_delete, other_status_delete, hobbies_delete, other_hobbie_delete, q1_delete,q2_delete];
    for (var count = 0; count < edit_form.length; count++)
        for (var index = 0; index < elements_delete.length; index++)
            edit_form[count].removeChild(elements_delete[index]);
}
function pass_len(pass) {
    var all_progress = document.getElementById("all_progress");
    if (pass.value.length == 0 || pass.value=="********") {
        if (!all_progress.hasAttribute("hidden")) {
            all_progress.setAttribute("hidden", "");
        }
    }
    else {
        all_progress.removeAttribute("hidden");
    }
}
function check_lenpass(pass) {//Done
    if (pass.value.length >= 10) {
        return 150 / 5;
    }
    else {
        return 0
    }
}
function check_sym(pass) {//Done
    if (pass.value.match(/[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~]/)) {
        return 150 / 5;
    }
    else {
        return 0;
    }
}
function check_lowerpass(pass) {//Done
    if (pass.value.match(/[a-z א-ת]/)) {
        return 150 / 5;
    }
    else {
        return 0;
    }
}
function check_upperpass(pass) {//Done
    if (pass.value.match(/[A-Z]/)) {
        return 150 / 5;
    }
    else {
        return 0;
    }
}
function check_digitpass(pass) {//Done
    if (pass.value.match(/\d/)) {
        return 150 / 5;
    }
    else {
        return 0;
    }
}
function create_con_Pass(check_pass) {
    var create_elements = [document.createElement("label"), document.createElement("input")];
    for (var element = 0; element < create_elements.length; element++)
        check_pass.appendChild(create_elements[element]);
    create_elements[0].innerHTML = "*Confirm Password<br/>";
    create_elements[0].setAttribute("id", "con_pass");
    create_elements[0].setAttribute("class", "req_text");
    create_elements[create_elements.length-1].setAttribute("id", "c_pass");
    create_elements[create_elements.length - 1].setAttribute("name", "c_pass");
    create_elements[create_elements.length - 1].setAttribute("type", "password");
    create_elements[create_elements.length - 1].setAttribute("placeholder", "Confirm Password");
    create_elements[create_elements.length - 1].setAttribute("class", "input_user");
    create_elements[create_elements.length - 1].setAttribute("onkeyup", "CheckconPass()");
}
function remove_con_Pass(check_pass) {
    var remove_elements = [document.getElementById("con_pass"), document.getElementById("c_pass")];
    var V = document.getElementById("see_con_pass");
    if (V != null)
        remove_elements.push(V);
    for (var element = 0; element < remove_elements.length; element++)
        check_pass.removeChild(remove_elements[element]);
}
function Res_pass(width_progress, progress, word_pass, pass, check_pass) {
    switch (width_progress) {//Done
        case (150 / 5) * 3:
            progress[0].style.borderColor = "yellow";
            progress[1].style.borderColor = "yellow";
            progress[1].style.backgroundColor = "yellow";
            word_pass.innerHTML = "Weak";
            if (check_pass.childElementCount!=0)
                remove_con_Pass(check_pass);
            break;
        case (150 / 5) * 4:
            progress[0].style.borderColor = "green";
            progress[1].style.borderColor = "green";
            progress[1].style.backgroundColor = "green";
            word_pass.innerHTML = "Strong";
            if (check_pass.childElementCount != 0)
                remove_con_Pass(check_pass);
            break;
        case 150:
            var check_pass = document.getElementById("check_pass");
            check_pass.removeAttribute("hidden");
            progress[0].style.borderColor = "#35ea00";
            progress[1].style.borderColor = "#35ea00";
            progress[1].style.backgroundColor = "#35ea00";
            word_pass.innerHTML = "Excellent";
            if (check_pass.childElementCount == 0)
                create_con_Pass(check_pass);
            break;
        default:
            pass_len(pass);
            progress[0].style.borderColor = "red";
            progress[1].style.borderColor = "red";
            progress[1].style.backgroundColor = "red";
            word_pass.innerHTML = "Bad";
            if (check_pass.childElementCount != 0)
                remove_con_Pass(check_pass);
            break;
    }
}
function Pass() {
    var word_pass = document.getElementById("word_pass");
    var pass = document.getElementById("pass");
    var check_pass = document.getElementById("check_pass");
    var progress = document.getElementsByClassName("progress");
    var width_progress = check_lenpass(pass) + check_sym(pass) + check_lowerpass(pass) + check_upperpass(pass) + check_digitpass(pass);
    progress[1].style.width = width_progress + "px";
    Res_pass(width_progress, progress, word_pass, pass, check_pass);
}
function CheckconPass() { //Done
    var pass = document.getElementById("pass");
    var con_pass = document.getElementById("c_pass");
    var V = document.getElementById("see_con_pass");
    var check_pass = document.getElementById("check_pass");
    var Vimg = document.createElement("img");
    if (pass.value == con_pass.value) {
        if (V == null) {
            check_pass.appendChild(Vimg);
            Vimg.setAttribute("id", "see_con_pass");
            Vimg.setAttribute("class", "V");
            Vimg.setAttribute("src", "Pictures/Check mark V.png");
        }
    }
    else
        if (V != null)
            check_pass.removeChild(V);
}
function Email(emails) {//Done
    var emails_exists = [];
    for (var index = 0, index_emails = 0; index < emails.length; index_emails++ , index++) {
        emails_exists[index_emails] = "";
        while (emails[index] != ",")
            emails_exists[index_emails] += emails[index++];
    }
    var V = document.getElementById("see_con_email");
    var text_email_exists = document.getElementById("text_email_exists");
    var V_element;
    var email = document.getElementById("email");
    var check_email = document.getElementById("check_email");
    if (!email.value.match(/^.+\@.+\.../)) {
        if (V != null) {
            check_email.removeChild(V);
        }
        if (text_email_exists != null)
            check_email.removeChild(text_email_exists);
    }
    else {
        var email_exists_DB = 0;
        for (var index = 0; index < emails_exists.length; index++)
            if (emails_exists[index] == email.value.toLowerCase())
                email_exists_DB++;
        if (email_exists_DB > 0) {
            if (text_email_exists == null && V != null) {
                V.setAttribute("src", "Pictures/Check mark X.png");
                text_email_exists = document.createElement("b");
                text_email_exists.style.color = "red";
                text_email_exists.innerHTML = "Email already in used!";
                text_email_exists.setAttribute("id", "text_email_exists");
                check_email.appendChild(text_email_exists);
            }
            else if (text_email_exists == null) {
                V_element = document.createElement("img");
                V_element.setAttribute("id", "see_con_email");
                V_element.setAttribute("class", "V");
                V_element.setAttribute("src", "Pictures/Check mark X.png");
                check_email.appendChild(V_element);
                text_email_exists = document.createElement("b");
                text_email_exists.style.color = "red";
                text_email_exists.innerHTML = "Email already in used!";
                text_email_exists.setAttribute("id", "text_email_exists");
                check_email.appendChild(text_email_exists);
            }

        }
        else {
            if (text_email_exists != null) {
                check_email.removeChild(text_email_exists);
                V.setAttribute("src", "Pictures/Check mark V.png");
            }
            else if (V == null) {
                V_element = document.createElement("img");
                V_element.setAttribute("id", "see_con_email");
                V_element.setAttribute("class", "V");
                V_element.setAttribute("src", "Pictures/Check mark V.png");
                check_email.appendChild(V_element);
            }
        }
    }
}
function Phone(phones) {//Done
    var phones_exists = [];
    for (var index = 0, index_phones = 0; index < phones.length; index_phones++ , index++) {
        phones_exists[index_phones] = "";
        while (phones[index] != ",")
            phones_exists[index_phones] += phones[index++];
    }
    var prefix_phone = document.getElementsByClassName("prefix_phone");//part of phone
    var prefix_pvalue = "";
    for (var prefix_index = 0; prefix_index < prefix_phone.length; prefix_index++) {
        if (prefix_phone[prefix_index].selected)
            prefix_pvalue = prefix_phone[prefix_index].value;
    }
    var phone = document.getElementById("phone");
    var V = document.getElementById("see_con_phone");
    var text_phone_exists = document.getElementById("text_phone_exists");
    var V_element;
    var phone = document.getElementById("phone");
    var check_phone = document.getElementById("check_phone");
    if (phone.value.length != 7 || isNaN(phone.value) || phone.value[0] == 0 || prefix_pvalue.length == 0) {
        if (V != null) {
            check_phone.removeChild(V);
        }
        if (text_phone_exists != null)
            check_phone.removeChild(text_phone_exists);
    }
    else {
        var phones_exists_DB = 0;
        for (var index = 0; index < phones_exists.length; index++)
            if (phones_exists[index] == prefix_pvalue + phone.value)
                phones_exists_DB++;
        if (phones_exists_DB > 0) {
            if (V != null && text_phone_exists == null) {
                V.setAttribute("src", "Pictures/Check mark X.png");
                text_phone_exists = document.createElement("b");
                text_phone_exists.style.color = "red";
                text_phone_exists.innerHTML = "Phone already in used!";
                text_phone_exists.setAttribute("id", "text_phone_exists");
                check_phone.appendChild(text_phone_exists);
            }
            else if (text_phone_exists == null) {
                V_element = document.createElement("img");
                V_element.setAttribute("id", "see_con_phone");
                V_element.setAttribute("class", "V");
                V_element.setAttribute("src", "Pictures/Check mark X.png");
                check_phone.appendChild(V_element);
                text_phone_exists = document.createElement("b");
                text_phone_exists.style.color = "red";
                text_phone_exists.innerHTML = "Phone already in used!";
                text_phone_exists.setAttribute("id", "text_phone_exists");
                check_phone.appendChild(text_phone_exists);
            }

        }
        else {
            if (text_phone_exists != null) {
                check_phone.removeChild(text_phone_exists);
                V.setAttribute("src", "Pictures/Check mark V.png");
            }
            else if (V == null) {
                V_element = document.createElement("img");
                V_element.setAttribute("id", "see_con_phone");
                V_element.setAttribute("class", "V");
                V_element.setAttribute("src", "Pictures/Check mark V.png");
                check_phone.appendChild(V_element);
            }
        }
    }
}
var memory_d = '';
var memory_m = '';
var memoty_y = '';
function Date_DMY() {//Done
    var d = document.getElementById("day");
    var m = document.getElementById("month");
    var y = document.getElementById("year");
    if (!y.value.match(/\d/)) {
        y.value = '';
    }
    if (!m.value.match(/\d/)) {
        m.value = '';
    }
    if (!d.value.match(/\d/)) {
        d.value = '';
    }
    else if (d.value.length != 0) {
        if (d.value <= 0) {
            d.value = 1;
        }
        if (d.value >= 32) {
            d.value = 31;
        }
        else if (d.value > 3 && d.value < 10 && d.value.length < 2) {
            d.value = '0' + d.value;
        }
    }
    if (m.value.length != 0) {
        if (m.value <= 0) {
            m.value = 1;
        }
        if (m.value >= 13) {
            m.value = 12;
        }
        else if (m.value > 1 && m.value < 10 && m.value.length < 2) {
            m.value = '0' + m.value;
        }
    }
    if (isNaN(d.value)) {
        d.value = memory_d;
    }
    if (isNaN(m.value)) {
        m.value = memory_m;
    }
    if (isNaN(y.value)) {
        y.value = memory_y;
    }
    var date = new Date();
    if (y.value > date.getFullYear()) {
        y.value = date.getFullYear();
    }
    memory_d = d.value;
    memory_m = m.value;
    memory_y = y.value;
}
function Date_Complete() {
    var d = document.getElementById("day");
    var m = document.getElementById("month");
    var y = document.getElementById("year");
    if (d.value.length == 1) {
        d.value = '0' + d.value;
    }
    if (m.value.length == 1) {
        m.value = '0' + m.value;
    }
    var date = new Date();
    if (y.value < date.getFullYear() - 120 && y.value.length != 0) {
        y.value = date.getFullYear() - 120;
    }
    if (y.value >= date.getFullYear() && m.value > date.getMonth() + 1) {
        y.value = date.getFullYear();
        m.value = date.getMonth() + 1;
        if (m.value.length < 2)
            m.value = '0' + m.value;
    }
    if (y.value >= date.getFullYear() && m.value >= date.getMonth() + 1 && d.value > date.getDate()) {
        y.value = date.getFullYear();
        m.value = date.getMonth() + 1;
        d.value = date.getDate();
        if (m.value.length < 2)
            m.value = '0' + m.value;
        if (d.value.length < 2)
            d.value = '0' + d.value;
    }
}
var text_count = 0;
function remove_account() {
    var company = document.getElementById("company");
    var account = [document.getElementById("req_account"), document.getElementById("account_type")];
    for (var index = 0; index < account.length; index++)
        company.removeChild(account[index]);
}
function Account(account_type) {
    switch (account_type) {
        case "Commercial":
            create_account();
            break;
        default:
            var company = document.getElementById("company");
            while (company.childElementCount != 0) {
                remove_account();
            }
            text_count = 0;
    }
}
function part_status() {
    var other_index = document.getElementsByName("status").length - 1;
    var last_status = document.getElementsByName("status")[other_index];
    var other = document.getElementById("other_status");
    if (last_status.checked) {
        if (other.hasAttribute("disabled")) {
            other.removeAttribute("disabled");
            other.setAttribute("class", "input_user");
            other.setAttribute("placeholder", "Other");
        }
    }
    else {
        if (!other.hasAttribute("disabled")) {
            other.value = "";
            other.setAttribute("disabled", "");
            other.removeAttribute("class");
            other.removeAttribute("placeholder");
        }
    }
}
function part_hobbie() {
    var other_index = document.getElementsByName("hobbie").length - 1;
    var last_hobbie = document.getElementsByName("hobbie")[other_index];
    var other = document.getElementById("other_hobbie");
    if (last_hobbie.checked) {
        if (other.hasAttribute("disabled")) {
            other.removeAttribute("disabled");
            other.setAttribute("class", "input_user");
            other.setAttribute("placeholder", "Other");
        }
    }
    else {
        if (!other.hasAttribute("disabled")) {
            other.value = "";
            other.setAttribute("disabled", "");
            other.removeAttribute("class");
            other.removeAttribute("placeholder");
        }
    }
}
function Q(q_number) {
    var a = [document.getElementById("a1"), document.getElementById("a2")];
    switch (q_number) {
        case 1:
            a[0].value = "";
            break;
        default:
            a[1].value = "";
    }
}
var count_recaptcha = 1;
function expired_checked() {
    count_recaptcha = 1;
}
function recaptcha() {
    count_recaptcha = 0;
}
function no_internet() {
    alert("No internet connection\nPlease check your network and try again")
}
function Submit() {
    var count_false = 0;
    var wrong = document.getElementById("wrong");
    var req_all = document.getElementsByClassName("req_text");
    for (var n = 0; n < req_all.length; n++)
        req_all[n].style.color = "black";
    var pass_progress = document.getElementsByClassName("progress");//part of password
    var pass_text = document.getElementById("pass_text");
    var pass = document.getElementById("pass");
    if (pass_progress[1].style.width != "150px" && pass.value!="********") {
        pass_text.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var c_pass = document.getElementById("c_pass");//part of confirm password
    var con_pass = document.getElementById("con_pass");
    var pass = document.getElementById("pass");
    if (con_pass != null && c_pass.value != pass.value) {
        con_pass.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var email = document.getElementById("email");//part of email
    var email_word = document.getElementById("email_word");
    var text_email_exists = document.getElementById("text_email_exists");
    if (!email.value.match(/^.+\@.+\.../) || text_email_exists != null) {
        email_word.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var name = document.getElementById("name");//part of name
    var req_name = document.getElementById("req_name");
    if (name.value.length < 2 || name.value.match(/[^A-Za-zא-ת ]/) || !name.value.match(/ /)) {
        req_name.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var prefix_phone = document.getElementsByClassName("prefix_phone");//part of phone
    var prefix_pvalue = "";
    for (var prefix_index = 0; prefix_index < prefix_phone.length; prefix_index++) {
        if (prefix_phone[prefix_index].selected)
            prefix_pvalue = prefix_phone[prefix_index].value;
    }
    var phone = document.getElementById("phone");
    var phone_word = document.getElementById("phone_word");
    var text_phone_exists = document.getElementById("text_phone_exists");
    if (phone.value.length != 7 || isNaN(phone.value) || phone.value[0] == 0 || prefix_pvalue.length == 0 || text_phone_exists != null) {
        phone_word.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var date_birth = [document.getElementById("day"), document.getElementById("month"), document.getElementById("year")];//part of birth day
    var req_date = document.getElementById("req_date");
    for (var birth_index = 0; birth_index < date_birth.length; birth_index++) {
        if (date_birth[birth_index].value.length == 0) {
            req_date.style.color = "red";
            if (wrong.innerHTML.length == 0)
                wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
            if (wrong.hasAttribute("hidden"))
                wrong.removeAttribute("hidden");
            count_false++;
        }
    }
    var gender = document.getElementsByClassName("S");//part of gender
    var gender_word = document.getElementById("gender_word");
    for (gender_index = 0; gender_index < gender.length; gender_index++) {
        if (gender[gender_index].selected)
            var gender_value = gender[gender_index].value;
    }
    if (gender_value.length == 0) {
        gender_word.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var city = document.getElementById("city");//part of city
    var req_city = document.getElementById("req_city");
    if (city.value.length < 3 || city.value.match(/[^A-Za-zא-ת ]/)) {
        req_city.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var account = document.getElementsByName("account");//part of account type
    var account_c = 0;
    for (var c = 0; c < account.length; c++) {
        if (account[c].checked)
            account_c++;
    }
    var account_company = document.getElementById("account_type");
    var account_company_text = document.getElementById("req_account");
    if (account_company != null && account_company.value.length < 2) {
        account_company_text.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var account_word = document.getElementById("account_word");
    if (account_c == 0) {
        account_word.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var other_status = document.getElementById("other_status"); //part other status
    var other_status_label = document.getElementById("other_status_label");
    if (other_status.value.length == 0 && (!other_status.hasAttribute("disabled"))) {
        other_status_label.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var hobbie = document.getElementsByName("hobbie");//part of hobbie
    for (var c = 0, count = 0; c <= hobbie.length - 1; c++) {
        if (hobbie[c].checked) {
            count++;
        }
    }
    var other_hobbie = document.getElementById("other_hobbie");
    var other_hobbie_label = document.getElementById("other_hobbie_label");
    if (other_hobbie.value.length == 0 && (!other_hobbie.hasAttribute("disabled"))) {
        other_hobbie_label.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var req_hobbie = document.getElementById("hobbies");
    if (count == 0) {
        req_hobbie.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var a = [document.getElementById("a1"), document.getElementById("a2")];//part of security questions
    var sec_q_word = document.getElementById("sec_q_word");
    if (a[0].value.length < 5 || a[1].value.length < 5) {
        sec_q_word.style.color = "red";
        if (wrong.innerHTML.length == 0)
            wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
        if (wrong.hasAttribute("hidden"))
            wrong.removeAttribute("hidden");
        count_false++;
    }
    var recaptcha_exists = document.getElementById("recaptcha_element");//reCAPTCHA
    var recaptcha_index = document.getElementById("recaptcha_index");
    switch (count_recaptcha) {
        case 1:
            var recaptcha_element = document.createElement("b");
            var recaptcha_text = document.createTextNode("Please prove that you aren't a robot");
            recaptcha_element.setAttribute("id", "recaptcha_element");
            recaptcha_element.appendChild(recaptcha_text);
            recaptcha_element.style.color = "red";
            recaptcha_element.style.position = "relative";
            recaptcha_element.style.left = "85px";
            if (recaptcha_index.innerHTML.length == 0)
                recaptcha_index.appendChild(recaptcha_element);
            if (wrong.innerHTML.length == 0)
                wrong.innerHTML = "There are some invalid content, please<br/>check the fields and put valid values";
            if (wrong.hasAttribute("hidden"))
                wrong.removeAttribute("hidden");
            break;
        default:
            if (recaptcha_exists != null)
                recaptcha_index.removeChild(recaptcha_exists);
    }
    if (count_false >= 1 || count_recaptcha == 1)
        return false;
    var submit = document.getElementsByName("edit");
    for (var index = 0; index < submit.length; index++)
        submit[index].setAttribute("value", "2");
}