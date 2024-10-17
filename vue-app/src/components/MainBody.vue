<template>
 <div id="contents" class="mainBody">
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
                  )&& verseList1.length > 0">
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
                  )&& verseList1.length > 0">
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
                  <ul id="dispHimitsuItemList">
                    <li v-for="(verseData) in verseList4" :key="verseData.value" class="itemLi">
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
import Cookies from 'js-cookie';  // js-cookie のインポート
import 'font-awesome/css/font-awesome.css';

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
      scroll: 0
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
      console.log(this.selectedVerseBrand);
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
      // Cookieに保存
      Cookies.set('selectedItems', JSON.stringify(this.selectedItems), { expires: 365 });
    },
    loadSelectedItems() {
      const savedItems = Cookies.get('selectedItems');
      if (savedItems) {
        // Cookieから復元
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
  },
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
</style>
