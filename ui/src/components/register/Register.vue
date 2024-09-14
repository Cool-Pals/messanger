<template>
  <div class="credentials-container row">
    <h1 class="col-12">Register</h1>
    <form @submit.prevent="register">
      <div class="col-12 my-3 text-left">
        <label for="email">email</label>
        <input id="email" v-model="email" type="email" required />
      </div>
      <div class="col-12 my-3 text-left">
        <label for="password">password</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button type="submit" class="col-12 my-3">Register</button>
    </form>
    <div class="col-12 my-3 text-left">
      <p>
        Already have an account?
        <button @click="goToLogin" class="small-button">Login</button>
      </p>
    </div>
  </div>
</template>
<script src="./Register.js"></script>
<style src="./Register.scss" lang="scss" scoped></style>