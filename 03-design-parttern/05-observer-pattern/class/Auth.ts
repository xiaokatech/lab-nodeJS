import { IObservable } from "../interface/IObservable";
import { Follower } from "./Follower";
import { Tweet } from "./Tweet";

export class Author implements IObservable {
  protected observers: Follower[] = [];

  notify(tweet: Tweet) {
    this.observers.forEach((observer) => {
      observer.onTweet(tweet);
    });
  }

  subscribe(observer: Follower) {
    this.observers.push(observer);
  }

  sendTweet(tweet: Tweet) {
    this.notify(tweet);
  }
}
