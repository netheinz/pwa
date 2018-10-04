/**
 * Installer service worker hvis nødvendigt
 */
if('serviceWorker' in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log("Service Worker registred");
            })
            .catch(error => {
                console.error("Registration failed!");
            })
    })
}