function init() {

  var stage = new createjs.Stage("pongCanvas");
  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.setFPS(60);
  createjs.Ticker.useRAF = true;

  var pongBall = new createjs.Bitmap("pongball.png");
  pongBall.shadow = new createjs.Shadow("#000000", 2, 5, 10);
  var ballDirection = "up";
  pongBall.x = (pongCanvas.width / 2) - 25;
  pongBall.y = (pongCanvas.height / 2) - 25;

  var topBar = new createjs.Bitmap("top.png");
  topBar.x = 0;
  topBar.y = 0;

  var bottomBar = new createjs.Bitmap("bottom.png");
  bottomBar.x = 0;
  bottomBar.y = pongCanvas.height - 100;

  stage.addChild(pongBall);
  stage.addChild(topBar);
  stage.addChild(bottomBar);

  function tick(event) {
    if (ballDirection == "down") {
      pongBall.y += 5;
      stage.update();
      if (pongBall.y >= pongCanvas.height - 75) {
        console.log("Reversing ball direction... (going up!)");
        ballDirection = "up";
      }
    }
    if (ballDirection == "up" && pongBall.y > 0) {
      pongBall.y -= 5;
      stage.update();
      if (pongBall.y <= 25) {
        console.log("Reversing ball direction... (going down!)");
        ballDirection = "down";
      }
    }
  }


}
