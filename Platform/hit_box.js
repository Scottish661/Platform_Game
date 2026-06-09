function hit(player){	
  const groundX = 450 - player.size;
  const groundY = 360 - player.size;

  if (
    player.y > groundX &&
    (
        (player.x > 35 && player.x < 90) ||
        (player.x > 170 && player.x < 260) ||
        (
          (player.x > 270 && player.x < 360 && player.y === 338) 
        )
    )
  ) {
    player.y = groundX;
    player.vy = 0;
  }
}