function gravity(player) {
    if (player.dead) return;
    player.vy += player.gravityForce;
    player.y += player.vy;
    const groundY = CS - player.size;
    if (player.y > groundY) {
        player.y = groundY;
        player.vy = 0;
        player.health--;
		player.v = 0
    }
}