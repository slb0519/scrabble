email: sean_boullianne@student.uml.edu

# scrabble
Date: 8/13/2020

Functionality (based on rubric):

Letter tiles selected randomly from deck: Fully functional

Letter tiles can be dragged and dropped: Fully functional

Program identifies which letter tile is dropped on which square: Fully functional
  - data is kept in html structure with hidden elements
  - updated on drop

Board includes bonus squares: Fully functional

Score is tallied correctly: Partially functional
  - the reason this is partial is because my program does not identify multiple words, instead treats non-consecutive letters as one word
  - ex: if two words were played, both on multipliers, they would get multiplied once

Any number of words can be played: Fully functional

The board is cleared after each round: Fully functional

Hand is re-filled based on what was used: Fully functional

Score is kept for multiple words: Fully functional

Tiles can only be dragged from rack to board with revert: Fully functional

Once the tile is placed, it cannot be removed: Fully Functional

Consecutive tile placement: Not Functional
  - players can place tiles in non-consecutive placements, my program treats them as one word
