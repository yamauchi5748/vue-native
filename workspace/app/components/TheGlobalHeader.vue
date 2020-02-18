<template>
  <view>
    <view class="header">
      <text class="header__text">Qiita</text>
    </view>
    <view class="nav-container">
      <v-nav-btn
        :item="nav"
        v-on:change="changeHandler"
        v-for="(nav, index) of navigations"
        :key="index"
      />
    </view>
  </view>
</template>

<script>
import Store from "../store";
import VNavBtn from "./VNavBtn";

export default {
  components: {
    VNavBtn
  },
  computed: {
    navigations: function() {
      return Store.getters.navigations;
    }
  },
  methods: {
    changeHandler: function(nav) {
      Store.dispatch("changeNavigations", nav);
    }
  }
};
</script>

<style scoped>
.test {
  background-color: red;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: rgba(113, 219, 7, 0.986);
}

.header__text {
  margin-top: 20px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  background-color: #fff;
}
</style>
