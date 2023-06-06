// Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
      import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

      // importでenv.jsを読み込む。{}がなければenv.jsのenvでenv.js全体が読み込まれる。
      import env from "./env.js";
      console.log(env);
      
      // Initialize Firebase
      // env.js内のfirebaseConfigを読み込む。
      const app = initializeApp(env.firebaseConfig);
      const db = getDatabase(app);
      const dbRef = ref(db, "chat");
      const dbRef2 = ref(db, "chat2");
      

      // チャットの送信ボタンを押したときの処理
      $("#send").on("click", function () {
        // const uname = $("#uname").val();
        // const text = $("#text").val();
        // alert(uname + text);
        const msg = {
          uname: $("#uname").val(),
          text: $("#text").val()
        }
        const newPostRef = push(dbRef);
        set(newPostRef, msg);
      });

      // チャットの削除ボタンを押したときの処理
      $(document).on("click", "#delete", function () {
        const key = $(this).data("key");
        remove(ref(db, `chat/${key}`));
      });

      // チャットの編集ボタンを押したときの処理
      $(document).on("click", "#edit", function () {
        const key = $(this).data("key");
        const uname = $(this).data("uname");
        const text = $(this).data("text");
        $("#uname").val(uname);
        $("#text").val(text);
        $("#send").hide();
        $("#update").data('key', key).show();
        
      });



      onChildAdded(dbRef, function (data) {
        const msg = data.val();
        const key = data.key;
        let h = `
        <div class="test">
            <p>${msg.uname}</p>
            <p>${msg.text}</p>
            <button id=edit" class="edit" data-key="${key}" data-uname="${msg.uname}">Edit</button>
            <button id="delete" class="delete" data-key="${key}">Delete</button>

        </div>
        `
        $("#output").append(h);
      });
