"use-strict";

(() => {
  const alerts = Array.from(document.getElementsByClassName("js-alert"));
  console.log({ alerts });
  alerts.forEach(alert => {
    const buttons = Array.from(alert.getElementsByClassName("js-button-close"));

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert.classList.add("hidden");
        setTimeout(() => {
          alert.remove();
        }, 500);
        console.log("close alert");
      });
    });
  });
})();
