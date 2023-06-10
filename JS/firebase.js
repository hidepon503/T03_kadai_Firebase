// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
// importでenv.jsを読み込む。{}がなければenv.jsのenvでenv.js全体が読み込まれる。
import env from "./env.js";

// Initialize Firebase
// env.js内のfirebaseConfigを読み込む。
const app = initializeApp(env.firebaseConfig);
const db = getDatabase(app);

// // データベースにcatsのデータを追加する
// let cats = [
//             {
//                   name: '海（うみ）', location: '東京都', personality: '甘えん坊', img: '../img/cats/umi 2.jpg', age: 5, jender: '女の子', type: 'マンチカン', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: '空(そら)', location: '東京都', personality: '甘えん坊', img: '../img/cats/sora.jpeg', age: '6', jender: '男の子', type: 'ポメラニアン', favorite: 0,
//             },
//             {
//                   name: 'キキ', location: '北海道', personality: '甘えん坊', img: '../img/cats/kiki.jpg', age: '12', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'まる', location: '福岡県', personality: '甘えん坊', img: '../img/cats/maru.jpg', age: '4', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'ブー', location: '福岡県', personality: '甘えん坊', img: '../img/cats/bu-.jpg', age: '8', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'みー', location: '東京都', personality: '人が大好き', img: '../img/cats/mi-.jpg', age: '5', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'もふ', location: '北海道', personality: '人が大好き', img: '../img/cats/mohu.jpg', age: '7', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'ねね', location: '北海道', personality: '甘えん坊', img: '../img/cats/nene.jpg', age: '3', jender: '', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'たま', location: '東京都', personality: '人が大好き', img: '../img/cats/tama.jpg', age: '9', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'ネル', location: '福岡県', personality: '甘えん坊', img: '../img/cats/neru.jpg', age: '12', jender: '男の子', type: '女の子', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'レオ', location: '福岡県', personality: '野生派タイプ', img: '../img/cats2/photo-1511694009171-3cdddf4484ff.jpeg', age: '5', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'きなこ', location: '東京都', personality: '野生派タイプ', img: '../img/cats2/photo-1545315171-cc80c905c252.jpeg', age: '10', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'むぎ', location: '北海道', personality: '甘えん坊', img: '../img/cats2/photo-1638826595775-e2eae86cda8e.jpeg', age: '8', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'ルナ', location: '北海道', personality: '野生派タイプ', img: '../img/cats2/photo-1638826596253-45c356e832bf.jpeg', age: '13', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'ラテ', location: '東京都', personality: '引っ込み思案', img: '../img/cats3/calmness-g44ffdd400_640.jpg', age: '6', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'ベル', location: '福岡県', personality: '引っ込み思案', img: '../img/cats3/cat-g12833497f_640.jpg', age: '9', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'ここ', location: '北海道', personality: '引っ込み思案', img: '../img/cats3/cat-g12833497f_640.jpg', age: '3', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'ルイ', location: '東京都', personality: '野性派タイプ', img: '../img/cats3/relaxation-gef56a588f_640.jpg', age: '4', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'マロン', location: '東京都', personality: '野性派タイプ', img: '../img/cats4/2670442_s.jpg', age: '5', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'うに', location: '北海道', personality: '甘えん坊', img: '../img/cats4/3848209_s.jpg', age: '7', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: 'ルル', location: '福岡県', personality: '引っ込み思案', img: '../img/cats4/cat-gb47a1e0e1_640.jpg', age: '2', jender: '女の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             },
//             {
//                   name: '琥琥（こはく）', location: '東京都', personality: '引っ込み思案', img: '../img/cats4/kat-g2da8cdb7e_640.jpg', age: '3', jender: '男の子', type: 'MIX', comment: 'texttexttexttexttexttexttexttexttext', favorite: 0,
//             }
// ];

// // データベースへの参照を作成
// const dbRef = ref(db, 'catsDb');

// // 各アイテムに固有のIDを付与
// cats.forEach((cat) => {
//   push(dbRef, cat);
// });

// let lastVisible = null;  // 最後に見えるデータのトラッキング

// function fetchCats() {
//   $("#card-wrapper").empty();

//   // 初回のフェッチまたはNext Pageからのフェッチ
//       let records_per_page = 10;
//       let query = ref(db, 'catsDb').orderByKey().limitToFirst(records_per_page);
  
//   if (lastVisible) {
//     // Previous Pageからのフェッチ
//     query = query.startAfter(lastVisible);
//   }

//   get(query).then((snapshot) => {
//       if (snapshot.exists()) {
//             snapshot.forEach((childSnapshot) => {
//             const cat = childSnapshot.val();
//             const key = childSnapshot.key;
//             // カードの生成と追加のコード
//             // 以前のコードでcat cardを生成しappend
//             let h = `
//                   <div class="cat-card" data-key="${key}">
//                         <div class="cat-card-img">    
//                               <img src="${cat.img}" alt="${cat.name}">
//                         </div>
//                         <div class="cat-card-text">
//                               <p class="cat-card-name">${cat.name}</p>
//                               <p class="cat-card-location">${cat.location}</p>
//                               <p class="cat-card-personality">${cat.personality}</p>
//                               <p class="cat-card-age">${cat.age}</p>
//                               <button class="favorite" data-key="${key}">♡</button>
//                         </div>
//                   </div>
//                   `
//             $("#card-wrapper").append(h);
            
//             // 最後に見えるデータを更新
//             lastVisible = childSnapshot.key;
//       });
//     } else {
//       console.log("No data available");
//     }
//   });
// }

// // // Next Pageボタンのクリックイベント
// // $("#nextPage").click(function () {
// //   fetchCats();
// // });





// // cats.forEach((cat, index) => {
// //       set(ref(db, `catsDb/cat_${index}`), cat)
// //       .then(() => {
// //             console.log("Document successfully written!");
// //       })
// //       .catch((error) => {
// //             console.error("Error writing document: ", error);
// //       });
// // });

// // // ページネーションの初期化
// // let current_page = 1;
// // let records_per_page = 8;

// // // Firebaseからデータを取得します。その際、ページごとに表示するアイテムの数を考慮します。ページ数が増えるごとにstartAtメソッドの値を増やします。
// // function fetchCats() {
// //       const startAtValue = (current_page - 1) * records_per_page;
// //       const endAtValue = startAtValue + records_per_page - 1;

// //       let query = ref(db, `catsDb`)
// //       .orderByKey()
// //       .startAt(`cat_${startAtValue}`)
// //       .endAt(`cat_${endAtValue}`);

// //       onChildAdded(query, function (data) {
// //             const cat = data.val();
// //             const key = data.key;
// //         // 以前のコードでcat cardを生成しappend
// //             let h = `
// //                   <div class="cat-card" data-key="${key}">
// //                         <div class="cat-card-img">    
// //                               <img src="${cat.img}" alt="${cat.name}">
// //                         </div>
// //                         <div class="cat-card-text">
// //                               <p class="cat-card-name">${cat.name}</p>
// //                               <p class="cat-card-location">${cat.location}</p>
// //                               <p class="cat-card-personality">${cat.personality}</p>
// //                               <p class="cat-card-age">${cat.age}</p>
// //                               <button class="favorite" data-key="${key}">♡</button>
// //                         </div>
// //                   </div>
// //                   `
// //       $("#card-wrapper").append(h);
// //       });
// // }

// // // ページネーションのボタンを押したときの処理
// // $("#previousPage").click(function () {
// //       if (current_page > 1) {
// //             current_page--;
// //             fetchCats();
// //       }
// // });

// // $("#nextPage").click(function () {
// //       current_page++;
// //       fetchCats();
// // });
// // // 初期データの取得
// // fetchCats();




// // // catsのデータを取得してテンプレートリテラルを活用してcard-wrapperの中にcatのカードを表示させことをforEachで繰り返す
// // const dbRef2 = ref(db, "catsDb");
// // // onChildAdded(dbRef2, function (data) {
// // //       const cat = data.val();
// // //       const key = data.key;
// // //       let h = `
// // //       <div class="cat-card" data-key="${key}">
// // //             <div class="cat-card-img">    
// // //                   <img src="${cat.img}" alt="${cat.name}">
// // //             </div>
// // //             <div class="cat-card-text">
// // //                   <p class="cat-card-name">${cat.name}</p>
// // //                   <p class="cat-card-location">${cat.location}</p>
// // //                   <p class="cat-card-personality">${cat.personality}</p>
// // //                   <p class="cat-card-age">${cat.age}</p>
// // //                   <button class="favorite" data-key="${key}">♡</button>
// // //             </div>
// // //       </div>
// // //       `
// // //       $("#card-wrapper").append(h);
// // // });



// // ハートのお気に入りボタンを押すとfavoriteが1増える
// // 2回を押すとfavoriteが1減る
// // favoriteが０の時はハートの色がグレー
// // favoriteが１の時はハートの色が赤
// // お気に入りボタンを押したときの処理
// // $(document).on("click", ".favorite", function () {
// //       const key = $(this).data("key");
// //       const dbRef2 = ref(db, `catsDb/${key}`);   
// //       get(dbRef2).then((snapshot) => {
// //             if (snapshot.exists()) {
// //                   const cat = snapshot.val();
// //                   const favorite = cat.favorite;
// //                   let newFavorite = favorite === 0 ? 1 : 0;
// //                   let newColor = favorite === 0 ? "red" : "gray";

// //                   update(dbRef2, {
// //                         favorite: newFavorite
// //                   }).then(() => {
// //                         $(this).css("color", newColor);
// //                   });
// //             } else {
// //                   console.log("No data available");
// //             }
// //       }).catch((error) => {
// //             console.error(error);
// //       });
// // });

const dbRef2 = ref(db, "chat");
// チャット機能
// チャットの送信ボタンを押したときの処理
// チャットの送信ボタンを押したときの処理
$("#send").on("click", function () {
      const msg = {
            uname: $("#uname").val(),
            text: $("#text").val()
      }
      const newPostRef = push(dbRef2);
      set(newPostRef, msg);
      $("#uname").val("");
      $("#text").val("");
});
onChildAdded(dbRef2, function (data) {
      const msg = data.val();
      const key = data.key;
      let h = `
      <div class="chat-result-container" data-key="${key}">
            <div class="chat-result-form w-full">
                  <p class="chat-result-uname" id="">${msg.uname}</p>
                  <p class="chat-result-text" id="">${msg.text}</p>
            </div>
            <div class="chat-result-buttons">
                  <button id="${key}-edit" class="edit" data-key="${key}" data-uname="${msg.uname}">Edit</button>
                  <button id="${key}-delete" class="delete w-1/3" data-key="${key}">Delete</button>
            </div>
      </div>
      `
      $("#output").append(h);
});
// チャットの削除ボタンを押したときの処理
$(document).on("click", ".delete", function () {
      const key = $(this).data("key");
      remove(ref(db, `chat/${key}`));
});              onChildRemoved(dbRef2, (data) => {
      const key = data.key;
      $(`.chat-result-container[data-key=${key}]`).remove();      
});
// チャットの編集ボタンを押したときの処理
$(document).on("click", '.edit',function () {
      const key = $(this).data("key");
      const uname = $(this).data("uname");
      const text = $(this).closest(".chat-result-container").find(".chat-result-text").text();
      
      $("#uname").val(uname);
      $("#text").val(text);
      $("#update").data('key', key);
      $("#send").fadeOut(1000, function() {
      $("#update").show();
      });
});

// チャットの更新ボタンを押したときの処理
$('#update').on('click', function() {
      const key = $(this).data('key');
      const msg = {

      uname: $("#uname").val(),
      text: $("#text").val()
      };
      set(ref(db, `chat/${key}`), msg);
  // メッセージを更新する
      $(`.chat-result-container[data-key=${key}] .chat-result-uname`).text(msg.uname);
      $(`.chat-result-container[data-key=${key}] .chat-result-text`).text(msg.text);
      $('#uname').val('');
      $('#text').val('');
      $('#send').fadeIn(1000);
      $(this).hide();
});
