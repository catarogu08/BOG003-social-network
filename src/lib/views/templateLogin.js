export const userExist = () => {
  const divUser = document.createElement("div");

  const viewUser = '<div class="secondPage" id="classPage">'
  '<h1 class="title">LOVE.CAR</h1>'
  '<a href="#/logIn"></a>;'
  '<button>No tengo cuenta :(</button>'
  '<h2>Cuenta Gmail:</h2>'
  '<input type="text" id="yourEmail">'
  '<h2>Contraseña:</h2>'
  '<input type="password" id="yourPass">'
  '<button id="enter">Login</button>'
  '<button>Login con Gmail</button>'
  '</div>'

  divUser = viewUser;

  return divUser;
};






