
export default function createIteratorObject(report) {
	rt default function createIteratorObject(report) {
		  let allEmployees = [];
		  
		  // Flatten the employees from all departments into one array
		//   for (const department of Object.values(report.allEmployees)) {
		//       allEmployees = [...allEmployees, ...department];
		//         }
		//
		//           // Return an iterator from the flattened array
		//             return allEmployees[Symbol.iterator]();
		//             }
		//
  let allEmployees = [];
  
  // Flatten the employees from all departments into one array
  for (const department of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...department];
  }

  // Return an iterator from the flattened array
  return allEmployees[Symbol.iterator]();
}
