# contamination

A series of little experiments in agent-based modeling for digital art. 
The premise of this project is to simulate bacterial growth in an agar dish
while implementing some of the rules of perspective from drawing/painting
within the rule system of the growth/death/secretion of the bacteria. 

## Repository organization

Right now I'm just learning [p5js](https://p5js.org/examples/) and the canvas API while also playing with very simple 
bacterial growth rules. Each experiment is a self-contained HTML file containing
a link to the p5 minified source and an animation or drawing script
which uses it. For now these are just getting sequentially numbered 
and placed in the `experiments` subdirectory. Eventually we'll want to zoom in on specific aspects beyond
just having a sequentially numbered list of experiments and later we'll
want to assemble an actual complex and compositionally appealing script
for Art Blocks.

## Rules of perspective

Annie's summary of rules learned in Jay Stuckey's drawing class: 

| Foregoround              | Background              |
| ------------------------ | ----------------------- |
| Crisp & clear            | Blurry                  |
| Saturated (& more red)   | More gray (or blue)     |
| Bigger                   | Smaller                 |
| Objects farther apart    | Objects closer together |
| In front                 | Behind                  |
| More marks               | Fewer marks             |
| Heavier lines            | Lighter lines           |
| Usually near bottom      | Higher or closer to horizon |


## Ideas

* Create more complex shapes rather than just expanding blobs using rules that imitate multicellular-like behavior from bacterial "quorom sensing", raft formation, or [swaming motility](https://en.wikipedia.org/wiki/Swarming_motility)
* Horizon can be a diffusing chemical from the top of the canvas
