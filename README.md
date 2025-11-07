# Task

## Challenges:
  - I cant clearly decide if the 'Courses." belongs to `top-bar` or `content-area`.
  I think its semantically closer to `content-area`, but in `top-bar` pov, it seems to have a place there too. 

## Inference / Fix:
  - The area right to sidebar depends on sidebar-option
  - The top panel (content-title and profile area) are separated from rest of 'content' internally.
  - Implemented 2 nested grids

## Backend ER Diagram

### Tables
 - Users
 - Courses
 - Mentors
 

 the ER diagram is at ./er-diagram.jpg

 ER diagram assumes courses may be shared among MENTORs (a COURSE can have multiple MENTORs) [n:n relationship]
 Assumes LEARNERs can enroll for mutiple courses.

Well, thats it. I apologise for the delay. Please review my work. I'm genuinely looking forward to hearing back from you.