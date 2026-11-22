# Amalie's Valakappu Invitation

A digital invitation for Amalie's Valakappu on 12 December 2026.

The current page presents the final artwork in a responsive ivory layout with a subtle frame. If the image is missing, a clear placeholder appears. A tappable envelope decorated with jasmine-inspired garlands, a blue-sari mother-to-be illustration, blue-and-gold sari-inspired trim, a brass bell and a kolam-inspired motif, and a gold lotus seal opens to reveal the invitation. The guest-facing text warmly welcomes friends and family to the celebration. Guests can skip the opening or replay it. Keyboard and reduced-motion preferences are supported. There are no RSVP forms or other event features yet.

## Technologies

HTML5, CSS3 and vanilla JavaScript. No frameworks, dependencies or build tools.

## Project structure

```text
index.html                  Page content and accessible invitation image
css/styles.css              Responsive layout and presentation
js/main.js                  Envelope opening, replay and missing-image fallback
assets/images/              Place valakappu-final.jpg here
assets/animations/          Reserved for later
assets/audio/               Reserved for later
.gitignore                  Local settings and temporary-file exclusions
.nojekyll                   Serves the files directly on GitHub Pages
readme.md                   Project documentation
```

Empty .gitkeep files preserve asset folders in Git. The existing VS Code workspace file is preserved.

## Artwork

The exterior illustration is saved separately as `assets/images/envelope-blue-sari.png`. It decorates only the envelope; the final invitation inside is preserved.

The selected JPEG artwork is saved at `assets/images/valakappu-final.jpg`. Keep the exact filename and letter case. The page displays the full image without cropping or distortion. The HTML dimensions match the previously selected 1024 by 1536 portrait; update these if the replacement image has different dimensions. Adjust the image alt text if the content or date changes.

## Preview locally

1. Open this folder in VS Code.
2. Open `index.html` in a browser by double-clicking it in File Explorer.
3. Save edits in VS Code and refresh the browser.
4. Resize the browser to check the mobile layout.

If you already use the optional Live Server extension, right-click `index.html` and choose **Open with Live Server** for automatic refresh.

## Hosting

All assets use relative paths and the page works as a static GitHub Pages project site. No build step is required. Nothing is committed, pushed or deployed by this setup.

The envelope starts fully closed, with the elephant concealed until the flap opens. The opening uses CSS layers: the seal fades, the flap rotates, and a watercolor baby elephant holding a blue heart rises before the full artwork is revealed. The opening pauses briefly so guests can enjoy the illustration. The elephant is saved as `assets/images/baby-elephant-blue-heart.png`. JavaScript coordinates the timing and moves keyboard focus to the invitation. Reduced-motion users see the invitation immediately after activating the envelope. Without JavaScript, the invitation remains visible. Future work can add floating balloons and additional celebration details.

## Sharing and publishing

The page includes Open Graph and social-card metadata using a dedicated 1200 by 630 landscape image at `assets/images/messenger-preview-v1.png`. The preview reuses the blue-sari illustration, jasmine and gold details, with a readable invitation title and date. The full invitation inside is unchanged. Messaging apps choose how to crop and cache their previews; the website itself always shows the complete portrait.

The metadata currently assumes the standard address below. This is the intended URL, not confirmation of a live deployment:

https://leravi.github.io/Amalie-s-valakappu-invitation/

If GitHub Pages uses another address or a custom domain, update the canonical, Open Graph and social-image URLs in index.html before sharing.

To publish after review:

1. Commit the website files on the current feature branch and push them to GitHub.
2. Merge the reviewed changes into main.
3. In the repository Settings > Pages, choose Deploy from a branch, main, and / (root), then Save.
4. Wait for the Pages deployment and use the exact URL GitHub displays.
5. Test that public URL on a phone before sending it to guests.

This is currently a save-the-date. Time and venue can be added once confirmed. No details are invented. Publishing makes the invitation and its photographs publicly accessible.

### Refresh the Messenger preview

1. Commit and push the changed index.html, this README and assets/images/messenger-preview-v1.png, then merge into main.
2. Wait for the GitHub Pages deployment to succeed.
3. Open the live image URL to confirm the preview image is available:
   https://leravi.github.io/Amalie-s-valakappu-invitation/assets/images/messenger-preview-v1.png
4. Open https://developers.facebook.com/tools/debug/ and sign in if requested.
5. Paste the invitation homepage URL, choose Debug, and use Scrape Again if shown.
6. Paste the invitation link into a new Messenger draft and check its preview.

Messenger controls whether and how the preview appears; layouts vary between clients. This cannot hide the actual URL or create a custom inline hyperlink. Previously sent messages may retain an older preview. If the image is redesigned later, save it with a new versioned filename and update the image URLs in index.html, because Meta caches images by URL. No Facebook app, API key or JavaScript SDK is required for this setup.
