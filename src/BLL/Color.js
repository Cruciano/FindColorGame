export function Color(R, G, B){
    this.R = R;
    this.G = G;
    this.B = B;
    this.isEqual = isEqual.bind(this);
}

function isEqual({R, G, B}) {
    return this.R === R && this.G === G && this.B === B;
}