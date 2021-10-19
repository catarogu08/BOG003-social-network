export const home = () => {
    const divHome = document.createElement("div");

    const viewHome = `
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

     <form action="">
  <h3>Marca:</h3>
  <input type="text">
  <h3>Modelo:</h3>
  <input type="number">
  <h3>Descrpicion:</h3>
  <input type="text">
  <button>Crear</button>
  <button>Subir Cambios</button>
     </form>

    <button id="btnDeleted">
       <img src="./img/images.png" width="60px" alt="">
    </button>
    <button id="btnEdit">
        <img src="./img/edit.jpg" width="60px" alt="">
    </button>

      <a href="#/home"></a>
    </div>

    <div class="like">
    <button id="btnLike">
      <img src="./img/like.png"  width="55px" alt="">
    </button>
    </div>
    </section>
      
  

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

  const db = firebase.firestore();
  db.collection("posts").add({
      marca: "",
      modelo: "",
      descripcion: ""
  })
      .then((docRef) => {
          console.log("hola", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });




    divHome.innerHTML = viewHome;

    return divHome;


}







