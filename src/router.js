import { registerUser } from './lib/views/templateRegister.js';
import { userExist } from './lib/views/templateLogin.js';
import { home } from './lib/views/templateHome.js';


export const showRoute = (hash) => {
    if (hash === '#/register') {
        const newResult = registerUser();
        document.getElementById('root').appendChild(newResult)
    }
    else if (hash === '#/login') {
        const resultExist = userExist();
        document.getElementById('root').appendChild(resultExist);
    }
    else if (hash === '#/home') {
        const ourHome = home();
        document.getElementById('root').appendChild(ourHome);
    }
};
