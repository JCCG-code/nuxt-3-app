<script setup lang="ts"></script>

<template>
  <div class="main-content">
    <div class="welcome-text-container">
      <h1>
        T-Children
        <p>The application</p>
      </h1>
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.welcome-text-container {
  padding: 50px 0;
  display: flex;
  justify-content: center;

  h1 {
    font-family: $robotoMono;
    font-weight: bold;
    font-size: 80px;
    line-height: 60px;
    text-shadow: 0px 0px 50px #ffffff;

    width: fit-content;

    p {
      font-size: 20px;
      text-align: right;
    }
  }
}
</style>
