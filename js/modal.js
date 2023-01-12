(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", onOpenModal);
  refs.closeModalBtn.addEventListener("click", onCloseModal);
  refs.modal.addEventListener("click", onClickBackdropCloseModal);

  function onOpenModal() {
    window.addEventListener("keydown", onEskCloseModal);
    refs.modal.classList.remove("is-hidden");
  }
  function onCloseModal() {
    window.removeEventListener("keydown", onEskCloseModal);

    refs.modal.classList.add("is-hidden");
  }
  function onEskCloseModal(event) {
    if (event.code === "Escape") {
      onCloseModal();
    }
  }
  function onClickBackdropCloseModal(event) {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  }
})();
