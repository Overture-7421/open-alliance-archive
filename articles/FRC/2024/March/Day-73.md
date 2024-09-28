---
title: "Day 73: Heartland Regional"
author: Luis Leyva
category: FRC
date: 18 March 2024
---

# Regional Winners!

We are proud to say we got our second winner blue banner of the season this weekend at Heartland Regional and also won the Team Sustainability Award. We ended up on rank #10 after qualification matches and ended up as first pick of the #2 alliance. Thanks to our alliance partners [3061 - Huskie Robotics](https://www.chiefdelphi.com/t/frc-3061-huskie-robotics-2024-season-build-thread/447553) and 3184 - Blaze Robotics.

(Waiting on pictures with the whole alliance, will update post when we get them)

![Heartland Regional](Day-73/Heartland%20Alliance.jpeg)

Also we want to thank [5119 - Team Steam](https://www.chiefdelphi.com/t/5119-team-steam-2024-open-alliance-build-thread/442086), 1775 - Tigerbytes and 2470 - Team BJORG for all their help and support.

## Some Highlights

### Event High Score

Match link would be edited here after TBA and FIRST API are updated with match results.

## What we learned

-   While trap and climbing are crucial for ranking they are not necessarily a event winner, but should not be underestimated as trap can be match decider if its a close match.
-   As said on week one, autos are crucial for wins.
-   Amplifying is really important, keeping the speaker amplifying is crucial for keeping the lead.
-   Amplifying just as the note is going in the speaker helps take advantage of the 10 second period.
-   1 Amp/Speaker, 1 Speaker and 1 defensive robot seems to be a good alliance for playoffs.
-   Speakers moved a couple of inches back after multiple collisions and Amp’s can get collision damage.

## Fails and Improvements

This regional we had better robot than last one but still faced some issues throughout the event.

1. Stabilizing arms for trap scoring broke a couple days before the regional.
   **The Fix:** Decided to not do trap this regional and instead focused on driver practice before the event. Planning on replacing the servo used for releasing the arms and replacing the shaft that got damaged.
2. Our infrared sensor for detecting notes starting acting weird and was giving us false positives during autonomous which made the robot believe it had a note when accelerating really fast.
   **The Fix:** Replaced all the wiring on the sensor and added a debouncer filter to reduce the effects of the short in the wiring. The sensor still kept malfunctioning to a lesser degree so we are planning on replacing it for champs. Also the malfunction seemed to be worse on the red side while running autonomous, not really sure about what happened there.
3. Red side was acting strange with our odometry making us miss shots using vision and making our auto to only work on the blue side.
   **The Fix:** Added a tabulation table for each side and changed the shooter angles for the red side, it did not work perfectly as we had to guess how much to change the angle. Planning on having the two tables for worlds just in case.
4. Our arms were bouncing a lot because of the PID being to high.
   **The Fix:** Lowered P-value a little and tried to reduce I-value, which seemed to not make a difference, we are planning on replacing through bore encoder with CANCoders to take advantaged of the Fused CANCoder functionality on the TalonFX.

## What Worked

This time the list is a little bit short as we want to highlight the new things and don’t want to be repetitive.

-   Strategy, we used a 1 Amp/Speaker, 1 Speaker and 1 defensive bot strategy in which after autonomous the first two notes scored from the whole alliance would be in the amp. The amp bot would score the first note while the speaker bot would pass them the second note from half field. While the amp bot was scoring the second note, the speaker bot would be getting ready to shoot into the speaker and as the note enters the speaker the human player would wait until the note was about to be counted to amplify and take full advantage of the 10 second period. During the 10 second period the amp bot would convert to shooting into the speaker for maximum points. The defensive bot would also serve as a passing bot on occasions. Our goal was to try to only score on a the speaker when amplified.
-   Amp scoring mechanism is really fast, we averaged around 6 notes in amp per match.
-   Only scoring in the speaker when amplified, almost never scored in an unamplified speaker.
-   Fast climbing when not trying to do trap.

## What’s Next?

-   Shooter redesign to change PVC for wheels.
-   Amp and Source auto tuning for center line racing.
-   Even more Driver Practice.
-   Note detection sensor replacement.
-   System for creating our own apriltag JSON field to adjust for field movements between matches.
-   Replacing through bore encoders with CTRE CANCoders.
