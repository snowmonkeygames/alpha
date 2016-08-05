function init() {

  var stage = new createjs.Stage("demoCanvas");
  createjs.Ticker.addEventListener("tick", tick);

  var spinner1 = new createjs.Shape();
  spinner1.graphics.beginStroke("rgba(0,0,255,0.5)").setStrokeStyle(5).arc(0,0,20,0, Math.PI/2);
  spinner1.x = 100;
  spinner1.y = 100;

  var spinner2 = new createjs.Shape();
  spinner2.graphics.beginStroke("rgba(255,0,0,0.5)").setStrokeStyle(5).arc(0,0,20,0, Math.PI/2);
  spinner2.x = 100;
  spinner2.y = 100;

  var spinner3 = new createjs.Shape();
  spinner3.graphics.beginStroke("rgba(0,255,0,0.5)").setStrokeStyle(5).arc(100,10,10,0, Math.PI*1.5);
  spinner3.x = 100;
  spinner3.y = 100;

  stage.addChild(spinner1);
  stage.addChild(spinner2);
  stage.addChild(spinner3);

  function tick(event) {
    spinner1.rotation += 1;
    spinner2.rotation -= 2;
    spinner3.rotation -= 3;
    stage.update();
  }

}
