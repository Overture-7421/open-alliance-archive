---
title: "Day 4: Whats and Hows
date: January 7, 2025
sidebar_position: 3
---

# <span style="color:#6b35aa">What's</span>

Yesterday we finally came up with what we wan our robot to do and what we thought was important to have.

<div align="center">

![Whats-1](<Whats1%20(1).jpeg>)
![Image-2](<Whats1%20(2).jpeg>)

</div>

Translation of the most relevant Whats:

- Intake both algea and coral from the ground.
- Intake coral from the source.
- Fast deep cage climb
- Score in L1, L2, L3, L4 and processor
- Net Score (Nice to have)
- Auto Align and object detection (Nice to have)
- Intake on one side and score on the other.

We are currently working on some Krayon CADs to determine our hows.

# <span style="color:#6b35aa">Simulation</span>

One of our goals this year is being able to iterate fast and develope code faster. So we are currently working on getting our simulator ready.

# <span style="color:#6b35aa">Simulation Stack</span>

For this year we are staying with C++ for the robot code. One of the drawbacks is that we don't have access to some of the simulation libraries like maple-sim.

Last year we used Gazebo and WeBots to simulate the robot code, but it was hard to setup and some students were not able to use it as it required linux and a gpu to run smoothly.

For this year we will be using maple-sim, how are we going to do use it if its only available in java?

We created a robot project in java that will only instantiate the maple classes for simulation and those instances will read the values from networktable directly from our robot code. In our library we developed classes for managing the simulation of motors, encoders, imus, and to communicate to network tables its data.

- [OvertureLib](https://github.com/Overture-7421/overturelib/tree/master/src/main/native/include/OvertureLib/Simulation)
- [OvertureMaple](https://github.com/Overture-7421/Overture-Maple)
- [2025 Robot Code](https://github.com/Overture-7421/InsertRobotName-2025)

https://youtu.be/w9NXp9TCSUg
