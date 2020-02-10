<template>
  <view class="container">
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
  </view>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      message: "チンぽこどっこいしょ",
      text: ""
    };
  },
  created() {
    this.message += "aa";
    axios("http://localhost:8080", res => {
      console.log(res);
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
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: orange;
  font-size: 30px;
  font-weight: bold;
}
</style>
