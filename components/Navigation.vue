<script setup lang="ts">
const { locale } = useI18n();
// * arabic is the default language
locale.value = "ar";
watch(locale, (val) => {
  // * set the language
  document.documentElement.setAttribute("lang", val);
  // * set the direction
  document.documentElement.setAttribute("dir", val === "ar" ? "rtl" : "ltr");
});
</script>

<template>
  <nav class="bg-white rounded-2xl w-[80%] mx-auto h-fit p-5">
    <ul class="flex justify-between">
      <div class="flex items-center gap-6">
        <h2 class="cursor-pointer">
          <NuxtLink to="/">{{ $t("SAMH Logo") }}</NuxtLink>
        </h2>
        <select v-model="locale">
          <option value="ar">{{ $t("ar") }}</option>
          <option value="en">{{ $t("en") }}</option>
        </select>
      </div>
      <div class="flex items-center gap-6 links">
        <li>
          <NuxtLink to="/">{{ $t("Home") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("Book form") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">{{ $t("Blogs") }} </NuxtLink>
        </li>
      </div>
      <Button class="px-7">{{ $t("Sign up") }}</Button>
    </ul>
    <MobileNavigation class="mobile-nav hidden" />
  </nav>
</template>

<style scoped>
nav {
  font-weight: 700;
}
li {
  cursor: pointer;
}
#language {
  font-weight: 400;
}
@media only screen and (max-width: 510px) {
  nav li a {
    font-size: 0.5rem;
  }

  .links,
  button {
    display: none;
  }
  .mobile-nav {
    display: block;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
