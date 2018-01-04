<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address is: {{ email }}</p>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        email: ''
      }
    },
    created () {
      // A get request from firebase added onto users array
      // but before we push to users we take the db object id and
      // add it to each user array.
      // Finally we set the email value of the vue object
      // to the value of the first user in users.
      axios.get('/users.json')
        .then(res => {
          console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          this.email = users[0].email
        })
        .catch(error => console.log(error))
    }
  }
</script>
<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>