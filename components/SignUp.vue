<template>
  <section>

    <form autocomplete="off" @submit.stop.prevent="$emit('submit', formData)">
      <b-field label="Name">
        <b-input v-model="formData.name"></b-input>
      </b-field>

      <b-field label="Email" type="is-danger" message="This email is invalid">
        <b-input type="email" value="john@" maxlength="30" v-model="formData.email"></b-input>
      </b-field>

      <b-field label="Username" type="is-success" message="This username is available">
        <b-input value="johnsilver" maxlength="30" v-model="formData.username"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password" value="iwantmytreasure" password-reveal  v-model="formData.password"></b-input>
      </b-field>

      <div class="field">
        <b-checkbox  v-model="formData.acceptTerms">Accept</b-checkbox>
      </div>
      <button :disabled="loading" type="submit" class="button is-primary">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData :{
        name: "",
        email: "",
        username: "",
        password: "",
        acceptTerms: false
      },
    };
  },
  props: ['loading']
};
</script>