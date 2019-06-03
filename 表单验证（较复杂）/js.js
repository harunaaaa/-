// top_banner 动画
var imooc = document.getElementsByClassName("imooc");
var moreitem = document.getElementsByClassName("moreitem")
var moreitem_li = document.querySelectorAll(".li_spd_big,.underline,.li_spd_small")
window.onload = function () {
}

imooc[0].onmouseenter = function () {
    moreitem[0].style.display = "block";
}
imooc[0].onmouseleave = function () {
    moreitem[0].style.display = "none";
}
for (var i = 0; i < moreitem_li.length; i++) {
    moreitem_li[i].onmouseenter = function () {
        this.style.cursor = "grab";
        this.style.color = "rgb(251, 116, 3)";
    }
    moreitem_li[i].onmouseleave = function () {
        this.style.cursor = "pointer";
        this.style.color = "grey";
    }
}
// 表达验证
var username_submit = false;
var password_submit = false;
var confirm_password_submit = false;
var your_name_submit = false;
var IDcard_submit = false;
var email_submit = false;
var telnumber_submit = false;
var options = false;
//用户名1
var username = document.getElementById("username");
var hint = document.getElementsByClassName("hint")
username.onfocus = function () {
    if (username.value == "") {
        hint[0].textContent = '6-30位字母、数字或"_",字母开头';
        hint[0].className = "hint";
    }
}
username.onblur = function () {
    var reg = /^[a-zA-Z]\w{6,30}$/
    if (username.value == "") {
        hint[0].textContent = '用户名不能为空';
        hint[0].className = "error hint";
    } else {
        if (reg.test(username.value)) {
            hint[0].textContent = "用户输入正确";
            hint[0].className = "correct hint";
            username_submit = true;
        } else {
            hint[0].className = "error hint";
            hint[0].textContent = '6-30位字母、数字或"_",字母开头';
        }
    }
}

// 密码2
var password = document.getElementById("password");
password.onfocus = function () {
    if (password.value == "") {
        hint[1].textContent = '密码不能为空';
        hint[1].className = "hint";
    }
}
password.onblur = function () {
    var reg = /^\w{6,20}$/;
    if (password.value == "") {
        hint[1].textContent = '密码不能为空';
        hint[1].className = "error hint";
    } else {
        if (reg.test(password.value) && ((password.value.length >= 6) && (password.value.length <= 20))) {
            Password_security_check(password.value);
            if (confirm_password.value != null) {
                Secondary_password_confirmation()
            } else {
                return;
            }
            hint[1].className = "correct hint";
            password_submit = true;
        } else {
            hint[1].className = "error hint";
            hint[1].textContent = '请输入6-20位的密码';
        }
    }
};
function Secondary_password_confirmation() {
    if (password.value == confirm_password.value) {
        hint[2].textContent = "两次输入一致";
        hint[2].className = "correct hint";
    } else {
        hint[2].textContent = '两次输入不一致';
    }
}
function Password_security_check(password) {
    if (password.length >= 6 && password.length <= 11) {
        hint[1].innerHTML = '<div class="red_box"></div><div class="gray_box"></div><div class="gray_box"></div>'
    } else if (password.length > 11 && password.length <= 16) {
        hint[1].innerHTML = '<div class="red_box"></div><div class="yellow_box"></div><div class="gray_box"></div>'
    } else if (password.length > 16 && password.length <= 20) {
        hint[1].innerHTML = '<div class="red_box"></div><div class="yellow_box"></div><div class="green_box"></div>'
    }
}
// 确认密码3
var confirm_password = document.getElementById('confirm_password')
confirm_password.onfocus = function () {
    if (confirm_password.value == "") {
        hint[2].textContent = '密码不能为空';
        hint[2].className = "hint";
    }
}
confirm_password.onblur = function () {
    var reg = /^\w{6,20}$/
    if (confirm_password.value == "") {
        hint[2].textContent = '密码不能为空';
        hint[2].className = "error hint";
    } else {
        if (reg.test(confirm_password.value) && (password.value == confirm_password.value)) {
            hint[2].textContent = "两次输入一致";
            hint[2].className = "correct hint";
            confirm_password_submit = true;
        } else {
            hint[2].textContent = '两次输入不一致';
            hint[2].className = "error hint";
            confirm_password_submit = false;
        }
    }
}
// name4
var your_name = document.getElementById('name')
your_name.onfocus = function () {
    if (your_name.value == "") {
        hint[3].textContent = '姓名不能为空';
        hint[3].className = "hint";
    }
}
your_name.onblur = function () {
    var reg1 = /^[\u4e00-\u9fa5]$/
    // 单独使用不用大写
    var reg = /^[\u4E00-\u9FA5a-zA-Z]{2,30}$/
    // 结合使用要大写
    if (your_name.value == "") {
        hint[3].textContent = '姓名不能为空';
        hint[3].className = "error hint";
    } else {
        if (reg.test(your_name.value)) {
            hint[3].textContent = "姓名格式正确";
            hint[3].className = "correct hint";
            your_name_submit = true;
        } else {
            hint[3].className = "error hint";
            hint[3].textContent = '姓名只能包含中文或者英文，且字符在3-30个之间';
            your_name_submit = false;
        }
    }
}
// IDcard\5
var IDcard = document.getElementById('IDcard')
IDcard.onfocus = function () {
    if (IDcard.value == "") {
        hint[4].textContent = '请输入18位身份证号码';
        hint[4].className = "hint";
    }
}
IDcard.onblur = function () {
    var reg = /^\d{17}[0-9x]$/
    if (IDcard.value == "") {
        hint[4].textContent = '身份证号码不能为空';
        hint[4].className = "error hint";
    } else {
        if (reg.test(IDcard.value)) {
            hint[4].textContent = "身份证号码格式正确";
            hint[4].className = "correct hint";
            IDcard_submit = true;
        } else {
            hint[4].className = "error hint";
            hint[4].textContent = '身份证号码格式错误';
            IDcard_submit = false;
        }
    }
}
// 邮箱6
var email = document.getElementById('email')
email.onfocus = function () {
    if (email.value == "") {
        hint[5].textContent = '邮箱不能为空';
        hint[5].className = "hint";
    }
}
email.onblur = function () {
    var reg = /^\w+@\w+(\.\w+)$/
    // var reg  =/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (email.value == "") {
        hint[5].textContent = '邮箱不能为空';
        hint[5].className = "error hint";
    } else {
        if (reg.test(email.value)) {
            hint[5].textContent = "邮箱格式正确";
            hint[5].className = "correct hint";
            email_submit = true;
        } else {
            hint[5].className = "error hint";
            hint[5].textContent = "邮箱格式不正确";
            email_submit = false;
        }
    }
}
// 手机号7
var telnumber = document.getElementById('telnumber')
telnumber.onfocus = function () {
    if (telnumber.value == "") {
        hint[6].textContent = '手机号不能为空';
        hint[6].className = "hint";
    }
}
telnumber.onblur = function () {
    var reg = /^\d{11}$/
    if (telnumber.value == "") {
        hint[6].textContent = '手机号不能为空';
        hint[6].className = "error hint";
    } else {
        if (reg.test(telnumber.value)) {
            hint[6].textContent = "手机号码格式正确";
            hint[6].className = "correct hint";
            telnumber_submit = true;
        } else {
            hint[6].className = "error hint";
            hint[6].textContent = '您输入的手机号不是有效的格式！';
            telnumber_submit = false;
        }
    }
}
// 服务条款option
function options_button(){
    var option = document.getElementById("checkbox")
    if(option.checked){
        options = true;
        hint.textContent = "";
    }else{
        option  =false;
        hint[7].textContent  = "请勾选";
        hint[7].className = "hint"
    }
}
// 下一步 submit
var submit_btn = document.getElementById("submit_btn");
submit_btn.onclick = function () { 
    options_button()
    if(username_submit && password_submit && confirm_password_submit &&
        your_name_submit&&IDcard_submit&&email_submit&&telnumber_submit&&options){
            console.log("success")
        }
    else{
        console.log("falie")
    }
 }
