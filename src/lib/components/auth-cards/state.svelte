<script context="module">
  //launch card states
  export const card = {
    welcomeCard: true,
    joinCard: false,
    createAcctCard: false,
    signinCard: false,
    forgetPWCard: false,
    resetPWCard: false,
    checkEmailCard: false,
    checkEmailPWCard: false,
    cardHeight: "auto",
  };

  //card args
  export const argTypes = {
    width: { control: "text" },
    height: { control: "text" },
    topPadding: { control: "text" },
    fontSize: { control: "text" },
  };

  export const cardArgs = {
    width: "460px",
    fontSize: "38px",
  };

  export const welcomeArgs = {
    ...cardArgs,
    title: "Welcome back",
    cta1: "Continue with Google",
    cta2: "Continue with email",
    bodyText: "Don't have an account?",
    linkText: "Create account",
    welcomeCard: card.welcomeCard,
  };
  export const joinArgs = {
    ...cardArgs,
    title: "Join Rally",
    cta1: "Sign up with Google",
    cta2: "Sign up with email",
    bodyText: "Already have an account?",
    linkText: "Sign in",
  };
  export const createArgs = {
    ...cardArgs,
    custom: "card-body-create",
    height: card.cardHeight,
    title: "Create account",
    cta1: "Continue",
    bodyText: "Already have an account?",
    linkText: "Sign in",
  };
  export const signinArgs = {
    ...cardArgs,
    title: "Welcome back",
    cta1: "Sign in",
    bodyText: "Don't have an account?",
    linkText: "Create account",
    sigininCard: card.signinCard,
    cardHeight: card.cardHeight,
  };
  export const forgetPWArgs = {
    ...cardArgs,
    height: "339px",
    title: "Forgot your password?",
    cta1: "Request password reset",
    bodyText: "We'll send you a link to reset your password",
    minHeight: "339px",
    custom: "reset-pw",
  };
  export const checkEmailPWArgs = {
    ...cardArgs,
    height: "200px",
    title: "Check your email",
    body:
      "An email has been sent to [example@workmail.com] to reset your password.",
    bodyText: "Need additional help?",
    linkText: "Contact us",
    custom: "info-Card",
    checkPW: true,
  };
  export const checkEmailArgs = {
    ...cardArgs,
    height: "276px",
    title: "Check your email",
    body:
      "To finish creating your account with Rally, you will need to verify your email address.",
    bodyText: "Need additional help?",
    linkText: "Contact us",
    custom: "info-Card",
    checkPW: false,
  };
  export const resetPWArgs = {
    ...cardArgs,
    height: "276px",
    title: "Reset your password",
    cta1: "Reset password",
    minHeight: "400px",
    custom: "reset-pw",
  };


</script> 


 

