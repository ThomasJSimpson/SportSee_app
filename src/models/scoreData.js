class ScoreData {
  constructor(data) {
    this._id = data.data.id;
    this._keyData = data.data.keyData;
    this._score = data.data.todayScore ? data.data.todayScore : data.data.score;
    this._userInfos = data.data.userInfos;
  }
  get id() {
    return this._id;
  }
  get keyData() {
    return this._keyData;
  }
  get score() {
    return this._score;
  }
  get userInfos() {
    return this._userInfos;
  }
}

export default ScoreData;
