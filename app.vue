<script setup lang="ts">
/**
 * @TODO: in future
 *                  1- Utilize Google Maps API to integrate interactive maps, allowing users to easily select their current location and destination. Display trip details such as distance, time, and price directly on the map interface.
 *                  2- Seamlessly integrate payment gateways like Stripe, enabling users to securely pay for their trips directly on the website.
 *                  3- Integrate third-party APIs for essential services such as flight booking, hotel reservations, and travel itineraries, providing users with comprehensive travel options and information.
 *                  4- Develop robust backend functionality to manage user accounts, bookings, and payments efficiently. Offer incentives such as discounts for users who make multiple bookings through the website, encouraging customer loyalty and repeat business.
 */

// use head safe to prevent xss attacks
useHeadSafe({
  // @ts-ignore
  script: [{ id: "xss-script", innerHTML: 'alert("xss")' }],
});
useSeoMeta({
  title: "SAMH - سمح",
  ogTitle: "SAMH - سمح",
  description: "SAMH travel agency",
  ogDescription: "SAMH travel agency",
  // social media image
  twitterCard: "summary_large_image",
});
// passing props to the Blog component as an array of objects (blog details)
const blogs = reactive([
  {
    img: "https://travelbabbo.com/wp-content/uploads/2020/05/20190604_0028_Stoen-126-3.jpg",
    tag: "Travel",
    title: "Top 5 Tourist-Favorite Countries",
    desc: "Discover the top five countries that captivate travelers worldwide with their diverse cultures, stunning landscapes, and memorable experiences.",
    link: "https://travelbabbo.com/best-countries-to-visit/",
  },
  {
    img: "https://www.graygroupintl.com/hubfs/Gray%20Group%20International/GGI%20-%20Approved%20and%20Converted%20%28WebP%29/Beautiful%20Destinations%20A%20Journey%20Through%20the%20Worlds%20Wonders.webp",
    tag: "Adventure",
    title: "Unforgettable Journeys Await: Explore the World's Hidden Gems",
    desc: "Embark on a journey of discovery as you uncover the world's best-kept secrets and hidden treasures, from breathtaking natural wonders to culturally rich destinations.",
    link: "https://www.graygroupintl.com/blog/beautiful-destinations",
    class: "purple",
  },
  {
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/449579681.jpg?k=0c559f30ddf46df9d38016ec3fb80fbe3aebe3c84157ac67073e6fad79061723&o=&hp=1",
    tag: "BeachVacation",
    title: "Escape to Paradise: Find Your Perfect Beach Destination",
    desc: "Indulge in the ultimate relaxation experience by exploring our curated selection of idyllic beach destinations. From secluded tropical islands to bustling coastal towns, there's a paradise waiting for every beach lover.",
    link: "https://c21cy.com/blog/escape-to-paradise-find-your-ultimate-holiday-home-in-cyprus/",
    class: "pink",
  },
]);
</script>

<template>
  <div>
    <HeroSection />
    <BookForm />
    <Blog :cards="blogs" />
  </div>
</template>

<style>
body {
  background: rgb(222, 244, 252);
  background: linear-gradient(
    90deg,
    rgba(222, 244, 252, 1) 8%,
    rgba(0, 233, 246, 1) 97%
  );
}
/* change text direction based on locale */
:lang(en) {
  direction: ltr;
}

* {
  direction: rtl;
}
</style>
