class PlatForm {
	constructor(x, y,height,width) {
		Object.assign(this, {
			x, y,height,width,
			color: "rgba(255,0,0,1)"
		})
	}
	draw() {
		pen.fillStyle = this.color
		pen.fillRect(this.x, this.y, this.width, this.height)
}
	update() {
		this.draw()
}
}
let PlatForms = [
    new PlatForm(50, 444,10,70),
    new PlatForm(200, 444,10,70),
    new PlatForm(300, 360,10,70),
    new PlatForm(500, 444,10,70),
    new PlatForm(900, 444,10,70)
]
function Pl_loop() {
	pen.clearRect(0,0,canvas.width,canvas.height)
    for (let platform of PlatForms)
    {
        platform.update()
    }

    requestAnimationFrame(Pl_loop)
}

Pl_loop()