const listUser = [`Pippo`, `Pluto`, `Paperino`, `Sora`, `Rikku`];
console.log(listUser);

// let User = prompt()

// if (listUser.includes(User)) {
//     console.log('accesso consentito');
// } else {
//     console.log('accesso negato');
// }

const mybtn = document.getElementById('mybtn');

mybtn.addEventListener('click', function () {
    const User = document.querySelector('input').value;
    for (i = 0; i < listUser.length; i++) {
        if (User === listUser[i]) {
            i = User;
            console.log(`Puoi entrare`);
            document.querySelector('form').innerHTML = `<div>Accettato</div>`
        } else {
            console.log('Non puoi');
            document.querySelector('form').innerHTML = `<div>Negato</div>`
        }
    }
})

const mybtn2 = document.getElementById('mybtn2');

mybtn2.addEventListener('click', function () {
    const UserRegistrazione = document.getElementById('registrazione').value;
    listUser.push(UserRegistrazione);
    console.log(listUser);
})




