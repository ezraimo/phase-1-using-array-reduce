const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; // Given battery counts

const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

console.log(totalBatteries); // Should output: 31
