<template>
    <div class="credentials-container row">
        <h1 class="col-12"> Login </h1>
        <form @submit.prevent="login">
            <div class="col-12 my-3 text-left">
                <label for="email">E-mail</label>
                <input id="email" v-model="email" type="email" required />
            </div>
            <div class="col-12 my-3 text-left">
                <label for="password">password</label>
                <input id="password" v-model="password" type="password" required />
            </div>
            <button type="submit" class="col-12">Login</button>
        </form>
        <div class="col-12 my-3 text-left">
            <p>
                No account yet?
                <button @click="goToRegister" class="small-button">Register</button>
            </p>
        </div>
    </div>
  </template>
  
<script src="./Login.js"></script>
<style src="./Login.scss" lang="scss" scoped></style>

  