<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Enter your name" v-model="name" />
      <input type="text" placeholder="Enter your email" v-model="email" />
      <input type="password" placeholder="Enter your password" v-model="password" />
      <button type="button" @click="save">Sign Up</button>
      <button type="button" class="back-button" @click="goBack">Back</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    save() {
      axios
        .post("https://it-project.me/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push("/");
          } else {
            alert("Enter a valid email and password");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goBack() {
      this.$router.push("/"); // Redirect to the login page or another route
    },
  },
};
</script>

<style scoped>
/* Background image styling with a URL */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("https://wallpapercave.com/wp/wp2024276.jpg"); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Card styling */
.register-card {
  width: 400px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 32px;
}

.register-card h2 {
  font-size: 20px;
  margin-bottom: 16px;
  color: #4caf50;
}

.register-card input {
  width: 100%;
  padding: 12px;
  margin: 16px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.register-card button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.register-card button:hover {
  background-color: #43a047;
}

/* Back button styling */
.back-button {
  background-color: #f44336; /* Red color for the back button */
}

.back-button:hover {
  background-color: #d32f2f;
}
</style>
