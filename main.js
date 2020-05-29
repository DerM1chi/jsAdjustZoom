function adjustZoom() {
    //replace 1920 by the static width your HTML and CSS is set to. If you set your body width to 800px, replace 1920 by 800.
    //in the HTML body tag, set these attributes: onload="adjustZoom()" and onresize="adjustZoom()".
    //see an example usecase on https://michelbarnich.com
    document.body.style.zoom = (document.documentElement.clientWidth / 1920  * 100) + "%";
}
