<script>
  import { onMount,} from "svelte";
  import Card from "../../../lib/components/Card.svelte";
  import Button from "../../../lib/components/Button.svelte";
  import "../../components/RallyDialog.css";

//   const dispatch = createEventDispatcher();

 

  export let cssVarStyles2;
  export let title;
  export let cta1;
  export let cta2;
  export let startState;
  export let bodyText;
  export let linkText;
  export let welcomeCard;
  export let joinCard;
//   export let triggerCard;
  export let width;
  export let topPadding;
  export let fontSize;

  let titleEl;
  let textWidth;

  const styles = { width, topPadding, fontSize };

  onMount(() => {
    if (titleEl) {
      textWidth = titleEl.clientWidth;
    }
  });

  $: cssVarStyles2 = `--titleWidth:${textWidth}px`;
  $: if (welcomeCard === true) {
    setTimeout(() => {
      if (titleEl) {
        textWidth = titleEl.clientWidth;
      }
    }, 100);
    console.log("THE WELCOME", textWidth);
  } else if (joinCard === true) {
    setTimeout(() => {
      if (titleEl) {
        textWidth = titleEl.clientWidth;
      }
    }, 100);
    console.log("THE JOIN", textWidth);
  }
  $: startState = welcomeCard ? "join" : "welcome";


//   const triggerCard = (state)=>{
//     dispatch('message', {
//         text:startState
//     })
//   }
</script>

<Card style={styles}>
  <div class="title-wrapper" slot="card-title">
    <div style={cssVarStyles2} class="title-highlight" />
    <div {title} bind:this={titleEl} class="title-text">
      {title}
    </div>
  </div>

  <div class="card-body-content" slot="card-body">
    <div class="button-wrapper">
      <Button
        size="lg"
        customControl={true}
        textColor="#000000"
        background="transparent !important"
        borderColor="#000000"
        custom="card-button"
      >
        <img
          width="20px"
          height="20px"
          src="img/google-logo.svg"
          alt="Google logo in color"
        />
        <div class="button-text">{cta1}</div></Button
      >
    </div>

    <div class="button-wrapper">
      <Button
        size="lg"
        customControl={true}
        textColor="#000000"
        background="transparent"
        borderColor="#000000"
        custom="card-button"
      >
        <img width="24px" height="24px" src="img/email.svg" alt="Email icon" />
        <div
          on:click={() => {
            welcomeCard ? triggerCard("signin") : triggerCard("create");
          }}
          class="button-text"
        >
          {cta2}
        </div></Button
      >
    </div>

    <p class="body-text-privacy">
      By proceeding, you agree to our <a href="/">Privacy Notice</a>
    </p>
    <p class="body-text-action">
      {bodyText}
      <button on:click={() => triggerCard(startState)}>{linkText}</button>
    </p>
  </div>
</Card>

<style>
  .title-highlight {
    background-color: #f9cd34;
    border-radius: 4px;
    position: absolute;
    height: 1.375rem;
    width: calc(var(--titleWidth) + 15px);
    margin-top: 24px;
    transition: width 0.2s ease-in;
  }

  .body-text-action button,
  .forgot-pw button {
    border-color: transparent;
    background: transparent;
    cursor: pointer;
  }

  .body-text-action button {
    font-weight: 700;
    text-decoration: underline;
  }

  .forgot-pw button {
    color: var(--color-blue-50);
    font-weight: 600;
    font-size: 12px;
  }

  .field-pw {
    display: var(--inputVisible);
  }

  .title-wrapper {
    padding-bottom: 10px;
  }

  .body-text-info {
    padding: 20px 52px 0px;
    text-align: center;
  }
</style>
