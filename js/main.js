"use strict";

// Handle a missing artwork file without showing a broken image.
const artwork = document.querySelector("#invitation-artwork");
const placeholder = document.querySelector("#artwork-placeholder");

function updateArtworkState() {
  const unavailable = artwork.complete && artwork.naturalWidth === 0;
  artwork.hidden = unavailable;
  placeholder.hidden = !unavailable;
}

artwork.addEventListener("load", updateArtworkState);
artwork.addEventListener("error", updateArtworkState);
updateArtworkState();

// Progressive enhancement: without JavaScript, the invitation remains visible.
const opening = document.querySelector(".opening");
const envelope = document.querySelector(".envelope");
const invitation = document.querySelector("#invitation");
const skipOpening = document.querySelector(".skip-opening");
const replay = document.querySelector(".replay");
const status = document.querySelector("#opening-status");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let openingTimer;
let elephantTimer;

function revealInvitation() {
  window.clearTimeout(openingTimer);
  window.clearTimeout(elephantTimer);
  opening.hidden = true;
  invitation.hidden = false;
  invitation.classList.add("is-revealing");
  window.scrollTo({ top: 0, behavior: "instant" });
  invitation.focus({ preventScroll: true });
  status.textContent = "Invitation opened. Celebrating Amalie on 12 December 2026.";
}

envelope.addEventListener("click", () => {
  if (envelope.disabled) return;
  envelope.disabled = true;
  opening.classList.add("is-opening");
  status.textContent = "Opening your invitation. A baby elephant with a blue heart celebrates our baby boy.";
  if (!reducedMotion.matches) {
    elephantTimer = window.setTimeout(() => {
      opening.classList.add("is-showing-elephant");
    }, 850);
  }
  // A timer avoids depending on animation events, which may not fire.
  openingTimer = window.setTimeout(revealInvitation, reducedMotion.matches ? 0 : 3200);
});
skipOpening.addEventListener("click", revealInvitation);
replay.addEventListener("click", () => {
  window.clearTimeout(openingTimer);
  window.clearTimeout(elephantTimer);
  invitation.hidden = true;
  invitation.classList.remove("is-revealing");
  opening.classList.remove("is-opening", "is-showing-elephant");
  opening.hidden = false;
  envelope.disabled = false;
  window.scrollTo({ top: 0, behavior: "instant" });
  envelope.focus({ preventScroll: true });
  status.textContent = "Opening reset. Tap the envelope to open it again.";
});

opening.hidden = false;
invitation.hidden = true;
replay.hidden = false;
