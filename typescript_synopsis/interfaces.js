"use strict";
class RectImpl {
    getArea() {
        throw new Error("Method not implemented.");
    }
}
const rect1 = {
    id: "123",
    size: {
        width: 20,
        height: 30
    }
};
rect1.color = "#000";
const rect2 = {
    id: "234",
    size: {
        width: 10,
        height: 15
    },
    getArea() {
        return this.size.width * this.size.height;
    },
};
console.log(rect1);
console.log(rect2);
console.log(rect2.getArea());
const css = {
    border: "1px solid #000",
    width: "200px",
    margin: "20px"
};
