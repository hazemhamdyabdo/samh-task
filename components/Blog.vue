<script setup lang="ts">
/**
 * Interface representing a card object.
 */
interface Card {
  /** Image URL for the card. */
  img?: string;
  /** Tag for the card. */
  tag?: string;
  /** Title for the card. */
  title?: string;
  /** Description for the card. */
  desc?: string;
  /** Link for the card. */
  link?: string;
  /** Additional CSS class for the card. */
  class?: string;
}

/**
 * Define props for a component accepting an array of cards.
 */
defineProps<{
  /** Array of card objects. */
  cards: Card[];
}>();
</script>

<template>
  <section>
    <!-- Use class names following the EBM architecture style, which works perfectly with SASS block classes. -->
    <h2 class="text-center text-5xl mb-10">{{ $t("Blogs") }}</h2>
    <div class="container">
      <NuxtLink
        :to="card.link"
        class="card"
        v-for="card in cards"
        :key="card.tag"
        target="_blank"
      >
        <div class="card-header">
          <img :src="card.img" :alt="card.title" />
        </div>
        <div class="card-body">
          <span :class="`tag tag-${card.class ?? 'teal'}`">{{
            $t(card.tag!)
          }}</span>
          <h4 class="font-bold">{{ $t(card.title!) }}</h4>
          <p>{{ $t(card.desc!) }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 13rem;
}
.container {
  display: flex;
  width: 1040px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  transition: all 0.2s ease-in;
}

.card:hover {
  transform: translateY(-10px);
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}

@media only screen and (max-width: 1330px) {
  .container {
    width: auto;
  }
}

@media only screen and (max-width: 760px) {
  section {
    margin-top: 5rem;
  }
}
</style>
