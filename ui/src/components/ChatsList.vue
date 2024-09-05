<template>
    <div class="chats-list">
      <h2>Chats</h2>
      <ul>
        <li v-for="chat in chats" :key="chat.id" @click="selectChat(chat)">
          {{ chat.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatsList',
    props: {
      chats: Array,
      onSelectChat: Function
    },
    methods: {
      selectChat(chat) {
        this.onSelectChat(chat);
      }
    }
  };
  </script>
  
  <style scoped>
  .chats-list {
    width: 200px;
    border-right: 1px solid #ccc;
  }
  .chats-list ul {
    list-style-type: none;
    padding: 0;
  }
  .chats-list li {
    padding: 10px;
    cursor: pointer;
  }
  .chats-list li:hover {
    background-color: #f0f0f0;
  }
  </style>