function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex({R, G, B}) {
    return "#" + componentToHex(R) + componentToHex(G) + componentToHex(B);
}
