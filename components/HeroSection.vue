<template>
  <section class="h-[80vh] pt-8">
    <Navigation />
    <div class="flex flex-col h-[80%] justify-center p-32 w-1/2 gap-4">
      <h1 class="text-4xl font-bold text-white">
        {{ $t("Embark on Your Next Adventure:") }}<br />
        {{ $t("Book Your Dream Getaway with us Today!") }}
      </h1>
      <p>
        {{
          $t(
            "Discover the world's wonders with our comprehensive travel booking services. Whether you're seeking sun-kissed beaches, cultural excursions, or thrilling"
          )
        }}
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(to bottom, #2373cb00, #2373cb00, #2373cb),
    url("/hero-bg.avif");
}
h1 {
  color: #023164;
}
p {
  color: rgb(0, 33, 56);
  font-weight: 500;
  font-size: 1.25rem;
}

@media only screen and (max-width: 1330px) {
  h1 {
    font-size: 1.8rem;
  }
  p {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 1000px) {
  h1 {
    font-size: 1.5rem;
  }
  br {
    display: none;
  }
  div {
    width: auto;
  }
}
@media only screen and (max-width: 510px) {
  h1 {
    font-size: 1.2rem;
    color: white;
    text-shadow: 2px 2px #000;
    font-weight: 500;
  }
  div {
    padding: 4rem;
  }
  p {
    font-size: 0.9rem;
    color: rgb(228, 224, 224);
    text-shadow: 2px 2px #000;
    font-weight: 400;
  }
}
</style>
