<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ContentContainer from "../../lib/layouts/main/ContentContainer.svelte";
  import TestNavbar from "../components/account/TestNavbar.svelte";
  import Footer from "../../lib/layouts/main/Footer.svelte";
  import MiniSider from "../../lib/components/MiniSider.svelte";
  import TestSettingsCard from "../components/account/TestSettingsCard.svelte";
  import "../components/css/RallySettings.css";

  const listTextArr = ["Update email", "Update password", "Enable 2FA"];
    const listArr = [
        {text: "Update email", highlight:true, class:"", type:"update-email"},
        {text: "Update password", highlight:false, class:"", type:"update-pw" },
        {text: "Enable 2FA", highlight:false, class:"", type:"enable-2FA"},
        {text: "Leave Rally", highlight:false, class:"leave", type:"leave-rally"}
    ]

  let isEmail = true;
  let isPW = false;
  let is2FA = false;
  let isLeaveRally = false;

  let cardArgs = {
    width: "700px",
    height: "auto",
    minHeight: "600px",
    fontSize: "38px",
  };

  let updateEmailArgs = {
    ...cardArgs,
    title: "Account settings",
    custom: "settings",
  };

  let updatePWArgs = {
    ...cardArgs,
    title: "Account settings",
    custom: "settings",
  };

  let enable2FAArgs = {
    ...cardArgs,
    title: "Account settings",
    custom: "settings extra-padding",
  };

  let leaveRallyArgs = {
    ...cardArgs,
    title: "Account settings",
    custom: "settings extra-padding",
  };

  $: if (isEmail) {
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
        isPW = false
        is2FA = false
        isLeaveRally = false
        break;
      case "update-pw":
        isPW = true;
        isEmail = false;
        is2FA = false
        isLeaveRally = false
        break;
      case "enable-2FA":
        is2FA = true;
        isEmail = false;
        isPW = false
        isLeaveRally = false
        break;
      case "leave-rally":
        isLeaveRally = true;
        isEmail = false;
        isPW = false
        is2FA = false
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
        <TestSettingsCard {isEmail} {isPW} {is2FA} {isLeaveRally} {cardArgs} />
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
  }}
/>
