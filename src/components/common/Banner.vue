<script>
export default {
  name: "Banner-Main",
};
</script>
<template>
  <div class="cofe-bar cofe-black cofe-hide-small">
    <a
      href="https://www.facebook.com/groups/172663070820628/"
      class="cofe-bar-item cofe-button"
    >
      <i class="fa fa-facebook-official"></i>
    </a>
    <a
      href="https://www.instagram.com/melonman2000/"
      class="cofe-bar-item cofe-button"
    >
      <i class="fa fa-instagram"></i>
    </a>
  </div>
</template>
<style scoped>
.cofe-black,
.cofe-hover-black:hover {
  color: #fff !important;
  background-color: #000 !important;
}

.cofe-bar {
  width: 100%;
  overflow: hidden;
}
.cofe-bar .cofe-bar-item {
  padding: 2px 0 2px 6px;
  float: left;
  width: auto;
  border: none;
  display: block;
  outline: 0;
}
.cofe-btn,
.cofe-button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.cofe-btn,
.cofe-button {
  border: none;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
}
</style>
