<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import MiniSider from "../../lib/components/MiniSider.svelte";
  import "./css/RallyCard.css"
  import "./css/RallySettings.css"
</script>

<Meta
  title="Components/Cards/Sider"
  component={MiniSider}
  argTypes={{
    listArr: { control: "array" },
    width: { control: "text" },
    fontSize: { control: "text" },
  }}
/>

<Template let:args>
  <div class="settings-container">
    <MiniSider {...args} />
  </div>
</Template>

<Story
  name="Settings Sider"
  args={{
    listArr: [
        {text: "Update email", highlight:false, class:"", type:"update-email"},
        {text: "Update password", highlight:false, class:"", type:"update-pw" },
        {text: "Enable 2FA", highlight:false, class:"", type:"enable-2FA"},
        {text: "Leave Rally", highlight:false, class:"", type:"leave-rally"}
    ],
    width: "214px",
    fontSize: "1rem"
  }}
/>
