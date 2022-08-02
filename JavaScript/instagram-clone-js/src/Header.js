import {useEffect, useState} from "react";
import firebase from "firebase/compat/app";
import {auth, storage, db} from "./firebase";

function Header(props){
    useEffect(()=>{
        
    },[]);

    const [progress,setProgress] = useState(0);
    const [file, setFile] = useState(null)

    function abrirModalUpload(e){
        e.preventDefault();
        let modalOpen = document.querySelector(".modalUpload");
        modalOpen.style.display = "block"
    }

    function closeModalUpload(e){
        e.preventDefault();
        let modalOpen = document.querySelector(".modalUpload");
        if(modalOpen.style.display == "block"){
            modalOpen.style.display = "none"
        }
    }

    function uploadPost(e){
        e.preventDefault();
        let tituloPost = document.getElementById("tituloUpload").value;
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on("state_changed",(snapshot)=>{
            const progress = Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            setProgress(progress);
        },function(error){
            alert(error.message);
        },function(){
            storage.ref("images").child(file.name).getDownloadURL()
            .then((url)=>{
                db.collection("posts").add({
                  titulo: tituloPost,
                  image: url,
                  userName: props.user,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp()
                });
               setProgress(0);
               setFile(null);
               document.getElementById("form-upload").reset();
               closeModalUpload(e);
            })
        })
    }

    function logar(e){
        e.preventDefault();
        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            props.setUser(auth.user.displayName);
            window.location.href = "/";
        }).catch((err)=>{
            alert(err.message);
        })
    }

    function deslogar(e){
        e.preventDefault();
        auth.signOut()
        .then((Val)=>{
            props.setUser(null);
            window.location.href = "/"
        })
    }

    function criarConta(e){
        e.preventDefault();
        let email = document.getElementById("cadastroEmail").value;
        let username = document.getElementById("cadastroUsername").value;
        let password = document.getElementById("cadastroPassword").value;
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:username
            })
            alert("conta criada com sucesso")
            let modalOpen = document.querySelector(".modalCriarconta");
            if(modalOpen.style.display == "block"){
                modalOpen.style.display = "none"
            }
        }).catch((error)=>{
            alert(error.message);
        });
    }

    function criarContaOpen(e){
        e.preventDefault();
        let modalOpen = document.querySelector(".modalCriarconta");
        modalOpen.style.display = "block"
    }

    function criarContaClose(){
        let modalOpen = document.querySelector(".modalCriarconta");
        if(modalOpen.style.display == "block"){
            modalOpen.style.display = "none"
        }
    }

    
    return(
    <div className="header">
        <div className="modalCriarconta">
            <div className="formCriarconta">
                <div onClick ={()=>criarContaClose()}className="modalClose">X</div>
                <h2>Criar Conta</h2>
                <form onSubmit={(e)=>criarConta(e)}>
                    <input id="cadastroEmail" type="text" placeholder="Email:"></input>
                    <input id="cadastroUsername" type="text" placeholder="Nome de Usuário:"></input>
                    <input id="cadastroPassword" type="password" placeholder="Senha:"></input>
                    <input type="submit" value="Cadastrar !"></input>
                </form>
            </div>
        </div>
        <div className="modalUpload">
            <div className="formUpload">
                <div onClick ={(e)=>closeModalUpload(e)}className="modalUploadClose">X</div>
                <h2>Enviar</h2>
                <form id="form-upload" onSubmit={(e)=>uploadPost(e)}>
                    <progress id="progressBar" value={progress}></progress>
                    <input id="tituloUpload" type="text" placeholder="Nome da publicação:"/>
                    <input onChange={(e)=>setFile(e.target.files[0])}type="file" name="file"/>
                    <input type="submit" value="Enviar !"/>
                </form>
            </div>
        </div>
        <div className="center">
          <div className="header_logo">
            <a href=""><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"/></a>
          </div>
          {
            (props.user)?
            <div className="header__loginInfo">
              <span>Olá, <b>{props.user}</b></span>
              <a onClick ={(e)=>abrirModalUpload(e)} href="#">Postar!</a>
              <a onClick ={(e)=>deslogar(e)}>Deslogar</a>
            </div>
            :
            <div className="header__loginForm">
              <form onSubmit={(e)=>logar(e)}>
                <input id="loginEmail" type="text" placeholder="Login: "/>
                <input id="loginPassword"type="password" placeholder="Senha: "/>
                <input type="submit" name="acao" value="Logar"/>
              </form>
              <div className="bcriarConta">
                <a onClick={(e)=>criarContaOpen(e)}href="#">Criar conta !</a>
              </div>
            </div> 
          }         
        </div>
    </div>
    )
}

export default Header;

