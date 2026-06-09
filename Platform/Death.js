function death(player){
		if(player.immortal){
			return
		}
		if(player.health <= 0){
			player.dead = true
		}
	}