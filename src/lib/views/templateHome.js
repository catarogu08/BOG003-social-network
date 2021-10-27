export const home = () => {
  const divHome = document.createElement("div")

  const viewHome = `
  <div class="left">
    <section class="container">
    <div class="navegationPage">
    <h1 id="title">LOVE.CAR</h1>
      <select id="models" name="models">
    <option value="modelos" class= "models">Modelos</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    </select>
    </div>
    </section>
    </div>

    <div class="right"> 
  <section class="form">
    <form id="formPost">
  <h3>Marca:</h3>
  <input type="text" id="mark">
  <h3>Modelo:</h3>
  <input type="text" id="model">
  <h3>Descrpicion:</h3>
  <input type="text" id="description">
  <button type="submit" id="creating">Crear</button>
  <button type="submit" id="newElement">Subir Cambios</button> 
     </form>
      <a href="#/home"></a>
    </section>

    <section class="viewPost">
</section>
</div>

    <footer>
    <div>
    <button class="navHome">
      <img src="./img/home2 S.N.png" width="70px" alt="">
    </button>
    <button class="navPerfil">
      <img src="./img/perfil S.N.png" width="70px" alt="">
    </button>
    <button class="navCamera">
      <img src="./img/camera S.N.png" width="70px" alt="">
    </button>
    </div>
    </footer>
    `
  divHome.innerHTML = viewHome;


  //Initialize Firestore
  const db = firebase.firestore();

  //Crear Post
  const btnCreate = divHome.querySelector("#creating");
  btnCreate.addEventListener('click', (e) => {
    const mark = divHome.querySelector("#mark").value;
    const model = divHome.querySelector("#model").value;
    const description = divHome.querySelector("#description").value;
    if (mark !== '' && model !== '' && description !== '') {
      console.log('esta completo')
      db.collection("posts").add({
        mark: mark,
        model: model,
        description: description,
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          divHome.querySelector("#mark").value = '';
          divHome.querySelector("#model").value = '';
          divHome.querySelector("#description").value = '';
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          window.alert(`ocurrio un error revisa tu form`);
        });

    } else {
      window.alert(`revisa tu informacion`);
    }
  })


  //Leer Post

  const viewPost = divHome.querySelector('.viewPost')
  db.collection("posts").onSnapshot((querySnapshot) => {
    viewPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      viewPost.innerHTML += `
      <div class="post">
      <div>
        <p id='mark-${doc.id}'>Marca: ${doc.data().mark} </p>
      </div>
      <div>
        <p id='model-${doc.id}'>Modelo: ${doc.data().model} </p>
      </div>
      <div>
        <p  id='description-${doc.id}'> Descripcion: ${doc.data().description} </p>
      </div>
      <div>
        <div class="btnOption">
          <button class="btnDeleted" data-id=${doc.id}> Eliminar </button>
          <button class="btnEdit" data-id=${doc.id}> Editar </button> 
        </div>
    </div>
    `
      //envio parametros atravez de un string 104-123
    });


    //Eliminar post
    let btnDeleted = divHome.querySelectorAll('.btnDeleted');
    btnDeleted.forEach((btnD) => {
      btnD.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        db.collection("posts").doc(id).delete()
          .then(() => {
            console.log("Document successfully deleted!");
          }).catch((error) => {
            console.error("Error removing document: ", error);
          });
      })
    })



    //Editar Post
    let btnEditer = divHome.querySelectorAll('.btnEdit');
    btnEditer.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const button = e.target;
        const id = e.target.dataset.id;
        console.log(id)
        const valorMark = divHome.querySelector(`#mark-${id}`).textContent;
        const valorModel = divHome.querySelector(`#model-${id}`).textContent;
        const valorDescription = divHome.querySelector(`#description-${id}`).textContent;
        console.log(valorMark, valorModel, valorDescription);

        divHome.querySelector("#mark").value = valorMark;      // que mark, model, descrip viajen al input cn id
        divHome.querySelector("#model").value = valorModel;
        divHome.querySelector("#description").value = valorDescription;
        
        const btn = divHome.querySelector("#newElement");
        const btnBlock = btn.style.display = 'block';
        btn.addEventListener('click', (e) => {
          console.log('voy a editar')
          let updatePost = db.collection("posts").doc(id);
          const marking = divHome.querySelector("#mark").value;
          const modeling = divHome.querySelector("#model").value;
          const descripting = divHome.querySelector("#description").value;
          return updatePost.update({
            mark: marking,
            model: modeling,
            description: descripting,
          })
            .then(() => {
              console.log("Document successfully updated!");
              divHome.querySelector("#mark").value = '';
              divHome.querySelector("#model").value = '';
              divHome.querySelector("#description").value = '';

            })
            .catch((error) => {
              console.error("Error updating document: ", error);
              window.alert(`ocurrio un error al actualizar tu post`);
            });
        });
      });
    });
  });
  return divHome;
}
