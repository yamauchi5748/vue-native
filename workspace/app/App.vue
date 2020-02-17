<template>
  <view class="container">
    <The-global-header />
    <The-contents />
  </view>
</template>

<script>
import axios from "axios";
import TheGlobalHeader from "./components/TheGlobalHeader";
import TheContents from "./components/TheContents";

export default {
  components: {
    TheGlobalHeader,
    TheContents
  }
};
</script>

<style>
.container {
  background-color: white;
  flex: 1;
}
.text-color-primary {
  color: orange;
  font-size: 30px;
  font-weight: bold;
}
</style>

