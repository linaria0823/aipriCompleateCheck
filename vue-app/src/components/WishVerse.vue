<template>
    <div class="mainBox">
        <div v-if="localList.length <= 0" class="message">
            ほしい物が0件です
        </div>
        <div v-else>
            <div class="up">←優先度高</div>
            <draggable v-model="localList" group="people" item-key="id" tag="ul" @end="onDragEnd">
                <template #item="{element}">
                    <div class="drag-item">
                        <img v-bind:class="{'imgSizeMobile': this.mobile === true,'imgSize': this.mobile === false}" v-lazy="require(`@/img/verse/${element.src}`)" alt="">
                    </div>
                </template>
            </draggable>
            <div class="down">優先度低→</div>
        </div>
    </div>
</template>
    
  <script>
  import draggable from 'vuedraggable';

  export default {
    name: 'WishHimitsu',
    components: {
        draggable,
    },
    props: {
        itemList: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
    emits: ['update:itemList'],
    data() {
        return {
                localList: this.getSortedList(), // wishListの順番でlocalListを作成
                mobile: false,
        };
    },
    mounted() {
        if (this.isMobile()) {
            this.mobile = true;
        } else {
            this.mobile = false;
        }
    },
    computed: {
    },
    methods: {
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
        onDragEnd() {
            // ローカルストレージに保存
            localStorage.setItem('wishVerseItems', JSON.stringify(this.localList.map(item => item.value)));
            // 親のデータを更新
            this.$emit('update:itemList', JSON.stringify(this.localList.map(item => item.value)));
        },
        getSortedList() {
            const wishList = JSON.parse(localStorage.getItem('wishVerseItems')) || [];
            // wishListに基づいてitemListをソート
            return wishList.length > 0
                ? wishList.map(wishItem => {
                    return this.itemList.find(item => item.value === wishItem) || null;
                }).filter(item => item !== null) // nullを除外
                : []; // wishListが0件の場合、空の配列を返す
        }
    }
  }
  </script>

  <style>
    .mainBox {
        height: 90vh;
        overflow-y: auto;
        margin-top: 50px;
        margin-left: 10px;
        margin-right: 10px;
        text-align: center;
    }
    .drag-item {
        margin: 5px;
        cursor: grab;
        display: inline-flex;
    }
    .drag-item:active {
        cursor: grabbing;
    }
    .imgSize {
        width: 100px;
    }
    .imgSizeMobile {
        width: 60px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    .up {
        font-size: 18px;
        text-align: left;
    }
    .down {
        font-size: 18px;
        text-align: right;
    }
    .message {
        font-size: 20px;
    }
  </style>
