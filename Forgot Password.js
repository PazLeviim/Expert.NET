function user_check(elements_show) {
    for (var element_index = 0; element_index < elements_show.length; element_index++) {
        switch (element_index) {
            case 0:
                var text = [document.createTextNode("Username"), document.createElement("br")];
                for (var text_index = 0; text_index < text.length; text_index++)
                    elements_show[element_index].appendChild(text[text_index]);
                break;
            default:
                elements_show[element_index].setAttribute("type", "text");
                elements_show[element_index].setAttribute("placeholder", "Username");
                elements_show[element_index].setAttribute("id", "user");
                elements_show[element_index].setAttribute("name", "user");
        }
    }
    for (var element_index = 0; element_index < elements_show.length; element_index++)
        user_connect.appendChild(elements_show[element_index]);
}
var choose_type = "Username";
function Connect(choose_user_connect) {
    var user_connect = document.getElementById("user_connect");
    var elements_show = [document.createElement("label"), document.createElement("input")];
    for (var element_index = 0; element_index < elements_show.length; element_index++)
        elements_show[element_index].setAttribute("class", "input_user");
    var element_in_connect = document.getElementsByClassName("input_user");
    while (user_connect.hasChildNodes()) {
        for (var element_index = 0; element_index < element_in_connect.length; element_index++)
            user_connect.removeChild(element_in_connect[element_index]);
    }
    switch (choose_user_connect) {
        case "Username":
            user_check(elements_show);
            break;
        case "Email":
            for (var element_index = 0; element_index < elements_show.length; element_index++) {
                switch (element_index) {
                    case 0:
                        var text = [document.createTextNode("Email"), document.createElement("br")];
                        for (var text_index = 0; text_index < text.length; text_index++)
                            elements_show[element_index].appendChild(text[text_index]);
                        break;
                    default:
                        elements_show[element_index].setAttribute("type", "email");
                        elements_show[element_index].setAttribute("placeholder", "Email");
                        elements_show[element_index].setAttribute("id", "email");
                        elements_show[element_index].setAttribute("name", "email");
                }
            }
            for (var element_index = 0; element_index < elements_show.length; element_index++)
                user_connect.appendChild(elements_show[element_index]);
            break;
        default:
            for (var element_index = 0; element_index < elements_show.length; element_index++) {
                switch (element_index) {
                    case 0:
                        var text = [document.createTextNode("Phone"), document.createElement("br")];
                        for (var text_index = 0; text_index < text.length; text_index++)
                            elements_show[element_index].appendChild(text[text_index]);
                        break;
                    default:
                        elements_show[element_index].setAttribute("type", "tel");
                        elements_show[element_index].setAttribute("placeholder", "Phone");
                        elements_show[element_index].setAttribute("id", "phone");
                        elements_show[element_index].setAttribute("name", "phone");
                }
            }
            for (var element_index = 0; element_index < elements_show.length; element_index++)
                user_connect.appendChild(elements_show[element_index]);
    }
    choose_type = choose_user_connect;
}
function Submit_forgot(column, error) {
    var connect = document.getElementsByClassName("connect");
    if (column != null) {
        switch (column) {
            case "User name":
                error.innerHTML = "The username isn't correct, please try again";
                connect[0].setAttribute("checked", "");
                Connect("Username");
                break;
            case "Email":
                error.innerHTML = "The email isn't correct, please try again";
                connect[1].setAttribute("checked", "");
                Connect("Email");
                break;
            default:
                error.innerHTML = "The phone isn't correct, please try again";
                connect[2].setAttribute("checked", "");
                Connect("Phone");
        }
    }
    else {
        var tab_forgot = document.getElementById("tab_forgot");
        var error = document.getElementById("error_message");
        switch (choose_type) {
            case "Username":
                var user = document.getElementById("user");
                var globaling_sym = /[\!-\/\:-\@\[-\`\{-\~]/;
                var globaling_user = /\!-\,\/\:-\@\[-\`\{-\~]/;
                if (user.value.length < 7 || user.value[0].match(globaling_user) || user.value[user.value.length - 1].match(globaling_user) || user.value.match(globaling_sym)) {
                    error.innerHTML = "There are invalid username, please try again";
                    user.value = '';
                    error.style.backgroundColor = "rgba(255, 5, 20, 0.80)";
                    error.style.border = "solid 2px";
                    error.style.borderColor = "red";
                    tab_forgot.style.width = "500px";
                    return false;
                }
                break;
            case "Email":
                var email = document.getElementById("email");
                if (!email.value.match(/^.+\@.+\.../)) {
                    error.innerHTML = "There are invalid email address, please try again";
                    email.value = '';
                    error.style.backgroundColor = "rgba(255, 5, 20, 0.80)";
                    error.style.border = "solid 2px";
                    error.style.borderColor = "red";
                    tab_forgot.style.width = "570px";
                    return false;
                }
                break;
            default:
                var phone = document.getElementById("phone");
                if (isNaN(phone.value) || phone.value.length != 10) {
                    error.innerHTML = "There are invalid phone number, please try again";
                    phone.value = '';
                    error.style.backgroundColor = "rgba(255, 5, 20, 0.80)";
                    error.style.border = "solid 2px";
                    error.style.borderColor = "red";
                    tab_forgot.style.width = "580px";
                    return false;
                }
        }
    }
}
function login_reset() {
    var tab_forgot = document.getElementById("tab_forgot");
    tab_forgot.style.width = "500px";
    var error = document.getElementById("error_message");
    choose_type = "Username";
    var connect = document.getElementsByClassName("connect");
    connect[0].checked;
    var user_connect = document.getElementById("user_connect");
    var elements_show = [document.createElement("label"), document.createElement("input")];
    for (var element_index = 0; element_index < elements_show.length; element_index++)
        elements_show[element_index].setAttribute("class", "input_user");
    var element_in_connect = document.getElementsByClassName("input_user");
    while (user_connect.hasChildNodes()) {
        for (var element_index = 0; element_index < element_in_connect.length; element_index++)
            user_connect.removeChild(element_in_connect[element_index]);
    }
    user_check(elements_show);
    error.innerHTML = '';
    error.style.backgroundColor = "rgba(0,0,0,0)";
    error.style.border = "none";
}
function pass_len(pass) {
    var all_progress = document.getElementById("all_progress");
    if (pass.value.length == 0) {
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
    create_elements[create_elements.length - 1].setAttribute("id", "c_pass");
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
    if (remove_elements[remove_elements.length - 1] != null)
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
            if (check_pass.childElementCount != 0)
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
function Submit_Send() {
    var count_false = 0;
    var wrong = document.getElementById("error_message");
    var req_all = document.getElementsByClassName("req_text");
    for (var n = 0; n < req_all.length; n++)
        req_all[n].style.color = "black";
    var pass_progress = document.getElementsByClassName("progress");//part of password
    var pass_text = document.getElementById("pass_text");
    if (pass_progress[1].style.width != "150px") {
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
                wrong.innerHTML = "There are some invalid content, please check the fields and put valid values";
            if (wrong.hasAttribute("hidden"))
                wrong.removeAttribute("hidden");
            break;
        default:
            if (recaptcha_exists != null)
                recaptcha_index.removeChild(recaptcha_exists);
    }
    if (count_false >= 1 || count_recaptcha == 1) {
        wrong.style.backgroundColor = "rgba(255, 5, 20, 0.80)";
        wrong.style.border = "solid 2px";
        wrong.style.borderColor = "red";
        wrong.style.height = "55px";
        return false;
    }
    var submit = document.getElementsByName("Submit");
    for (var index = 0; index < submit.length; index++)
        submit[index].setAttribute("value", "Submit3");
}
function Error(forgot, column) {
    var error = document.getElementById("error_message");
    if (forgot.length == 0)
        Submit_forgot(column, error);
    else
        error.innerHTML = "Least one of your answers is<br/>wrong, please try again";
    error.style.backgroundColor = "rgba(255, 5, 20, 0.80)";
    error.style.border = "solid 2px";
    error.style.borderColor = "red";
    error.style.width = "300px";
    error.style.height = "50px";
    error.style.position = "relative";
    error.style.left = "10px";
}