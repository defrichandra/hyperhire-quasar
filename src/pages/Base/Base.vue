<template>
  <q-page class="bg-gradient text-white page-base">
    <div :class="rotate ? 'container-desktop q-pl-md' : 'container q-pl-md'">
      <div :class="isDesktop || rotate ? 'row q-mx-lg content' : 'row q-mx-lg'">
        <!-- Left Side -->
        <div :class="isDesktop || rotate ? 'col-6 q-col-gutter-y-lg' : 'col-12 q-col-gutter-y-lg'">
          <q-intersection transition="slide-up" transition-duration="800" once :disable="!firstTransition">
            <div class="top-left">
              <div :class="isDesktop || rotate ? 'text-color-8 tooltip-left' : 'tooltip-left-mobile'">
                풀타임, 파트타임 </div>
              <img :src="isDesktop || rotate ? tooltipImg : tooltipImgMobile"
                :class="isDesktop || rotate ? 'tooltip-tail-left' : 'tooltip-tail-left-mobile'" />
            </div>
          </q-intersection>

          <q-intersection transition="slide-up" transition-duration="500">
            <div :class="isDesktop || rotate ? 'title-left q-pt-sm' : 'title-left-mobile q-pt-sm'"> 최고의 실력을 가진<br> 외국인
              인재를 찾고
              계신가요?
            </div>
            <div :class="isDesktop || rotate ? 'subtitle-left q-pt-sm' : 'subtitle-left-mobile q-pt-sm'"> 법률 및 인사관리
              부담없이<br> 1주일
              이내에
              원격으로 채용해보세요.
            </div>
            <div class="sub-subtitle-left q-pt-lg" v-show="isDesktop || rotate">개발자가 필요하신가요?</div>

            <div class="row q-py-lg" v-show="isDesktop || rotate">
              <div class="col-md-4 q-pt-xl q-pr-lg" v-for="index in 3" :key="index">
                <div class="column q-pt-sm items-left">
                  <div class="items-title-left">평균 월 <span class="text-weight-bolder">120</span>만원</div>
                  <div class="items-subtitle-left"> 임금을 해당 국가를 기준으로 계산합니다. </div>
                </div>
              </div>
            </div>
          </q-intersection>
        </div>
        <!-- Left Side -->

        <!-- Right Side -->
        <div :class="isDesktop || rotate ? 'col-6 q-col-gutter-y-lg' : 'col-12 q-col-gutter-y-lg q-pt-xl'">
          <div class="top-right">
            <q-intersection transition="slide-up" transition-duration="500" once>
              <div class="text-color-8 bg-white flex tooltip-right">
                <img :src="dollarImg" />
                월 100만원
              </div>
              <img :src="tooltipImg" class="tooltip-tail-right" />
            </q-intersection>
          </div>
          <swiper-container slides-per-view="3" initial-slide="1" slides-per-group="1" navigation="true"
            :centeredSlides="true" :effect="'coverflow'" :coverflowEffect="{
              rotate: 0,
              stretch: isDesktop || rotate ? 210 : 130,
              depth: 100,
              modifier: 1,
              slideShadows: isDesktop || rotate ? true : false,
            }" :style="isDesktop || rotate ? {
              '--swiper-navigation-color': '#FFFFFF',
            } : {
              '--swiper-navigation-color': '#fff',
              '--swiper-navigation-size': '25px'
            }" :breakpoints="{
              '640': {
                slidesPerView: 2,
                spaceBetween: 1,
              },
            }" :class="isMobile && !rotate ? 'swiper' : ''">
            <swiper-slide v-for="(item, index) in carousel" :key="index">
              <q-card :class="isDesktop || rotate ? 'card text-center' : 'card-mobile text-center'" bordered>
                <q-card-section avatar>
                  <q-avatar :size="isDesktop || rotate ? '100px' : '64px'">
                    <img :src="avatarImg">
                    <q-badge color="transparent" class="absolute-bottom-right">
                      <img :src="country" :class="isDesktop || rotate ? 'country-carousel' : 'country-carousel-mobile'">
                    </q-badge>
                  </q-avatar>
                </q-card-section>
                <q-card-section class="q-pt-none text-black">
                  <div :class="isDesktop || rotate ? 'text-weight-bolder text-h6' : 'text-weight-bolder'"> {{ item.name
                    }}
                  </div>
                  <div class="text-primary"> {{ item.label }} <b>· 2y+</b> </div>
                </q-card-section>

                <q-card-section class="q-pt-none text-color-f">
                  <div :class="isDesktop || rotate ? 'col q-pt-lg carousel' : 'col q-pt-lg carousel-mobile'">
                    <div class="row justify-center q-pb-sm" style="gap:4px;">
                      <div class="q-py-xs q-px-sm carousel-item"> 마케팅 콘텐츠 제작
                      </div>
                      <div class="q-py-xs q-px-sm carousel-item"> 인스타그램 관리 </div>
                    </div>

                    <div class="row justify-center" style="gap:4px;">
                      <div class="col q-py-xs q-px-sm carousel-item"> 트위터 관리 </div>
                      <div class="col q-py-xs q-px-sm carousel-item"> 블로그 글 작성 </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </swiper-slide>
          </swiper-container>
        </div>
        <!-- Right Side -->
      </div>

      <!-- Bottom Side -->
      <!-- Desktop -->
      <div v-if="isDesktop || rotate" class="col-md-2 q-col-gutter-y-lg q-pt-xl q-pl-lg">
        <div class="content">
          <swiper-container slides-per-view="5" slides-per-group="2" :autoplay="{
            delay: 5000,
            disableOnInteraction: false
          }">
            <swiper-slide v-for="(item, index) in slides" :key="index">
              <q-chip size="18px" outline class="slide-chip" color="white">
                <q-chip square :icon="item.icon" class="icon-chip text-white"></q-chip>
                <div class="q-pl-sm">
                  {{ item.label }}
                </div>
              </q-chip>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
      <!-- Desktop -->

      <!-- Mobile -->
      <div v-else class="bottom-mobile q-px-md q-pt-xl">
        <div class="row">
          <template v-for="(item, index) in listCheck" :key="index">
            <div :class="['col', index % 2 === 0 ? 'col-5 q-pl-md' : 'col-7 q-pl-md']">
              <div>
                <img :src="check" />
                {{ item.label }}
              </div>
            </div>
          </template>
        </div>
        <div class="subtitle-bottom q-pt-lg q-pl-md">개발자가 필요하신가요?</div>
      </div>
      <!-- Mobile -->
      <!-- Bottom Side -->
    </div>
  </q-page>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import avatar from '@/assets/avatar.png'
import utils from '@/utils/CommonUtils.js'
import dollar from '@/assets/dollar.svg'
import tooltip from '@/assets/tooltip.svg'
import tooltipMobile from '@/assets/tooltip-mobile.svg'
import { useQuasar } from 'quasar'
import checklist from '@/assets/checklist.svg'

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

const firstTransition = ref(false);

setTimeout(() => {
  firstTransition.value = true;
}, 500);

const avatarImg = ref(avatar)

const country = ref(utils.countryFlag)

const carousel = ref([
  { name: "Abhishek Gupta", label: "마케팅 ", },
  { name: "Abhishek Gupta", label: "마케팅 ", },
  { name: "Abhishek Gupta", label: "마케팅 ", },
])

const dollarImg = ref(dollar)

const tooltipImg = ref(tooltip)

const tooltipImgMobile = ref(tooltipMobile)

const slides = ref([
  { icon: "laptop_mac", label: "해외 마케팅", },
  { icon: "collections", label: "퍼블리셔", },
  { icon: "view_in_ar", label: "캐드원(제도사)", },
  { icon: "stars", label: "해외 세일즈", },
  { icon: "phone", label: "해외 CS", },
  { icon: "laptop_mac", label: "해외 마케팅", }
])

const check = ref(checklist)

const listCheck = ref([
  {
    label: "한국어 능력"
  },
  {
    label: "업무 수행 능력"
  },
  {
    label: "겸업 여부"
  },
  {
    label: "평판 조회"
  },
])
</script>

<style src="./Base.scss" lang="scss" scoped />