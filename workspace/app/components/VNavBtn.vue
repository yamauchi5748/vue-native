<template>
  <touchable-opacity :class="{'nav-btn':true ,'-active':item.active}" :on-press="onPressButton">
    <text :class="{'nav-btn__text':true, '-text-active':item.active}">{{ item.value }}</text>
  </touchable-opacity>
</template>

<script>
export default {
  props: {
    item: Object,
    change: Function
  },
  methods: {
    onPressButton: function() {
      this.$emit("change", this.item);
    }
  }
};
</script>

<style scoped>
.nav-btn {
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}

.nav-btn__text {
  color: #555;
}

.-active {
  background-color: #fff;
  color: black;
}

.-text-active {
  color: black;
  font-weight: bold;
}
</style>
