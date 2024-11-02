<template>
  <footer class="head">
    <div class="link" @click="policyPopup">
      プライバシーポリシー
    </div>
    <div>
      -問い合わせ先-
    </div>
    <div>
      X:
      <a href="https://x.com/linaria_aipri" target="_blank" rel="noopener noreferrer">
        リナリア
      </a>
    </div>
    <div>
      メール:vivio823823@gmail.com
    </div>
    <div v-if="showPolicyPopup" class="overlay" @click="showPolicyPopup = false"></div>
    <div v-if="showPolicyPopup" v-bind:class="{'popupMobile': this.mobile === true,'popup': this.mobile === false}" ref="popup">
          <div class="closeIconBox">
            <button class="closeButton" @click="closePolicyPopup">×</button>
          </div>
          <div>
            <div class="policyTitle">
              プライバシーポリシー
            </div>
            <div class="marginBottom">
              最終更新日: 2024/10/21
            </div>

            <div>
             アイプリコンプチェック（以下「本アプリ」）は、ユーザーのプライバシーを尊重し、保護することを重要視しています。
              このプライバシーポリシーは、本アプリがどのようにユーザーの情報を収集、使用、保護するかについて説明します。
            </div>
            <div class="subTitle">
              1.収集する情報
            </div>
            本アプリは、Googleアカウントを使用してログインする際に、ユーザーのメールアドレスを取得します。この情報は、アカウントの管理やサービスの提供に利用されます。

            <div class="subTitle">
              2.情報の使用
            </div>
            収集したメールアドレスは、以下の目的で使用します。
            <br>
            ・ユーザーアカウントの作成および管理

            <div class="subTitle">
              3.情報の共有
            </div>
            本アプリは、ユーザーの個人情報を第三者と共有することはありません。ただし、法令に基づく要求や、権利の保護に必要な場合を除きます。

            <div class="subTitle">
              4.データの保護
            </div>
            本アプリは、ユーザーの情報を保護するために適切なセキュリティ対策を講じていますが、インターネット上のデータ伝送は完全に安全であるとは限りません。

            <div class="subTitle">
              5.プライバシーポリシーの変更
            </div>
            本ポリシーは随時変更されることがあります。変更があった場合、ウェブサイトにて通知します。
          </div>
        </div>
  </footer>
</template>
  
<script>
import { event } from 'vue-gtag'

export default {
  name: 'MainFooter',
  data() {
     return {
      showPolicyPopup: false, // ポップアップの表示状態を保持
      mobile: false,
     };
   },
  methods: {
    policyPopup() {
      this.showPolicyPopup = !this.showPolicyPopup; // ポップアップの表示/非表示をトグル
    },
    closePolicyPopup() {
      this.showPolicyPopup = false; // ポップアップを閉じる
      // gat
      event('ポリシークリック');
    },
    isMobile() {
      var userAgent = window.navigator.userAgent.toLowerCase()
      if (
        userAgent.indexOf("iphone") != -1 ||
        userAgent.indexOf("ipad") != -1 ||
        userAgent.indexOf("android") != -1 ||
        userAgent.indexOf("mobile") != -1
      ) {
        return true
      } else {
        return false
      }
    },
  },
  mounted() {
    if (this.isMobile()) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  text-align: center;
  margin-top: 30px;
  border-top: 2px solid rgb(0 55 255);
  padding-top: 20px;
  padding-bottom: 20px;
}
.link {
  color: #bdd8f9;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 5px;
}
.link:after {
  background-repeat: no-repeat;
  box-sizing: inherit;
  cursor: pointer;
  margin-bottom: 5px;
}
.popup {
  text-align: left;
  position: fixed; /* スクロールしても位置を固定 */
  top: 50%; /* 画面の中央に配置 */
  left: 50%; /* 画面の中央に配置 */
  transform: translate(-50%, -50%); /* ポップアップを中央に調整 */
  background-color: white; /* ポップアップの背景色 */
  border: 1px solid #ccc; /* ボーダー */
  padding: 10px; /* 内側の余白 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* シャドウ効果 */
  z-index: 1001; /* 他の要素の上に表示 */
  display: flex; /* フレックスボックスを使用 */
  flex-direction: column; /* 縦に並べる */
  align-items: center; /* 中央に揃える */
  width: 90%;
  max-width: 700px;
  text-align: left;
}
.popupMobile {
  position: fixed; /* スクロールしても位置を固定 */
  top: 50%; /* 画面の中央に配置 */
  left: 50%; /* 画面の中央に配置 */
  transform: translate(-50%, -50%); /* ポップアップを中央に調整 */
  background-color: white; /* ポップアップの背景色 */
  border: 1px solid #ccc; /* ボーダー */
  padding: 10px; /* 内側の余白 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* シャドウ効果 */
  z-index: 1001; /* 他の要素の上に表示 */
  display: flex; /* フレックスボックスを使用 */
  flex-direction: column; /* 縦に並べる */
  align-items: center; /* 中央に揃える */
  width: 90%;
  font-size: 11px;
  text-align: left;
}
.overlay {
  position: fixed; /* スクロールしても位置を固定 */
  top: 0; /* 上端に配置 */
  left: 0; /* 左端に配置 */
  width: 100%; /* 全幅 */
  height: 100%; /* 全高 */
  background-color: rgba(0, 0, 0, 0.5); /* 半透明の黒 */
  z-index: 1001; /* ポップアップの下に配置 */
}
.policyTitle {
  font-size: 20px;
  font-weight: bold;
}
.closeButton {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
}
.closeIconBox {
    height: 20px;
}
.subTitle {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}
.marginBottom {
  margin-top: 5px;
  margin-bottom: 5px;
}
button{
  font-family: "Zen Maru Gothic", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
  transition: background-color 0.3s, transform 0.2s;
}
button:active {
  background-color: #f0f0f0;
  transform: scale(0.95);
}
</style>
  