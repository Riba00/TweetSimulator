<template>
  <div class="tweet-form container" :class="{ open: showForm }">
    <Alert :open="showAlert" @close="showAlert = false" />
    <form @submit.prevent="sendTweet" class="mt-2">
      <input class="form-control" placeholder="You Name" v-model="username" />
      <textarea
        rows="3"
        class="form-control"
        placeholder="Write a tweet"
        v-model="tweet"
      ></textarea>
      <button type="submit" class="btn btn-primary">Send Tweet</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { saveTweetApi } from "../api/tweet";
import Alert from "./Alert.vue";

export default {
  components: {
    Alert,
  },
  props: {
    showForm: Boolean,
    reloadTweets: Function,
    openCloseForm: Function,
  },
  setup(props) {
    let username = ref("");
    let tweet = ref("");
    let showAlert = ref(false);

    const sendTweet = () => {
      if (!username.value || !tweet.value) {
        showAlert.value = true;
        return;
      }
      
      saveTweetApi(username.value, tweet.value);

      username.value = "";
      tweet.value = "";

      showAlert.value = false;

      props.reloadTweets();
      props.openCloseForm();
    };

    return {
      sendTweet,
      username,
      tweet,
      showAlert,
    };
  },
};
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0;
  overflow: hidden;

  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;

    input {
      margin-bottom: 10px;
    }

    button {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
