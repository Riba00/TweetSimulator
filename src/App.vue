<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetForm :showForm="showForm" :openCloseForm="openCloseForm" :reloadTweets="reloadTweets" :fillInputs="fillInputs"/>
  <TweetList :tweets="tweets" :reloadTweets="reloadTweets" />
</template>

<script>
import Menu from "./components/Menu";
import TweetList from "./components/TweetList";
import TweetForm from "./components/TweetForm";
import useFormTweet from "./hooks/useFormTweet";
import { getTweetsApi } from './api/tweet';
import { ref } from "vue";

export default {
  name: "App",
  components: {
    Menu,
    TweetForm,
    TweetList
  },
  setup() {
    let tweets = ref(getTweetsApi().reverse());
    

    const reloadTweets = ()=> {
      tweets.value = getTweetsApi().reverse();
    }

    return {
      ...useFormTweet(),
      tweets,
      reloadTweets,
    };
  },
};
</script>

<style lang="scss"></style>
