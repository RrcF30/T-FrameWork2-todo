// 一つ目の欄を取得
let first = document.getElementById("first");
// fl(number)取得
let fl1 = document.getElementById("fl1");
let fl2 = document.getElementById("fl2");
let fl3 = document.getElementById("fl3");
let fl4 = document.getElementById("fl4");
let fl5 = document.getElementById("fl5");
let fl6 = document.getElementById("fl6");
let fl7 = document.getElementById("fl7");
// f(number)b 取得
let f1b = document.getElementById("fcb1");
let f2b = document.getElementById("fcb2");
let f3b = document.getElementById("fcb3");
let f4b = document.getElementById("fcb4");
let f5b = document.getElementById("fcb5");
let f6b = document.getElementById("fcb6");
let f7b = document.getElementById("fcb7");

//一つ目の入力欄
let in_text1 = document.getElementById("ft");
let add_btn1 = document.getElementById("b_1");

// 二つ目の欄を取得
let second = document.getElementById("second");
// sl(number) 取得
let sl1 = document.getElementById("sl1");
let sl2 = document.getElementById("sl2");
let sl3 = document.getElementById("sl3");
let sl4 = document.getElementById("sl4");
let sl5 = document.getElementById("sl5");
let sl6 = document.getElementById("sl6");
let sl7 = document.getElementById("sl7");
// s(number)b 取得
let s1b = document.getElementById("scb1");
let s2b = document.getElementById("scb2");
let s3b = document.getElementById("scb3");
let s4b = document.getElementById("scb4");
let s5b = document.getElementById("scb5");
let s6b = document.getElementById("scb6");
let s7b = document.getElementById("scb7");

//二つ目の入力欄
let in_text2 = document.getElementById("st");
let add_btn2 = document.getElementById("b_2");

// 三つ目の欄を取得
let third = document.getElementById("third");
let t_check = document.getElementById("t_l");
let t1b = document.getElementById("tcb");

// 三つ目の入力欄
let in_text3 = document.getElementById("tt");
let add_btn3 = document.getElementById("b_3");

// テキスト入力欄を非表示(first)
in_text1.style.display = "none";
add_btn1.style.display = "none";
// fl(number)を非表示
fl1.style.display = "none";
fl2.style.display = "none";
fl3.style.display = "none";
fl4.style.display = "none";
fl5.style.display = "none";
fl6.style.display = "none";
fl7.style.display = "none";

// テキスト入力欄を非表示(second)
in_text2.style.display = "none";
add_btn2.style.display = "none";
// sl(number) 非表示
sl1.style.display = "none";
sl2.style.display = "none";
sl3.style.display = "none";
sl4.style.display = "none";
sl5.style.display = "none";
sl6.style.display = "none";
sl7.style.display = "none";

//要素を非表示
in_text3.style.display = "none";
add_btn3.style.display = "none";
t_check.style.display = "none";

//numberをクリックした時の処理(first)
first.onclick = function(){
    in_text1.style.display = "block";
    add_btn1.style.display = "block";
}

// add_btnクリック時の動作(first)
add_btn1.onclick = function(){
    let add_text1 = in_text1.value;
    first.innerHTML = "";
    first.innerHTML += add_text1;
    in_text1.value = "";
    in_text1.style.display = "none";
    add_btn1.style.display = "none";
}

// f(number)bクリック時の動作
f1b.onclick = function(){
    fl1.style.display = "block";
}

f2b.onclick = function(){
    fl2.style.display = "block";
}

f3b.onclick = function(){
    fl3.style.display = "block";
}

f4b.onclick = function(){
    fl4.style.display = "block";
}

f5b.onclick = function(){
    fl5.style.display = "block";
}

f6b.onclick = function(){
    fl6.style.display = "block";
}

f7b.onclick = function(){
    fl7.style.display = "block";
}

//                    ここからsecond      ここからsecond

// numberをクリックした時の処理(second)
second.onclick = function(){
    in_text2.style.display = "block";
    add_btn2.style.display = "block";
}

// add_btnクリック時の動作(second)
add_btn2.onclick = function(){
    let add_text2 = in_text2.value;
    second.innerHTML = "";
    second.innerHTML += add_text2;
    in_text2.value = "";
    in_text2.style.display = "none";
    add_btn2.style.display = "none";
}

// s_checkクリック時の動作
s1b.onclick = function(){
    sl1.style.display = "block";
}

s2b.onclick = function(){
    sl2.style.display = "block";
}

s3b.onclick = function(){
    sl3.style.display = "block";
}

s4b.onclick = function(){
    sl4.style.display = "block";
}

s5b.onclick = function(){
    sl5.style.display= "block";
}

s6b.onclick = function(){
    sl6.style.display = "block";
}

s7b.onclick = function(){
    sl7.style.display = "block";
}

// numberをクリックした時の処理(third)
third.onclick = function(){
    in_text3.style.display = "block";
    add_btn3.style.display = "block";
}

// add_btnクリック時の動作(third)
add_btn3.onclick = function(){
    let add_text3 = in_text3.value;
    third.innerHTML = "";
    third.innerHTML += add_text3;
    in_text3.value = "";
    in_text3.style.display = "none";
    add_btn3.style.display = "none";
}

// t_checkクリック時の動作
t1b.onclick = function(){
    t_check.style.display = "block";
}
