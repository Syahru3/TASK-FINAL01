function segitiga(x) {
    let result = ""; // Inisialisasi result

    for (let i = 0; i < x; i++) {
        // Tambahkan spasi di awal baris
        for (let spasi = 0; spasi < i; spasi++) {
            result += " ";
        }

        // Tambahkan karakter + untuk setiap baris
        for (let y = x; y > i; y--) {
            if (i % 2 === 0) { // Bila i modulus 2 = 0 genap maka (+)
                result += "# ";
            } else {
                result += "+ "; // Bila i modulus 2 = bukan 0 maka ganjil (+)
            }
            // result += "# ";
        }

        // Menambahkan baris baru
        result += "\n";
    }

    return result;
}

//mendeklarasikan height 5 baris
const height = 5;
console.log(segitiga(height));