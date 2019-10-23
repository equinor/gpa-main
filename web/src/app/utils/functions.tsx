export function isFilled(val: any) {
    if (val === null || val === "" || typeof val === "undefined") {
        return false;
    }
    else {
        return true;
    }
}