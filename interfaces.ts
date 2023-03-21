interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

interface RectWithArea extends Rect {
    getArea(): number
    // getArea: () => number
}

class RectImpl implements RectWithArea {
    getArea(): number {
        throw new Error("Method not implemented.")
    }
    id: string
    color?: string | undefined
    size: { width: number; height: number }
}

const rect1: Rect = {
    id: "123",
    size: {
        width: 20,
        height: 30
    }
}

rect1.color = "#000"

const rect2: RectWithArea = {
    id: "234",
    size: {
        width: 10,
        height: 15
    },
    getArea(): number {
        return this.size.width * this.size.height
    },
}

console.log(rect1)
console.log(rect2)
console.log(rect2.getArea())


interface Styles {
    [key: string]: string | undefined
}

const css: Styles = {
    border: "1px solid #000",
    width: "200px",
    margin: "20px"
}