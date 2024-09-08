function direction(e) {
    const direction = document.getElementById("slide-img");

    if (e == 1) {
        direction.scrollLeft = direction.scrollLeft - 2400;
    } else if (e == 2) {
        direction.scrollLeft = direction.scrollLeft + 2400;
    }
}