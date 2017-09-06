export function fourKeyController(ga) {
  return function(s, speed, up, right, down, left) {

    //Create a `direction` property on the sprite
    s.direction = "";

    //Create some keyboard objects
    const leftArrow = ga.keyboard(left);
    const upArrow = ga.keyboard(up);
    const rightArrow = ga.keyboard(right);
    const downArrow = ga.keyboard(down);

    //Assign key `press` and release methods
    leftArrow.press = function() {
      s.vx = -speed;
      s.vy = 0;
      s.direction = "left";
    };
    leftArrow.release = function() {
      if (!rightArrow.isDown && s.vy === 0) {
        s.vx = 0;
      }
    };
    upArrow.press = function() {
      s.vy = -speed;
      s.vx = 0;
      s.direction = "up";
    };
    upArrow.release = function() {
      if (!downArrow.isDown && s.vx === 0) {
        s.vy = 0;
      }
    };
    rightArrow.press = function() {
      s.vx = speed;
      s.vy = 0;
      s.direction = "right";
    };
    rightArrow.release = function() {
      if (!leftArrow.isDown && s.vy === 0) {
        s.vx = 0;
      }
    };
    downArrow.press = function() {
      s.vy = speed;
      s.vx = 0;
      s.direction = "down";
    };
    downArrow.release = function() {
      if (!upArrow.isDown && s.vx === 0) {
        s.vy = 0;
      }
    };
  };
}

export function move(sprites) {
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
