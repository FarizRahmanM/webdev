let keranjang = [];
let totalHarga = 0;
const PAJAK = 0.15;

function tambahKeKeranjang(idProduk) {
    const jumlahProduk = getJumlahProduk(idProduk);

    if (jumlahProduk > 0) {
        const daftarKeranjang = document.getElementById("daftarKeranjang");
        const li = document.createElement("li");
        const namaProduk = `Produk ${idProduk}`;
        const hargaProduk = jumlahProduk * getHargaProduk(idProduk);
        const pajakDiterapkan = hargaProduk * PAJAK;
        const hargaAkhir = hargaProduk + pajakDiterapkan;

        
        const produk = keranjang.find(item => item.id === idProduk);
        const gambarProduk = produk.gambar;

        
        const img = document.createElement("img");
        img.src = gambarProduk;
        img.alt = namaProduk;
        img.classList.add("gambar-produk");

        
        li.appendChild(img);

        
        li.innerHTML += `
            <h4>${namaProduk}</h4>
            <p>${jumlahProduk} pcs - Rp${formatRupiah(hargaAkhir)}</p>
        `;

        if (pajakDiterapkan > 0) {
            li.innerHTML += ` <span class="pajak">(Pajak: ${formatRupiah(pajakDiterapkan)})</span>`;
        }

        totalHarga += hargaAkhir;
        updateTotalHarga();

        daftarKeranjang.appendChild(li);

        alert(`Ditambahkan ${jumlahProduk} ${namaProduk} ke keranjang!`);
        resetJumlah(idProduk);
    } else {
        alert("Anda belum memilih produk.");
    }
}





function tambahProduk(idProduk) {
    const indexProduk = getIndexProduk(idProduk);
    if (indexProduk !== -1) {
        keranjang[indexProduk].jumlah++;
        updateJumlah(idProduk);
    }
}

function kurangiProduk(idProduk) {
    const indexProduk = getIndexProduk(idProduk);
    if (indexProduk !== -1 && keranjang[indexProduk].jumlah > 0) {
        keranjang[indexProduk].jumlah--;
        updateJumlah(idProduk);
    }
}

function getJumlahProduk(idProduk) {
    const indexProduk = getIndexProduk(idProduk);
    return indexProduk !== -1 ? keranjang[indexProduk].jumlah : 0;
}

function getHargaProduk(idProduk) {
    const produk = keranjang.find(item => item.id === idProduk);
    return produk ? produk.harga : 0;
}

function getIndexProduk(idProduk) {
    return keranjang.findIndex(item => item.id === idProduk);
}

function updateJumlah(idProduk) {
    const jumlahElement = document.getElementById(`jumlah${idProduk}`);
    if (jumlahElement) {
        const jumlahProduk = getJumlahProduk(idProduk);
        jumlahElement.textContent = jumlahProduk;
    }
}

function updateTotalHarga() {
    document.getElementById("totalHarga").textContent = totalHarga;
}

function resetJumlah(idProduk) {
    const indexProduk = getIndexProduk(idProduk);
    if (indexProduk !== -1) {
        keranjang[indexProduk].jumlah = 0;
        updateJumlah(idProduk);
    }
}

function formatRupiah(angka) {
    var rupiah = "";
    var angkarev = angka.toString().split("").reverse().join("");
    for (var i = 0; i < angkarev.length; i++)
        if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + ".";
    return (
        "Rp" +
        rupiah
            .split("", rupiah.length - 1)
            .reverse()
            .join("")
    );
}

function updateTotalHarga() {
    const totalHargaElement = document.getElementById("totalHarga");
    if (totalHargaElement) {
        totalHargaElement.textContent = formatRupiah(totalHarga);
    }
}

keranjang.push({ id: 1, harga: 100000, jumlah: 0, gambar: "asset/rak.jpeg" });
keranjang.push({ id: 2, harga: 150000, jumlah: 0, gambar: "asset/meja.jpeg" });
keranjang.push({ id: 3, harga: 120000, jumlah: 0, gambar: "asset/kursi.jpg" });
keranjang.push({ id: 4, harga: 80000, jumlah: 0, gambar: "asset/jam.jpeg" });
keranjang.push({ id: 5, harga: 2000, jumlah: 0, gambar: "asset/pulpen.jpg" });
keranjang.push({ id: 6, harga: 1500, jumlah: 0, gambar: "asset/pensil.jpg" });

