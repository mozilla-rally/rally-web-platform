<script>
  import { onMount } from "svelte";
  import sal from "sal.js";
  //   import "./SignIn.css";
  import "/node_modules/sal.js/dist/sal.css";

  onMount(() => {
    const scrollAnimations = sal();
    scrollAnimations.enable();
    if (scrollAnimations) {
      console.log("sal is enabled!", scrollAnimations);
    }
  });

  export let height  
</script>

<main id="sigin-main">
  <div class="home-hero">
    <div class="home-hero-wrapper">
      <div class="home-text-wrapper">
        <p class="home-hero-text f-zilla">
          <span
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-duration="500"
            data-sal-easing="cubic-bezier(0.22, 1, 0.36, 1)"
            data-sal-once
            class="sal-animate text-one"
          >
            It’s your data.
          </span>

          <span
            data-sal="slide-up"
            data-sal-delay="250"
            data-sal-duration="500"
            data-sal-easing="cubic-bezier(0.22, 1, 0.36, 1)"
            data-sal-once
            class="sal-animate"
          >
            <br />
            <b>Use it for a</b>
            <strong class="home-hero-text-highlight">change.</strong></span
          >
        </p>
        <p class="home-hero-copy">Big tech steals our user data for profit.</p>
        <p class="home-hero-copy">
          <strong>Mozilla Rally is a plugin for Firefox</strong> designed to
          help researchers & data scientists fight back. Rally lets you decide
          exactly what browser data you want to fonate towards research that
          will help create new resources, tools, and policies--and
          <strong>help build a better internet for all.</strong>
        </p>
      </div>

      <!-- home hero image -->
      <div class="home-hero-image tilt-image is-active">
        <div
          data-sal="fade"
          data-sal-delay="750"
          data-sal-duration="500"
          data-sal-easing="cubic-bezier(1,.01,.16,1)"
          data-sal-once=""
          class="sal-animate"
        >
          <picture class="">
            <img
              src="img/people-marching.png"
              width="320"
              height="266"
              alt=""
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>

    <!-- testimonial -->
    <div class="home-hero-testimonial">
      <div class="home-hero-testimonial-wrapper">
        <div class="testimonial sal-animate" data-sal="" data-sal-once="">
          <div class="testimonial-image">
            <img
              src="img/julia-angwin.jpg"
              srcset="img/julia-angwin.jpg, img/julia-angwin-2x.jpg 2x"
              alt=""
            />
          </div>
          <figure class="testimonial-bubble">
            <blockquote class="testimonial-quote">
              “Mozilla Rally is a revelatory tool that seeks to fix the
              information imbalance created by tech platforms at the public’s
              expense.”
            </blockquote>
            <figcaption class="testimonial-caption">
              <cite class="testimonial-cite">
                <strong class="testimonial-cite-name"> Julia Angwin, </strong>
                <span class="testimonial-cite-title">
                  Editor-in-Chief and Founder of The&nbsp;Markup
                </span>
              </cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  p {
    color: #000000;
  }
  /* margin-top: 3.75rem; */
    /* padding-top: 7.5em; */
    /* padding-top: 3.8em; */

  /* .home-hero {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  } */

  .home-hero-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: unset;
    margin-right: unset;
    /* max-width: 90.5rem; */
    width: 100%;
    /* padding-left: 2.5rem; */
    padding-right: 0;
  }

  .home-text-wrapper {
    flex-shrink: 0;
    width: 80%;
    padding-left: 15px;
    position: relative;
    top: 4rem;
  }

  .home-hero-text {
    line-height: 1;
    font-size: calc(4.03846vw + 1.09135rem);
    margin: 0 0 0.5em;
  }

  .home-hero-text b {
    font-weight: 700;
  }

  .f-zilla {
    font-family: Zilla Slab, Inter, X-LocaleSpecific, sans-serif, color-emoji;
  }

  .home-hero-copy {
    width: 90%;
    margin: 0;
  }

  .home-hero-text-highlight {
    display: inline-block;
    position: relative;
    white-space: nowrap;
    z-index: 0;
    font-weight: bolder;
  }

  .home-hero-text-highlight::after {
    background-color: var(--color-moz-neon-green);
    border-radius: 4px;
    content: "";
    height: calc(3.7037vw + 0.29167rem);
    left: -10px;
    position: absolute;
    right: -10px;
    top: 58%;
    z-index: -1;
  }

  .home-hero-image {
    min-height: 339px;
    width: 100%;
    position: relative;
    top: 6rem;
  }

  .home-hero-image img {
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .home-hero-testimonial {
    background-color: var(--color-light-gray-20);
    background-image: url("img/wave4.svg");
    background-position: 0 -1px;
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 100%;
    margin-top: -3rem;
    padding-top: 3.25rem;
    padding-bottom: 11rem;
    /* margin-top: 7.2em; */
    width: 100%;
    height: 279px;
  }

  /* .home-test-wave{
        position: relative;
    } */

  .home-hero-wave {
    position: absolute;
    z-index: 100;
  }

  .home-hero-testimonial-wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 77.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .home-hero-testimonial .testimonial {
    margin-left: 0;
  }

  .home-hero-testimonial .testimonial {
    max-width: 28.75rem;
  }

  .testimonial {
    align-items: flex-end;
    display: flex;
  }

  .no-js .testimonial-image,
  .sal-animate .testimonial-image {
    opacity: 1;
    transform: scale(1);
  }

  .home-hero-testimonial .testimonial-image {
    transition-delay: 1.5s;
  }

  .testimonial-image {
    border-radius: 50%;
    display: block;
    flex-shrink: 0;
    margin-right: 1.8125rem;
    max-width: 25%;
    opacity: 0;
    overflow: hidden;
    position: relative;
    transform: scale(0);
    transition: opacity 0.5s cubic-bezier(0.5, 0, 0.5, 1),
      transform 0.5s cubic-bezier(0.5, 0, 0.5, 1);
    width: 5.75rem;
  }

  .testimonial-image:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .testimonial-image img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .testimonial-bubble,
  .sal-animate .testimonial-bubble {
    opacity: 1;
    transform: translateX(0);
  }

  blockquote {
    border-style: none;
    margin: 0;
    padding: 0;
    font-weight: normal;
    width: 100%;
  }

  .testimonial-bubble {
    background-color: #f9cd34;
    border-radius: 4px;
    margin-bottom: 0.5625rem;
    opacity: 0;
    padding: 1rem;
    position: relative;
    /* transform: translateX(-30px); */
    top: 10rem;
    transition: opacity 0.5s cubic-bezier(0.5, 0, 0.5, 1) 0.35s,
      transform 0.5s cubic-bezier(0.5, 0, 0.5, 1) 0.35s;
  }

  /* .testimonial-bubble:before {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%23f9cd34' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 17'%3E%3Cpath d='M10 0c0 1.07-.43 2.08-1.2 2.83l-7.6 7.4A3.94 3.94 0 0 0 3.95 17H10V0z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      bottom: 0;
      content: "";
      height: 1.0625rem;
      position: absolute;
      right: 100%;
      width: 0.625rem;
    } */

  .testimonial-bubble:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #f9cd34;
    border-top: 10px solid #f9cd34;
    border-bottom: 10px solid transparent;
    left: -17px;
    top: 0px;
  }

  .testimonial-quote {
    font-size: 1.1875rem;
    line-height: 1.4;
  }

  .testimonial-cite {
    display: inline-block;
    font-size: 0.75rem;
    line-height: 1.5;
    margin-top: 0.5rem;
    font-style: unset;
  }

  .testimonial-cite-name {
    font-weight: 700;
  }

  /* queries */
  /* --sm mobile: 20em; 320px
    --mobile: 43em; 688px 
    --tablet: 64.125em; 1024px
    --desktop: 82em; 1312px */

  @media screen and (min-width: 55em) {
    .home-hero-wrapper {
      flex-direction: row;
      width: 90%;
    }

    .home-text-wrapper {
      padding-left: 30px;
      width: 428px;
      top: 6rem;
    }

    .home-hero-image {
      width: 62%;
    }

    .home-hero-testimonial{
      padding-top: 6.25rem;
      padding-bottom: 0rem; 
    }

    .home-hero-testimonial .testimonial {
      margin-left: 16.9375rem;
    }

    blockquote {
      width: 398px;
    }

    .testimonial-bubble{
      top: 6rem;
    } 
  }

  @media screen and (min-width: 64.125em) {
    /* .testimonial-bubble {
        margin-bottom: 3.625rem;
      } */
    .home-hero-wrapper {
      flex-direction: row;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }

    .home-text-wrapper {
      padding-left: 30px;
      width: 428px;
      top: 6rem;
    }
    .home-hero-text {
      font-size: 4.6rem;
    }

    .home-hero-text-highlight::after {
      height: 2.375rem;
    }

    .home-hero-image {
      width: 62%;
    }
  }

  @media screen and (min-width: 82em) {
    .home-hero-wrapper {
      width: 1163px;
    }
    .home-hero-image {
      width: 639px;
    }
  }
</style>
