var formConditional = document.getElementById('fconditional');
formConditional.addEventListener('submit', function(event){event.preventDefault();

    const nama = document.getElementById('nama').value;
    const tlahir = document.getElementById('tlahir').value;
    const jkelamin = document.querySelector('input[name="jkelamin"]:checked')?.value;
    const pesan = document.getElementById('pesan').value;
    
    if (!nama || !tlahir || !jkelamin || !pesan) {
        alert('data harus diisi');
        return;
    }

    const result = document.getElementById('result');
    result.innerHTML =`
        <h3>Pesan :</h3>
        <p>Nama : ${nama}</p>
        <p>Tanggal Lahir : ${tlahir}</p>
        <p>Jenis Kelamin : ${jkelamin}</p>
        <p>Pesan : ${pesan}</p>
    `;
})

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