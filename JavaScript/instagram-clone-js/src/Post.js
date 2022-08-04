import {db} from "./firebase.js";
import {useEffect, useState} from "react";
import firebase from "firebase/compat/app";

function Post(props){
    const [comentarios,setComentarios] = useState([]);
    useEffect(()=>{
        db.collection("posts").doc(props.id).collection("comentarios").orderBy("timestamp", "desc").onSnapshot((snapshot)=>{
            setComentarios(snapshot.docs.map((document)=>{
              return {id:document.id,info:document.data()}
            }))
          })
    },[])

    function comentar(id, e){
        e.preventDefault();
        let comentarioAtual = document.querySelector("#comentario-"+id).value;
        db.collection("posts").doc(id).collection("comentarios").add({
            nome: props.user,
            comentario: comentarioAtual,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        document.querySelector("#comentario-" +id).value = "";
    }

    return(
        <div className="postSingle">
          
            {
              (props.info.image)?
              <img src={props.info.image}/>
              :<video src={props.info.video} controls/>
              }
              <p><b>{props.info.userName}</b>: {props.info.titulo}</p>
              <div className="titulocomments"><b>Comentarios: </b></div>
              <div className = "coments">
                {
                    comentarios.map((Val)=>{
                        return(
                        <div className="comment-single">
                            <p><b>{Val.info.nome}</b>: {Val.info.comentario}</p>
                        </div>
                        )
                    })
                }
              </div>
              
              {
                (props.user)?
              <form onSubmit={(e)=>comentar(props.id,e)}>
                <textarea id={"comentario-" +props.id}></textarea>
                <input type="submit" value="Comentar "/>
              </form>
              :<div></div>
              }
            </div>  
    )
}

export default Post;