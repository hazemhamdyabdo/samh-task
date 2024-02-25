<script setup lang="ts">
import { Menu } from "lucide-vue-next";
</script>

<template>
  <nav>
    <Sheet>
      <SheetTrigger><Menu class="cursor-pointer" /></SheetTrigger>
      <SheetContent class="h-[80vh]">
        <SheetHeader>
          <SheetTitle>
            {{ $t("SAMH Logo") }}
          </SheetTitle>
          <SheetDescription>
            <ul class="flex items-center flex-col gap-12 mt-12">
              <li>
                <nuxt-link to="">{{ $t("Home") }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="">{{ $t("Blogs") }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="">{{ $t("Book form") }}</nuxt-link>
              </li>
              <li>
                <Button class="px-7">{{ $t("Sign up") }}</Button>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </nav>
</template>
