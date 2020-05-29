function adjustZoom() {
    //replace 1920 by the static width your HTML and CSS is set to. If you set your body width to 800px, set replace 1920 by 800.
    document.body.style.zoom = (document.documentElement.clientWidth / 1920  * 100) + "%";
}
