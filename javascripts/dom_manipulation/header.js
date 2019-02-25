export const header = () => {
  document.getElementById("guide").addEventListener("click", () => {
    const guide_modal = document.getElementById("guide-modal").classList;
    
    if (guide_modal[0] === "guide-modal-close") {
      guide_modal.remove("guide-modal-close");
      guide_modal.add("guide-modal");
    }
  });
};
