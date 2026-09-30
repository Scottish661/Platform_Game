	function control(player) {
		if (player.dead){return}
		if (player.keys["ArrowRight"]) player.x += speed

		if (player.keys["ArrowLeft"]) player.x -= speed

		if (player.keys["ArrowUp"] && player.isGrounded()) {
			player.vy = -player.jump
		}
	}
	