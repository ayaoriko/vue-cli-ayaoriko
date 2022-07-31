<template>
<div class="formContents inner">
    <div class="mainTitle">
        <h2 class="title">利用者アンケート</h2>
        <span class="sub">appointment</span>
    </div>
    <div class="menuContents-catchText">
        <p>あやおり子の連絡帳にアクセスしていただいた方に、アンケートを実施しています。</p>
        <p>アンケートを書いてくださった方から抽選で20名様に、あやおり子から直接お礼の連絡をさせていただきます。</p>
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
                    <span class="label _optional">任意</span>
                    <span class="text">性別</span>
                </dt>
                <dd class="formList_dd">
                    <div class="formParts">
                        <input type="radio" name="性別" id="sex_man" value="男" checked>
                        <label for="sex_man">男</label>
                        <input type="radio" name="性別" id="sex_woman" value="女">
                        <label for="sex_woman">女</label>
                    </div>
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
            </div>
        </form>
    </div>
</div>
</template>

<script scoped>
import _ from 'lodash'
export default {
  name: 'FormContents',
  props: {
    msg: String
  },
  data: function() {
    return {
      name: '',
      mail: '',
      code: '',
      prefectures: '', // 未使用
      address1: '',
      address2: '',
        errMsg: {
            name: '',
            code: ''
        }
    }
  },
  watch: {
    name: _.debounce(function() {
        if( this.name === ''){
            this.errMsg.name = '入力してください'
        }else if( this.code === ''){
            this.getIp()
        }else{
            this.errMsg.name = ''
        }
    }, 1000),
    code: _.debounce(function() {
        this.getAddress()
        console.log(this.serchcode)
    }, 500)
  },
   methods: {
    getAddress() {
        this.axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode='+this.code)
          .then((response) => {
            this.address1 = response.data.results[0].address1 + response.data.results[0].address2;
            this.errMsg.code = ''
          })
          .catch((e) => {
            console.log(e)
            this.errMsg.code = '郵便番号が見つかりませんでした。'
          });
      },
      submitBtn() {
        console.log("送信完了")
        return false
      }
    }
}
</script>