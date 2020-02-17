<template>
  <scroll-view class="container">
    <touchable-opacity class="contents" v-for="(content,index) in contents" :key="index">
      <view class="contents__meta">
        <text class="contents__meta-name">name</text>
        <text class="contents__meta-time">50分前</text>
      </view>
      <view class="contents__body">
        <text>texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</text>
      </view>
      <view class="contents__tag">
        <text>tag</text>
      </view>
    </touchable-opacity>
    <view v-if="true" :style="{flex: 1, justifyContent: 'center'}">
      <activity-indicator size="large" color="#0000ff" />
    </view>
    <text class="text-color-primary">{{ getMessage }}</text>
    <button v-bind:title="message" v-bind:on-press="handleBtnPress" />
    <text>{{text}}</text>
    <text-input
      :style="{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}"
      v-model="text"
    />
    <view>
      <image
        :style="{width: 50, height: 50}"
        :source="{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}"
      />
    </view>
  </scroll-view>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "メッセージ",
      text: "",
      contents: [{}]
    };
  },
  created() {
    axios("http://10.138.17.239:8080/api/contents").then(res => {
      this.contents.splice(this.contents.length, 0, ...res.data);
      console.log(res.data, this.contents.length);
    });
  },
  computed: {
    getMessage() {
      return this.message;
    }
  },
  methods: {
    handleBtnPress: function() {
      alert("Btn Press");
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
  padding: 0 10px;
}
</style>
