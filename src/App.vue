<template>
  <!-- <img alt="Vue logo" src="./assets/img/logo.png"> -->
  <DefaultHeader msg="あやおり子の連絡帳"  @onClick="toTop"></DefaultHeader>
  <main class="mainContents">
      <MainContents v-if="isMenu"  @onClick="getClickData" />
    <transition>
      <FormContents v-if="!isMenu"/>
      </transition>
  </main>
    <DefaultFooter></DefaultFooter>
    <transition>
      <ModalContents v-if="isModal"  @onClick="toTop" :setData=selectedContents :isFriend=this.isFriendship></ModalContents>
    </transition>
</template>

<script>
import DefaultHeader from './components/Default/header.vue'
import MainContents from './components/Contents/Menu.vue'
import FormContents from './components/Contents/Form.vue'
import DefaultFooter from './components/Default/footer.vue'
import ModalContents from './components/Contents/Modal.vue'
import liff from '@line/liff'
export default {
  name: 'App',
  components: {
    DefaultHeader,
    MainContents,
    FormContents,
    DefaultFooter,
    ModalContents
  },
  data() {
    return {
        selectedContents: "menu",
        twitterURL: 'https://twitter.com/ayaoriko',
        liffId: "1657287384-Ko2w4vXv",
        profile : '',
        isMenu: true,
        isModal: false,
        isFriendship: false,
    };
  },
  mounted : function(){
    liff.init({ liffId:  this.liffId })
  },
  methods: {
    getClickData(value) {
        this.selectedContents = value;
        console.log(this.selectedContents)
        if(this.selectedContents === 'form'){
            this.isMenu = false
        }else{
          this.isModal = true
        }
    },
    modalClose(){
      this.isModal = false
      this.selectedContents = "menu"
    },
    toTop(){
      this.isModal = false
      this.isMenu = true
      this.selectedContents = "menu"
    },
    changeContents() {
      let selectedContents = this.selectedContents;
      switch (selectedContents) {
        case 'tw':
          window.open(this.twitterURL, '_blank')
          break;
        case 'tel':
          break;
        case 'mail':
          this.mailTo()
          break;
         case 'line':
          this.registerLine()
          break;
        default:
          break;
      }
      return selectedContents;
    },
    registerLine(){
        if (!liff.isLoggedIn()) {
          liff.login();
        }
        if(liff.isLoggedIn()){
          liff.getProfile()
          .then((profile) => {
            this.profile = profile;
            liff.getFriendship().then((data) => {
              if (data.friendFlag) {
                this.isFriendship = true;
              }
            });
          })
          .catch((err) => {
            console.log("error", err);
          });
        }
    },
    mailTo(){
        // メールに記載したい情報をhiddenタグから取得
        const bodyData = 'あやおり子へ';
        const address = '~@co.jp';
        const ccAddress = 'sub@co.jp';
        const subject = '件名';
        const body = bodyData; // 「'%0D%0A'」を入れて改行
        // 「'?cc='」部分でCC追加
        const mailURL = 'mailto:' + address + '?cc=' + ccAddress + '&subject=' + subject + '&body=' + body;
        window.open(mailURL, '_blank')
    },
  },
  watch: {
    selectedContents: function () {
      this.changeContents()
    },
  },
  computed:{
  }
}
</script>

<style lang="scss">
@use "./assets/css/reset.css";
@use  "assets/css/main.scss" as main;
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);
</style>
