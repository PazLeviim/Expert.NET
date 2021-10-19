setInterval(Welcome, 1000);
function Welcome() {
    var welcome = document.getElementById("welcome");
    var date = new Date();
    if (date.getHours() >= '06' && date.getHours() < 12)
        welcome.innerHTML = "בוקר טוב ";
    else if (date.getHours() >= 12 && date.getHours() < 16)
        welcome.innerHTML = "צהריים טובים ";
    else if (date.getHours() >= 16 && date.getHours() < 18)
        welcome.innerHTML = "אחר הצהריים טובים ";
    else if (date.getHours() >= 18 && date.getHours() < 21)
        welcome.innerHTML = "ערב טוב ";
    else
        welcome.innerHTML = "לילה טוב ";
    var timesnow = [document.getElementById("timenow"), document.getElementById("datenow")];
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var date = [date.getDate(), date.getMonth()+1, date.getFullYear()];
    for (var index_time = 0; index_time < time.length; index_time++) {
        if (time[index_time] < 10)
            time[index_time] = '0' + time[index_time];
    }
    for (var index_date = 0; index_date < date.length; index_date++) {
        if (date[index_date] < 10)
            date[index_date] = '0' + date[index_date];
    }
    for (index_times = 0; index_times < timesnow.length; index_times++) {
        switch (index_times) {
            case 0:
                timesnow[index_times].innerHTML = "<br/>" + time[0] + ":" + time[1]+":" + time[time.length - 1];
                break;
            default:
                timesnow[index_times].innerHTML = "<br/>"+date[0] + "/" + date[1] + "/" + date[date.length - 1];
        }
    }
}
var n = 1;
var user_click = '';
var time_slide = 1;
function Slide_Interval(time_slide) {
    time_slide = 1;
    n++;
    if (n > 5)
        n = 1;
    var slide = document.getElementById("slide");
    var image = document.getElementById("image" + n);
    slide.src = "Pictures/Hot" + n + ".png";
    var all_image = document.getElementsByClassName("image");
    for (var index = 0; index < all_image.length; index++) {
        all_image[index].style.backgroundColor = "white";
    }
    image.style.backgroundColor = "firebrick";
    return time_slide;
}
function EnableSlide() {
    var link_hot = document.getElementById("link_hot");
    if (link_hot != null)
        setInterval(Slide, 1000, user_click);
}
function Slide(user_click) {
    if (user_click.length != 0) {
        n = user_click;
        time_slide = 0;
    }
    if (time_slide == 3)
        time_slide=Slide_Interval(time_slide);
    else
        time_slide++;
    user_click = '';
}
function Image_Choose(number) {
    var slide = document.getElementById("slide");
    slide.src = "Pictures/Hot" + number + ".png";
    var image = document.getElementById("image"+number);
    var all_image = document.getElementsByClassName("image");
    for (var index = 0; index < all_image.length; index++) {
            all_image[index].style.backgroundColor = "white";
    }
    image.style.backgroundColor = "firebrick";
    Slide(number)
}