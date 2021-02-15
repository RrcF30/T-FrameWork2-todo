// 日付表示
// 日付データを取得
let date = new  Date();
let today = date.getDate();
let day = date.getDay();
let allday = ["日","月","火","水","木","金","土"];
let daystr = allday[day];
let month = date.getMonth() + 1;

//週間更新
let week_number = 0;

// 一週間取得
let s_week_month;
s_week_month = [];
let s_week_day;
s_week_day = [];
let e_week_month;
e_week_month = [];
let e_week_day;
e_week_day= [];
let s_criteria = new Date("2021/02/7 12:00:00");
let e_criteria = new Date("2021/02/13 12:00:00");
let addDate = 7;
let fore = s_criteria.getFullYear();
console.log(day);
for (var i = 1; i <= fore; i++) {
    // 週初め
    s_criteria.setDate(s_criteria.getDate() + addDate);
    s_week_month.push(s_criteria.getMonth() + 1);
    s_week_day.push(s_criteria.getDate());
    //　週終わり
    e_criteria.setDate(e_criteria.getDate() + addDate);
    e_week_month.push(e_criteria.getMonth() + 1);
    e_week_day.push(e_criteria.getDate());
        //　日曜日にだけ行う処理
        if(day == 0){
        week_number += 1;
        }
    }
//日付を表示するHTMLの要素を取得
let v_date_t = document.getElementById("viewdate_text");
let week_start = document.getElementById("week_start");
let from = document.getElementById("from");
let week_end = document.getElementById("week_end");
//HTMLに表示するテキストを作成
let day_text = today + "日";
let month_text = month + "月";
    
// all get    all get       all get          all get          all get             all get               all get       all get

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
// tl(number)　取得
let tl1 = document.getElementById("tl1");
let tl2 = document.getElementById("tl2");
let tl3 = document.getElementById("tl3");
let tl4 = document.getElementById("tl4");
let tl5 = document.getElementById("tl5");
let tl6 = document.getElementById("tl6");
let tl7 = document.getElementById("tl7");
//tc(number)b 取得
let t1b = document.getElementById("tcb1");
let t2b = document.getElementById("tcb2");
let t3b = document.getElementById("tcb3");
let t4b = document.getElementById("tcb4");
let t5b = document.getElementById("tcb5");
let t6b = document.getElementById("tcb6");
let t7b = document.getElementById("tcb7");

// 三つ目の入力欄
let in_text3 = document.getElementById("tt");
let add_btn3 = document.getElementById("b_3");

// 4つ目の欄を取得
let four = document.getElementById("four");
// fol(number)を取得
let fol1 = document.getElementById("fol1");
let fol2 = document.getElementById("fol2");
let fol3 = document.getElementById("fol3");
let fol4 = document.getElementById("fol4");
let fol5 = document.getElementById("fol5");
let fol6 = document.getElementById("fol6");
let fol7 = document.getElementById("fol7");
// fob(number)を取得
let fob1 = document.getElementById("focb1");
let fob2 = document.getElementById("focb2");
let fob3 = document.getElementById("focb3");
let fob4 = document.getElementById("focb4");
let fob5 = document.getElementById("focb5");
let fob6 = document.getElementById("focb6");
let fob7 = document.getElementById("focb7");
// 4つ目の入力欄
let in_text4 = document.getElementById("fot");
let add_btn4 = document.getElementById("b_4");

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

//要素を非表示 third
in_text3.style.display = "none";
add_btn3.style.display = "none";
// tl(number) 非表示
tl1.style.display = "none";
tl2.style.display = "none";
tl3.style.display = "none";
tl4.style.display = "none";
tl5.style.display = "none";
tl6.style.display = "none";
tl7.style.display = "none";

//要素を非表示(four)
in_text4.style.display = "none";
add_btn4.style.display = "none";
// fol(number) 非表示
fol1.style.display = "none";
fol2.style.display = "none";
fol3.style.display = "none";
fol4.style.display = "none";
fol5.style.display = "none";
fol6.style.display = "none";
fol7.style.display = "none";

//         first            first               first                    first               first              first

//numberをクリックした時の処理(first)
first.onclick = function(){
    in_text1.style.display = "block";
    add_btn1.style.display = "block";
}

// add_btnクリック時の動作(first)
add_btn1.onclick = function(){
    let add_text1 = in_text1.value;
    first.innerHTML = "";
    in_text1.value = "";
    in_text1.style.display = "none";
    add_btn1.style.display = "none";
    localStorage.setItem("first-task",add_text1);
    first.innerHTML += add_text1;
}

// f(number)bクリック時の動作
f1b.onclick = function(){
    if(fl1.style.display==''){
        fl1.style.display='none';
    }else{
        fl1.style.display='';
    }
    localStorage.setItem("fl1",fl1.style.display);
}

f2b.onclick = function(){
    if(fl2.style.display==''){
        fl2.style.display='none';
    }else{
        fl2.style.display='';
    }
    localStorage.setItem("fl2",fl2.style.display);
}

f3b.onclick = function(){
    if(fl3.style.display==''){
        fl3.style.display='none';
    }else{
        fl3.style.display='';
    }
    localStorage.setItem("fl3",fl3.style.display);
}

f4b.onclick = function(){
    if(fl4.style.display==''){
        fl4.style.display='none';
    }else{
        fl4.style.display='';
    }
    localStorage.setItem("fl4",fl4.style.display);
}

f5b.onclick = function(){
    if(fl5.style.display==''){
        fl5.style.display='none';
    }else{
        fl5.style.display='';
    }
    localStorage.setItem("fl5",fl5.style.display);
}

f6b.onclick = function(){
    if(fl6.style.display==''){
        fl6.style.display='none';
    }else{
        fl6.style.display='';
    }
    localStorage.setItem("fl6",fl6.style.display);
}

f7b.onclick = function(){
    if(fl7.style.display==''){
        fl7.style.display='none';
    }else{
        fl7.style.display='';
    }
    localStorage.setItem("fl7",fl7.style.display);
}

//  ここからsecond            ここからsecond      ここからsecond                ここからsecond             ここからsecond          ここからsecond       ここからsecond


// numberをクリックした時の処理(second)
second.onclick = function(){
    in_text2.style.display = "block";
    add_btn2.style.display = "block";
}

// add_btnクリック時の動作(second)
add_btn2.onclick = function(){
    let add_text2 = in_text2.value;
    second.innerHTML = "";
    in_text2.value = "";
    in_text2.style.display = "none";
    add_btn2.style.display = "none";
    localStorage.setItem("second-task",add_text2);
    second.innerHTML += add_text2;
}

// s_checkクリック時の動作
s1b.onclick = function(){
    if(sl1.style.display==''){
        sl1.style.display='none';
    }else{
        sl1.style.display='';
    }
    localStorage.setItem("sl1",sl1.style.display);
}

s2b.onclick = function(){
    if(sl2.style.display==''){
        sl2.style.display='none';
    }else{
        sl2.style.display='';
    }
    localStorage.setItem("sl2",sl2.style.display);
}

s3b.onclick = function(){
    if(sl3.style.display==''){
        sl3.style.display='none';
    }else{
        sl3.style.display='';
    }
    localStorage.setItem("sl3",sl3.style.display);
}

s4b.onclick = function(){
    if(sl4.style.display==''){
        sl4.style.display='none';
    }else{
        sl4.style.display='';
    }
    localStorage.setItem("sl4",sl4.style.display);
}

s5b.onclick = function(){
    if(sl5.style.display==''){
        sl5.style.display='none';
    }else{
        sl5.style.display='';
    }
    localStorage.setItem("sl5",sl5.style.display);
}

s6b.onclick = function(){
    if(sl6.style.display==''){
        sl6.style.display='none';
    }else{
        sl6.style.display='';
    }
    localStorage.setItem("sl6",sl6.style.display);
}

s7b.onclick = function(){
    if(sl7.style.display==''){
        sl7.style.display='none';
    }else{
        sl7.style.display='';
    }
    localStorage.setItem("sl7",sl7.style.display);
}

// third            third                     third           third          third            third              third        third           third

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
    add_btn3.style.display = "none";
    localStorage.setItem("third-task",add_text3);
}

// t_checkクリック時の動作
t1b.onclick = function(){
    if(tl1.style.display==''){
        tl1.style.display='none';
    }else{
        tl1.style.display='';
    }
    localStorage.setItem("tl1",tl1.style.display);
}

t2b.onclick = function(){
    if(tl2.style.display==''){
        tl2.style.display='none';
    }else{
        tl2.style.display='';
    }
    localStorage.setItem("tl2",tl2.style.display);
}

t3b.onclick = function(){
    if(tl3.style.display==''){
        tl3.style.display='none';
    }else{
        tl3.style.display='';
    }
    localStorage.setItem("tl3",tl3.style.display);
}

t4b.onclick = function(){
    if(tl4.style.display==''){
        tl4.style.display='none';
    }else{
        tl4.style.display='';
    }
    localStorage.setItem("tl4",tl4.style.display);
}

t5b.onclick = function(){
    if(tl5.style.display==''){
        tl5.style.display='none';
    }else{
        tl5.style.display='';
    }
    localStorage.setItem("tl5",tl5.style.display);
}

t6b.onclick = function(){
    if(tl6.style.display==''){
        tl6.style.display='none';
    }else{
        tl6.style.display='';
    }
    localStorage.setItem("tl6",tl6.style.display);
}

t7b.onclick = function(){
    if(tl7.style.display==''){
        tl7.style.display='none';
    }else{
        tl7.style.display='';
    }
    localStorage.setItem("tl7",tl7.style.display);
}

// four                  four                       four                    four                  four                four           four
// numberをクリックした時の処理(four)
four.onclick = function(){
    in_text4.style.display = "block";
    add_btn4.style.display = "block";
}

// add_btnクリック時の動作(third)
add_btn4.onclick = function(){
    let add_text4 = in_text4.value;
    four.innerHTML = "";
    four.innerHTML += add_text4;
    in_text4.value = "";
    in_text4.style.display = "none";
    add_btn4.style.display = "none";
    localStorage.setItem("fourth-task",add_text4);
}

// fo_checkクリック時の動作
fob1.onclick = function(){
    if(fol1.style.display==''){
        fol1.style.display='none';
    }else{
        fol1.style.display='';
    }

    localStorage.setItem("fol1",fol1.style.display);
}

fob2.onclick = function(){
    if(fol2.style.display==''){
        fol2.style.display='none';
    }else{
        fol2.style.display='';
    }
    localStorage.setItem("fol2",fol2.style.display);
}

fob3.onclick = function(){
    if(fol3.style.display==''){
        fol3.style.display='none';
    }else{
        fol3.style.display='';
    }
    localStorage.setItem("fol3",fol3.style.display);
}

fob4.onclick = function(){
    if(fol4.style.display==''){
        fol4.style.display='none';
    }else{
        fol4.style.display='';
    }
    localStorage.setItem("fol4",fol4.style.display);
}

fob5.onclick = function(){
    if(fol5.style.display==''){
        fol5.style.display='none';
    }else{
        fol5.style.display='';
    }
    localStorage.setItem("fol5",fol5.style.display);
}

fob6.onclick = function(){
    if(fol6.style.display==''){
        fol6.style.display='none';
    }else{
        fol6.style.display='';
    }
    localStorage.setItem("fol6",fol6.style.display);
}

fob7.onclick = function(){
    if(fol7.style.display==''){
        fol7.style.display='none';
    }else{
        fol7.style.display='';
    }
    localStorage.setItem("fol7",fol7.style.display);
}

// fl_count 
let fl1_count = 0;
localStorage.setItem("fl1_count",fl1);

let fl2_count = 0;
localStorage.setItem("fl2_count",fl2);

let fl3_count = 0;
localStorage.setItem("fl3_count",fl3);

let fl4_count = 0;
localStorage.setItem("fl4_count",fl4);

let fl5_count = 0;
localStorage.setItem("fl5_count",fl5);

let fl6_count = 0;
localStorage.setItem("fl6_count",fl6);

let fl7_count = 0;
localStorage.setItem("fl7_count",fl7);

// sl_count 
let sl1_count = 0;
localStorage.setItem("sl1_count",sl1);

let sl2_count = 0;
localStorage.setItem("sl2_count",sl2);

let sl3_count = 0;
localStorage.setItem("sl3_count",sl3);

let sl4_count = 0;
localStorage.setItem("sl4_count",sl4);

let sl5_count = 0;
localStorage.setItem("sl5_count",sl5);

let sl6_count = 0;
localStorage.setItem("sl6_count",sl6);

let sl7_count = 0;
localStorage.setItem("sl7_count",fl7);

// tl_count 
let tl1_count = 0;
localStorage.setItem("tl1_count",tl1);

let tl2_count = 0;
localStorage.setItem("tl2_count",tl2);

let tl3_count = 0;
localStorage.setItem("tl3_count",tl3);

let tl4_count = 0;
localStorage.setItem("tl4_count",tl4);

let tl5_count = 0;
localStorage.setItem("tl5_count",tl5);

let tl6_count = 0;
localStorage.setItem("tl6_count",tl6);

let tl7_count = 0;
localStorage.setItem("tl7_count",tl7);

// fol_count 
let fol1_count = 0;
localStorage.setItem("fol1_count",fol1);

let fol2_count = 0;
localStorage.setItem("fol2_count",fol2);

let fol3_count = 0;
localStorage.setItem("fol3_count",fol3);

let fol4_count = 0;
localStorage.setItem("fol4_count",fol4);

let fol5_count = 0;
localStorage.setItem("fol5_count",fol5);

let fol6_count = 0;
localStorage.setItem("fol6_count",fol6);

let fol7_count = 0;
localStorage.setItem("fol7_count",fol7);

// 初回のみ　宣言
// first-visit
const keyName = 'visited';
const keyValue = true;

// 関数用意
const style_name = "none";
function display_none(a,b){
    a.style.display = b;
}

// window.onload
window.onload = function(){
    // first
    add_text1 = localStorage.getItem("first-task");
    if(add_text1 == null){
        first.innerHTML += "";
        fl1_count++;
    }   
    else{
        first.innerHTML += add_text1;
    }
    // fl_check
    fl1.style.display = localStorage.getItem("fl1");
    fl1_count = localStorage.getItem("fl1_count");
    if(fl1_count == 0){
        fl1.style.display = "none";
    }

    fl2.style.display = localStorage.getItem("fl2");
    fl2_count = localStorage.getItem("fl2_count");
    if(fl2_count == 0){
        fl2.style.display = "none";
        fl2_count++;
    }

    fl3.style.display = localStorage.getItem("fl3");
    fl3_count = localStorage.getItem("fl3_count");
    if(fl3_count == 0){
        fl3.style.display = "none";
        fl3_count++;
    }

    fl4.style.display = localStorage.getItem("fl4");
    fl4_count = localStorage.getItem("fl4_count");
    if(fl4_count == 0){
        fl4.style.display = "none";
        fl4_count++;
    }

    fl5.style.display = localStorage.getItem("fl5");
    fl5_count = localStorage.getItem("fl5_count");
    if(fl5_count == 0){
        fl5.style.display = "none";
        fl5_count++;
    }
    

    fl6.style.display = localStorage.getItem("fl6");
    fl6_count = localStorage.getItem("fl6_count");
    if(fl6_count == 0){
        fl6.style.display = "none";
        fl6_count++;
    }
    
    fl7.style.display = localStorage.getItem("fl7");
    fl7_count = localStorage.getItem("fl7_count");
    if(fl7_count == 0){
        fl7.style.display = "none";
        fl7_count++;
    }

    //second
    add_text2 = localStorage.getItem("second-task");
    if(add_text2 == null){
        second.innerHTML += "";
    }
    else{
        second.innerHTML += add_text2;
    }

    // sl_check
    sl1.style.display = localStorage.getItem("sl1");
    sl1_count = localStorage.getItem("sl1_count");
    if(sl1_count == 0){
        sl1.style.display = "none";
        sl1_count++;
    }

    sl2.style.display = localStorage.getItem("sl2");
    sl2_count = localStorage.getItem("sl2_count");
    if(sl2_count == 0){
        sl2.style.display = "none";
        sl2_count++;
    }

    sl3.style.display = localStorage.getItem("sl3");
    sl3_count = localStorage.getItem("sl3_count");
    if(sl3_count == 0){
        sl3.style.display = "none";
        sl3_count++;
    }

    sl4.style.display = localStorage.getItem("sl4");
    sl4_count = localStorage.getItem("sl4_count");
    if(sl4_count == 0){
        sl4.style.display = "none";
        sl4_count++;
    }

    sl5.style.display = localStorage.getItem("sl5");
    sl5_count = localStorage.getItem("sl5_count");
    if(sl5_count == 0){
        sl5.style.display = "none";
        sl5_count++;
    }

    sl6.style.display = localStorage.getItem("sl6");
    sl6_count = localStorage.getItem("sl6_count");
    if(sl6_count == 0){
        sl6.style.display = "none";
        sl6_count++;
    }

    sl7.style.display = localStorage.getItem("sl7");
    sl7_count = localStorage.getItem("sl7_count");
    if(sl7_count == 0){
        sl7.style.display = "none";
        sl7_count++;
    }

    //third
    add_text3 = localStorage.getItem("third-task");
    if(add_text3 == null){
        third.innerHTML += "";
    }
    else{
        third.innerHTML += add_text3;
    }

    // tl_count
    tl1.style.display = localStorage.getItem("tl1");
    tl1_count = localStorage.getItem("tl1_count");
    if(tl1_count == 0){
        tl1.style.display = "none";
        tl1_count++;
    }

    tl2.style.display = localStorage.getItem("tl2");
    tl2_count = localStorage.getItem("tl2_count");
    if(tl2_count == 0){
        tl2.style.display = "none";
    }
    tl2_count++;

    tl3.style.display = localStorage.getItem("tl3");
    tl3_count = localStorage.getItem("tl3_count");
    if(tl3_count == 0){
        tl3.style.display = "none";
    }
    tl3_count++;

    tl4.style.display = localStorage.getItem("tl4");
    tl4_count = localStorage.getItem("tl4_count");
    if(tl4_count == 0){
        tl4.style.display = "none";
    }
    tl4_count++;

    tl5.style.display = localStorage.getItem("tl5");
    tl5_count = localStorage.getItem("tl5_count");
    if(tl5_count == 0){
        tl5.style.display = "none";
    }
    tl5_count++;

    tl6.style.display = localStorage.getItem("tl6");
    tl6_count = localStorage.getItem("tl6_count");
    if(tl6_count == 0){
        tl6.style.display = "none";
    }
    tl6_count++;

    tl7.style.display = localStorage.getItem("tl7");
    tl7_count = localStorage.getItem("tl7_count");
    if(tl7_count == 0){
        tl7.style.display = "none";
    }
    tl7_count++;
    //four
    add_text4 = localStorage.getItem("fourth-task");
    if(add_text4 == null){
        four.innerHTML += "";
    }
    else{
        four.innerHTML += add_text4
    }

    // fol_count
    fol1.style.display = localStorage.getItem("fol1");
    fol1_count = localStorage.getItem("fol1_count");
    if(fol1_count == 0){
        fol1.style.display = "none";
        fol1_count++;
    }

    fol2.style.display = localStorage.getItem("fol2");
    fol2_count = localStorage.getItem("fol2_count");
    if(fol2_count == 0){
        tl2.style.display = "none";
    }
    fol2_count++;

    fol3.style.display = localStorage.getItem("fol3");
    fol3_count = localStorage.getItem("fol3_count");
    if(fol3_count == 0){
        fol3.style.display = "none";
    }
    fol3_count++;

    fol4.style.display = localStorage.getItem("fol4");
    fol4_count = localStorage.getItem("fol4_count");
    if(fol4_count == 0){
        fol4.style.display = "none";
    }
    fol4_count++;

    fol5.style.display = localStorage.getItem("fol5");
    fol5_count = localStorage.getItem("fol5_count");
    if(fol5_count == 0){
        fol5.style.display = "none";
    }
    fol5_count++;

    fol6.style.display = localStorage.getItem("fol6");
    fol6_count = localStorage.getItem("fol6_count");
    if(fol6_count == 0){
        fol6.style.display = "none";
    }
    fol6_count++;

    fol7.style.display = localStorage.getItem("fol7");
    fol7_count = localStorage.getItem("fol7_count");
    if(fol7_count == 0){
        fol7.style.display = "none";
    }
    fol7_count++;
    
    

    
    if(!localStorage.getItem(keyName)){
        //localStorageにキーと値を追加
        localStorage.setItem(keyName, keyValue);
        //ここに初回アクセス時の処理
        let all_body = document.getElementsByClassName("all-task");
        localStorage.setItem("all-task",all_body);
        display_none(fl1,style_name);
        localStorage.getItem("all-task");
    } else{
        alert("b");
    }

    // 週間
    // localstrage 設定
    localStorage.setItem("week_number",week_number);
    week_number = localStorage.getItem("week_number");

    // HTMLで要素を表示
    v_date_t.innerHTML += month_text + day_text + "(" + daystr + ")";
    week_start.innerHTML += s_week_month[week_number] + "月" + s_week_day[week_number] + "日";
    week_end.innerHTML += e_week_month[week_number] + "月" + e_week_day[week_number] + "日";
}

