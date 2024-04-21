<template>
  <!-- <q-footer elevated class="bg-white text-black"> -->
  <div class="q-pa-md q-gutter-y-sm footer">
    <!-- Desktop -->
    <q-toolbar class="flex">
      <div class="col container">
        <!-- Top -->
        <div :class="isDesktop || rotate ? 'row q-pt-xl content' : 'row q-pt-xl'">
          <div :class="isDesktop || rotate ? 'col-4' : 'col'">
            <img alt="Hyperhire Logo" :src="imgLogo" style="width: 187px; height: 34px;">
            <div :class="isDesktop ? 'text-weight-bolder text-color-1' : 'text-weight-bolder text-color-1 q-pt-sm'"> 우리는
              국가의 장벽을 넘어 최고의 인재를 매칭해드립니다. </div>
            <div :class="isDesktop ? 'text-color-1 text-weight-bolder' : 'text-color-1 text-weight-bolder q-pt-md'">
              <div>010-0000-0000</div>
              <div>aaaaa@naver.com</div>
            </div>
          </div>

          <div :class="isDesktop || rotate ? 'col-8' : ''">
            <div class="row">
              <div :class="isDesktop || rotate ? 'col' : 'col-6 q-pr-md q-pt-md'" v-for="(item, index) in cardContent"
                :key="index">
                <q-card :class="isDesktop || rotate ? 'card q-pr-lg' : 'card-mobile q-pr-lg'" flat bordered>
                  <q-card-section class="q-pt-sm chip-icon">
                    <q-chip square :icon="item.icon" class="chip-style" text-color="chip-icon" />
                    <div class="text-color-1 q-pt-sm">{{ item.label }}</div>
                    <div class="text-color-f q-py-md flex items-center"> 바로가기
                      <q-icon name="exit_to_app" class="q-px-md" />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </div>
        <!-- Top -->

        <!-- Center -->
        <div class="grid grid-cols-12" style="gap: 14px;">
          <div :class="isDesktop || rotate ? 'row q-pt-xl' : ''">
            <div :class="isDesktop || rotate ? 'row col-md-4' : 'row col-md-6 q-pt-xl q-pl-md'" style="gap: 16px;">
              <div class="col" style="gap:8px;">
                <div class="text-color-1" style="font-size:12px;">상호명</div>
                <div class="col" style="gap:4px;">
                  <div class="text-color-f" style="font-size:13px;"> 하이퍼하이어 </div>
                  <div class="text-color-1 text-weight-bold" style="font-size:13px;"> Hyperhire India Private Limited
                  </div>
                </div>
              </div>
              <div class="col" style="gap:8px;">
                <div class="text-color-1 text-weight-bolder" style="font-size:12px;">대표 CEO</div>
                <div class="col" style="gap:4px;">
                  <div class="text-color-f" style="font-size:13px;">김주현</div>
                  <div class="text-color-1 text-weight-bold" style="font-size:13px;">Juhyun Kim</div>
                </div>
              </div>
            </div>

            <div :class="isDesktop || rotate ? 'col col-md-2' : 'col col-md-2 q-pt-xl q-pl-md'" style="gap:8px;">
              <div class="text-color-1 " style="font-size:12px;"> 사업자등록번호 <span class="text-weight-bolder">
                  CIN</span>
              </div>
              <div class="col" style="gap:4px;">
                <div class="text-color-1 text-weight-bolder" style="font-size:13px;">427-86-01187</div>
                <div class="text-color-1 text-weight-bold" style="font-size:13px;"> U74110DL2016PTC290812 </div>
              </div>
            </div>

            <div :class="isDesktop || rotate ? 'col col-md-6' : 'col col-md-6 q-pt-xl q-pl-md'" style="gap: 8px;">
              <div class="text-color-1 text-weight-bolder" style="font-size: 12px;">주소 ADDRESS</div>
              <div class="col" style="gap: 4px;">
                <div class="text-color-f" style="font-size: 13px;"> 서울특별시 강남대로
                  <span class="text-weight-bolder">479</span> , 지하
                  <span class="text-weight-bolder">1</span>층
                  <span class="text-weight-bolder">238</span>호
                </div>
                <div class="text-color-1 text-weight-bold" style="font-size: 13px;"> D-138, Street number 11, Jagjeet
                  Nagar, North East
                  Delhi, New Delhi, 110053 India </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Center -->

        <div
          :class="isDesktop ? 'text-color-f text-weight-bold q-py-xl' : 'text-color-f text-weight-bold q-py-xl q-pl-md'"
          style="font-size: 13px;"> ⓒ 2024 Hyperhire </div>
      </div>
    </q-toolbar>
    <!-- Desktop -->

  </div>
  <!-- </q-footer> -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/logo.png'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const isDesktop = ref($q.platform.is.desktop)

const isMobile = ref($q.platform.is.mobile)

const rotate = ref(false)

// Function to check if the device is in portrait orientation
function isPortrait() {
  return window.matchMedia("(orientation: portrait)").matches
}

// Update isMobile when the screen is resized
function handleResize() {
  isMobile.value && isPortrait() ? rotate.value = false : rotate.value = true
}

// Attach resize event listener
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

// Remove event listener when component is unmounted
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const imgLogo = ref(logo)

const cardContent = ref([
  {
    icon: "code",
    label: "해외 개발자 원격 채용"
  },
  {
    icon: "person",
    label: "외국인 원격 채용 (비개발)"
  },
  {
    icon: "flag",
    label: "한국어 가능 외국인 채용"
  },
  {
    icon: "settings",
    label: "해외 개발자 활용 서비스"
  },

])
</script>

<style lang="scss" scoped>
.footer {
  background-color: #fbfbfb;
}

.container {
  max-width: 1390px;
  margin: 0 auto;
  overflow-x: auto;
}

.content {
  width: 1390px;
}

.chip-style {
  background-color: rgb(239, 241, 246);
  color: var(--q-chip-icon, $chip-icon);
  border-radius: 8px;
  margin-left: 0;
}

.card {
  width: 210px;
  height: 130px;
  padding: 0.5em;
}

.card-mobile {
  width: 160px;
  height: 163px;
  padding: 0.5em;
  padding: 16px 0px 0px 0px;
  gap: 16px;
  opacity: 0px;
}

.text-color-1 {
  font-family: var(--q-theme-font-family, "'Poppins'");
  font-size: 14px !important;
  color: #343741;
}

.text-color-f {
  font-family: var(--q-theme-font-family, "'Poppins'");
  color: #5e626f !important;
  font-size: 12px !important;
}
</style>