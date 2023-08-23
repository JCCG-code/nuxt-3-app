<script setup lang="ts">
// Custom lyout defined to authentication pages
definePageMeta({
  layout: "auth",
});

/**
 *
 */
const form = reactive({
  data: {
    email: "",
    password: "",
  },
  error: "",
  pending: false,
});

/**
 *
 */
async function handleSubmit() {
  try {
    // Initialize error and pending variables
    form.error = "";
    form.pending = true;
    // Login an user
    console.log("Login an user");
    console.log(form.data.email);
    console.log(form.data.password);
  } catch (error: any) {
    console.error(error);
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <div class="main-container">
    <div class="form-container custom-form">
      <form method="post" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="form.data.email" />
        </div>
        <div class="form-group">
          <label class="password-form-group" for="password">
            <span>Password:</span>
            <a href="#">Forgot your password?</a>
          </label>
          <input type="password" v-model="form.data.password" />
        </div>
        <div class="form-group">
          <input
            class="submit-btn"
            type="submit"
            value="Login"
            :disabled="form.pending"
          />
        </div>
      </form>
    </div>
    <div class="form-container custom-form container-bottom">
      <p>
        New to T-Children?
        <NuxtLink to="/auth/signUp">Create an account</NuxtLink>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  max-width: 500px;
  margin: 0 auto;
}
.custom-form {
  padding: 20px;
  margin: 0 20px;
}
.password-form-group {
  display: flex;
  justify-content: space-between;
}
.submit-btn {
  background-color: $color-border;
  transition: $transition-speed;

  &:hover {
    background-color: #965276;
  }
}
.container-bottom {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
