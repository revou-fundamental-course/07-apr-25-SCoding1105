// welcome user logika
const userName = prompt("masukan nama anda disini")
const welcomeUser = document.getElementById('welcomeUser')

if(userName) {
    welcomeUser.innerHTML = userName;
}
else {
    welcomeUser.innerHTML = "Guest";
}

// banner logika
let indexBanner = 0;

function slideBanner() {
    indexBanner += 1;
    showBanner();
}


function showBanner() {
    console.log('banner start')
    const bannerList = document.getElementsByClassName('banner-image');
    console.log('banner list:', bannerList);

    if (indexBanner > bannerList.length -1) {
        indexBanner = 0;
    }



    for(let i = 0; i < bannerList.length; i++) {
        bannerList[i].style = 'display: none';
    }

    bannerList[indexBanner].style = 'display: block';
}
showBanner();

setInterval(() => {
    slideBanner();
}, 3000);


// form logika
function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (!name || !birthDate || !gender || !messages) {
        alert("data tidak boleh kosong!");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById('sender-full-name').innerHTML = name;
    document.getElementById('sender-birth-date').innerHTML = birthDate;
    document.getElementById('sender-gender').innerHTML = gender;
    document.getElementById('sender-messages').innerHTML = messages;
}

// // form logika
// var formConditional = document.getElementById('fconditional');
// formConditional.addEventListener('submit', function(event){event.preventDefault();

//     const nama = document.getElementById('nama').value;
//     const tlahir = document.getElementById('tlahir').value;
//     const jkelamin = document.querySelector('input[name="jkelamin"]:checked')?.value;
//     const pesan = document.getElementById('pesan').value;
    
//     if (!nama || !tlahir || !jkelamin || !pesan) {
//         alert('data harus diisi');
//         return;
//     }

//     const result = document.getElementById('result');
//     result.innerHTML =`
//         <h3>Pesan :</h3>
//         <p>Nama : ${nama}</p>
//         <p>Tanggal Lahir : ${tlahir}</p>
//         <p>Jenis Kelamin : ${jkelamin}</p>
//         <p>Pesan : ${pesan}</p>
//     `;
// })

// var formConditional = document.getElementById('fconditional');
// var result = document.getElementById('result');

// formConditional.addEventListener('submit', function(e) {
//   e.preventDefault();

//   var nama = document.getElementById('nama').value;
//   var tlahir = document.getElementById('tlahir').value;
//   var gender = document.querySelector('input[name="gender"]:checked');
//   var pesan = document.getElementById('pesan').value;

//   if (!nama || !tlahir || !gender || !pesan) {
//     alert('Data harus diisi');
//     return;
//   }

//   result.innerHTML = `
//     <h3>Pesan :</h3>
//     <p>Nama : ${nama}</p>
//     <p>Tanggal Lahir : ${tlahir}</p>
//     <p>Jenis Kelamin : ${gender.value}</p>
//     <p>Pesan : ${pesan}</p>
//   `;
// });