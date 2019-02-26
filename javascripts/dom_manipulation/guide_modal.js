export const guideModal = () => {
  const guide_modal = document.getElementById("guide-modal").classList;

  document.getElementById("guide-modal-background").addEventListener("click", () => {
    if (guide_modal[0] === "guide-modal") {
      guide_modal.remove("guide-modal");
      guide_modal.add("guide-modal-close");
    }
  });

  document.getElementById("guide-modal-battle-team-rocket").addEventListener("click", () => {
    if (guide_modal[0] === "guide-modal") {
      guide_modal.remove("guide-modal");
      guide_modal.add("guide-modal-close");
    }
  });

  document.getElementById("guide-modal-gsc-champion").addEventListener("click", () => {
    if (guide_modal[0] === "guide-modal") {
      guide_modal.remove("guide-modal");
      guide_modal.add("guide-modal-close");
    }
  });

  document.getElementById("guide-modal-usum-theme").addEventListener("click", () => {
    if (guide_modal[0] === "guide-modal") {
      guide_modal.remove("guide-modal");
      guide_modal.add("guide-modal-close");
    }
  });

  document.getElementById("guide-modal-route-47").addEventListener("click", () => {
    if (guide_modal[0] === "guide-modal") {
      guide_modal.remove("guide-modal");
      guide_modal.add("guide-modal-close");
    }
  });
};
