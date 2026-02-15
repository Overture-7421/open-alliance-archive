---
title: "Day 21: Climbing Command"
date: 26 January 2024
sidebar_position: 6
---

## **Climbing Command**

We wanted to simplify the climbing procedure for the driver by developing a semi automated [climbing command](https://github.com/Overture-7421/InsertRobotName2024/blob/auto_climb/src/main/Commands/Climbing/Climbing.cpp) using PathPlanner path finding and april tag detection.

Using PathPlanner we created a path for each side of the stage and based on the robot odometry it will look for the closest path for the bot to follow and then start the climbing procedure.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z6FSQg6oV58" frameborder="0" allowfullscreen></iframe>
