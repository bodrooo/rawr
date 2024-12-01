const gifElm = document.querySelector("div.logo img");

const GIF_LIST = [
  { duration: 1000, gif: "gura.gif" },
  { duration: 1000, gif: "gawr-gura.gif" },
  { duration: 1000, gif: "gawr-gura-walfie.gif" },
  { duration: 1000, gif: "hu-tao.gif" },
  { duration: 1000, gif: "hu-tao-cool.gif" }
];

let currentIndex = 0;

function changeGif() {
  const gif = GIF_LIST[currentIndex];
  gifElm.src = gif.gif;

  // Perbarui index untuk gambar berikutnya
  currentIndex = (currentIndex + 1) % GIF_LIST.length;

  // Panggil kembali fungsi ini setelah durasi gambar saat ini
  setTimeout(changeGif, gif.duration);
}

// Mulai loop
changeGif();
