export default function(sprites) {
  if (sprites instanceof Array === false) {
    internal_move(sprites)
  } else {
    for (var i = 0; i < sprites.length; i++) {
      internal_move(sprites[i])
    }
  }
};

function internal_move(sprite) {
  sprite.x += sprite.vx | 0;
  sprite.y += sprite.vy | 0;
}
