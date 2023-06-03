// ハンバーガーメニュー
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
    
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});
// ハンバーガーメニューここまで
// 猫の鳴き声
const catV = new Audio("/audio/nakigoe.mp3");
const catV2 = new Audio("/audio/nakigoe2.mp3");
const catV3 = new Audio("/audio/nakigoe3.mp3");
const catV4 = new Audio("/audio/nakigoe4.mp3");

// 猫の写真

const umi = "./img/cats/umi.jpg";
const buu = "./img/cats/bu-.jpg";
const kiki = "./img/cats/kiki.jpg";
const maru = "./img/cats/maru.jpg";
const mi = "./img/cats/mi-.jpg";
const mohu = "./img/cats/mohu.jpg";
const nene = "./img/cats/nene.jpg";
const neru = "./img/cats/neru.jpg";
const ran = "./img/cats/ran.jpg";
const tama = "./img/cats/tama.jpg";


// 心理テスト
// 心理テスト開始ボタンを押して、1問目を表示
$("#test-button").on("click", function () {
    $("#test-button").fadeOut(1000, function () {
        // 1問目の表示
        // $("#").css("display", "none");
        $("#test").fadeIn(1000);
        
    });
});

// 心理テスト
var currentQuestion = 1;
let answers = [];
function showQuestion(questionNumber) {
    $('.question').hide();
    $('#question' + questionNumber).fadeIn(1000);
}
function answerQuestion(answer) {
    answers.push(answer);
    currentQuestion++;
    showQuestion(currentQuestion);
    console.log(answers);
}
function answerQuestion2(answer) {
    answers.push(answer);
    currentQuestion++;
    showQuestion(currentQuestion);
    console.log(answers);
}
function answerQuestion3(answer) {
    answers.push(answer);
    currentQuestion++;
    if (currentQuestion <= 4) {
    showQuestion(currentQuestion);
    } else {
    showResult();
    }
    console.log(answers);
}
function answerQuestion4(answer) {
    answers.push(answer);
    currentQuestion++;
    if (currentQuestion <= 4) {
    showQuestion(currentQuestion);
    } else {
    showResult();
    }
    console.log(answers);
}

function showResult() {
    var result = getResult();
    $('.question').hide();
    $('.result').fadeIn(1000);
    $('#category').text(result);
}
function getResult() {
    let combination = answers.join('');
    if (combination === '1111'||combination ==='1121'||combination ==='1122'||combination ==='1222'||combination ==='1212') {
        $("#matching-start").fadeIn(1000);
        return 'アクティブに外で遊ぶことが好きなタイプなあなたに、オススメの猫を紹介します。';
    } else if (combination === '2122' ||combination === '2112') {
        $("#matching-start2").fadeIn(1000);
        return '社交的で人懐っこいタイプなあなたに、オススメの猫を紹介します。';
    } else if (combination ==='2211' ||combination === '2212' || combination ==='2111') {
        $("#matching-start3").fadeIn(1000);
    return '穏やかで落ち着いた雰囲気が好きなタイプなあなたに、オススメの猫を紹介します。';
    } else if (combination ==='2222' || combination ==='2221' || combination ==='1211' || combination ==='2111' || combination ==='1221') {
        $("#matching-start4").fadeIn(1000);
    return '独立心が強く自分の時間を大切にするタイプなあなたに、オススメの猫を紹介します。';
    } else {
    return '分類できませんでした。';
    }
}
$(document).ready(function () {
    showQuestion(currentQuestion);
});


// マッチングスタート1ボタン
$("#matching-start").on("click", function () {
    $("#matching-test").fadeOut(1000);
    $("#result").fadeOut(1000, function () {

        $("#matching-container").fadeIn(1000);
        $("#matching-container").css("display", "block");
        $("#matching-container").css("display", "flex");
        $("#matching-container").css("justify-content", "center");
        $("#matching-container").css("align-items", "center");
        const v = Math.floor(Math.random() * 4);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else {
            catV4.play();
        };
        
        // muching-cardのランダム表示
        const i = Math.floor(Math.random() * 10);
        let imgUrl = "";
        let name = "";
        let area = "";
        let age = "";
        let jander = "";
        let type = "";
        let discrition = "";
        
        if (i === 1) {
            imgUrl = umi;
            name = "うみ";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "うみは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 2) {
            imgUrl = buu;
            name = "ぶー";
            area = "東京都";
            age = "2";
            jander = "オス";
            type = "雑種";
            discrition = "ぶーは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 3) {
            imgUrl = kiki;
            name = "きき";
            area = "東京都";
            age = "1";
            jander = "メス";
            type = "雑種";
            discrition = "ききは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 4) {
            imgUrl = maru;
            name = "まる";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "まるは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 5) {
            imgUrl = mi;
            name = "みー";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "みーは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 6) {
            imgUrl = mohu;
            name = "もふ";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "もふは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 7) {
            imgUrl = nene;
            name = "ねね";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "ねねは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 8) {
            imgUrl = neru;
            name = "ねる";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "ねるは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 9) {
            imgUrl = ran;
            name = "らん";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "らんは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        }
        else {
            imgUrl = tama;
            name = "たま";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "たまは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        };
    });


    // Next Buttonを押した時の処理
    $("#next").on("click", function () {
           // 鳴き声をランダム再生
        const v = Math.floor(Math.random() * 4);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else {
            catV4.play();
        }
        // muching-cardのランダム表示
        const i = Math.floor(Math.random() * 10);
        let imgUrl = "";
        let name = "";
        let area = "";
        let age = "";
        let jander = "";
        let type = "";
        let discrition = "";

        if (i === 1) {
            imgUrl = umi;
            name = "うみ";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "うみは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 2) {
            imgUrl = buu;
            name = "ぶー";
            area = "東京都";
            age = "2";
            jander = "オス";
            type = "雑種";
            discrition = "ぶーは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 3) {
            imgUrl = kiki;
            name = "きき";
            area = "東京都";
            age = "1";
            jander = "メス";
            type = "雑種";
            discrition = "ききは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 4) {
            imgUrl = maru;
            name = "まる";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "まるは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 5) {
            imgUrl = mi;
            name = "みー";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "みーは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 6) {
            imgUrl = mohu;
            name = "もふ";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "もふは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander); 
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 7) {
            imgUrl = nene;
            name = "ねね";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種"; 
            discrition = "ねねは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 8) {
            imgUrl = neru;
            name = "ねる";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "ねるは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        } else if (i === 9) {
            imgUrl = ran;
            name = "らん";
            area = "東京都";
            age = "3";
            jander = "メス";
            type = "雑種";
            discrition = "らんは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        }
        else {
            imgUrl = tama;
            name = "たま";
            area = "東京都";
            age = "3";
            jander = "オス";
            type = "雑種";
            discrition = "たまは、とても人懐っこくて、人が大好きな猫です。";
            $("#cat-name").text(name);
            $("#img").attr("src", imgUrl);
            $("#name").text(name);
            $("#area").text(area);
            $("#age").text(age);
            $("#jander").text(jander);
            $("#type").text(type);
            $("#discrition").text(discrition);
        };
    });
});

// マッチングスタート2ボタンを押した時に表示
$("#matching-start2",).on("click", function () {
    $("#matching-test").fadeOut(1000);
    $("#result").fadeOut(1000, function () {

        $("#matching-container").fadeIn(1000);
        $("#matching-container").css("display", "block");
        $("#matching-container").css("display", "flex");
        $("#matching-container").css("justify-content", "center");
        $("#matching-container").css("align-items", "center");
        const v = Math.floor(Math.random() * 4);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else {
            catV4.play();
        };
        
        // muching-cardのランダム表示
        const i = Math.floor(Math.random() * 5)
        if (i === 1) {
            $("#cat-name").text('レオ');
            $("#img").attr("src", '../img/cats2/photo-1511694009171-3cdddf4484ff.jpeg');
            $("#area").text('東京都');
            $("#age").text(5);
            $("#jander").text('オス');
            $("#type").text('雑種');
            $("#discrition").text('TEXT');
        } else if (i === 2) {
            $("#cat-name").text('きなこ');
            $("#img").attr("src", '../img/cats2/photo-1545315171-cc80c905c252.jpeg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('6');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 3) {
            $("#cat-name").text('むぎ');
            $("#img").attr("src", '../img/cats2/photo-1554172438-267576c2c6da.jpeg');
            $("#area").text('東京都');
            $("#jander").text('オス');
            $("#age").text('5');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 4) {
            $("#cat-name").text('ルナ');
            $("#img").attr("src", '../img/cats2/photo-1638826595775-e2eae86cda8e.jpeg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('7');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 5) {
            $("#cat-name").text('ラテ');
            $("#img").attr("src", '../img/cats2/photo-1638826596253-45c356e832bf.jpeg');
            $("#area").text('東京都');
            $("#jander").text('オス');
            $("#age").text('9');
            $("#type").text('雑種');
            $("#discrition").text('text');
        };
    });

    // Next Buttonを押した時の処理
    $("#next").on("click", function () {
           // 鳴き声をランダム再生
        const v = Math.floor(Math.random() * 5);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else if(v === 4) {
            catV4.play();

        };
        
        // next-buttonを押した時のmuching-cardのランダム表示
        // 上のif文と同じ
        const i = Math.floor(Math.random() * 4);
        if (i === 1) {
            $("#cat-name").text('レオ');
            $("#img").attr("src", '../img/cats2/photo-1511694009171-3cdddf4484ff.jpeg');
            $("#area").text('東京都');
            $("#age").text(5);
            $("#jander").text('オス');
            $("#type").text('雑種');
            $("#discrition").text('TEXT');
        } else if (i === 2) {
            $("#cat-name").text('きなこ');
            $("#img").attr("src", '../img/cats2/photo-1545315171-cc80c905c252.jpeg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('6');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 3) {
            $("#cat-name").text('むぎ');
            $("#img").attr("src", '../img/cats2/photo-1554172438-267576c2c6da.jpeg');
            $("#area").text('東京都');
            $("#jander").text('オス');
            $("#age").text('5');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 4) {
            $("#cat-name").text('ルナ');
            $("#img").attr("src", '../img/cats2/photo-1638826595775-e2eae86cda8e.jpeg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('7');
            $("#type").text('雑種');
            $("#discrition").text('text');
        };
    });
});

// マッチングスタート３ボタンを押した時に表示
$("#matching-start3",).on("click", function () {
    $("#matching-test").fadeOut(1000);
    $("#result").fadeOut(1000, function () {

        $("#matching-container").fadeIn(1000);
        $("#matching-container").css("display", "block");
        $("#matching-container").css("display", "flex");
        $("#matching-container").css("justify-content", "center");
        $("#matching-container").css("align-items", "center");
        const v = Math.floor(Math.random() * 4);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else {
            catV4.play();
        };
        
        // muching-cardのランダム表示
        const i = Math.floor(Math.random() * 4);
        
        if (i === 1) {
            $("#cat-name").text('ベル');
            $("#img").attr("src", '../img/cats3/calmness-g44ffdd400_640.jpg');
            $("#area").text('東京都');
            $("#age").text(5);
            $("#jander").text('メス');
            $("#type").text('雑種');
            $("#discrition").text('TEXT');
        } else if (i === 2) {
            $("#cat-name").text('ココ');
            $("#img").attr("src", '../img/cats3/cat-g12833497f_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('7');
            $("#type").text('メス');
            $("#discrition").text('text');
        } else if (i === 3) {
            $("#cat-name").text('ルイ');
            $("#img").attr("src", '../img/cats3/lion-gb09b9adc1_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('オス');
            $("#age").text('6');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 4) {
            $("#cat-name").text('モモ');
            $("#img").attr("src", '../img/cats3/relaxation-gef56a588f_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('8');
            $("#type").text('雑種');
            $("#discrition").text('text');
        };
    });

    // Next Buttonを押した時の処理
    $("#next").on("click", function () {
           // 鳴き声をランダム再生
        const v = Math.floor(Math.random() * 4);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else {
            catV4.play();
        };
        

        // muching-cardのランダム表示
        const i = Math.floor(Math.random() * 4);
        if (i === 1) {
            $("#cat-name").text('ベル');
            $("#img").attr("src", '../img/cats3/calmness-g44ffdd400_640.jpg');
            $("#area").text('東京都');
            $("#age").text(5);
            $("#jander").text('メス');
            $("#type").text('雑種');
            $("#discrition").text('TEXT');
        } else if (i === 2) {
            $("#cat-name").text('ココ');
            $("#img").attr("src", '../img/cats3/cat-g12833497f_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('7');
            $("#type").text('メス');
            $("#discrition").text('text');
        } else if (i === 3) {
            $("#cat-name").text('ルイ');
            $("#img").attr("src", '../img/cats3/lion-gb09b9adc1_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('オス');
            $("#age").text('6');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 4) {
            $("#cat-name").text('モモ');
            $("#img").attr("src", '../img/cats3/relaxation-gef56a588f_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('8');
            $("#type").text('雑種');
            $("#discrition").text('text');
        };
    });
});
// マッチングスタート４ボタンを押した時に表示
$("#matching-start4",).on("click", function () {
    $("#matching-test").fadeOut(1000);
    $("#result").fadeOut(1000, function () {

        $("#matching-container").fadeIn(1000);
        $("#matching-container").css("display", "block");
        $("#matching-container").css("display", "flex");
        $("#matching-container").css("justify-content", "center");
        $("#matching-container").css("align-items", "center");
        const v = Math.floor(Math.random() * 4);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else {
            catV4.play();
        };
        
        // muching-cardのランダム表示
        const i = Math.floor(Math.random() * 4);
        
        if (i === 1) {
            $("#cat-name").text('マロン');
            $("#img").attr("src", '../img/cats4/2670442_s.jpg');
            $("#area").text('東京都');
            $("#age").text(3);
            $("#jander").text('オス');
            $("#type").text('雑種');
            $("#discrition").text('TEXT');
        } else if (i === 2) {
            $("#cat-name").text('うに');
            $("#img").attr("src", '../img/cats4/3848209_s.jpg');
            $("#area").text('東京都');
            $("#jander").text('オス');
            $("#age").text('5');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 3) {
            $("#cat-name").text('ルル');
            $("#img").attr("src", '../img/cats4/cat-gb47a1e0e1_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('4');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 4) {
            $("#cat-name").text('琥珀');
            $("#img").attr("src", '../img/cats4/kat-g2da8cdb7e_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('オス');
            $("#age").text('9');
            $("#type").text('雑種');
            $("#discrition").text('text');
        };
    });


    // Next Buttonを押した時の処理
    $("#next").on("click", function () {
           // 鳴き声をランダム再生
        const v = Math.floor(Math.random() * 4);
        let voice = "";
        if (v === 1) {
            catV.play();
        } else if (v === 2) {
            catV2.play();
        } else if (v === 3) {
            catV3.play();
        } else {
            catV4.play();
        };
        

        // muching-cardのランダム表示
        const i = Math.floor(Math.random() * 4);
        if (i === 1) {
            $("#cat-name").text('マロン');
            $("#img").attr("src", '../img/cats4/2670442_s.jpg');
            $("#area").text('東京都');
            $("#age").text(3);
            $("#jander").text('オス');
            $("#type").text('雑種');
            $("#discrition").text('TEXT');
        } else if (i === 2) {
            $("#cat-name").text('うに');
            $("#img").attr("src", '../img/cats4/3848209_s.jpg');
            $("#area").text('東京都');
            $("#jander").text('オス');
            $("#age").text('5');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 3) {
            $("#cat-name").text('ルル');
            $("#img").attr("src", '../img/cats4/cat-gb47a1e0e1_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('メス');
            $("#age").text('4');
            $("#type").text('雑種');
            $("#discrition").text('text');
        } else if (i === 4) {
            $("#cat-name").text('琥珀');
            $("#img").attr("src", '../img/cats4/kat-g2da8cdb7e_640.jpg');
            $("#area").text('東京都');
            $("#jander").text('オス');
            $("#age").text('9');
            $("#type").text('雑種');
            $("#discrition").text('text');
        };
    });
});


// いいねしたときの処理
$("#like,#matching-card").on("click", function () {
    $("#iine").fadeIn(1000);
    $("#iine").delay(1000).fadeOut(1000);
});