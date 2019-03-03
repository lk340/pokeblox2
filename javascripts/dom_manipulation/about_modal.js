export const aboutModal = () => {
  const aboutModal = document.getElementById("about-modal").classList;
  document.getElementById("about-modal-background").addEventListener("click", () => {
    if (aboutModal[0] === "about-modal") {
      aboutModal.remove("about-modal");
      aboutModal.add("about-modal-close");
    }
  });

  document.getElementById("about-modal-close").addEventListener("click", () => {
    if (aboutModal[0] === "about-modal") {
      aboutModal.remove("about-modal");
      aboutModal.add("about-modal-close");
    }
  });

  document.getElementById("about").addEventListener("click", () => {
    if (aboutModal[0] === "about-modal-close") {
      aboutModal.remove("about-modal-close");
      aboutModal.add("about-modal");
    }
  });
};
