var open = document.getElementsByClassName("open");
var yuanshi = document.getElementById("yuanshi");
var inputfile = document.getElementById('inputfile')
var centerbanner = document.getElementById("centerbanner");
var centerbanner4 = document.getElementById("centerbanner4");
var openid = document.getElementById("open");
yuanshi.addEventListener("click", function (e) {
    if (inputfile) {
        inputfile.click();
    }
    e.preventDefault();
}, false);
inputfile.onchange = function () {  // 文本框内容改变时触发
    var files = this.files; // 获取文件的数量
    centerbanner.style.display = "none"
    for (var i = 0; i < files.length; i++) {
        readers(files[i])
    }
}
function readers(fil, index) {
    var reader = new FileReader();  // 异步读取存储在用户计算机上的文件
    reader.readAsDataURL(fil); // 开始读取指定的Blob对象或File对象中的内容
    reader.onload = function () {
        if (index == 5) {
            document.getElementById("open_img").innerHTML = "<img class='tableimg' src='" + reader.result + "'>"
        } else if (index == 6) {
            document.getElementById("open_img2").innerHTML = "<img class='tableimg' src='" + reader.result + "'>"
        }
        else {
            centerbanner.style.display = "none"
            document.getElementById("image").innerHTML = "";
            document.getElementById("image").innerHTML += "<img src='" + reader.result + "'>";  // 添加图片到指定容器中
        }
    };
}
// openid gpi 
var gpi = document.getElementById("jisuanGPI");
var centerbanner2 = document.getElementById("centerbanner2");
var close = document.getElementById("close");
var gpibtn = document.getElementById("gpibtn");
var closegpi = document.getElementById("closegpi")
var closenii = document.getElementById("closenii")
gpi.onclick = function () {
    document.getElementById("image").innerHTML = "";
    centerbanner.style.display = "block"
    close.style.display = "block"
    centerbanner2.style.display = "block";
    centerbanner3.style.display = "none";
    centerbanner4.style.display = "none"
    document.getElementById("image2").style.display = "none"
    banner[0].style.display = "block";
    banner[2].style.display = "none";
    banner[1].style.display = "none";
}
// close
close.addEventListener("click", function (e) {
    if (true) {
        centerbanner.style.display = "none";
    }
    e.preventDefault();
}, false);

closegpi.onclick = function () {
    centerbanner.style.display = "none";
    document.getElementById("image2").style.display = "block"
    document.getElementById("image2").innerHTML = "<img src='image/GPI.jpg'> ";
};
closenii.onclick = function () {
    banner2[1].style.display = 'none'
    banner2[2].style.display = "block"
}

// 确定
gpibtn.onclick = function () {
    banner[1].style.display = 'none';
    banner[2].style.display = "inline-block"
}
document.getElementById("niibtn").onclick = function () {
    banner2[0].style.display = "none";
    banner2[1].style.display = "block"
    banner2[2].style.display = "none;"
}

// 页面切换
var buttong1 = document.getElementsByClassName("btng1");
var banner = document.getElementsByClassName("banner");
var neXT = document.getElementsByClassName("neXT");
for (let i in buttong1) {
    buttong1[i].onclick = function () {
        if (i == 0) {
            console.log("x")
            banner[0].style.display = "inline-block";
            banner[1].style.display = "none";
            banner[2].style.display = "none";
        } else if (i == 1) {
            banner[0].style.display = "none";
            banner[1].style.display = "inline-block";
            banner[2].style.display = "none";
        } else if (i == 2) {
            banner[0].style.display = "none";
            banner[1].style.display = "none";
            banner[2].style.display = "inline-block";
        }
    };
    neXT[0].onclick = function () {
        console.log(neXT.length);
        banner[0].style.display = "none";
        banner[1].style.display = "inline-block"
    }
    neXT[1].onclick = function () {
        banner[1].style.display = "none";
        banner[2].style.display = "inline-block"
    }
}

// 页面切换2
var btng2 = document.getElementsByClassName("btng2");
var banner2 = document.getElementsByClassName("banner2");
var jisuanIGPI = document.getElementById("jisuanIGPI");
var IGPI = document.getElementById("centerbanner3");

jisuanIGPI.onclick = function () {
    document.getElementById("image").innerHTML = "";
    centerbanner.style.display = "inline-block"
    centerbanner2.style.display = "none";
    centerbanner3.style.display = "block";
    centerbanner4.style.display = "none"
    document.getElementById("image2").style.display = "none"
    banner2[0].style.display = 'block'
    banner2[2].style.display = "none";
}
for (let i in btng2) {
    btng2[i].onclick = function () {
        if (i == 0) {
            console.log(banner2.length)
            banner2[0].style.display = "block";
            banner2[1].style.display = "none";
            banner2[2].style.display = "none";
        } else if (i == 1) {
            banner2[0].style.display = "none";
            banner2[1].style.display = "block";
            banner2[2].style.display = "none";
        } else if (i == 2) {
            banner2[0].style.display = "none";
            banner2[1].style.display = "none";
            banner2[2].style.display = "block";
            centerbanner3.height = 1700;
        }
    }
}

// 选择打开 出现GPI
var image = document.getElementById("image");
var image2 = document.getElementById("image2")
// 调控
var tiaokong = document.getElementsByClassName("tiaokong");
for (var i in tiaokong) {
    tiaokong[i].onclick = function () {
        document.getElementById("image").innerHTML = "";
        centerbanner4.style.display = "inline-block";
        centerbanner.style.display = "inline-block";
        centerbanner2.style.display = "none";
        centerbanner3.style.display = "none";
        image2.style.display = "none"
    };
}
// 分页4
var btng4 = document.getElementsByClassName("btng4");
var banner4 = document.getElementsByClassName("banner4");
for (let i in btng4) {
    btng4[i].onclick = function () {
        console.log(btng5.length)
        if (i == 0) {
            banner4[0].style.display = "block";
            banner4[1].style.display = "none";
        } else if (i == 1) {
            banner4[0].style.display = "none";
            banner4[1].style.display = "block";
        }
    }
}

// 调控分页
var btng5 = document.getElementsByClassName("btng5");
var banner5 = document.getElementsByClassName("banner5")
for (let i in btng5) {
    btng5[i].onclick = function () {
        console.log(btng5.length)
        if (i == 0) {
            console.log("1")
            banner5[0].style.display = "block";
            banner5[1].style.display = "none";
            banner5[2].style.display = "none";
        } else if (i == 1) {
            console.log("12")
            banner5[0].style.display = "none";
            banner5[1].style.display = "block";
            banner5[2].style.display = "none";
        } else if (i == 2) {
            console.log("3")
            banner5[0].style.display = "none";
            banner5[1].style.display = "none";
            banner5[2].style.display = "block";
        }
    }
}

// 调控措施
// 总价计算
var checkval1 = [];
var checkval2 = [];
var checkval3 = [];
var td2 = document.getElementById("td2");
var td1 = document.getElementById("td1");
var td3 = document.getElementById("td3");
var checkbox1 = document.getElementsByName("checkbox1");
var checkbox2 = document.getElementsByName("checkbox2");
var checkbox3 = document.getElementsByName("checkbox3");
var reset = document.getElementById("reset");
var td4 = document.getElementById("td4")
td5 = document.getElementById("td5")
td6 = document.getElementById("td6")
var next1g = document.getElementsByClassName("next1");
var next2g = document.getElementsByClassName("next2")
reset.onclick = function () {
    for (var i in checkbox2) {
        checkbox2[i].checked = false;
    }
    for (var i in checkbox1) {
        checkbox1[i].checked = false;
    }
    for (var i in checkbox3) {
        checkbox3[i].checked = false;
    }
    for (var i = 0; i < next1g.length; i++) {
        next1g[i].style.display = "none";
        next2g[i].style.display = 'block'
    }
    end2.style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("end2").style.display = "block"
    banner4[0].style.display = "block";
    banner5[0].style.display = "block"
    banner5[1].style.display = "none"
    banner5[2].style.display = 'none'
    reset.style.display = 'none'
}
function complete(i, nex) {
    if (i == 1) {
        checkval1 = [];
        td1.innerHTML = "";
        for (var c = 0; c < checkbox1.length; c++) {
            if (checkbox1[c].checked) {
                checkval1.push(checkbox1[c].value);
            }
        }
        for (var i = 0; i < checkval1.length; i++) {
            td1.innerHTML += checkval1[i] + "<br>";
        }
        document.getElementById("guankongcuoshi").style.display = "none";
        document.getElementById("gongchengcuoshi").style.display = "block"
    } else if (i == 2) {
        checkval2 = [];
        td2.innerHTML = "";
        for (var c = 0; c < checkbox2.length; c++) {
            if (checkbox2[c].checked) {
                checkval2.push(checkbox2[c].value);
            }
        }
        for (var i = 0; i < checkval2.length; i++) {
            td2.innerHTML += checkval2[i] + "<br>";
        }
        document.getElementById("gongchengcuoshi").style.display = "none";
        document.getElementById("shengwucuoshi").style.display = "block"
    } else if (i == 3) {
        checkval3 = [];
        td3.innerHTML = "";
        for (var c = 0; c < checkbox3.length; c++) {
            if (checkbox3[c].checked) {
                checkval3.push(checkbox3[c].value);
            }
        }
        for (var i = 0; i < checkval3.length; i++) {
            td3.innerHTML += checkval3[i] + "<br>";
        }
        document.getElementById("tiaokong4").style.display = "none";
        document.getElementById("chengbengusuan").style.display = "block"
    }
    complete_fu(nex);
}
// 
function complete2(i, nex1) {
    if (i == 1) {
        checkval1 = [];
        td4.innerHTML = "";
        for (var c = 0; c < checkbox1.length; c++) {
            if (checkbox1[c].checked) {
                checkval1.push(checkbox1[c].value);
            }
        }
        for (var i = 0; i < checkval1.length; i++) {
            td4.innerHTML += checkval1[i] + "<br>";
        }
        document.getElementById("guankongcuoshi").style.display = "none";
        document.getElementById("gongchengcuoshi").style.display = "block"
    } else if (i == 2) {
        checkval2 = [];
        td5.innerHTML = "";
        for (var c = 0; c < checkbox2.length; c++) {
            if (checkbox2[c].checked) {
                checkval2.push(checkbox2[c].value);
            }
        }
        for (var i = 0; i < checkval2.length; i++) {
            td5.innerHTML += checkval2[i] + "<br>";
        }
        document.getElementById("gongchengcuoshi").style.display = "none";
        document.getElementById("shengwucuoshi").style.display = "block"
    } else if (i == 3) {
        checkval3 = [];
        td6.innerHTML = "";
        for (var c = 0; c < checkbox3.length; c++) {
            if (checkbox3[c].checked) {
                checkval3.push(checkbox3[c].value);
            }
        }
        for (var i = 0; i < checkval3.length; i++) {
            td6.innerHTML += checkval3[i] + "<br>";
        }
        document.getElementById("tiaokong4").style.display = "none";
        document.getElementById("chengbengusuan").style.display = "block"
    }
    complete_fu(nex1);
}
// end
function end1(index) {
    if (index == 1 && checkbox1[0].checked) {
        document.getElementById("tdsum1").innerHTML = "10876770元";
    } else if (index == 2 && checkbox1[0].checked) {
        document.getElementById("tdsum1").innerHTML = "10876770元";
        document.getElementById("tdsum2").innerHTML = "6796370元";
    }
}
var end2 = document.getElementById("reset2");
    end2.onclick = function(){
        for (var i in checkbox2) {
            checkbox2[i].checked = false;
        }
        for (var i in checkbox1) {
            checkbox1[i].checked = false;
        }
        for (var i in checkbox3) {
            checkbox3[i].checked = false;
        }
        for (var i = 0; i < next2g.length; i++) {
            next2g[i].style.display = "none";
            next1g[i].style.display = 'block'
        } 
        reset.style.display = "block";
        document.getElementById("tiaokong4").style.display = "block"
        end2.style.display="none";
        banner5[0].style.display = "block";
        banner5[1].style.display = "none";
        banner5[2].style.display = "none";
        document.getElementById("guankongcuoshi").style.display = "block";
        document.getElementById("chengbengusuan").style.display = "none"
        document.getElementById("tdsum2").innerHTML ='';
        document.getElementById("tdsum1").innerHTML = "";
    }
// complete_fu
function complete_fu(next1) {
    if (next1) {
        document.getElementById("tiaokong4").style.display = "none";
        document.getElementById("chengbengusuan").style.display = "block"
    }
}
// enter
function enter() {
    centerbanner3.style.display = "none";
    centerbanner4.style.display = "inline-block";
}

// input图片路径 录入
var choosefile2 = document.getElementsByClassName("choosefile2")
var inputtest = document.getElementsByName("inputtest")
var igpiopen = document.getElementById("igpitu")
for (let i = 0; i < choosefile2.length; i++) {
    choosefile2[i].onchange = function () {
        if (i == 0) {
            inputtest[0].value = this.files[0].name;
        }
        else if (i < 4) {
            inputtest[i].value = this.files[0].name;
            textground.daoru = text + inputtest[1].value;
            textground.shuixi = text + inputtest[3].value;
        }
        else if (i == 5) {
            inputtest[i + 1].value = this.files[0].name;
            readers(this.files[0], 5)
        } else if (i == 6) {
            document.getElementById("open_img").style.display = "none"
            readers(this.files[0], 6)
            inputtest[i + 1].value = this.files[0].name;
        }
        console.log(choosefile2.length)
        console.log(inputtest.length)
    }
}
// 要调控的流域景观分布图
var igpi = document.getElementById("igpi")
var p1 = document.getElementsByClassName("p1");
var liuyu = document.getElementById("liuyu");
tableimg1 = document.getElementsByClassName("tableimg")
// liuyu.onclick = function () {
//     document.getElementById("open_img").style.display = "block"
//     document.getElementById('sep').style.display = "none";
//     document.getElementById("open_img2").style.display = "none";
//     document.getElementById("firstp").innerHTML = "<p style='width:1100px'>流域景观分布图</p>"
// }
igpi.onclick = function () {
    document.getElementById("firstp").innerHTML = "<p style='width:1100px'>IGPI</p>"
    document.getElementById('sep').style.display = "inline-block";
    document.getElementById("open_img2").style.display = "block";
    document.getElementById("open_img").style.display = "none";
    document.getElementsByClassName("biaogetu")[0].style.display = "block"
}
for (let i = 0; i < p1.length; i++) {
    p1[i].onclick = function () {
        if (i == 0) {
            document.getElementById("open_img2").innerHTML = "<img src = 'image/重污染.jpg' id = 'tableimg'>";
                document.getElementsByClassName("biaogeimg")[0].style.display = "block"
           
        } else if (i == 1) {
                document.getElementById("open_img2").innerHTML = "<img src = '' id = 'tableimg'>";
                document.getElementsByClassName("biaogeimg")[1].style.display = "block"
        } else if (i == 2) {
                document.getElementById("open_img2").innerHTML = "<img src = '' id = 'tableimg'>";
                document.getElementsByClassName("biaogeimg")[2].style.display = "block"
        } else if (i == 3) {
            document.getElementById("open_img2").innerHTML = "<img src = 'image/调控位置+编号.jpg' id = 'tableimg'>";
        }

    }
}
// 多选
var duoxuan = document.getElementById("duoxuan");
var shangeopen = document.getElementById("shangeopen")
shangeopen.addEventListener("click", function (e) {
    if (true) {
        duoxuan.click();
    }
    e.preventDefault();
}, false);
duoxuan.onchange = function () {
    for (var i = 4; i < 6; i++) {
        inputtest[i].value = ''
    }
    textground.gaocheng = text + this.files[0].name;
    textground.podu = text + this.files[1].name;
    inputtest[4].value = this.files[0].name;
    inputtest[5].value = this.files[1].name;
}
// 生成
var copy = document.getElementById("copy")
var copyclass = document.getElementsByClassName("copyclass");
var copy1 = document.getElementById("copy1");
var copy2 = document.getElementById("copy2");
var copy3 = document.getElementById("copy3");
var copy4 = document.getElementById("copy4");
var text = "C:/Users/admin/AppData/LocalLow/NpsAR/";
var number = document.getElementsByClassName("number");
var inputnumber = document.getElementsByClassName('inputnumber')
var inputtext = document.getElementsByClassName("inputtext");
var copytext = document.getElementsByClassName("copytext");
var shuchushiliang = document.getElementById("shuchushiliang")
shuchushiliang.onclick =function(){
    inputtest[2].value = textground.GLIshiliang;
}
var textground = {
    liuyujingguanfenbu: text + inputtest[0].value,
    wanggehuafen1: number[0].value,
    wanggehuafen2: number[1].value,
    wanggefenbu: text + '网格划分图',
    daoru: '',
    GLIshiliang: text +"GLI矢量.jpg",
    GLIshange: text + 'GLI(栅格).jpg',
    shuixi: '',
    shuixishangge: '', gaocheng: '', podu: '', xiangyuanxishu1: number[2].value,
    xiangyuanxishu2: number[3].value,
    CPI: text + 'GPI.jpg', nii: text + 'nii.jpg', IGPI: text + 'IGPI.jpg'
}
copy1.addEventListener("click", function (e) {
    copytext[0].value = textground.wanggefenbu;
    if (true) {
        for (var i = 0; i < inputnumber.length; i++) {
            inputnumber[i].value = document.getElementsByClassName("number")[i].value
        };
        for (var i = 0; i < inputtext.length; i++) {
            inputtext[i].value = document.getElementsByClassName("number")[i].value;
        };
    }
    e.preventDefault();
}, false)
copy2.onclick = function () {
    copytext[1].value = textground.GLIshange;
}
copy3.onclick = function () {
    copytext[2].value = textground.shuixi;
    copytext[3].value = textground.gaocheng;
    copytext[4].value = textground.podu;
    copytext[5].value = textground.GLIshange;
    copytext[6].value = textground.shuixi;
    copytext[7].value = textground.gaocheng;
    copytext[8].value = textground.podu;
    console.log(textground)
}
copy4.onclick = function () {
    copytext[9].value = textground.CPI;
    copytext[10].value = textground.gaocheng; copytext[11].value = textground.CPI;

}
var copy5 = document.getElementById("copy5");
copy5.onclick = function () {
    copytext[13].value = textground.nii;
    copytext[12].value = textground.nii;
    copytext[14].value = textground.CPI;
}
var copy6 = document.getElementById("copy6");
copy6.onclick = function () {
    copytext[15].value = textground.IGPI;
}
