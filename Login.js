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
var choose_type="Username";
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
var globaling_sym = /[\!-\/\:-\@\[-\`\{-\~]/;
function choose_account_type(password, error) {
    switch (choose_type) {
        case "Username":
            var user = document.getElementById("user");
            var globaling_user = /[\!-\,\/\:-\@\[-\`\{-\~]/;
            if (user.value.length < 7 || user.value[0].match(globaling_sym) || user.value[user.value.length - 1].match(globaling_sym) || user.value.match(globaling_user)) {
                error.innerHTML = "There are invalid username, please try again";
                user.value = '';
                password.value = '';
                error.style.backgroundColor = "rgba(255, 5, 20, 0.80)";
                error.style.border = "solid 2px";
                error.style.borderColor = "red";
                return false;
            }
            else
                return true;
            break;
        case "Email":
            var email = document.getElementById("email");
            if (!email.value.match(/^.+\@.+\.../)) {
                error.innerHTML = "There are invalid email address, please try again";
                email.value = '';
                password.value = '';
                error.style.backgroundColor = "rgba(255, 5, 20, 0.80)";
                error.style.border = "solid 2px";
                error.style.borderColor = "red";
                return false;
            }
            else
                return true;
            break;
        default:
            var phone = document.getElementById("phone");
            if (isNaN(phone.value) || phone.value.length != 10) {
                error.innerHTML = "There are invalid phone number, please try again";
                phone.value = '';
                password.value = '';
                error.style.backgroundColor = "rgba(255, 5, 20, 0.80)";
                error.style.border = "solid 2px";
                error.style.borderColor = "red";
                return false;
            }
    }
}
function Error(choose_type, connected) {
    var stay_connected = document.getElementById("connected");
    if (connected.length != 0)
        stay_connected.setAttribute("checked", "");
    var error = document.getElementById("error_message");
    var connect = document.getElementsByClassName("connect");
    switch (choose_type) {
        case "User name":
            error.innerHTML = "The username or password isn't correct, please try again";
            connect[0].setAttribute("checked", "");
            Connect("Username");
            break;
        case "Email":
            error.innerHTML = "The email or password isn't correct, please try again";
            connect[1].setAttribute("checked", "");
            Connect("Email");
            break;
        default:
            error.innerHTML = "The phone or password isn't correct, please try again";
            connect[2].setAttribute("checked", "");
            Connect("Phone");
    }
    error.style.backgroundColor = "rgba(255, 5, 20, 0.80)";
    error.style.border = "solid 2px";
    error.style.borderColor = "red";
    return false;
}
function login() {
    var password = document.getElementById("password");
    var error = document.getElementById("error_message");
    return choose_account_type(password, error);
}
function login_reset() {
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
    var error = document.getElementById("error_message");
    error.innerHTML = '';
    error.style.backgroundColor = "rgba(0,0,0,0)";
    error.style.border = "none";
}