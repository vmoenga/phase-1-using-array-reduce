let totalBatteries = 0;
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
totalBatteries = batteryBatches.reduce((total, num) => total + num, totalBatteries);