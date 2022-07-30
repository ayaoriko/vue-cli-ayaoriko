<template>
  <!-- <img alt="Vue logo" src="./assets/img/logo.png"> -->
  <DefaultHeader msg="あやおり子の連絡帳"></DefaultHeader>

  <main class="mainContents">
    <transition>
      <MainContents v-if="selectedContents === 'menu'"  @onClick="getClickData" />
      </transition>
    <transition>
      <FormContents v-if="selectedContents === 'form'"/>
      </transition>
  </main>

    <DefaultFooter></DefaultFooter>
</template>

<script>
import DefaultHeader from './components/Default/header.vue'
import MainContents from './components/Contents/Menu.vue'
import FormContents from './components/Contents/Form.vue'
import DefaultFooter from './components/Default/footer.vue'
// import liff from '@line/liff'
export default {
  name: 'App',
  components: {
    DefaultHeader,
    MainContents,
    FormContents,
    DefaultFooter
  },
  data() {
    return {
        selectedContents: "menu",
        twitterURL: 'https://twitter.com/ayaoriko',
        // liffId: "",
        profile : ''
    };
  },
  // mounted() {
  //   liff.init({
  //       liffId: this.liffId, // Use own liffId
  //     })
  //     .then(() => {
  //         liff.getProfile()
  //     })

  // },
  methods: {
      getClickData(value) {
          this.selectedContents = value;
          console.log(this.selectedContents)
      },
      // getProfile() {
      //   liff
      //   .getProfile()
      //   .then(
      //     profile => {
      //       this.profile = profile
      //       console.log(this.profile)
      //     })
      // }
  },
  watch: {
    selectedContents: function () {
      this.changeContents
    },
  },
  computed:{
    changeContents: function () {
      alert(this.selectedContents)
      // if(this.selectedContents === 'tw'){
      //   window.open(this.twitterURL, '_blank')
      // }
      return this.selectedContents;
    }
  }
}
</script>

<style lang="scss">
@use "./assets/css/reset.css";
@use  "assets/css/main.scss" as main;
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);
</style>
