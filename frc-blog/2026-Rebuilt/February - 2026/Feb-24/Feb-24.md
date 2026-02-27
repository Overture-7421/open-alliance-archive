## <span style="color:#6b35aa">Robot Updates</span>

Over the last couple of days, we have been working on the final details of wiring the robot and refining several build details.

<hr>

## <span style="color:#6b35aa">Intake Improvements</span>

We have been troubleshooting and improving our **intake** system. Some of the issues we encountered:

- Balls were escaping between the extension wall and the rollers
  → We are working on making the wall less flexible and adding a small piece to block the gap

- When opening the intake, it would twist slightly due to being powered from only one side
  → Opening it at higher speed seems to reduce this issue

- We initially used a **100:1 gearbox**, which was too aggressive for the intake and caused stalling
  → We switched to a **50:1 gearbox**, which is performing much better

<div align="center">

https://youtu.be/auymeQ0WR3U

<em>Intake testing and iteration.</em>

</div> <hr>

## <span style="color:#6b35aa">Spindexer Refinements</span>

With the **spindexer**, we have been focused on eliminating dead spots and preventing balls from getting stuck and stopping rotation.

- A 3D printed guide that helped push balls downward was actually causing jams
  → Removing it immediately solved the issue

- Balls were getting stuck between the top cone and the outer wall
  → We replaced the cone with a smaller one, which improved performance

- Balls were also getting stuck on the outer perimeter
  → We added small angled walls (approximately 45°) to guide them inward
  → This is still a work in progress

<div align="center">

https://youtube.com/shorts/d1Gr4q1agys

<em>Spindexer testing and dead spot elimination.</em>

</div> <hr>

## <span style="color:#6b35aa">Electrical Issue & Grounding Investigation</span>

Yesterday, we ran into a significant electrical issue.

The robot repeatedly disconnected from one of our laptops, even though we did not observe any brownouts. We tried:

- Changing the battery
- Switching to a different laptop

However, the issue persisted.

The second laptop began shocking us while connected via Ethernet to the radio. We believe the first laptop may have disconnected to protect its Ethernet port, while the second laptop did not have that protection and remained connected — though the connection was unstable.

Additionally, the robot itself was shocking us when touched, which strongly suggests a **grounding issue** somewhere on the robot.

We have checked every cable and connection, and everything appears correct. We are continuing to investigate this as a priority, since it is both a **safety hazard** and could potentially damage equipment or robot components.

<hr>

## <span style="color:#6b35aa">What’s Next?</span>

- Finalize intake refinements and gap protection
- Continue spindexer anti-jam improvements
- Identify and resolve the grounding issue
- Complete final wiring and secure all connections

<hr> <div align="center">

## <span style="color:#6b35aa">Written by</span>

Luis – Software Mentor

</div>
