<template>
  <div id="contents" class="mainBody">
     <div>
        <img v-lazy="require(`@/img/icon/help.png`)" class="helpIcon" alt="" @click="toggleHelpPopup">
        <div v-if="showHelpPopup" class="overlay" @click="showHelpPopup = false"></div>
        <div v-if="showHelpPopup" class="popup" ref="popup">
          <div class="closeIconBox">
            <button class="closeButton" @click="closeHelpPopup">×</button>
          </div>
          <div class="helpTextBox">
            <div>データはお使いの端末のブラウザへ保存されます。</div>
            <div>基本的にはクラウドへ保存する必要はありませんが、ブラウザのキャッシュ削除や端末変更など別端末へのデータ移行時等はGoogleアカウントと連携し、クラウドへデータ保存してください。</div>
            <br>
            <div class="redText">
              ※右上アイコン押下後に表示される、
            </div>
            <div class="redText">
              「クラウドへデータ保存」、
              「クラウドからデータ取得」を押下するまでクラウドへの保存、取得は行われません。
            </div>
          </div>
        </div>
        <div v-if="isLoading" class="loginButton">
          <!-- ローディング中の表示（スピナーなど） -->
          <p>読み込み中...</p>
        </div>
        <div v-else-if="isLoggedIn">
          <img :src="userPhotoURL" alt="Googleアイコン" class="circular-icon loginButton" @click="togglePopup" ref="icon"/>
          <!-- オーバーレイ -->
          <div v-if="showPopup" class="overlay" @click="showPopup = false"></div>
          <div v-if="showPopup" class="popup" ref="popup">
            <div class="closeIconBox">
              <button class="closeButton" @click="closePopup">×</button>
            </div>
            <button class="getButton" @click="getCloudData">クラウドからデータ取得</button>
            <button class="saveButton" @click="saveCloudData">クラウドへデータ保存</button>
            <button class="logoutButton" @click="logout">ログアウト</button>
          </div>
        </div>
        <div v-else>
          <button @click="login" class="gsi-material-button loginButton">
            <div class="gsi-material-button-state"></div>
            <div class="gsi-material-button-content-wrapper">
              <div class="gsi-material-button-icon">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span class="gsi-material-button-contents">Sign in</span>
              <span style="display: none;">Sign in with Google</span>
            </div>
          </button>
        </div>
     </div>
     <div class="tab_box">
       <ul class="tab_list" v-bind:class="{'tab_listMobile': this.mobile === true,'tab_list': this.mobile === false}">
         <li v-on:click="change('A')" v-bind:class="{'activeHimitsu': isActive === 'A'}">ひみつのアイプリ</li>
         <li v-on:click="change('B')" v-bind:class="{'activeVerse': isActive === 'B'}">アイプリバース</li>
       </ul>
       <ul class="article">
         <li v-if="isActive === 'A'" class="tableMain himitsuMain">
           <div class="center">
             <label class="selectbox-2">
               <select v-model="selectedHimitsuVersion" class="inlineBlock dropBox">
                 <option v-bind:value="0">全弾</option>
                 <option v-bind:value="1">1弾</option>
                 <option v-bind:value="2">2弾</option>
                 <option v-bind:value="3">3弾</option>
                 <option v-bind:value="4">4弾</option>
               </select>
             </label>
             <select v-model="selectedHimitsuGet" class="inlineBlock dropBox">
               <option v-bind:value="0">すべて</option>
               <option v-bind:value="1">所持済み</option>
               <option v-bind:value="2">未所持</option>
             </select>
             <input type="text" class="textSize" placeholder="アイテム名で検索">
             <div>
               <div>
                 <ul id="dispHimitsuItemList">
                   <li>
                     メンテ中
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </li>
 
         <li v-else-if="isActive === 'B'" class="tableMain verseMain">
           <div class="center">
             <select v-model="selectedVerseVersion" class="inlineBlock dropBox versionDrop">
               <option v-bind:value="0">{{ verseVersionDropBoxLabel }}</option>
               <option v-bind:value="1">1弾</option>
               <option v-bind:value="2">2弾</option>
               <option v-bind:value="3">3弾</option>
               <option v-bind:value="4">4弾</option>
               <option value="SP">SP</option>
             </select>
             <select v-model="selectedVerseGet" class="inlineBlock dropBox">
               <option v-bind:value="0">{{ verseGetDropBoxLabel }}</option>
               <option v-bind:value="1">所持済み</option>
               <option v-bind:value="2">未所持</option>
             </select>
             <select v-model="selectedVerseRank" class="inlineBlock dropBox">
               <option v-bind:value="0">{{ verseRankDropBoxLabel }}</option>
               <option v-bind:value="4">★★★★</option>
               <option v-bind:value="3">★★★</option>
               <option v-bind:value="2">★★</option>
             </select>
             <select v-model="selectedVerseBrand" class="inlineBlock dropBox" v-bind:class="{'mobileSearchBox': this.mobile === true}">
               <option v-bind:value="0">{{ verseBrandDropBoxLabel }}</option>
               <option value="ph">ポッピンハート</option>
               <option value="mm">ミラクルムーン</option>
               <option value="fm">フラワーマーチ</option>
               <option value="sb">スカーレットバタフライ</option>
               <option value="r">ロゼッション</option>
               <option value="rc">レインボーキャンディ</option>
               <option value="bbb">ベアベアベア</option>
               <option value="lmm">ラブマイミュージック</option>
               <option value="cv">クリスタルバース</option>
               <option value="pc">プリティーコレクション</option>
               <option value="ps">プリズムストーン</option>
             </select>
             <input type="text" class="searchMargin textSize" v-bind:class="{'mobileSearchBox': this.mobile === true}" v-model="itemName" placeholder="アイテム名で検索">
             <div>
               <div>
                 <div v-show="(selectedVerseVersion === 1 || selectedVerseVersion === 0)
                   && (
                       selectedVerseRank === 0 || (
                           (selectedVerseRank === 4 && verseList1.filter(item => item.rank === 4).length > 0) ||
                           (selectedVerseRank === 3 && verseList1.filter(item => item.rank === 3).length > 0) ||
                           (selectedVerseRank === 2 && verseList1.filter(item => item.rank === 2).length > 0)
                       )
                   )&& verseList1.length > 0">
                   <div class="tableTitle">-1弾-</div>
                   <div>
                     <div v-show="(selectedVerseRank === 4 || selectedVerseRank === 0)">
                       <img v-if="verseList1.filter(item => item.rank === 4).length > 0" class="starClass" v-lazy="require(`@/img/icon/star4.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList1.filter(item => item.rank === 4)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                     <div v-show="(selectedVerseRank === 3 || selectedVerseRank === 0)">
                       <img v-if="verseList1.filter(item => item.rank === 3).length > 0" class="starClass starMargin" v-lazy="require(`@/img/icon/star3.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList1.filter(item => item.rank === 3)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                     <div v-show="(selectedVerseRank === 2 || selectedVerseRank === 0)">
                       <img v-if="verseList1.filter(item => item.rank === 2).length > 0" class="starClass starMargin" v-lazy="require(`@/img/icon/star2.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList1.filter(item => item.rank === 2)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div v-show="(selectedVerseVersion === 2 || selectedVerseVersion === 0)
                   && (
                       selectedVerseRank === 0 || (
                           (selectedVerseRank === 4 && verseList2.filter(item => item.rank === 4).length > 0) ||
                           (selectedVerseRank === 3 && verseList2.filter(item => item.rank === 3).length > 0) ||
                           (selectedVerseRank === 2 && verseList2.filter(item => item.rank === 2).length > 0)
                       )
                   )&& verseList2.length > 0">
                   <div class="tableTitle versionMargin">-2弾-</div>
                   <div>
                     <div v-show="(selectedVerseRank === 4 || selectedVerseRank === 0)">
                       <img v-if="verseList2.filter(item => item.rank === 4).length > 0" class="starClass" v-lazy="require(`@/img/icon/star4.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList2.filter(item => item.rank === 4)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                     <div v-show="(selectedVerseRank === 3 || selectedVerseRank === 0)">
                       <img v-if="verseList2.filter(item => item.rank === 3).length > 0" class="starClass starMargin" v-lazy="require(`@/img/icon/star3.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList2.filter(item => item.rank === 3)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                     <div v-show="(selectedVerseRank === 2 || selectedVerseRank === 0)">
                       <img v-if="verseList2.filter(item => item.rank === 2).length > 0" class="starClass starMargin" v-lazy="require(`@/img/icon/star2.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList2.filter(item => item.rank === 2)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div v-show="(selectedVerseVersion === 3 || selectedVerseVersion === 0)
                   && (
                       selectedVerseRank === 0 || (
                           (selectedVerseRank === 4 && verseList3.filter(item => item.rank === 4).length > 0) ||
                           (selectedVerseRank === 3 && verseList3.filter(item => item.rank === 3).length > 0) ||
                           (selectedVerseRank === 2 && verseList3.filter(item => item.rank === 2).length > 0)
                       )
                   )&& verseList3.length > 0">
                   <div class="tableTitle versionMargin">-3弾-</div>
                   <div>
                     <div v-show="(selectedVerseRank === 4 || selectedVerseRank === 0)">
                       <img v-if="verseList3.filter(item => item.rank === 4).length > 0" class="starClass" v-lazy="require(`@/img/icon/star4.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList3.filter(item => item.rank === 4)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                     <div v-show="(selectedVerseRank === 3 || selectedVerseRank === 0)">
                       <img v-if="verseList3.filter(item => item.rank === 3).length > 0" class="starClass starMargin" v-lazy="require(`@/img/icon/star3.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList3.filter(item => item.rank === 3)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                     <div v-show="(selectedVerseRank === 2 || selectedVerseRank === 0)">
                       <img v-if="verseList3.filter(item => item.rank === 2).length > 0" class="starClass starMargin" v-lazy="require(`@/img/icon/star2.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList3.filter(item => item.rank === 2)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
                 <div v-show="(selectedVerseVersion === 4 || selectedVerseVersion === 0) && verseList4.length > 0">
                   <div class="tableTitle versionMargin">-4弾-</div>
                   <div>
                     <div v-show="(selectedVerseRank === 4 || selectedVerseRank === 0)">
                       <img v-if="verseList4.filter(item => item.rank === 4).length > 0" class="starClass" v-lazy="require(`@/img/icon/star4.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList4.filter(item => item.rank === 4)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                     <div v-show="(selectedVerseRank === 3 || selectedVerseRank === 0)">
                       <img v-if="verseList4.filter(item => item.rank === 3).length > 0" class="starClass starMargin" v-lazy="require(`@/img/icon/star3.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList4.filter(item => item.rank === 3)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                     <div v-show="(selectedVerseRank === 2 || selectedVerseRank === 0)">
                       <img v-if="verseList4.filter(item => item.rank === 2).length > 0" class="starClass starMargin" v-lazy="require(`@/img/icon/star2.webp`)" alt="">
                       <ul id="dispHimitsuItemList">
                         <li v-for="(verseData) in verseList4.filter(item => item.rank === 2)" :key="verseData.value" class="itemLi">
                           <button class="tooltip1 itemButton" 
                             :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                             @click="toggleItem(verseData.value)">
                             <img v-bind:class="{'cardItemImgMobile': this.mobile === true, 'cardItemImg': this.mobile === false}" v-lazy="require(`@/img/verse/${verseData.src}`)" alt="">
                           </button>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </li>
       </ul>
     </div>
   </div>
   <button class="top_btn" v-show="buttonActive" @click="pageTop">
     <i class="fa-solid fa-angle-up"></i>
   </button>
 </template>
 
 <script>
 //import himitsuJson from '../../json/himitsuItem.JSON'
 import verseJson from '../../json/verseItem.JSON'
 //import Cookies from 'js-cookie';  // js-cookie のインポート
 import 'font-awesome/css/font-awesome.css';
 import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";
 import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
 import { auth } from '../firebaseConfig'; // Firebaseの初期化ファイルからインポート
 
 export default {
   name: "MainBody",
   data() {
     return {
       isActive: "A",
       selectedVerseVersion: 0,
       selectedVerseGet: 0,
       selectedVerseRank: 0,
       selectedVerseBrand: 0,
       itemName: "", // アイテム名の入力値
       iniVerseList: verseJson,
       verseList: verseJson,
       selectedItems: [],
       mobile: false,
       buttonActive: false,//ボタンを非表示にしておく
       scroll: 0,
       userPhotoURL: "",
       isLoggedIn: false, // ログイン状態を保持
       isLoading: true, // ローディング状態を保持
       showPopup: false, // ポップアップの表示状態を保持
       showHelpPopup: false, // ポップアップの表示状態を保持
       user: ""
     };
   },
   computed: {
     filteredVerseList() {
     let list = this.iniVerseList;
 
     // バージョンで絞り込み
     if (this.selectedVerseVersion !== 0) {
       list = list.filter(
         (item) => item.version === String(this.selectedVerseVersion)
       );
     }
 
     // 取得状況で絞り込み
     if (this.selectedVerseGet === 1) {
       // 所持済み
       list = list.filter((item) => this.selectedItems.includes(item.value));
     } else if (this.selectedVerseGet === 2) {
       // 未所持
       list = list.filter((item) => !this.selectedItems.includes(item.value));
     }
 
     // ブランドで絞り込み
     if (this.selectedVerseBrand !== 0) {
       //console.log(this.selectedVerseBrand);
       // selectedVerseBrandが"ph"などの場合、該当するbrandをフィルタリング
       list = list.filter((item) => item.brand === this.selectedVerseBrand);
     }
 
     // アイテム名で絞り込み（部分一致）
     if (this.itemName) {
       const nameLower = this.itemName.toLowerCase(); // 小文字で比較
       list = list.filter((item) =>
         item.name.toLowerCase().includes(nameLower)
       );
     }
 
     return list;
   },
   
     // 各弾ごとのリスト
     verseList1() {
       return this.filteredVerseList.filter((item) => item.version === "1");
     },
     verseList2() {
       return this.filteredVerseList.filter((item) => item.version === "2");
     },
     verseList3() {
       return this.filteredVerseList.filter((item) => item.version === "3");
     },
     verseList4() {
       return this.filteredVerseList.filter((item) => item.version === "4");
     },
 
     // バージョンのドロップボックス文字列を変化
     verseVersionDropBoxLabel() {
         return this.selectedVerseVersion === 0 ? 'バージョン' : 'すべて';
     },
     // 取得状況のドロップボックス文字列を変化
       verseGetDropBoxLabel() {
         return this.selectedVerseGet === 0 ? '取得状況' : 'すべて';
     },
     // ランクのドロップボックス文字列を変化
       verseRankDropBoxLabel() {
         return this.selectedVerseRank === 0 ? 'ランク' : 'すべて';
     },
     // ブランドのドロップボックス文字列を変化
     verseBrandDropBoxLabel() {
         return this.selectedVerseBrand === 0 ? 'ブランド' : 'すべて';
     },
   },
   methods: {
     change(num) {
       this.isActive = num;
     },
     toggleItem(name) {
       const itemIndex = this.selectedItems.indexOf(name);
       if (itemIndex === -1) {
         // 選択されていない場合は追加
         this.selectedItems.push(name);
       } else {
         // 選択されている場合は削除
         this.selectedItems.splice(itemIndex, 1);
       }
       // ローカルストレージに保存
       localStorage.setItem('selectedItems', JSON.stringify(this.selectedItems));
     },
     loadSelectedItems() {
       const savedItems = localStorage.getItem('selectedItems');
       if (savedItems) {
         // ローカルストレージから復元
         this.selectedItems = JSON.parse(savedItems);
       }
     },
     async getListCheck(kind, value) {
       //const holidays = [];
       const list = this.iniVerseList.concat();
       const slectItem = this.selectedItems.concat();
       //const inilist = this.iniVerseList.concat();
       if (kind === "verse") {
         if(value === 0) {
           this.verseList = list.concat();
         } else if (value === 1) {
           this.verseList = this.selectedItems.map(tabItem => list.find(item => item.value === tabItem));
         } else {
           this.verseList = list.filter(tabItem => !slectItem.includes(tabItem.value));
         }
       }
     },
     filterVerseListByRank(version, rank) {
       return this.iniVerseList.filter(item => {
         return item.version === String(version) && item.rank === rank;
       });
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
     pageTop() {
         window.scrollTo({
             top: 0,
             behavior: 'smooth'
         })
     },
     scrollWindow() {
         const top = 100 //topから100pxスクロールしたらボタン登場
         this.scroll = window.scrollY //垂直方向
         if (top <= this.scroll) {
             this.buttonActive = true
         } else {
             this.buttonActive = false
         }
     },
      async login() {
        const provider = new GoogleAuthProvider();
        //const auth = getAuth();
        try {
          // 永続性を設定
          await setPersistence(auth, browserLocalPersistence);
          const result = await signInWithPopup(auth, provider);
          this.user = result.user;

          // ユーザープロフィール情報の取得
          this.userPhotoURL = this.user.photoURL; // GoogleアイコンのURLを取得
 
          // ユーザーデータを取得
          await this.fetchUserData(this.user.uid);
 
          // ローカルストレージから選択されたアイテムを取得
          const storedItems = localStorage.getItem('selectedItems');
          if (storedItems) {
            this.selectedItems = JSON.parse(storedItems);
            //console.log("取得した選択されたアイテム:", this.selectedItems);
          }
        } catch (error) {
          console.error("ログインエラー:", error);
        }
      },
      checkUserState() {
        //const auth = getAuth();
        // ここでユーザーのログイン状態を監視することもできます
        onAuthStateChanged(auth, (user) => {
          this.isLoading = false; // 認証状態の確認が完了したらローディングを終了
          if (user) {
            this.isLoggedIn = true;
            this.userPhotoURL = user.photoURL; // GoogleアイコンのURL
            this.user = user; // ユーザー情報を保存
            //console.log("ユーザーがログインしています:", user.uid);
          } else {
            this.isLoggedIn = false;
            this.userPhotoURL = null; // アイコンをクリア
            this.user = {}; // ユーザー情報をクリア
            //console.log("ログインしていません。");
          }
        });
      },
 
     async fetchUserData(uid) {
       const db = getFirestore();
       const docRef = doc(db, "users", uid);
       const docSnap = await getDoc(docRef);
 
       if (docSnap.exists()) {
         // ユーザーデータが存在する場合
         //console.log("ユーザーデータ:", docSnap.data());
         
         // 既存の選択されたアイテムのみをローカルストレージに保存
         /*if (docSnap.data().selectedItems) {
           this.selectedItems = docSnap.data().selectedItems;
           localStorage.setItem("selectedItems", JSON.stringify(this.selectedItems));
         } else {
           console.log("選択されたアイテムが見つかりません。");
         }*/
       } else {
         // ユーザーデータが存在しない場合、新規作成
         //console.log("初めてのログインです。ユーザーデータを作成します。");
         const defaultData = { selectedItems: [] }; // デフォルトの選択されたアイテム
         await this.saveUserData(uid, defaultData);
         this.selectedItems = defaultData.selectedItems; // 初期化
         localStorage.setItem("selectedItems", JSON.stringify(this.selectedItems));
       }
      },
      togglePopup() {
        this.showPopup = !this.showPopup; // ポップアップの表示/非表示をトグル
      },
      toggleHelpPopup() {
        this.showHelpPopup = !this.showHelpPopup; // ポップアップの表示/非表示をトグル
      },
      handleClickOutside(event) {
        // ポップアップとアイコンの外側をクリックしたときにポップアップを閉じる
        const popup = this.$refs.popup;
        const icon = this.$refs.icon;
        if (this.showPopup && popup && !popup.contains(event.target) && icon && !icon.contains(event.target)) {
          this.closePopup();
        }
      },
      async logout() {
        //const auth = getAuth();
        // currentUserが存在する場合のみ処理を実行
        if (auth.currentUser) {       
          // サインアウト
          await signOut(auth);
          //localStorage.removeItem("selectedItems"); // 選択されたアイテムのローカルストレージも削除
          // 画面の状態をリセット
          //this.selectedItems = []; // もしくは初期化するアイテムの配列を設定
          this.closePopup(); // ポップアップを閉じる
        } else {
          //console.log("ログインしていないため、ログアウト処理をスキップします。");
        }
      },
 
      // ユーザーID情報を登録する
      async saveUserData(uid, data) {
        const db = getFirestore();
        const docRef = doc(db, "users", uid);
        await setDoc(docRef, data, { merge: true });
      },
      // 取得情報を登録する
      async saveSelectedItems(uid, selectedItems) {
        const db = getFirestore();
        const docRef = doc(db, "users", uid);
        await setDoc(docRef, { selectedItems: selectedItems }, { merge: true });
      },
      async getCloudData () {
        // 選択されたアイテムをFirestoreから取得
        // ユーザーデータを取得
        const db = getFirestore();
        const docRef = doc(db, "users", this.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.data().selectedItems) {
           this.selectedItems = docSnap.data().selectedItems;
           localStorage.setItem("selectedItems", JSON.stringify(this.selectedItems));
        }
        this.closePopup(); // ポップアップを閉じる
      },
      async saveCloudData () {
        // 選択されたアイテムをFirestoreに保存
        await this.saveSelectedItems(auth.currentUser.uid, this.selectedItems);
        this.closePopup(); // ポップアップを閉じる
      },
      closePopup () {
        this.showPopup = false; // ポップアップを閉じる
      },
      closeHelpPopup () {
        this.showHelpPopup = false; // ポップアップを閉じる
      }
    },
    mounted() {
      //Cookies.remove('selectedItems');
      // コンポーネントがマウントされたときにCookieからデータを読み込む
      this.loadSelectedItems();
      if (this.isMobile()) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
      window.addEventListener('scroll',this.scrollWindow)
      // コンポーネントがマウントされたときにログイン状態をチェック
      this.checkUserState();
      document.addEventListener('click', this.handleClickOutside); // 外部クリックをリスン
    },
    beforeUnmount() {
      document.removeEventListener('click', this.handleClickOutside); // コンポーネントが破棄される前にイベントリスナーを削除
    },
    created() {
    }
  };
</script>
 
 <style scoped>
 ul{
   margin: 0;
   padding: 0;
 }
 li{
   list-style: none;
 }
 .dropBox {
   padding: 5px;
   font-size: 15px;
   margin-right: 10px;
 }
 .textSize {
   height: 25px;
 }
 .tab_list {
   display: flex;
   align-items: flex-end;
   justify-content: center;
   min-height: 50px;
   padding: 0;
   margin: 0;
   font-size: 15px;
 }
 .tab_list li {
   list-style: none;
   width: 200px;
   padding: 8px 5px;
   text-align: center;
   margin-right: 6px;
   background-color: #cdcdcd;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   cursor: pointer;
   transition: all .3s;
 }
 .tab_listMobile li {
   list-style: none;
   width: 150px;
   padding: 8px 5px;
   text-align: center;
   margin-right: 6px;
   background-color: #cdcdcd;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   cursor: pointer;
   transition: all .3s;
 }
 .tab_list li:not(:first-child) {
   border-left: none;
 }
 .tab_list li.activeHimitsu
   {
   background-color: rgb(169 215 255);
   border-color: rgb(169 215 255);
   cursor: auto;
   padding: 12px 5px;
   color: #fff;
 }
 .tab_list li.activeVerse
   {
   background-color: rgb(255 198 240);
   border-color: rgb(255 198 240);
   cursor: auto;
   padding: 12px 5px;
   color: #fff;
 }
 .article{
   overflow: hidden;
   margin-top: -1px;
 }
 .article li {
   max-width: 1500px;
 }
 .mainBody {
   padding-top: 38px;
 }
 .tableMain {
   border-radius: 10px;
   margin: 0 auto;
   padding: 10px 10px;
 }
 .himitsuMain {
   background-color: rgb(169 215 255);
 }
 .verseMain {
   background-color: rgb(255 198 240);
 }
 .inlineBlock {
   display: inline-block;
 }
 .center {
   text-align: center;
 }
 .noClick {
   background-color: #ffffff;
   opacity: 0.5;
 }
 .tooltip1 {
   position: relative;
   cursor: pointer;
   display: inline-block;
 }
 .itemButton {
   width: auto;
   height: auto;
   border: 0;
   border-radius: 10px;
   margin-left: 5px;
   margin-right: 5px;
   margin-bottom: 5px;
   background-color: #fff;
   transition: opacity 0.3s;  /* スムーズな変化のためのトランジション */
   opacity: 1;  /* 通常状態では不透明 */
 }
 .isClicked {
   opacity: 0.5;  /* クリック時に半透明に */
 }
 .description1 {
   display: none;
   position: absolute;
   padding: 10px;
   font-size: 10px;
   line-height: 1.6em;
   color: #fff;
   border-radius: 5px;
   background: #000;
   width: 100px;
 }
 .cardItemImg {
   width: 75px;
   padding-top: 4px;
 }
 .cardItemImgMobile {
   width: 40px;
   padding-top: 4px;
 }
 .itemLi{
   display: inline;
 }
 .tableTitle {
   margin-top: 5px;
   background-color:antiquewhite;
   font-weight: bold;
 }
 .starClass {
   width: 200px;
 }
 .starMargin {
   margin-top: 10px;
 }
 .versionMargin {
   margin-top: 20px;
 }
 .versionDrop {
   width: 110px;
 }
 .top_btn {
   position: fixed;
   bottom: 30px;
   right: 30px;
   width: 40px;
   height: 40px;
   margin: 0 auto;
   background-color: #d9d9d9;
   border-radius: 50%;
   line-height: 40px;
  }
  .mobileSearchBox {
   margin-top: 5px;
   width: 160px;
  }
  .circular-icon {
    width: 40px;        /* アイコンの幅 */
    height: 40px;       /* アイコンの高さ */
    border-radius: 50%; /* 円形にするための設定 */
    object-fit: cover;  /* 画像のアスペクト比を維持しつつ、指定サイズに収める */
  }
  .popup {
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
    width: 300px;
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
  .loginButton {
    position: fixed;
    top: 2px;
    right: 2px;
    z-index: 1000;
  }
  .gsi-material-button {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-appearance: none;
    background-color: #131314;
    background-image: none;
    border: 1px solid #747775;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #e3e3e3;
    cursor: pointer;
    font-family: 'Roboto', arial, sans-serif;
    font-size: 14px;
    height: 40px;
    letter-spacing: 0.25px;
    outline: none;
    overflow: hidden;
    padding: 0 12px;
    text-align: center;
    -webkit-transition: background-color .218s, border-color .218s, box-shadow .218s;
    transition: background-color .218s, border-color .218s, box-shadow .218s;
    vertical-align: middle;
    white-space: nowrap;
    width: auto;
    max-width: 400px;
    min-width: min-content;
    border-color: #8e918f;
  }

  .gsi-material-button .gsi-material-button-icon {
    height: 20px;
    margin-right: 12px;
    min-width: 20px;
    width: 20px;
  }

  .gsi-material-button .gsi-material-button-content-wrapper {
    -webkit-align-items: center;
    align-items: center;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    height: 100%;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  .gsi-material-button .gsi-material-button-contents {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    font-family: 'Roboto', arial, sans-serif;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
  }

  .gsi-material-button .gsi-material-button-state {
    -webkit-transition: opacity .218s;
    transition: opacity .218s;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .gsi-material-button:disabled {
    cursor: default;
    background-color: #13131461;
    border-color: #8e918f1f;
  }

  .gsi-material-button:disabled .gsi-material-button-state {
    background-color: #e3e3e31f;
  }

  .gsi-material-button:disabled .gsi-material-button-contents {
    opacity: 38%;
  }

  .gsi-material-button:disabled .gsi-material-button-icon {
    opacity: 38%;
  }

  .gsi-material-button:not(:disabled):active .gsi-material-button-state, 
  .gsi-material-button:not(:disabled):focus .gsi-material-button-state {
    background-color: white;
    opacity: 12%;
  }

  .gsi-material-button:not(:disabled):hover {
    -webkit-box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .30), 0 1px 3px 1px rgba(60, 64, 67, .15);
  }

  .gsi-material-button:not(:disabled):hover .gsi-material-button-state {
    background-color: white;
    opacity: 8%;
  }
  .getButton {
    color: #fff;
    background-color: #00b13f;
    border-radius: 100vh;
    border-color: #00b13f;
    border-style: solid;
    /* クリックした際に枠線をnone消す */
    outline: none;
    /* 影を消す */
    box-shadow: none;
    padding: 5px 20px;
    width: 210px;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
  }
  .saveButton {
    color: #fff;
    background-color: #3191ff;
    border-radius: 100vh;
    border-color: #3191ff;
    border-style: solid;
    /* クリックした際に枠線をnone消す */
    outline: none;
    /* 影を消す */
    box-shadow: none;
    padding: 5px 20px;
    width: 210px;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
  }
  .logoutButton {
    color: #ff0000;
    background-color: #ffffff;
    border-radius: 100vh;
    border-color: #ff0000;
    border-style: solid;
    /* クリックした際に枠線をnone消す */
    outline: none;
    /* 影を消す */
    box-shadow: none;
    padding: 5px 20px;
    width: 210px;
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .buttonBox {
    text-align: center;
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
  button{
    font-family: "Zen Maru Gothic", serif;
    font-weight: 500;
    font-style: normal;
    font-size: 15px;
  }
  .helpIcon {
    position: fixed;
    z-index: 1000;
    right: 110px;
    top: 8px;
    width: 30px;
    cursor: pointer;
  }
  .helpTextBox {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 11px;
  }
  .redText {
    color: red; /* テキストを赤色にする */
  }
 </style>
 