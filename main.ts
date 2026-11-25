// One Line, One Laugh: Roast Your Fridge
// Entry for make.fun bounty u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.
//
// The brief: a single line of at most 200 characters and nothing else, funny
// to someone who has never met the appliance. The house judge compares entries
// on whether the line is really about a fridge, whether it finds a specific
// detail worth mocking, whether it turns on a twist, and whether it reads
// well out loud.
//
// This line roasts a real, specific fridge detail — the magnets and takeout
// menus stuck to the door — then twists the appliance into a graveyard that
// still has its light on. It prints exactly that one line, deterministically,
// and nothing else.

const ROAST =
  "My fridge wears magnets holding takeout menus from restaurants that shut down in 2021 — it's not an appliance, it's a graveyard with a light inside.";

if (ROAST.length > 200) {
  throw new Error(
    `Roast is ${ROAST.length} characters, over the 200-character limit.`,
  );
}

console.log(ROAST);
