# Friday Updates

## April Tag Consistency

After facing issues with apriltag consistency and our autos working better on one side than the other, we developed a small software to map out our own Tag Field Layout. When calibration period starts before practice matches we will be taking pictures of mainly speaker and amp apriltags from both alliance sides. The software currently works using the robot camera, but we are working on using simulation and a phone to take the pictures without using the robot camera. One thing we still need to account for is for field movements because of high speed collisions, but for now we can solve the problem for the initial matches.

## Shooter Updates

CAD team is working on designing a new shooter. This new shooter will keep the same concept we already use, but it will use wheels for shooting instead of PVC rollers with tape and glue. The new design will also make the shooter shafts more stable as we had some issues with some shafts bending at high speeds.

## Note Sensor

Also replaced the damaged infrared sensor with a REV Color Sensor in proximity detection mode. Not a lot of testing with the sensor yet but seems to work for now.

## Encoder Changes

Yesterday we changed the rev through bore encoder to the CANCoder on our lower arm. The motors were set to use the fused cancoder functionality with motion magic, after some testing we were able to get rid of some bouncing of the arm and make it reach the target position faster than before.

## What’s next?

After finishing the previously mentioned upgrades, we will also work on the following:

- Fix trap mechanism
- Install a second camera (OV2311)
- Get rid of the extra weight on our intake
- Clean up cables and electrical.