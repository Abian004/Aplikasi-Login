/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */


// Membuat variabel untuk setiap element view 
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// Membuat variabel untuk menyimpan informasi login 
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';


loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Mendapatkan input dari masing-masing value 
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;

    // Memastikan input kredensial sesuai dengan yang disimpan
    if (expectedEmail == email && expectedPassword == password) {
      goToHome(); /* If login successful, go to main page */
    } else {
      showPopUp(); /* If login unsuccessful, show popup error */
    }
});
