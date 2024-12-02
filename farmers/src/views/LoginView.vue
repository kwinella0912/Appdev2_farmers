<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Log In</h2>
      <input type="text" placeholder="Enter your email" v-model="email" />
      <input type="password" placeholder="Enter your password" v-model="password" />
      <button type="button" @click="login">Log In</button>
      <p>Or register to access more features</p>
      <button type="button" @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("meow", response.data.token);
            localStorage.setItem("user_id", response.data.user.id); // ID of the logged-in user
            this.$router.push("/main");
          } else {
            alert("Invalid Username and Password");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    register() {
      this.$router.push("/registration");
    },
  },
};
</script>

<style scoped>
/* Background image styling with network URL */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://wallpaperaccess.com/full/1164209.jpg"); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Card styling */
.login-card {
  width: 400px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 32px;
}

.login-card h2 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #4caf50;
}

.login-card input {
  width: 100%;
  padding: 12px;
  margin: 16px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.login-card button {
  width: 100%;
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.login-card button:hover {
  background-color: #43a047;
}

.login-card p {
  margin: 16px 0;
  font-size: 14px;
  color: #757575;
}
</style>
