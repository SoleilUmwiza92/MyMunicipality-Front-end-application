<template>
  <div class="greetings">
    {{documentResults.data}}
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      documentResults: null,
    };
  },
  created() {
    this.getAllDocuments();
  },
  methods:{
    async getAllDocuments(){
      const docsUrl= 'http://localhost:8080/document';
      await axios.get(docsUrl).then(response => (this.documentResults=response));
      console.log(this.documentResults);
    }
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
