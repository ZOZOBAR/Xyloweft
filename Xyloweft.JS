// 初始化 AOS 滚动动画 | AOS Init
AOS.init({
  duration: 800,
  easing: "ease-in-out",
});


// 回到顶部按钮 | Scroll To Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


// 主题切换 | Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme") || "light";

const applyTheme = (theme) => {
  body.setAttribute("data-theme", theme);
  themeToggle.className =
    theme === "dark"
      ? "fas fa-sun theme-toggle ms-3"
      : "fas fa-moon theme-toggle ms-3";
};

applyTheme(savedTheme); // 页面加载时应用已保存的主题

themeToggle.addEventListener("click", () => {
  const newTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});


// 移动端点击导航链接后关闭菜单 | Close Mobile Nav
const navLinks = document.querySelectorAll(".nav-link");
const bsCollapse = new bootstrap.Collapse(
  document.getElementById("navbarNav"),
  { toggle: false }
);

navLinks.forEach((link) => {
  link.addEventListener("click", () => bsCollapse.hide());
});