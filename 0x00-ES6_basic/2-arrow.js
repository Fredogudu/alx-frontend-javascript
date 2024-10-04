
export default function getNeighborhoodsList() {
	rt default function getNeighborhoodsList() {
		  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

		  // Arrow function for addNeighborhood
		//   this.addNeighborhood = (newNeighborhood) => {
		//       this.sanFranciscoNeighborhoods.push(newNeighborhood);
		//           return this.sanFranciscoNeighborhoods;
		//             };
		//             }
		//
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Arrow function for addNeighborhood
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
