const daftarBuku = [
  { judul: "Dasar Pemrograman Web", harga: 85000, stok: 12 },
  { judul: "Algoritma dan Logika", harga: 95000, stok: 0 },
  { judul: "Basis Data untuk Pemula", harga: 120000, stok: 5 },
  { judul: "Jaringan Komputer", harga: 110000, stok: 8 }
];

let jumlahBukuHabis = 0;

daftarBuku.forEach((buku, index) => {
  let statusStok;

  if (buku.stok > 0) {
    statusStok = "(Tersedia)";
  } else {
    statusStok = "(Habis)";
    jumlahBukuHabis++;
  }

  console.log(`${index + 1}. ${buku.judul} - Rp${buku.harga} - Stok: ${buku.stok} ${statusStok}`);
});

function hitungTotalAset(buku) {
  let total = 0;

  for (let i = 0; i < buku.length; i++) {
    total += buku[i].harga * buku[i].stok;
  }

  return total;
}

const totalAset = hitungTotalAset(daftarBuku);
console.log(`Total nilai aset: Rp${totalAset}`);
console.log(`Jumlah buku habis: ${jumlahBukuHabis}`);
