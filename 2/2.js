function sortArray(arr) {
    let desiredString = "Dumbways is awesome";  // Kalimat yang diinginkan
    let sortedArray = [];  // Array kosong untuk menyimpan elemen yang sudah diurutkan
    
    // Iterasi melalui setiap karakter dalam desiredString
    for (let i = 0; i < desiredString.length; i++) {
        let currentChar = desiredString[i];
        
        // Mencari huruf saat ini di array input dan tambahkan ke sortedArray
        for (let j = 0; j < arr.length; j++) { //
            if (arr[j] === currentChar) {
                sortedArray.push(arr[j]);
                break;  // mengentikan pencarian setelah menemukan karakter yang cocok
            }
        }
    }
    
    // Gabungkan array yang telah diurutkan menjadi string
    return sortedArray.join("");
}

// Array input
let inputArray = ["u", "D", "m", "w", "b", "a", "y", "s", "i", "s", "w", "a", "e", "s", "e", "o", "m", " ", " "];

// Memanggil fungsi sortArray
let result = sortArray(inputArray);

console.log(result);  // Output: "Dumbways is awesome"


// i
// Pengertian: i adalah variabel loop utama yang biasanya digunakan untuk mengiterasi elemen array atau list dari awal hingga akhir.
// Fungsi: Mengontrol posisi elemen saat ini dalam loop utama. Misalnya, dalam algoritma sorting seperti selection sort, i mengindikasikan posisi elemen saat ini yang sedang diproses atau dibandingkan dengan elemen lain.
// Contoh: Dalam loop ini, i mulai dari 0 dan bertambah satu setiap iterasi (i++), sehingga ia melintasi setiap indeks array.
// j
// Pengertian: j adalah variabel loop yang sering digunakan dalam loop nested (loop di dalam loop) untuk melakukan iterasi tambahan. Dalam konteks sorting, j biasanya digunakan untuk membandingkan elemen-elemen yang belum diurutkan.
// Fungsi: Mengontrol posisi elemen tambahan yang dibandingkan dengan elemen yang ditunjuk oleh i. Misalnya, dalam selection sort, j mencari elemen terkecil dari elemen setelah i untuk menemukan elemen terkecil di sisa array.
// Contoh: Dalam loop ini, j mulai dari i + 1 dan bertambah satu setiap iterasi (j++), sehingga ia melintasi elemen setelah i di array.