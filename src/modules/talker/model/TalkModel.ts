class TalkModel {
  watchedAt: Date;
  rate: number;

  constructor(watchedAt: Date, rate: number) {
    this.watchedAt = watchedAt;
    this.rate = rate;
  }
}

export { TalkModel };
