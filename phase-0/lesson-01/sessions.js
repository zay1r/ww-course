const SESSION_MINUTES = { intro: 30, standard: 60, intensive: 90 };

function getSessionMinutes(type) {
  if (!(type in SESSION_MINUTES)) {
    throw new Error(
      `Unknown session type "${type}". Expected one of: ${Object.keys(SESSION_MINUTES).join(", ")}`,
    );
  }
  return SESSION_MINUTES[type];
}

function getSessionCost(type, ratePerHour) {
  return (getSessionMinutes(type) / 60) * ratePerHour;
}

console.log("Cost:", getSessionCost("intro", 80));
