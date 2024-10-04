
export default function createReportObject(employeesList) {
	rt default function createReportObject(employeesList) {
		  return {
			      allEmployees: { ...employeesList },
			      getNumberOfDepartments(employeesList) {
				            return Object.keys(employeesList).length;
				          },
			    };
	}

  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
