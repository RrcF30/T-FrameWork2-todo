// 一つ目の欄を取得
let first = document.getElementById("first");
let f_check = document.getElementById("fl1");
let f1b = document.getElementsByClassName("fcb1");

//一つ目の入力欄
let in_text1 = document.getElementById("ft");
let add_btn1 = document.getElementById("b_1");

// 二つ目の欄を取得
let second = document.getElementById("second");
let s_check = document.getElementById("s_l");
let s1b = document.getElementById("scb");

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

// 要素を非表示(first)
in_text1.style.display = "none";
add_btn1.style.display = "none";
f_check.style.display = "none";

// 要素を非表示(second)
in_text2.style.display = "none";
add_btn2.style.display = "none";
s_check.style.display = "none";

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

// f_checkクリック時の動作
f1b.onclick = function(){
    f_check.style.display = "block";
}

// numberをクリックした時の処理(second)
second.onclick = function(){
    in_text2.style.display = "block";
    add_btn2.style.display = "block";
}

// add_btnクリック時の動作(scond)
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
    s_check.style.display = "block";
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
