import { v4 as uuidv4 } from 'uuid';
import { TWEETS } from "../utils/constants";
import { remove } from 'lodash';

export function saveTweetApi(username, message) {
    const tweets = getTweetsApi();
    if(!username || !message){
        return null;
    }
    tweets.push({
        id: uuidv4(),
        username,
        message,
        createdAt: new Date()
    });
    localStorage.setItem(TWEETS, JSON.stringify(tweets));
    return true;
}

export function getTweetsApi(){
    const tweets = localStorage.getItem(TWEETS);
    if(!tweets){
        return [];
    }
    return JSON.parse(tweets);
}

export function deleteTweetApi(idTweet) {
    const tweets = getTweetsApi();

    remove(tweets, function(tweet) {
        return tweet.id === idTweet
    });

    localStorage.setItem(TWEETS, JSON.stringify(tweets));
}

export function getTweetApi(idTweet) {
    const tweets = getTweetsApi();
    return tweets.find(tweet => tweet.id === idTweet);
}

export function updateTweetApi(idTweet, username, message) {
    const tweets = getTweetsApi();
    const index = tweets.findIndex(tweet => tweet.id === idTweet);
    tweets[index].username = username;
    tweets[index].message = message;
    localStorage.setItem(TWEETS, JSON.stringify(tweets));
    return true;
}