<template>
  <view>
    <view class="header">
      <text class="header__text">Qiita</text>
    </view>
    <view class="nav-container">
      <v-nav-btn
        :item="nav"
        v-on:change="changeHandler"
        v-for="(nav, index) of nav_list"
        :key="index"
      />
    </view>
  </view>
</template>

<script>
import VNavBtn from "./VNavBtn";

export default {
  components: {
    VNavBtn
  },
  data() {
    return {
      nav_list: [
        { value: "デイリー", active: true },
        { value: "週間", active: false }
      ]
    };
  },
  methods: {
    changeHandler: function(item) {
      this.nav_list.forEach(nav => {
        // データリスト初期化
        this.$set(nav, "active", false);

        // データリストをリアクティブに変更するため
        if (item.value === nav.value) this.$set(nav, "active", true);
      });
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
