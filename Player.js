let playerImage = new Image()
playerImage.src = "player.gif"
class Player {
	constructor(x, y) {
		Object.assign(this, {
			x, y,
			size: 50,
			health: 1,
			dead: false,
			vy: 0,
			jump: 30,
			gravityForce: 1,
			immortal: true,
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
		return this.y + this.size >= 444
	}
	draw() {
		pen.drawImage(
			playerImage,
			this.x,
			this.y,
			this.size,
			this.size
		)
	}
		update() {
			h.textContent = "this is your y position" + " " +this.y
		death(this)
		control(this)
		gravity(this)
		hit(this)
		this.draw()
	}
}
let player1 = new Player(50, 360)
function Player_loop() {
	pen.clearRect(0, 0, CS, CS)
	player1.update()
	requestAnimationFrame(Player_loop)
}
Player_loop()