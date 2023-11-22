class ActivityData {
  constructor(data) {
    this._userId = data.data.userId;
    this._sessions = data.data.sessions;
  }
  get userId() {
    return this._userId;
  }
  get sessions() {
    const sessionsFormatted = this._sessions.map((session) => ({ day: parseInt(session.day.slice(-2), 10).toString(), kilogram: session.kilogram, calories: session.calories }));
    return sessionsFormatted;
  }
}

export default ActivityData;
