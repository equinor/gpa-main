export function isFilled(val: any) {
    if ((!val && val !== 0) || val === "" || typeof val === "undefined") {
        return false;
    }
    else {
        return true;
    }
}