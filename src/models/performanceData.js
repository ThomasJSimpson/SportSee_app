class PerformanceData {
  constructor(data) {
    this._userId = data.data.userId;
    this._data = data.data.data;
  }

  get userID() {
    return this._userId;
  }
  get data() {
    const kindFormatted = { 1: "Cardio", 2: "Énergie", 3: "Endurance", 4: "Force", 5: "Vitesse", 6: "Intensité" };
    return this._data
      .map((performance) => ({
        value: performance.value,
        kind: kindFormatted[performance.kind],
      }))
      .reverse();
  }
}

export default PerformanceData;
