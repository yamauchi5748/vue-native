<template>
  <scroll-view class="container">
    <touchable-opacity class="contents" v-for="(content,index) in contents" :key="index">
      <view class="contents__meta">
        <text class="contents__meta-name">{{ content.user.id }}</text>
        <text class="contents__meta-time">{{ content.created_at }}</text>
      </view>
      <view class="contents__body">
        <text>{{ content.title }}</text>
      </view>
      <view class="contents__good">
        <text class="contents__good-text">{{ content.likes_count }} いいね</text>
      </view>
    </touchable-opacity>
    <view v-if="loading" :style="{flex: 1, justifyContent: 'center'}">
      <activity-indicator size="large" color="#0000ff" />
    </view>
  </scroll-view>
</template>

<script>
import axios from "axios";
import Store from "../store";

export default {
  data() {
    return {};
  },
  created() {
    axios("http://192.168.0.4:8080/api/contents").then(res => {
      res.data.forEach(content => {
        Store.dispatch("addContents", content);
      });
      Store.dispatch("changeLoading");
    });
  },
  computed: {
    contents: function() {
      return Store.getters.activeStatus == "デイリー"
        ? Store.getters.dailyContents
        : Store.getters.weeklyContents;
    },
    loading: function() {
      return Store.getters.loading;
    }
  }
};
</script>

<style>
.container {
  background-color: #ccc;
  height: 30px;
  overflow: scroll;
}
.text-color-primary {
  color: orange;
  font-size: 30px;
  font-weight: bold;
}

.contents {
  margin-top: 0.5px;
  padding: 10px;
  background-color: #fff;
}

.contents__meta {
  flex-direction: row;
  justify-content: space-between;
}

.contents__meta-name {
  color: #707070;
}

.contents__meta-time {
  color: #707070;
}

.contents__body {
  margin: 10px;
  margin-left: 0;
  margin-right: 0;
  padding: 0 10px;
}

.contents__good-text {
  color: deeppink;
}
</style>
