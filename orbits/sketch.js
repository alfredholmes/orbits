function setup() {
  createCanvas(1000, 800);
  background(30);

}

timestep = 60;

theta = - 0.785;
r = 200;
theta_dot = 0.01 * timestep;
w = 100;

p_r = 0;
P_theta = 0

p_r_dot = 0;
p_theta_dot = 0;

p_r_dot_dot = 0;
p_theta_dot_dot = 0;

g = 10**7;

function draw() {
  //clear();
  stroke(255);
  strokeWeight(2);
  noFill();
  background(30)
  //clear();
  translate(500, 400);
  rotate(theta);
  ellipse(0, 0, w);
 
  line((w / 2) * sin(theta), -(w / 2) *cos(theta), r * sin(theta), -r * cos(theta));
  theta = theta + theta_dot * 1 / timestep;

  if (theta > 0)
  {
  	p_r_dot_dot = p_r * theta_dot * theta_dot - g / (p_r * p_r);
  	p_theta_dot_dot = -2 * p_r_dot * p_theta_dot / p_r;


  	p_r_dot = p_r_dot + 1 / 60 * p_r_dot_dot;
  	p_theta_dot = p_theta_dot + 1/timestep * p_theta_dot_dot;


  	p_r = p_r + 1/60 * p_r_dot;
  	p_theta = p_theta + 1/timestep * p_theta_dot; 




  }else{
  	p_r = r;
  	p_theta = theta;
  	p_theta_dot = theta_dot;
  	p_r_dot = 0;
  }

  stroke(255, 255, 255);
  ellipse(p_r * sin(p_theta), -p_r * cos(p_theta), 3);
  
  if(p_r < w / 2)
  {
  	//p_r = 0;
	//p_theta = 0

	p_r_dot = 0;
	p_theta_dot = 0;

	p_r_dot_dot = 0;
	p_theta_dot_dot = 0;

	g = 0;

	theta_dot = 0;
  }

}