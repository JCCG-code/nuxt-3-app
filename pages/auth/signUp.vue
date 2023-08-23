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
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
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
        <!-- Full name -->
        <div class="form-group">
          <label for="email">Full name:</label>
          <input
            type="text"
            v-model="form.data.fullName"
            placeholder="Joshep Andrew Clinton"
          />
        </div>
        <!-- Email -->
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            v-model="form.data.email"
            placeholder="example@example.com"
          />
        </div>
        <div class="form-group">
          <label for="password"> Password:</label>
          <input type="password" v-model="form.data.password" />
        </div>
        <div class="form-group">
          <label for="password"> Repeat password:</label>
          <input type="password" v-model="form.data.repeatPassword" />
        </div>
        <div class="form-group">
          <input
            class="submit-btn"
            type="submit"
            value="Sign Up"
            :disabled="form.pending"
          />
        </div>
      </form>
    </div>
    <div class="form-container custom-form container-bottom">
      <p>
        Already an account?
        <NuxtLink to="/auth/login">Login</NuxtLink>
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
