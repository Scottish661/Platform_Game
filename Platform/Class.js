class Player {
	constructor(x, y) {
		Object.assign(this, {
			x, y,
			size: 50,
			health: "hi",
			dead: false,
			vy: 0,
			jump: 10,
			gravityForce: 0.2,
			immortal: false,
			color: "rgba(255,0,0,1)"
		}     )
		this.keys = []
		addEventListener("keydown", e => {
			this.keys[e.key] = true
		})
		addEventListener("keyup", e => {
			this.keys[e.key] = false
		})
	}
	isGrounded() {
		return this.y + this.size >= CS
	}
	draw() {
		pen.fillStyle = this.color
		pen.fillRect(this.x, this.y, this.size, this.size)
	}
		update() {
		death(this)
		control(this)
		gravity(this)
		this.draw()
	}
}
class PlatForm {
	constructor(x, y) {
		Object.assign(this, {
			x, y,
			size: 50,
			color: "rgba(0,0,0,1)"
		}     )
		
	}
	draw() {
		pen.fillStyle = this.color
		pen.fillRect(this.x, this.y, this.size, this.size)
	}
		update() {
		this.draw()
	}
}
let player1 = new Player(50, 42)
function loop() {
	pen.clearRect(0, 0, CS, CS)
	player1.update()
	requestAnimationFrame(loop)
}
loop()