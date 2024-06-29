// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

const cd = document.querySelector(".cd");
const player = document.querySelector(".player");
const playlist = document.querySelector(".playlist");
const header = document.querySelector("h2");
const cdThumb = document.querySelector(".cd-thumb");
const audio = document.querySelector("#audio");
const playBtn = document.querySelector(".btn-toogle-play");
const randomBtn = document.querySelector(".btn-random");
const repeatBtn = document.querySelector(".btn-repeat");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const progress = document.querySelector(".progress");
const PLAYER_STORAGE_KEY = "F8_PLAYER";
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  playedSongs: [],
  songs: [
    {
      name: "Anh sẽ tốt mà",
      path: "./assets/music/anh_se_tot_ma.mp3",
      image: "./assets/img/pic1.jpeg",
      singer: "Thuỳ Chi",
    },
    {
      name: "Cha và con gái",
      path: "./assets/music/cha_va_con_gai.mp3",
      image: "./assets/img/pic2.jpg",
      singer: "Thuỳ Chi",
    },
    {
      name: "Chờ ngày anh nhận ra em",
      path: "./assets/music/cho_ngay_anh_nhan_ra_em.mp3",
      image: "./assets/img/pic3.jpeg",
      singer: "Thuỳ Chi",
    },
    {
      name: "Giấc mơ trưa",
      path: "./assets/music/giac_mo_trua.mp3",
      image: "./assets/img/pic4.jpg",
      singer: "Thuỳ Chi",
    },
    {
      name: "Hơn em chỗ nào",
      path: "./assets/music/hon_em_cho_nao.mp3",
      image: "./assets/img/pic5.jpg",
      singer: "Thuỳ Chi",
    },
    {
      name: "Phiến lá tĩnh lặng",
      path: "./assets/music/phien_la_tinh_lang.mp3",
      image: "./assets/img/pic6.jpg",
      singer: "Thuỳ Chi",
    },
    {
      name: "Thần thoại",
      path: "./assets/music/than_thoai.mp3",
      image: "./assets/img/pic7.png",
      singer: "Thuỳ Chi",
    },
    {
      name: "Xe đạp",
      path: "./assets/music/xe_dap.mp3",
      image: "./assets/img/pic8.jpg",
      singer: "Thuỳ Chi",
    },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const songList = this.songs.map((song, index) => {
      return `<div class='song ${
        index === this.currentIndex ? "active" : ""
      }' data-index="${index}"}>
                  <div class='thumb' style="background-image:url('${
                    song.image
                  }')"></div>
                  <div class='body'>
                    <div class='title'>${song.name}</div>
                    <div class='author'>${song.singer}</div>
                  </div>
                  <div class='option'>
                     <i class ="fas fa-ellipsis-h"></i>
                  </div>
              </div>`;
    });
    playlist.innerHTML = songList.join("");
  },
  defineProperties: function () {
    Object.defineProperty(app, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    const cd = document.querySelector(".cd");
    const cdWidth = cd.clientWidth;

    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000,
      iterations: Infinity,
    });
    cdThumbAnimate.pause();

    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý sự kiện khi ấn nút play
    playBtn.onclick = function () {
      // player.classList.toggle("playing", this.isPlaying);
      _this.isPlaying = !_this.isPlaying;
      if (_this.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    };
    audio.onplay = function () {
      player.classList.add("playing");
      cdThumbAnimate.play();
    };
    audio.onpause = function () {
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    progress.onchange = function (e) {
      const seekTime = (audio.duration * e.target.value) / 100;
      audio.currentTime = seekTime;
    };
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        if (songNode) {
          _this.currentIndex = parseInt(songNode.dataset.index);
          _this.loadCurrentSong();
          audio.play();
          _this.render();
        }

        if (e.target.closest(".option")) {
        }
      }
    };
    // ============================
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      document.querySelector(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  },
  playRandomSong: function () {
    if (this.playedSongs.length === this.songs.length) {
      this.playedSongs = [];
    }

    let newIndex;

    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (this.playedSongs.includes(newIndex));

    this.playedSongs.push(newIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();

    console.log(this.playedSongs);
  },

  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
    player.classList.add("playing");
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
    player.classList.add("playing");
  },
  loadCurrentSong: function () {
    const songName = document.querySelector("h2");
    const cdThumb = document.querySelector(".cd-thumb");
    const audio = document.querySelector("audio");

    songName.innerHTML = this.currentSong.name;
    cdThumb.style.backgroundImage = `url(${this.currentSong.image})`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    // this.isRandom = this.config.isRandom;
    // this.isRepeat = this.config.isRepeat;

    Object.assign(this, this.config);
  },
  start: function () {
    this.loadConfig();
    // Xử lý sự kiện
    this.handleEvents();

    // Định nghĩa thuộc tính bài hát hiện tại
    this.defineProperties();

    // Load bài hát hiện tại
    this.loadCurrentSong();

    // Hiển thị danh sách bài hát ra trình duyệt
    this.render();

    repeatBtn.classList.toggle("active", _this.isRepeat);
    randomBtn.classList.toggle("active", _this.isRandom);
  },
};

app.start();
