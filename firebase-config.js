// Menginisialisasi koneksi ke Firebase dan menyiapkan akses ke Firestore Database

// Import fungsi dari Firebase SDK versi modular

// initializeApp -> untuk menghubungkan project web ke Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
// getFirestore -> untuk mengakses database Cloud Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js"


// Firebase Console (Project Settings).
// Masing-masing property berfungsi untuk menghubungkan web dengan project Firebase tertentu.
const firebaseConfig = {
  apiKey: "AIzaSyCEfiCv28KqF-Q0ahxY9BrdCSYAVsfzJBw",      // Kunci unik autentikasi API
  authDomain: "crud-simple-abed5.firebaseapp.com",        // Domain untuk otentikasi
  projectId: "crud-simple-abed5",                         // ID project di Firebase
  storageBucket: "crud-simple-abed5.firebasestorage.app", // Tempat penyimpanan file (jika digunakan)
  messagingSenderId: "1057041021950",                     // ID pengirim untuk layanan pesan Firebase Cloud Messaging
  appId: "1:1057041021950:web:43241cd16e7320c9c79eaf",    // ID unik aplikasi web
  measurementId: "G-ET699X62J1"                           // melacak dan menganalisis interaksi pengguna di aplikasi web
  };

  // INISIALISASI FIREBASE & FIRESTORE

  // Membuat instance aplikasi Firebase berdasarkan konfigurasi di atas
  const app = initializeApp(firebaseConfig);
  // Mengambil referensi ke database Cloud Firestore dari aplikasi yang sudah diinisialisasi
  export const db = getFirestore(app);


  // File ini akan diekspor ke file lain (seperti logic.js)
  // agar bisa menggunakan database Firestore dengan mudah melalui variabel `db`
  // Contoh: import { db } from "./firebase-config.js";