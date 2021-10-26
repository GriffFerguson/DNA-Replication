# DNA Replication: The Game!

Never doubt the things I will do to get a 100.<br>
Anyway this is the result of 12 hours of coding for a biology project about the replication of DNA (incase that wasn't obvious).<br>
Players must act like polymerase to create complete replicated DNA strands by adding the complimentary bases to both the leading and lagging strands.<br>
For the sake of simplicity, ligase is already in place, and primase will be substituted with selected blanks.

## The Code Itself

Following my belief of no frameworks or libraries, this was written in vanilla HTML/CSS, with logic being written in TypeScript before being compiled into JavaScript. The TypeScript logic is primarily comprised of coditionals, functions, and objects. The answers can be checked by checking attributes on elements.<br>
Levels are entirely randomized with every page load. Therefore, the level 1 you play at one point in time has a small chance of being the level 1 you play next time (just like real DNA)!<br>
All graphics were made in SVG to ensure minimal bandwidth/storage usage and maximum resolution.<br>
This is not compatible with internet explorer, and responsiveness is not compatible with Firefox.

**Approximate total line count for game files (excluding transpiled files and source maps): <ins>785</ins>**


## What is DNA Replication?

In order for cells and organisms to reproduce, DNA must be replicated. 
<br>Semi-conservative replication, which is experienced in normal DNA replication, occurs when helicase splits the leading and lagging strands of DNA apart. With the two complimentary strands, polymerase creates a compliment strand for the two separated strands. Polymerase works from the 5' end of a strand to the 3' end. For leading (5' to 3') strands, this mean polymerase works towards the helicase. In the case of lagging strands (3' to 5'), polymerase works away from the helicase, creating fragments of the completed strand known as Okasaki Fragments. Ligase is used to bond these fragments into one strand. Once the replication is complete, the two strands are condensed into chromosomes.
