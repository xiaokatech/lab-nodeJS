import { Tweet } from "../class/Tweet";

export interface IObserver {
  onTweet(tweet: Tweet): string;
}
