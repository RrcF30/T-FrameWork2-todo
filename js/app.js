// 一つ目の欄を取得
let first = document.getElementById("first");
let f_check = document.getElementById("f1_l");
let f1b = document.getElementById("f1b");
//一つ目の入力欄
let in_text1 = document.getElementById("f_1");
let add_btn1 = document.getElementById("b_1");
// 要素を非表示
in_text1.style.display = "none";
add_btn1.style.display = "none";
f_check.style.display = "none";

//numberをクリックした時の処理
first.onclick = function(){
    in_text1.style.display = "block";
    add_btn1.style.display = "block";
}
// add_btnクリック時の動作
add_btn1.onclick = function(){
    let add_text = in_text1.value;
    first.innerHTML = "";
    first.innerHTML += add_text;
    in_text1.value = "";
    in_text1.style.display = "none";
    add_btn1.style.display = "none";
}

// f_checkクリック時の動作
f1b.onclick = function(){
    f_check.style.display = "block";
}