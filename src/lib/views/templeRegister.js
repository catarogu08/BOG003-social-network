export const registerUser = () => {
    const divRegister = document.createElement("div");

    const viewRegister = '<div class="firstPage" id="firstPage">'
    '<h1 class="title">LOVE.CAR</h1>'
    '<a href="#/register"></a>;'
    '<button>Ya tengo cuenta¡</button>'
    '<h2>Correo:</h2>'
    '<input type="text" id="email">'
    '<h2>Nombre:</h2>'
    '<input type="text" id="yourName"></input>'
    '<h2>Contraseña:</h2>'
    '<input type="password" id="password">'

    divRegister = viewRegister;

    return divRegister;
};