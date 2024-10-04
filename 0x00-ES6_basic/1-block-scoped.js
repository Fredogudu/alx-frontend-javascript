export default function taskBlock(trueOrFalse) {
	rt default function taskBlock(trueOrFalse) {
		  const task = false;
		  const task2 = true;

		  if (trueOrFalse) {
			      let task = true;  // Using let for block scope
			      let task2 = false; // Using let for block scope
			    }

		  return [task, task2]; // Returns the outer block-scoped variables
	}
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    let task = true;  // Using let for block scope
    let task2 = false; // Using let for block scope
  }

  return [task, task2]; // Returns the outer block-scoped variables

