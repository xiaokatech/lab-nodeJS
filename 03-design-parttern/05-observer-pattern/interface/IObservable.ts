import { Tweet } from "../class/Tweet";
import { IObserver } from "./IObserver";

export interface IObservable {
  sendTweet(tweet: Tweet): any;
}
