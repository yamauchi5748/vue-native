<template>
  <scroll-view class="container">
    <touchable-opacity class="contents" v-for="(content,index) in contents" :key="index">
      <view class="contents__meta">
        <view class="contents__meta-user">
          <image class="contents__meta-img" :source="{uri: content.user.profile_image_url}" />
          <text class="contents__meta-name">{{ content.user.name || content.user.id }}</text>
        </view>
        <text class="contents__meta-time">{{ dateFormat(content.created_at) }}</text>
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
import moment from "moment";
import Store from "../store";

export default {
  data() {
    return {};
  },
  created() {
    Store.dispatch("getContents");
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
  },
  methods: {
    dateFormat: function(time) {
      const fromDate = moment(time);
      const toDate = moment();
      const diff = toDate.diff(fromDate, "h");
      return diff < 24 ? `${diff}時間前` : `${toDate.diff(fromDate, "d")}日前`;
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

.contents__meta-user {
  flex-direction: row;
}

.contents__meta-img {
  width: 20px;
  height: 20px;
}

.contents__meta-name {
  margin-left: 5px;
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
