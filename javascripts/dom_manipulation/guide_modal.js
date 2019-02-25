export const guideModal = () => {
  document.getElementById("guide-modal-background").addEventListener("click", () => {
    const guide_modal = document.getElementById("guide-modal").classList;
    
    if (guide_modal[0] === "guide-modal") {
      guide_modal.remove("guide-modal");
      guide_modal.add("guide-modal-close");
    }
  });
};
