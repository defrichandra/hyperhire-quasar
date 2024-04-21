<template>
  <!-- Desktop -->
  <q-header v-if="isDesktop" class="absolute-top bg-transparent text-white container">
    <div class="q-mx-lg">
      <q-toolbar class="flex items-center justify-between toolbar">
        <img :src="imgHeader" />
        <div class="flex selectIcon">
          <q-select borderless v-model="selected" :options="options" dropdown-icon="expand_more">
            <template v-slot:selected>
              <div class="text-white">
                {{ selected ? selected : '채용' }}
              </div>
            </template>
          </q-select>
          <div class="cursor-pointer non-selectable q-pa-md">해외 개발자 활용 서비스</div>
        </div>
        <q-btn unelevated rounded color="white" text-color="primary" label="문의하기" />
      </q-toolbar>
    </div>
  </q-header>
  <!-- Desktop -->

  <!-- Mobile -->
  <q-header v-if="isMobile" class="absolute-top bg-transparent text-white container q-px-md">
    <q-toolbar class="flex items-center justify-between toolbar">
      <img :src="imgHeader" class="imgMobile" />
      <q-drawer show-if-above v-model="toogleDrawer" side="right" class="bg-white">
        <q-scroll-area class="fit">
          <div class="q-pa-lg text-color-1">
            <q-list class="listMenu">
              <template v-for="(menuItem, index) in menuList" :key="index">
                <q-item clickable active v-ripple>
                  <q-item-section :class="menuItem.class">
                    {{ menuItem.label }}
                  </q-item-section>
                </q-item>
              </template>
              <q-separator />
              <q-item clickable active v-ripple>
                <q-item-section class="cursor-pointer non-selectable text-menu-bold">
                  해외 개발자 활용 서비스
                </q-item-section>
              </q-item>
            </q-list>
            <q-btn unelevated rounded color="secondary" text-color="white" label="문의하기" class="full-width" />
          </div>
        </q-scroll-area>
      </q-drawer>
      <q-btn dense flat round icon="menu" @click="toogleDrawer = !toogleDrawer" />
    </q-toolbar>
  </q-header>
  <!-- Mobile -->
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from 'quasar'
import utils from '@/utils/CommonUtils.js'

const imgHeader = ref(utils.imgHeader)

const $q = useQuasar()

const isDesktop = ref($q.platform.is.desktop)

const isMobile = ref($q.platform.is.mobile)

const toogleDrawer = ref(false)

const selected = ref('')

const options = ref(['채용', '해외 개발자 원격 채용', '외국인 원격 채용 (비개발 직군)', '한국어 가능 외국인 채용'])

const menuList = ref([
  {
    label: "채용",
    class: "text-menu-bold"
  },
  {
    label: "해외 개발자 원격 채용",
    class: "text-menu q-pl-md"
  },
  {
    label: "외국인 원격 채용 (비개발 직군)",
    class: "text-menu q-pl-md"
  },
  {
    label: "한국어 가능 외국인 채용",
    class: "text-menu q-pl-md"
  },
]);
</script>

<style lang="scss" scoped>
.container {
  max-width: 1390px;
  margin: 0 auto;
}

.toolbar {
  gap: 36px;
  padding: 13px 0px;
}

.selectIcon {
  gap: 60px;
}

.imgMobile {
  width: 114px;
  height: 21px;
}

.listMenu {
  min-width: 100px;
  margin-bottom: 32px;
}

.text-menu-bold {
  font-family: var(--q-theme-font-family, "'Pretendard'");
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  color: #343741 !important;

}

.text-menu {
  font-family: var(--q-theme-font-family, "'Inter'");
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #343741 !important;
}
</style>