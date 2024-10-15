<template>
 <div id="contents" class="mainBody">
    <div class="tab_box">
      <ul class="tab_list">
        <li v-on:click="change('A')" v-bind:class="{'activeHimitsu': isActive === 'A'}">ひみつのアイプリ</li>
        <li v-on:click="change('B')" v-bind:class="{'activeVerse': isActive === 'B'}">アイプリバース</li>
      </ul>
      <ul class="article">
        <li v-if="isActive === 'A'" class="tableMain himitsuMain">
          <div class="center">
            <div class="inlineBlock">
              バージョン：
            </div>
            <select v-model="selectedHimitsuVersion" class="inlineBlock">
              <option v-bind:value="0">全弾</option>
              <option v-bind:value="1">1弾</option>
              <option v-bind:value="2">2弾</option>
              <option v-bind:value="3">3弾</option>
              <option v-bind:value="4">4弾</option>
            </select>
            <div class="inlineBlock searchMargin">
              取得状況：
            </div>
            <select v-model="selectedHimitsuGet" class="inlineBlock">
              <option v-bind:value="0">すべて</option>
              <option v-bind:value="1">所持済み</option>
              <option v-bind:value="2">未所持</option>
            </select>
            <div class="inlineBlock searchMargin">
              アイテム名：
            </div>
            <input type="text">
            <div>
              <div>
                <div>-1弾-</div>
                <ul id="dispHimitsuItemList">
                  <li>
                    <button class="noClick tooltip1 itemButton">
                      <div class="description1">カルテットスターバズリウムハート</div>
                      <img class="cardItemImg" src="https://github.com/linaria0823/aipriComp/blob/main/img/himitsu/AP4-001.png?raw=true">
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li v-else-if="isActive === 'B'" class="tableMain verseMain">
          <div class="center">
            <div class="inlineBlock">
              バージョン：
            </div>
            <select v-model="selectedVerseVersion" class="inlineBlock">
              <option v-bind:value="0">全弾</option>
              <option v-bind:value="1">1弾</option>
              <option v-bind:value="2">2弾</option>
              <option v-bind:value="3">3弾</option>
              <option v-bind:value="4">4弾</option>
            </select>
            <div class="inlineBlock searchMargin">
              取得状況：
            </div>
            <select v-model="selectedVerseGet" class="inlineBlock">
              <option v-bind:value="0">すべて</option>
              <option v-bind:value="1">所持済み</option>
              <option v-bind:value="2">未所持</option>
            </select>
            <div class="inlineBlock searchMargin">
              アイテム名：
            </div>
            <input type="text">

            <div>
              <div>
                <div v-show="(selectedVerseVersion === 1 || selectedVerseVersion === 0) && verseList1.length > 0">
                  <div class="tableTitle">-1弾-</div>
                  <ul id="dispHimitsuItemList">
                    <li v-for="(verseData) in verseList1" :key="verseData.value" class="itemLi">
                        <button class="tooltip1 itemButton" 
                          :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                          @click="toggleItem(verseData.value)">
                        <div class="description1">{{verseData.name}}</div>
                        <img class="cardItemImg" :src="verseData.src">
                      </button>
                    </li>
                  </ul>
                </div>
                <div v-show="(selectedVerseVersion === 2 || selectedVerseVersion === 0) && verseList2.length > 0">
                  <div class="tableTitle">-2弾-</div>
                  <ul id="dispHimitsuItemList">
                    <li v-for="(verseData) in verseList2" :key="verseData.value" class="itemLi">
                        <button class="tooltip1 itemButton" 
                          :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                          @click="toggleItem(verseData.value)">
                        <div class="description1">{{verseData.name}}</div>
                        <img class="cardItemImg" :src="verseData.src">
                      </button>
                    </li>
                  </ul>
                </div>
                <div v-show="(selectedVerseVersion === 3 || selectedVerseVersion === 0) && verseList3.length > 0">
                  <div class="tableTitle">-3弾-</div>
                  <ul id="dispHimitsuItemList">
                    <li v-for="(verseData) in verseList3" :key="verseData.value" class="itemLi">
                        <button class="tooltip1 itemButton" 
                          :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                          @click="toggleItem(verseData.value)">
                        <div class="description1">{{verseData.name}}</div>
                        <img class="cardItemImg" :src="verseData.src">
                      </button>
                    </li>
                  </ul>
                </div>
                <div v-show="(selectedVerseVersion === 4 || selectedVerseVersion === 0) && verseList4.length > 0">
                  <div class="tableTitle">-4弾-</div>
                  <ul id="dispHimitsuItemList">
                    <li v-for="(verseData) in verseList4" :key="verseData.value" class="itemLi">
                        <button class="tooltip1 itemButton" 
                          :class="{'isClicked': selectedItems.includes(verseData.value)}" 
                          @click="toggleItem(verseData.value)">
                        <div class="description1">{{verseData.name}}</div>
                        <img class="cardItemImg" :src="verseData.src">
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
</template>

<script>
import himitsuJson from '../../json/himitsuItem.JSON'
import verseJson from '../../json/verseItem.JSON'
import Cookies from 'js-cookie';  // js-cookie のインポート

export default {
  name: "MainBody",
  data() {
    return {
      isActive: "A",  // 初期値を'A'に変更
      selectedHimitsuVersion: 0,
      selectedVerseVersion: 0,
      selectedHimitsuGet: 0,
      selectedVerseGet: 0,
      //iniHimitsuList: himitsuJson,
      iniVerseList: verseJson,
      himitsuList: himitsuJson,
      verseList: verseJson,
      verseList1: [],
      verseList2: [],
      verseList3: [],
      verseList4: [],
      selectedItems: [],  // 選択されたボタンのインデックスを配列で管理
    };
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
      // 各弾のリストを更新
      this.updateList();
    },
    // 各弾のリストを更新
    updateList() {
      // 1弾のみのリストを作成
      this.verseList1 = this.verseList.filter(data => data.version === "1");
      // 2弾のみのリストを作成
      this.verseList2 = this.verseList.filter(data => data.version === "2");
      // 3弾のみのリストを作成
      this.verseList3 = this.verseList.filter(data => data.version === "3");
      // 4弾のみのリストを作成
      this.verseList4 = this.verseList.filter(data => data.version === "4");
    }
  },
  mounted() {
    //Cookies.remove('selectedItems');
    // 各弾のリストを更新
    this.updateList();
    // コンポーネントがマウントされたときにCookieからデータを読み込む
    this.loadSelectedItems();
  },
  // 変数の値を監視するイベントを定義
  watch: {
    selectedHimitsuVersion: function(newVal, oldVal) {
      // データの値が変化した時にコンソールに新しい値と古い値を出力
      console.log(newVal, oldVal)
    },
    selectedVerseVersion: function(newVal, oldVal) {
      // データの値が変化した時にコンソールに新しい値と古い値を出力
      console.log(newVal, oldVal)
    },
    selectedHimitsuGet: function(newVal, oldVal) {
      // データの値が変化した時にコンソールに新しい値と古い値を出力
      console.log(newVal, oldVal)
    },
    selectedVerseGet: function(newVal) {
      this.getListCheck("verse", newVal);
    }
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
  padding-top: 30px;
}
.tableMain {
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px 30px;
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
.searchMargin {
  margin-left: 20px;
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
.itemLi{
  display: inline;
}
.tableTitle {
  margin-top: 5px;
}
</style>