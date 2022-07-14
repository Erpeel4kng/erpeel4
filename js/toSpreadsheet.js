var form = document.getElementById('myForm');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("myForm")),
  }).then(
    response => response.json()
  ).then((html) => {
    // you can put any JS code here
    Swal.fire({
      title: 'Berhasil!!',
      text: 'Pesan berhasil dikirim',
      icon: 'success',
      confirmButtonText: 'Kembali',
      confirmButtonColor: '#1c266d'
    });
    form.reset();
  });
});
