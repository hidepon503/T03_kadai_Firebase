// Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
      import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
      // Your web app's Firebase configuration
      
      import env from "./env.js";
      console.log(env);
      
      // const firebaseConfig = {
      //   apiKey: "AIzaSyBCDr0lGUxA1QDZ9guCB1DCF7hvIpZhSAc",
      //   authDomain: "dev25t03-firebase-chatapp.firebaseapp.com",
      //   projectId: "dev25t03-firebase-chatapp",
      //   storageBucket: "dev25t03-firebase-chatapp.appspot.com",
      //   messagingSenderId: "3305384957",
      //   appId: "1:3305384957:web:b31d730320d21559b20794"
      // };
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app);
      const dbRef = ref(db, "chat");
      // const dbRef2 = ref(db, "chat2");

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

      onChildAdded(dbRef, function (data) {
        const msg = data.val();
        const key = data.key;
        let h = `
  <h1 class="test">
      <p>${msg.uname}</p>
      <p>${msg.text}</p>
  </h1>
  `
        $("#output").append(h);
      });
