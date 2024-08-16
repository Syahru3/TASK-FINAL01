function calculateTotalAfterTwoYears() {
    // Modal awal
    const totalInvestment = 1000000000; // 1 miliar

    // Alokasikan modal
    const deposito = 350000000; // 350 juta
    const obligasi = 650000000; // 650 juta

    // Persentase untuk saham A dan saham B
    const sahamAPercentage = 0.35; // 35%
    const sahamBPercentage = 1 - sahamAPercentage; // Sisanya untuk saham B

    // Keuntungan per tahun
    const depositoRate = 0.035; // 3.5%
    const obligasiRate = 0.13; // 13%
    const sahamARate = 0.145; // 14.5%
    const sahamBRate = 0.125; // 12.5%

    // Hitung jumlah yang diinvestasikan di saham A dan B
    const sahamA = sahamAPercentage * totalInvestment;
    const sahamB = sahamBPercentage * totalInvestment;

    // Hitung nilai akhir setelah 2 tahun
    const depositoFinal = deposito * Math.pow(1 + depositoRate, 2);
    const obligasiFinal = obligasi * Math.pow(1 + obligasiRate, 2);
    const sahamAFinal = sahamA * Math.pow(1 + sahamARate, 2);
    const sahamBFinal = sahamB * Math.pow(1 + sahamBRate, 2);

    // Hitung total akhir
    const totalFinal = depositoFinal + obligasiFinal + sahamAFinal + sahamBFinal;

    // Cetak hasil
    console.log(`Total uang investor setelah dua tahun: ${totalFinal.toFixed(2)}`);
}

// Jalankan fungsi
calculateTotalAfterTwoYears();
