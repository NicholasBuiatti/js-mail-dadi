const User = prompt(`Digita il tuo nome`);

const listUser = [`Pippo`, `Pluto`, `Paperino`, `Sora`, `Rikku`];
console.log(listUser);

// const signIn = prompt('Resgistrati');

for (i = 0; i < listUser.length; i++) {
    if (User === listUser[i]) {
        i = User
        console.log(`Puoi entrare`);
    } else {
        console.log('Non puoi');
    }
}