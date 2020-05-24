
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = 100;

  var gr = ctx.createLinearGradient(0,0,0,canvas.height);

    gr.addColorStop(0.0,'rgba(255,255,255, 1)');
    gr.addColorStop(1.0,'rgba(255,255,255, 1)');

  var waves = ["rgba(243, 247, 251, 1)"];

  var i = 0;

  function draw() {
    canvas.width = canvas.width;

    for(var j = waves.length - 1; j >= 0; j--) {
      var offset = i + j * Math.PI * 36;
          ctx.fillStyle = (gr);
      var randomLeft            = (Math.sin((offset/2) + 2) + 1) / 3 * 90;
      var randomRight           = (Math.sin((offset/2) + 2) + 1) / 3 * 90;
      var randomLeftConstraint  = (Math.sin((offset/2) + 2) + 1) / 3 * 150;
      var randomRightConstraint = (Math.sin((offset/2) + 1) + 1) / 3 * 150;

      ctx.beginPath();
      ctx.moveTo(0, randomLeft + 40);


      ctx.bezierCurveTo(canvas.width / 3, randomLeftConstraint, canvas.width / 2, randomRightConstraint, canvas.width , randomRight + 20);
      ctx.lineTo(canvas.width , canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.lineTo(0, randomLeft + 20);

      ctx.closePath();
      ctx.fill();
    }

    i = i + 0.02;
  }
  setInterval("draw()", 20);
