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
    listTextArr: { control: "array" },
    width: { control: "text" },
    fontSize: { control: "text" },
  }}
/>

<Template let:args>
  <div class="container">
    <MiniSider {...args} />
  </div>
</Template>

<Story
  name="Settings Sider"
  args={{
    listTextArr: ["Update email", "Update password", "Enable 2FA"],
    width: "214px",
    fontSize: "1rem"
  }}
/>
