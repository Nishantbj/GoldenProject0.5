class Boy {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true

        }
        this.body = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.body)
        this.width = w
        this.height = h
        this.image(boyStd)
    }
    show() {
        image(this.image, 0, 0, this.w, this.h)

        if (keyIsDown(RIGHT_ARROW)) {
            boy.changeAnimation("walking")
        }
    }
}