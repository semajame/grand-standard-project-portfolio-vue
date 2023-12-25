<template>
  <div class="home__overlay"></div>
  <main class="contacts__hero">
    <div class="hero__content">
      <span>
        {{ contactsSpan }}
      </span>
      <h1>{{ contactHeader }}</h1>
      <button class="explore__hotel" @click="toggleKnow">
        {{ contactFill }}
      </button>
    </div>
  </main>

  <section class="contacts__container" id="about__section">
    <div class="contacts__left">
      <span class="contacts__span"> {{ contactsSpan }} </span>
      <h2 class="contacts__header">{{ contactsHeaderTwo }}</h2>
    </div>

    <div class="contacts__right">
      <form action="">
        <div class="name__container">
          <div class="first__name__container">
            <label for=""> {{ firstName }} </label>
            <input type="text" class="first__name" />
          </div>
          <div class="last__name__container">
            <label for=""> {{ lastName }} </label>
            <input type="text" class="last__name" />
          </div>
        </div>
        <div class="email__container">
          <label for=""> {{ email }} </label>
          <input type="text" class="contact__email" />
        </div>
        <div class="phone__container">
          <label for=""> {{ phone }} </label>
          <input type="text" class="phone" />
        </div>
        <div class="message__container">
          <label for=""> {{ message }} </label>
          <textarea
            type="text"
            class="message"
            placeholder="How can we help?"
            maxlength="4000"
          >
          </textarea>
        </div>
        <button class="send__message">{{ sendMessage }}</button>
      </form>
    </div>
  </section>
</template>

<script>
import { toggleKnow } from "../scrollUtils";

export default {
  data() {
    return {
      contactButton: "Browse our Contact",
      contactsSpan: "Contact Us",
      contactHeader: "Questions and concerns?",
      contactFill: "Fill up the form below!",
      contactsHeaderTwo: "Get in touch with our friendly team.",

      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      sendMessage: "Send message",
    };
  },

  methods: {
    toggleKnow,
  },
};
</script>

<style></style>
