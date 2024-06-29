const button = document.querySelectorAll("button");

const type = {
  success: {
    icon: "fa-solid fa-check",
    status: "Success",
    message: "Một năm trôi qua rồi, nhanh thật",
    duration: 5,
  },
  error: {
    icon: "fa-solid fa-circle-exclamation",
    status: "Error",
    message: "Từ lúc cách xa có mấy lần gặp nhau",
    duration: 3,
  },
  info: {
    icon: "fa-solid fa-info",
    status: "Info",
    message: "Và sự im lặng đã khiến ta xa cách",
    duration: 3,
  },
  warning: {
    icon: "fa-solid fa-triangle-exclamation",
    status: "Warning",
    message: "Thật khó để trở về như trước",
    duration: 4,
  },
};

function showToast(id) {
  // Lấy ra thông tin của toast từ id
  const { icon, status, message, duration } = type[id];
  const main = document.querySelector("#main");
  if (main) {
    // Tạo một div mới nếu có tồn tại khối main trước đó
    const toastBlock = document.createElement("div");

    // Thêm lớp vào div
    toastBlock.classList.add("toast", `toast--${id}`);

    // Thêm nội dung của div
    toastBlock.innerHTML = `    
              <div class="toast__icon">
                <i class="${icon}"></i>
              </div>
              <div class="toast__body">
                <p class="toast__type">${status}</p>
                <p class="toast__msg">${message}</p>
              </div>
              <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
              </div>
            `;

    // Thêm div vào khối main
    main.appendChild(toastBlock);
    // Thời gian mà toast ẩn đi
    toastBlock.style.animation = `slideInLeft ease 1s, fadeOut 1s ${duration}s linear forwards`;

    // Tự động xoá vị trí toast sau khoảng thời gian thực thi
    const clear = setTimeout(() => {
      main.removeChild(toastBlock);
    }, duration * 1000 + 1000);

    toastBlock.onclick = (e) => {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toastBlock);
        clearTimeout(clear);
      }
    };
  }
}

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    showToast(btn.id);
  });
});
