
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to sum them up
const totalBatteries = batteryBatches.reduce(
  (total, batch) => total + batch,
  0 // initial value
);

// Export for testing
module.exports = { totalBatteries };
