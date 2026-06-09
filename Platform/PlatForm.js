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
let PlatForm1 = new PlatForm(50, 444,10,70)
let PlatForm2 = new PlatForm(200, 444,10,70)
let PlatForm3 = new PlatForm(300, 360,10,70)
let PlatForm4 = new PlatForm(500, 444,10,70)
let PlatForm5 = new PlatForm(900, 444,10,70)
function Plat_loop() {
	PlatForm1.update()
	PlatForm2.update()
	PlatForm3.update()
	PlatForm4.update()
	requestAnimationFrame(Plat_loop)
}
Plat_loop()