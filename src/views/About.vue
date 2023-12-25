<template>
  <div class="home__overlay"></div>
  <main class="about__hero">
    <div class="hero__content">
      <span> {{ heroSpan }} </span>

      <h1>{{ heroHeader }}</h1>
      <button class="explore__hotel" @click="toggleKnow">
        {{ heroButton }}
      </button>
    </div>
  </main>

  <section id="about__section" class="about__section">
    <div class="about__content">
      <h2>
        {{ aboutHeader }}
      </h2>
      <span> {{ aboutSpan }} </span>

      <div class="about__para">
        <div class="about__story">
          <h3>
            {{ aboutStory }}
          </h3>
          <p>{{ aboutParagraph }}</p>
        </div>

        <div class="story__container">
          <p>
            Established in 2020, Grand Standard has been a cornerstone of
            hospitality, weaving its story into the fabric of Cebu. What started
            as a humble endeavor to provide a comfortable retreat for travelers
            has evolved into a symbol of elegance and refinement.
            <br />
            <br />
            From the earliest days, our founders envisioned a space where guests
            could not only find solace in plush accommodations but also
            experience the rich culture and heritage of the region. As Cebu grew
            and transformed, so did Grand Standard, adapting and innovating to
            meet the evolving needs of our discerning guests.
            <br />
            <br />

            Over the years, we've welcomed a diverse array of guests—business
            executives, families on vacation, newlyweds celebrating their union,
            and adventurers seeking new horizons. Each visitor has contributed
            to the tapestry of our story, leaving behind memories that resonate
            within the walls of Grand Standard.
            <br />
            <br />
            In 2020, a significant renovation breathed new life into [Hotel
            Name], preserving its historic charm while introducing modern
            amenities and cutting-edge design. This transformation reflects our
            commitment to providing a timeless experience that seamlessly blends
            the classic with the contemporary.
            <br />
            <br />
            But beyond the physical spaces and luxurious amenities, the heart of
            Grand Standard lies in the people who make it come alive. Our
            dedicated staff, many of whom have been with us for years, embody
            the spirit of hospitality. They are the storytellers, the
            caretakers, and the architects of the memorable experiences that
            unfold within our walls.
            <br />
            <br />
            As we reflect on our journey, we feel a deep sense of gratitude for
            the trust our guests have placed in us. It is this trust that
            inspires us to continually raise the bar, ensuring that every stay
            at Grand Standard is not just a visit but a chapter in a much larger
            narrative—a story of warmth, sophistication, and unforgettable
            moments.
          </p>
          <p>{{ aboutThirdPara }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { toggleKnow } from "../scrollUtils";
export default {
  data() {
    return {
      heroSpan: "LEARN ABOUT US",
      heroHeader: "Voted best hotel 10 years in a row",
      heroButton: "FIND OUT WHY",
      aboutHeader:
        ' "I\'ve always loved working with people. So working at the Grand Standard was a natural fit." ',
      aboutSpan: "Employee",
      aboutUs: "About Us",
      aboutParagraph:
        "Welcome to Grand Standard, your home away from home in the heart of Cebu. At Grand Standard, we believe in creating exceptional experiences for our guests, blending modern luxury with a touch of local charm.",
      aboutStory: "Our Story",

      aboutThirdPara:
        "   At Grand Standard, we are committed to exceeding your expectations. Our dedicated team of professionals is passionate about ensuring every aspect of your stay is memorable. From the moment you step into our elegant lobby to the time you retire to your well-appointed room, we strive to create an atmosphere of warmth and hospitality.",
    };
  },

  methods: {
    toggleKnow,
  },
};
</script>

<style></style>
