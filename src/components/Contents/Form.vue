<template>
<div class="formContents inner">
    <div class="mainTitle">
        <h2 class="title">利用者アンケート</h2>
        <span class="sub">appointment</span>
    </div>
    <div  v-if="complete === 'NG' || complete === ''">
    <div class="menuContents-catchText">
        <p v-show="this.lineInfo.displayName">{{this.lineInfo.displayName}}さんこんにちは！</p>
        <p>あやおり子の連絡帳にアクセスしていただいた方に、アンケートを実施しています。</p>
        <p>アンケートを書いてくださった方には、あやおり子から直接お礼をさせていただきます。</p>
    </div>
    <div class="formWrap">
        <form action="">
            <dl class="formList">
                <dt class="formList_dt">
                    <span class="label _required">必須</span>
                    <span class="text">名前（ニックネーム可能）</span>
                </dt>
                <dd class="formList_dd">
                    <div class="formParts">
                        <input type="text" class="formParts_input" placeholder="なまえ" v-model="name">
                    </div>
                    <p class="formParts_err">{{errMsg.name}}</p>
                </dd>
                <dt class="formList_dt">
                    <span class="label _required">必須</span>
                    <span class="text">メールアドレス</span>
                </dt>
                <dd class="formList_dd">
                    <div class="formParts">
                        <input type="text" class="formParts_input" placeholder="a@bbb.com" v-model="mail">
                    </div>
                    <p class="formParts_err">{{errMsg.mail}}</p>
                </dd>
                <dt class="formList_dt">
                    <span class="label _required">必須</span>
                    <span class="text">性別</span>
                </dt>
                <dd class="formList_dd">
                    <div class="formParts">
                        <input type="radio" name="性別" id="sex_man" value="男" v-model="sex">
                        <label for="sex_man">男</label>
                        <input type="radio" name="性別" id="sex_woman" value="女" v-model="sex">
                        <label for="sex_woman">女</label>
                    </div>
                     <p class="formParts_err">{{errMsg.sex}}</p>
                </dd>
                <dt class="formList_dt">
                    <span class="label _optional">任意</span>
                    <span class="text">郵便番号※ハイフンありなしどちらでも可</span>
                </dt>
                <dd class="formList_dd">
                    <div class="formParts">
                        <input type="text" class="formParts_input" placeholder="xxx-xxxx" v-model="code">
                    </div>
                    <p class="formParts_err">{{errMsg.code}}</p>
                </dd>
                <dt class="formList_dt">
                    <span class="label _optional">任意</span>
                    <span class="text">住所1(県庁所在地・市町村)</span>
                </dt>
                <dd class="formList_dd">
                    <div class="formParts">
                        <input type="text" class="formParts_input" placeholder="" v-model="address1">
                    </div>
                    <p class="formParts_err">{{errMsg.address1}}</p>
                </dd>
                <dt class="formList_dt">
                    <span class="label _optional">任意</span>
                    <span class="text">住所2</span>
                </dt>
                <dd class="formList_dd">
                    <div class="formParts">
                        <input type="text" class="formParts_input" placeholder="" v-model="address2">
                    </div>
                    <p class="formParts_err">{{errMsg.address2}}</p>
                </dd>
            </dl>
            <div class="formList_btnWrap">
                <button type="button" class="normalBtn" @click="submitBtn">
                    送信する
                </button>
                <p v-if="complete === 'NG'" class="formParts_err">未入力の項目があります。</p>
            </div>
        </form>
    </div>
    </div>
    <transition>
    <div v-if="complete === 'OK'" class="formParts_true">
        <p>
        回答してくれてありがとうございます！！<br>
        <a href="#" @click="createJson">appointment.json</a>をダウンロードして、<br>あやおり子に渡してね！
        </p>
        <p v-show="isSendLine">{{isSendLine}}</p>
    </div>
    </transition>
</div>
</template>

<script scoped>
import _ from 'lodash'
import liff from '@line/liff'
export default {
  name: 'FormContents',
  props: {
    msg: String,
    lineInfo: String,
  },
  data: function() {
    return {
      name: '',
      mail: '',
      code: '',
      sex: '',
      address1: '',
      address2: '',
      complete: '',
      isSendLine: false,
        errMsg: {
            name: '',
            code: '',
            mail: '',
            sex: '',
        }
    }
  },
  watch: {
    name: _.debounce(function() {
        this.checkName()
    }, 500),
     mail: _.debounce(function() {
        this.checkMail()
    }, 1000),
    sex: _.debounce(function() {
        this.checkSex()
    }, 500),
    code: _.debounce(function() {
        this.getAddress()
    }, 500),
  },
   methods: {
     checkName(){
        if( this.name === ''){
            this.errMsg.name = '入力してください'
        }else{
            this.errMsg.name = ''
        }
    },
    checkMail(){
        if (!this.mail.match(/.+@.+\..+/)) {
            this.errMsg.mail = 'メールアドレスをご確認ください'
        }else{
            this.errMsg.mail = ''
        }
    },
    checkSex(){
        if( this.sex === ''){
            this.errMsg.sex = '選択してください'
        }else{
            this.errMsg.sex = ''
        }
    },
    getAddress() {
        this.axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode='+this.code)
        .then((response) => {
        this.address1 = response.data.results[0].address1 + response.data.results[0].address2+response.data.results[0].address3;
        this.errMsg.code = ''
        })
        .catch((e) => {
        console.log(e)
        this.errMsg.code = '郵便番号が見つかりませんでした。'
        });
    },
    sendLineMessage() {
        if(liff.isInClient()){
            liff.sendMessages([{
                type: "text",
                text: "名前：" + this.name+"\nメールアドレス："+ this.mail+"\n性別："+ this.sex+"\n住所："+this.code+"\n"+this.address1+this.address2,
            },])
              .then(() => {
                this.isSendLine = "LINEからアクセスしてくれた人には、公式LINEから入力した内容が送られます。";
            })
            .catch((err) => {
                this.isSendLine = "公式LINEからメッセージが送れませんでした。エラー内容："+err;
            });
        }
    },
    submitBtn() {
        this.checkName();
        this.checkMail();
        this.checkSex();
        if(this.errMsg.name != '' || this.errMsg.mail != ''  || this.errMsg.sex != ''){
            this.complete = 'NG';
        }else{
            this.complete = 'OK';
            this.sendLineMessage()
        }
    },
    createJson() {
        let complexData = {
            name: this.name,
            mail: this.mail,
            sex: this.sex,
            code: this.code,
            address1: this.address1,
            address2: this.address2,
            lineUseeId:  this.lineInfo.userId,
            linedisplayName:  this.lineInfo.displayName,
            linePictureUrl:  this.lineInfo.pictureUrl
        }
        console.log(complexData)
        const json = JSON.stringify(complexData, null, '  ');
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'appointment.json';
        link.click();
        URL.revokeObjectURL(url);
        return false
      }
    }
}
</script>