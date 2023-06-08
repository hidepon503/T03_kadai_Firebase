// Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
      import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

      // importでenv.jsを読み込む。{}がなければenv.jsのenvでenv.js全体が読み込まれる。
      import env from "./env.js";
      
      // Initialize Firebase
      // env.js内のfirebaseConfigを読み込む。
      const app = initializeApp(env.firebaseConfig);
      const db = getDatabase(app);
      const dbRef = ref(db, "chat");
      const dbRef2 = ref(db, "chat2");
      

      // チャットの送信ボタンを押したときの処理
      $("#send").on("click", function () {
        const msg = {
          uname: $("#uname").val(),
          text: $("#text").val()
        }
        const newPostRef = push(dbRef);
        set(newPostRef, msg);
        $("#uname").val("");
        $("#text").val("");
      });

      onChildAdded(dbRef, function (data) {
        const msg = data.val();
        const key = data.key;
        let h = `
        <div class="chat-result-container" data-key="${key}">
            <div class="chat-result-form w-full">
              <p class="chat-result-uname" id="">${msg.uname}</p>
              <p class="chat-result-text" id="">${msg.text}</p>
            </div>
            <div class="chat-result-buttons">
              <button id="${key}-edit" class="edit w-1/3" data-key="${key}" data-uname="${msg.uname}">Edit</button>
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
      });
      onChildRemoved(dbRef, (data) => {
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

      
   
