var c = document.getElementById('mycanvas');
var ctx = c.getContext("2d");

// 1、头
ctx.beginPath();
ctx.lineWidth='3';
ctx.arc(250,186,140,Math.PI/3,Math.PI/3*2,true); //true代表反方向
ctx.closePath();
ctx.fillStyle="rgb(34,118,207)";
ctx.fill();
ctx.stroke();4

// 2、脸 椭圆
ctx.beginPath();
ctx.ellipse(250,218,120,110,0,Math.PI/4,Math.PI/4*3,true);
ctx.closePath()
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();

// 3、左眼
ctx.beginPath();
ctx.ellipse(221,128,28,38,0,0,Math.PI*2);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();
ctx.beginPath();
ctx.arc(220,148,15,0,Math.PI,true);
ctx.stroke();

// 4、右眼
ctx.beginPath();
ctx.ellipse(279,128,28,38,0,0,Math.PI*2);
ctx.stroke();
ctx.fillStyle="white";
ctx.fill();
ctx.beginPath();
ctx.arc(280,148,15,0,Math.PI,true);
ctx.stroke();

// 5、鼻子
ctx.beginPath();
ctx.arc(250,178,20,0,Math.PI*2);
ctx.stroke();
ctx.fillStyle="red";
ctx.fill();

// 6、嘴巴
ctx.beginPath();
ctx.moveTo(250,198);
ctx.lineTo(250,280);
ctx.stroke();
ctx.beginPath();
ctx.ellipse(250,198,100,82,0,(Math.PI/180)*40,(Math.PI/180)*140);
ctx.stroke();

// 7、左胡须
ctx.beginPath();
ctx.moveTo(135,205);
ctx.lineTo(210,205);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(145,170);
ctx.lineTo(215,192);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(150,236);
ctx.lineTo(215,218);
ctx.stroke();

// 7、右胡须
ctx.beginPath();
ctx.moveTo(290,205);
ctx.lineTo(365,205);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(285,192);
ctx.lineTo(360,170);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(285,218);
ctx.lineTo(350,236);
ctx.stroke();

// 7、身体
ctx.beginPath();
ctx.moveTo(181,308);
ctx.lineTo(80,355);
ctx.lineTo(97,390);
ctx.lineTo(158,365);
ctx.lineTo(158,345);
ctx.lineTo(158,500);
ctx.lineTo(240,500);
ctx.arcTo(240,490,250,490,10);
ctx.arcTo(260,490,260,500,10);
ctx.lineTo(342,500);
ctx.lineTo(342,345);
ctx.lineTo(342,365);
ctx.lineTo(403,390);
ctx.lineTo(420,355);
ctx.lineTo(319,308);
ctx.closePath();
ctx.fillStyle='rgb(12,162,231)';
ctx.fill();
ctx.stroke()

// 8、左手
ctx.beginPath();
ctx.arc(411.5,372.5,26,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();
ctx.stroke();

// 9、右手
ctx.beginPath();
ctx.arc(88.5,372.5,26,0,Math.PI*2);
ctx.fillStyle="white";
ctx.fill();
ctx.stroke();

// 10、左脚
ctx.beginPath();
ctx.moveTo(158,500);
ctx.lineTo(240,500);
ctx.arc(240,508,8,-(Math.PI/180)*90,(Math.PI/180)*90);
ctx.moveTo(240,516);
ctx.lineTo(158,516);
ctx.arc(158,508,8,(Math.PI/180)*90,(Math.PI/180)*270);
ctx.fillStyle='white';
ctx.fill();
ctx.stroke();

// 11、右脚
ctx.beginPath();
ctx.moveTo(260,500);
ctx.lineTo(342,500);
ctx.arc(342,508,8,-(Math.PI/180)*90,(Math.PI/180)*90);
ctx.moveTo(342,516);
ctx.lineTo(260,516);
ctx.arc(260,508,8,(Math.PI/180)*90,(Math.PI/180)*270);
ctx.fillStyle='white';
ctx.fill();
ctx.stroke();

// 12、肚子
ctx.beginPath();
ctx.arc(250,380,70,-(Math.PI/180)*60,(Math.PI/180)*330);
ctx.fillStyle='white';
ctx.fill();
ctx.stroke();

// 13、口袋
ctx.beginPath();
ctx.arc(250,380,50,0,Math.PI)
ctx.closePath();
ctx.fillStyle='white';
ctx.fill();
ctx.stroke();

// 14、围脖
ctx.beginPath();
ctx.moveTo(165,295);
ctx.lineTo(335,295);
ctx.arc(335,307,12,-(Math.PI/180)*90,(Math.PI/180)*90);
ctx.moveTo(335,319);
ctx.lineTo(165,319);
ctx.arc(165,307,12,(Math.PI/180)*90,(Math.PI/180)*270);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();

// 15、铃铛
ctx.beginPath();
ctx.arc(250,318,17,0,Math.PI*2);
ctx.fillStyle='yellow';
ctx.fill();
ctx.moveTo(236,310);
ctx.lineTo(266,310);
ctx.moveTo(234,315);
ctx.lineTo(268,315);
ctx.stroke();

ctx.beginPath();
ctx.arc(250,322,2,0,Math.PI*2);
ctx.fillStyle='black';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250,322);
ctx.lineTo(250,336);
ctx.stroke();