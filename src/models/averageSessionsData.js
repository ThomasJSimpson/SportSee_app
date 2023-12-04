class AverageSessionsData {
  constructor(data) {
    this._userId = data.data.userId;
    this._sessions = data.data.sessions;
  }
  get userId() {
    return this._userId;
  }
  get sessions() {
    const daysFormatted = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

    const formattedSessions = this._sessions.map((session) => ({
      day: daysFormatted[session.day],
      sessionLength: session.sessionLength,
    }));

    const deltas = this.calculateDeltas(formattedSessions);

    const fakeObjStart = [
      { day: "", sessionLength: formattedSessions[0].sessionLength + deltas[0] * 2 },
      { day: "", sessionLength: formattedSessions[0].sessionLength + deltas[0] },
    ];

    const fakeObjEnd = [
      { day: "", sessionLength: formattedSessions[formattedSessions.length - 1].sessionLength + deltas[1] },
      { day: "", sessionLength: formattedSessions[formattedSessions.length - 1].sessionLength + deltas[1] * 2 },
    ];
    return [...fakeObjStart, ...formattedSessions, ...fakeObjEnd];
  }
  calculateDeltas(formattedSessions) {
    const firstDelta = formattedSessions[0].sessionLength - formattedSessions[1].sessionLength;
    const lastDelta = formattedSessions[formattedSessions.length - 1].sessionLength - formattedSessions[formattedSessions.length - 2].sessionLength;
    return [firstDelta, lastDelta];
  }
}
export default AverageSessionsData;
