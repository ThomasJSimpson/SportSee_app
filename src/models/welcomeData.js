class WelcomeData {
  constructor(data) {
    this._userId = data.data.userId;
    this._userInfos = data.data.userInfos;
  }
  get userId() {
    return this._userId;
  }
  get userInfos() {
    return this._userInfos;
  }
}

export default WelcomeData;
