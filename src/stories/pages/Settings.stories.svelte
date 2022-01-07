<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ContentContainer from "../../lib/layouts/main/ContentContainer.svelte";
  import TestNavbar from "../components/account/TestNavbar.svelte";
  import Footer from "../../lib/layouts/main/Footer.svelte";
  import MiniSider from "../../lib/components/MiniSider.svelte";
  import TestSettingsCard from "../components/account/TestSettingsCard.svelte";
  import "../components/css/RallySettings.css";

  const listArr = [
    { text: "Update email", highlight: false, class: "", type: "update-email" },
    { text: "Update password", highlight: false, class: "", type: "update-pw" },
    { text: "Enable 2FA", highlight: false, class: "", type: "enable-2FA" },
    {
      text: "Leave Rally",
      highlight: false,
      class: "",
      type: "leave-rally",
    },
  ];

  let isEmail = false;
  let isPW = false;
  let is2FA = false;
  let isLeaveRally = false;
  let isReadOnly = true;
  let settingsTitle;

  let cardArgs = {
    width: "700px",
    height: "auto",
    minHeight: "600px",
    fontSize: "38px",
  };

  let updateEmailArgs = {
    ...cardArgs,
    custom: "settings",
  };

  let updatePWArgs = {
    ...cardArgs,
    custom: "settings",
  };

  let enable2FAArgs = {
    ...cardArgs,
    custom: "settings extra-padding",
  };

  let leaveRallyArgs = {
    ...cardArgs,
    custom: "settings extra-padding",
  };

  let isReadOnlyArgs = {
    ...cardArgs,
    custom: "settings extra-padding is-read-only",
  };

  $: if (isReadOnly) {
    cardArgs = isReadOnlyArgs;
  } else if (isEmail) {
    cardArgs = updateEmailArgs;
  } else if (isPW) {
    cardArgs = updatePWArgs;
  } else if (is2FA) {
    cardArgs = enable2FAArgs;
  } else if (isLeaveRally) {
    cardArgs = leaveRallyArgs;
  }

  const displayCard = (event) => {
    switch (event.detail.text) {
      case "update-email":
        isEmail = true;
        isPW = false;
        is2FA = false;
        isLeaveRally = false;
        isReadOnly = false
        settingsTitle = "Update email";
        break;
      case "update-pw":
        isPW = true;
        isEmail = false;
        is2FA = false;
        isLeaveRally = false;
        settingsTitle = "Update password";
        isReadOnly = false
        break;
      case "enable-2FA":
        is2FA = true;
        isEmail = false;
        isPW = false;
        isLeaveRally = false;
        isReadOnly = false
        settingsTitle = "Two-factor authentication";
        break;
      case "leave-rally":
        isLeaveRally = true;
        isEmail = false;
        isPW = false;
        is2FA = false;
        isReadOnly = false
        settingsTitle = "Leave Rally";
        break;
      default:
        break;
    }
  };
</script>

<Meta
  title="Pages/Settings"
  component={ContentContainer}
  argTypes={{
    width: { control: "text" },
    fontSize: { control: "text" },
    custom: {control : "text"}
  }}
/>

<Template let:args>
  <TestNavbar />
  <div class="settings-page-container">
    <ContentContainer {...args}>
      <div class="settings-sider">
        <MiniSider
          on:type={displayCard}
          {listArr}
          width="214px"
          fontSize="1rem"
        />
      </div>

      <div class="settings-main">
        <TestSettingsCard
          {isEmail}
          {isPW}
          {is2FA}
          {isLeaveRally}
          {isReadOnly}
          {cardArgs}
          {settingsTitle}
        />
      </div>
    </ContentContainer>
  </div>
  <Footer />
</Template>

<Story
  name="Settings"
  args={{
    width: "214px",
    fontSize: "1rem",
    custom:"account-settings"
  }}
/>
