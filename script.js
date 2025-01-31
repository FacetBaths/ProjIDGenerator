document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("projectForm");
  const outputDiv = document.getElementById("output");
  const projectIDSpan = document.getElementById("projectID");
  const copiedText = document.getElementById("copiedText");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const state = document.getElementById("state").value;
    const lastName = document.getElementById("lastName").value;
    const previousProjects = document.getElementById("previousProjects").value;

    const projectID = generateProjectNumber(state, lastName, previousProjects);
    projectIDSpan.textContent = projectID;
    outputDiv.style.display = "block";
    copiedText.style.display = "none";
  });

  projectIDSpan.addEventListener("click", () => {
    navigator.clipboard
      .writeText(projectIDSpan.textContent)
      .then(() => {
        copiedText.style.display = "block";
        setTimeout(() => (copiedText.style.display = "none"), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  });
});

function generateProjectNumber(
  state = "Illinois",
  lastName,
  previousProjects = 0
) {
  const stateAbbr = state.substring(0, 3).toUpperCase();
  const customerLastName = lastName
    .substring(0, 5)
    .toUpperCase()
    .padEnd(5, "X");
  const projectCount = (Number(previousProjects) + 1)
    .toString()
    .padStart(3, "0");

  return `${stateAbbr}${customerLastName}${projectCount}`;
}

// Function to Show Tooltips
function showTooltip(id) {
  const tooltip = document.getElementById(id);

  // Show the tooltip
  tooltip.style.display = "block";
  setTimeout(() => {
    tooltip.style.opacity = "1"; // Fade in
  }, 10);

  // Hide tooltip after 3 seconds
  setTimeout(() => {
    tooltip.style.opacity = "0"; // Fade out
    setTimeout(() => {
      tooltip.style.display = "none";
    }, 300);
  }, 3000);
}
