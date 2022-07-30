<template>
<div class="menuContents inner">
    <div class="menuContents-catchText">
        <p>あやおり子の連絡帳にアクセスしていただき、<br>誠にありがとうございます。</p>
    </div>
    <div class="mainTitle">
        <h2 class="title">ご連絡先</h2>
        <span class="sub">appointment</span>
    </div>
    <div class="menuContents-menuBlock">
        <ul class="menuList">
            <li v-for="item in list" :key="item.id" :id="item.id" class="menuList-item" @click="menuClickButton(item.id)">
                <figure :class="`img-${item.id}`">
                    <template v-if="item.id === 'line'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="31.5" viewBox="0 0 31.5 31.5">
                        <path id="Icon_awesome-line" data-name="Icon awesome-line" d="M19.132,14.358v5a.222.222,0,0,1-.225.225h-.8a.233.233,0,0,1-.183-.091L15.63,16.4v2.967a.222.222,0,0,1-.225.225h-.8a.222.222,0,0,1-.225-.225v-5a.222.222,0,0,1,.225-.225H15.4a.212.212,0,0,1,.183.1l2.292,3.094V14.365a.222.222,0,0,1,.225-.225h.8a.222.222,0,0,1,.232.218Zm-5.766-.225h-.8a.222.222,0,0,0-.225.225v5a.222.222,0,0,0,.225.225h.8a.222.222,0,0,0,.225-.225v-5a.227.227,0,0,0-.225-.225Zm-1.934,4.191H9.246V14.358a.222.222,0,0,0-.225-.225h-.8a.222.222,0,0,0-.225.225v5a.207.207,0,0,0,.063.155.237.237,0,0,0,.155.063h3.213a.222.222,0,0,0,.225-.225v-.8a.225.225,0,0,0-.218-.225Zm11.918-4.191H20.137a.227.227,0,0,0-.225.225v5a.227.227,0,0,0,.225.225h3.213a.222.222,0,0,0,.225-.225v-.8a.222.222,0,0,0-.225-.225H21.164v-.844h2.187a.222.222,0,0,0,.225-.225v-.809a.222.222,0,0,0-.225-.225H21.164v-.844h2.187a.222.222,0,0,0,.225-.225v-.8a.236.236,0,0,0-.225-.225ZM31.5,7.995v20.06a5.727,5.727,0,0,1-5.745,5.7H5.7A5.732,5.732,0,0,1,0,28.005V7.945a5.732,5.732,0,0,1,5.745-5.7H25.8A5.727,5.727,0,0,1,31.5,7.995Zm-4.331,8.62c0-5.133-5.147-9.309-11.468-9.309S4.233,11.482,4.233,16.615c0,4.6,4.078,8.452,9.591,9.183,1.343.288,1.188.78.886,2.587-.049.288-.232,1.132.991.619a37.061,37.061,0,0,0,9.014-6.659A8.307,8.307,0,0,0,27.169,16.615Z" transform="translate(0 -2.25)" fill="#fff"/>
                        </svg>
                    </template>
                    <template v-else-if="item.id === 'tel'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37.211" height="41.822" viewBox="0 0 37.211 41.822">
                        <path id="Icon_map-volume-control-telephone" data-name="Icon map-volume-control-telephone" d="M12.24,15.12h1.931c.579,0,.949-.851.949-1.426V7.615c0-.575-.37-.415-.949-.415H12.24Zm0,11.52h1.931c.579,0,.949.668.949,1.244v6.078c0,.572-.37,1.318-.949,1.318H12.24ZM9.691,20.88c-.017-5.556,1.028-5.76,1.624-5.76h.205V7.2h-.246C10.213,7.2,5.04,8.943,5.04,21.239S10.213,35.28,11.274,35.28h.246V26.64h-.205C10.719,26.64,9.707,26.433,9.691,20.88ZM16.7,8.913a2.353,2.353,0,0,1,0,2.994l1.15.946a3.853,3.853,0,0,0,0-4.887l-1.15.947Zm3.7,6.67A7.439,7.439,0,0,0,20.406,5.55l-1.118.975a5.951,5.951,0,0,1-.017,8.083l1.127.975Zm2.544,2.73a11.057,11.057,0,0,0,.025-15.177l-1.1,1a9.586,9.586,0,0,1-.017,13.17Zm2.555,2.73A14.7,14.7,0,0,0,25.52.72L24.445,1.748a13.2,13.2,0,0,1-.024,18.261L25.5,21.043Z" transform="matrix(0.899, -0.438, 0.438, 0.899, -4.846, 12.322)" fill="#fff"/>
                        </svg>
                    </template>
                    <template v-else-if="item.id === 'mail'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34.178" height="27" viewBox="0 0 34.178 27">
                        <g id="Icon_feather-mail" data-name="Icon feather-mail" transform="translate(-0.911 -4.5)">
                            <path id="パス_8" data-name="パス 8" d="M6,6H30a3.009,3.009,0,0,1,3,3V27a3.009,3.009,0,0,1-3,3H6a3.009,3.009,0,0,1-3-3V9A3.009,3.009,0,0,1,6,6Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            <path id="パス_9" data-name="パス 9" d="M33,9,18,19.5,3,9" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                        </g>
                        </svg>
                    </template>
                    <template v-if="item.id === 'tw'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="29.239" viewBox="0 0 36 29.239">
                            <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z" transform="translate(0 -3.381)" fill="#fff"/>
                        </svg>
                    </template>
                </figure>
                <p class="menuList-text">{{item.title}}</p>
            </li>
        </ul>
    </div>
    <div class="menuContents-banarBlock">
        <a href="https://ayaoriko.com/portfolio/2022_sample/" class="banar" target="_blank">
            <img src="@/assets/img/banar01.png" alt="">
        </a>
        <div href="" class="banar" @click="menuClickButton('form')">
            <img src="@/assets/img/banar02.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'DefaultFooter',
  props: {
    msg: String,
  },
  data: function() {
    return {
      list:  items,
      count: 0,
      seturl : ''
    }
  },
  methods: {
        menuClickButton(data) {
            this.$emit("onClick", data)
        }
  },
  computed: {
    setImage: function () {
        let seturl = this.list[this.count].icon
        return seturl
    },
  },
}

const items = [
  { id: 'line', title: 'LINE'},
  { id: 'tel', title: '電話番号'},
  { id: 'mail', title: 'Mail' },
  { id: 'tw', title: 'Twitter'},
];
</script>