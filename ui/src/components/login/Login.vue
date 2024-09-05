<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div>
            <label for="email">email</label>
            <input id="email" v-model="email" type="email" required />
            </div>
            <div>
            <label for="password">password</label>
            <input id="password" v-model="password" type="password" required />
            </div>
            <button type="submit">Enter</button>
        </form>
        <div>
            <p>No account yet?</p>
            <button @click="goToRegister">Register</button>
        </div>
    </div>
  </template>
  
<script src="./Login.js"></script>
<style src="./Login.css" scoped></style>

  