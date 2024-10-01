export const navItems = [
  {
    name: "Pricings",
    url: "#",
  },
  {
    name: "Features",
    url: "#",
  },
  {
    name: "Discord",
    url: "#",
  },
];

export const navBtns = [
  {
    name: "Login",
    url: "#",
    className:
      "py-2 px-[15px] no-underline font-[0.9rem] cursor-pointer transition-colors bg-transparent text-[#6074DD] border-[2px] border-[#91a3ff] hover:opacity-[0.8] btn login-btn",
  },
  {
    name: "Sign Up",
    url: "#",
    className:
      "py-2 px-[15px] no-underline font-[0.9rem] cursor-pointer transistion-colors bg-[#6074DD] text-white border-[2px] border-[#91a3ff] hover:opacity-[0.8] btn signup-btn",
  },
];

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("flex");
  navLinks.classList.toggle("hidden");
}
