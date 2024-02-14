const notifications = document.querySelector(".notifications");
const markAll = document.querySelector(".markall");
const unread = document.querySelectorAll(".new");

unread.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.children[1].children[0].classList.contains("unread")) {
      el.classList.remove("new");
      el.children[1].children[0].classList.remove("unread");
      notifications.innerText = +notifications.innerText - 1;
    }
  });
});
markAll.addEventListener("click", () => {
  unread.forEach((el) => {
    el.classList.remove("new");
    el.children[1].children[0].classList.remove("unread");
    notifications.innerText = 0;
  });
});
