
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCU3aCsoXs8OaQA3Cw55T2otctnvsZUbsU",
  authDomain: "kwitter93-53682.firebaseapp.com",
  databaseURL: "https://kwitter93-53682-default-rtdb.firebaseio.com",
  projectId: "kwitter93-53682",
  storageBucket: "kwitter93-53682.appspot.com",
  messagingSenderId: "29991747261",
  appId: "1:29991747261:web:8d41590cb932286df7c1d4"
};
firebase.initializeApp(firebaseConfig);

//armazena nome de usuario na memoria local
userName = localStorage.getItem("userName");

//da bem vindo ao nome que ta salvo na memoria
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";


//função q add salas
function addRoom()
{
  //pega nome do html q o usuario escolheu
  roomName = document.getElementById("roomName").value;

  //passa o nome da sala p firebase
  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    //add o nome na memoria local
    localStorage.setItem("roomName", roomName);
    
    //mostra outra pag pro usuario
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      roomNames = childKey; //tem o nome de todas as salas salvas no firebase

      //pego os nomes das salas e jogo dentro de uma variavel
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      
      //exibe nome das salas no html
      document.getElementById("output").innerHTML += row;
    });
  });

}

//chamando a função 
getData();

//manda o usuario para a sala ao clicar no nome com #
function redirectToRoomName(name)
{
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

//deslogar da minha conta
function logout() {
    localStorage.removeItem("userName"); //removo o usuario
    localStorage.removeItem("roomName"); //removo a sala
    window.location = "index.html"; //volto p tela inicial
}
