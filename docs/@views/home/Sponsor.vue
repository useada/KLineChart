<script setup>
  import { ref } from 'vue'
  import Section from './Section.vue';

  import { useData } from 'vitepress'
import i18n from '../../@i18n';

  const sponsors = [
    {
      "name": "Northstar",
      "logo": "/images/sponsors/Northstar.png",
      "website": "https://northstar.quantit.tech:8443/",
      "amount": 1600
    },
    {
      "name": "flameOnYou",
      "text": "flameOnYou",
      "logo": "/images/sponsors/flameOnYou.jpg",
      "website": "https://github.com/flameOnYou",
      "amount": 2100
    },
    {
      "name": "糊涂",
      "text": "糊涂",
      "logo": "/images/sponsors/hutu.png",
      "website": "https://hutu.live",
      "amount": 18.8
    }
  ]

  sponsors.sort((s1, s2) => s2.amount - s1.amount)

  const pt = []

  const gd = []

  for (let i = 3; i < sponsors.length; i++) {
    const s = sponsors[i]
    if (s.amount >= 5000) {
      pt.push(s)
    } else {
      gd.push(s)
    }
  }

  const platinum = ref(pt)

  const gold = ref(gd)

  const { lang } = useData()
</script>

<template>
  <Section
    :title="i18n('view_home_sponsor_title', lang)"
    :description="i18n('view_home_sponsor_desc', lang)">
    <div class="sponsor">
      <div class="sponsor-grid sponsor-top-grid">
        <a class="sponsor-grid-item item-no1" :href="sponsors[0].website" target="_blank" rel="noreferrer">
          <img class="image" :src="sponsors[0].logo"/>
          <span class="text" v-if="!!sponsors[0].text">{{ sponsors[0].text }}</span>
        </a>
        <a class="sponsor-grid-item item-no2-no3" :href="sponsors[1].website" target="_blank" rel="noreferrer">
          <img class="image" :src="sponsors[1].logo"/>
          <span class="text" v-if="!!sponsors[1].text">{{ sponsors[1].text }}</span>
        </a>
        <a v-if="!!sponsors[2]" class="sponsor-grid-item item-no2-no3" :href="sponsors[2].website" target="_blank" rel="noreferrer">
          <img class="image" :src="sponsors[2].logo"/>
          <span class="text" v-if="!!sponsors[2].text">{{ sponsors[2].text }}</span>
        </a>
      </div>
      <!-- <h4 v-if="platinum.length > 0">{{ lang === 'zh-CN' ? '铂金赞助商' : 'Platinum Sponsors' }}</h4> -->
      <div v-if="platinum.length > 0" class="sponsor-grid sponsor-platinum-grid">
        <a v-for="item in platinum" class="sponsor-grid-item item" target="_blank" rel="noreferrer" :href="item.website">
          <img class="image" :src="item.logo"/>
        </a>
      </div>
      <!-- <h4 v-if="gold.length > 0">{{ lang === 'zh-CN' ? '黄金赞助商' : 'Gold Sponsors' }}</h4> -->
      <div v-if="gold.length > 0" class="sponsor-grid sponsor-gold-grid">
        <a v-for="item in gold" class="sponsor-grid-item item" target="_blank" rel="noreferrer" :href="item.website">
          <img class="image" :src="item.logo"/>
        </a>
      </div>
      <div class="sponsor-become">
        <a target="_blank" rel="noreferrer" href="./sponsor.html">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7z"/>
          </svg>
          &nbsp;
          {{ i18n('view_home_sponsor_become_sponsor', lang) }}
        </a>
      </div>
    </div>
  </Section>
</template>

<style scoped>
  .sponsor {
    width: 100%;
  }

  .sponsor h4 {
    font-size: 20px;
    font-weight: 500;
    padding: 30px 0 20px 0;
    text-align: left;
  }

  .sponsor-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .sponsor-grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: var(--vp-c-text-2)!important;
    background-color: var(--vp-c-bg-soft);
    border-radius: 8px;
    transition: background-color .2s;
    cursor: pointer;
    color: inherit;
    font-size: 32px;
  }

  .sponsor-grid-item .text {
    font-weight: bold;
    padding-left: 12px;
  }

  .sponsor-top-grid .item-no1 {
    height: 180px;
    font-size: 36px;
  }

  .sponsor-top-grid .item-no1 .image {
    height: 62px;
  }

  .sponsor-top-grid .item-no2-no3 {
    height: 140px;
  }

  .sponsor-top-grid .item-no2-no3 .image {
    height: 40px;
  }

  .sponsor-platinum-grid .item {
    height: 100px;
  }

  .sponsor-platinum-grid .item .image {
    height: 30px;
  }

  .sponsor-gold-grid .item {
    width: calc((100% - 18px) / 4);
    height: 50px;
  }

  .sponsor-gold-grid .item .image {
    height: 16px;
  }

  .sponsor-become {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;
    font-size: 14px;
    color: var(--vp-c-indigo-1);
    font-weight: bold;
  }

  .sponsor-become a {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 22px;
    border-radius: 99px;
    transition: all .25s ease-in;
    background-color: var(--vp-c-indigo-1);
    color: white;
    text-decoration: none;
  }

  .sponsor-become a:hover {
    background-color: var(--vp-c-indigo-2);
  }

  @media (min-width: 640px) {
    .sponsor-grid {
      gap: 4px;
    }
    .sponsor-platinum-grid .item {
      width: calc((100% - 12px) / 3);
    }

    .sponsor-gold-grid .item {
      width: calc((100% - 30px) / 4);
    }
  }

  @media (min-width: 960px) {
    .sponsor-top-grid .item-no2-no3 {
      width: calc((100% - 4px) / 2);
      height: 140px;
    }

    .sponsor-top-grid .item-no2-no3 .image {
      height: 52px;
    }

    .sponsor-platinum-grid .item {
      width: calc((100% - 18px) / 4);
    }

    .sponsor-gold-grid .item {
      width: calc((100% - 54px) / 10);
    }
  }
</style>