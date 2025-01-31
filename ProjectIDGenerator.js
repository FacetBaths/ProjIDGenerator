function generateProjectNumber(
  state = "Illinois",
  lastName,
  previousProjects = 0
) {
  // Derive state abbreviation from customer's address
  const stateAbbr = state.substring(0, 3).toUpperCase();

  // Extract customer last name (first 5 letters)
  const customerLastName =
    lastName.substring(0, 5).toUpperCase().padEnd(5, "X") || "XXXXX";

  // Count the projects for this customer
  const projectCount = (previousProjects + 1).toString().padStart(3, "0");

  // Generate project number
  const project_number = `${stateAbbr.toUpperCase()}${customerLastName.toUpperCase()}${projectCount}`;
  console.log(project_number);
  return project_number;
}

generateProjectNumber("Illinois", "Smith", 0); // Example usage
