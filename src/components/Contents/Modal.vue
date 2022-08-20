<template>
<div class="modal_wrap">
    <div class="modal_bg" @click="closeBtn"></div>
    <section id="telModal" class="inner modal">
        <div class="menuContents-modal" v-if="setData === 'tel'">
            <h2 class="subTitle">電話番号</h2>
            <div class="modal_detail tel">
                <p>090-XXXX-XXXX</p>
            </div>
            <div class="modal_btnWrap">
                <button href="" class="normalBtn _copy" @click="copyBtn">
                    コピーする
                </button>
                <p class="successText">{{copyTxt}}</p>
            </div>
        </div>
        <div class="menuContents-modal" v-else-if="setData === 'line'">
            <div class="modal_detail">
                <p v-if="isFriend">友だちになってくれてありがとう</p>
                <p v-else>友だちになってくれなきゃイヤンイヤン</p>
            </div>
            <div class="modal_btnWrap">
                <button  class="normalBtn" v-on:click=" logoutBtn">ログアウト</button>
            </div>
        </div>
        <div class="menuContents-modal" v-else>
            <p>別タブで開いています。</p>
        </div>
        <div class="modal_closeBtn" @click="closeBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                <g id="Icon_ionic-ios-close-circle-outline" data-name="Icon ionic-ios-close-circle-outline" transform="translate(-3.375 -3.375)">
                    <path id="パス_55" data-name="パス 55" d="M23.295,21.705,19.589,18l3.705-3.705a1.124,1.124,0,0,0-1.589-1.589L18,16.411l-3.705-3.705a1.124,1.124,0,0,0-1.589,1.589L16.411,18l-3.705,3.705a1.086,1.086,0,0,0,0,1.589,1.116,1.116,0,0,0,1.589,0L18,19.589l3.705,3.705a1.129,1.129,0,0,0,1.589,0A1.116,1.116,0,0,0,23.295,21.705Z" fill="#fd9158"/>
                    <path id="パス_56" data-name="パス 56" d="M18,5.344A12.651,12.651,0,1,1,9.049,9.049,12.573,12.573,0,0,1,18,5.344m0-1.969A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Z" fill="#fd9158"/>
                </g>
            </svg>
        </div>
    </section>
</div>
</template>



<script>
import liff from '@line/liff'
export default {
  name: 'ModalContents',
  props: {
    setData: String,
    isFriend: Boolean,
  },
  data() {
    return {
        copyTxt: ''
    }
  },
  methods: {
    closeBtn(){
        this.$emit("onClick", this.setData)
    },
    copyBtn(){
        try{
            navigator.clipboard.writeText('090-XXXX-XXXX※コピーされた文章です。')
            this.copyTxt = '成功しました！'
        }catch(e){
            this.copyTxt = '失敗しました'
        }
    },
    logoutBtn(){
      if (liff.isLoggedIn()) {
        liff.logout();
        alert("ログアウトしました")
      }else{
        alert("元からログインしていないんだよ")
      }
    }
  },
}
</script>