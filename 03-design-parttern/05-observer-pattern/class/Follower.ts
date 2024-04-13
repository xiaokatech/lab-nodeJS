import { IObserver } from "../interface/IObserver";
import { Tweet } from "./Tweet";

export class Follower implements IObserver {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  onTweet(tweet: Tweet) {
    const message = `${this.name} you go tweet => ${tweet.getMessage()}`;
    console.log(message);
    return message;
  }
}
