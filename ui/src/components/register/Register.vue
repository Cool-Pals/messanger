<template>
    <div class="register-container">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <div>
          <label for="email">email</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <div>
          <label for="password">password</label>
          <input id="password" v-model="password" type="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
</template>
<script src="./Register.js"></script>
<style src="./Register.css" scoped></style>
