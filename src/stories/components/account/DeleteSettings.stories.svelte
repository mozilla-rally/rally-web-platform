<script>
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Card from "../../../lib/components/Card.svelte";
</script>

<Meta
  title="Components/Cards/Settings Delete"
  component={Card}
  argTypes={{
    title: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    customClass: { control: "text" },
    headerClass: { control: "text" },
  }}
/>

<!-- 👇 We create a “template” of how args map to rendering -->
<Template let:args>
  <div class="sb-container settings-readonly">
    <Card
      width={args.width}
      height={args.height}
      customClass={args.customClass}
      headerClass={args.headerClass}
    >
      <h2 class="title-wrapper title-wrapper--settings" slot="card-title">
        <div class="title-text title-text--settings">{args.title}</div>
      </h2>
      <div class="card-content card-content--settings" slot="card-content">
        <div class="content-box">
          <div class="content-box__info">
            <div class="content-box__description">
              This account will no longer be available, and all your saved data
              will be permanently deleted.
            </div>
            <button class="edit-btn rwp-link">Delete</button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</Template>

<!-- 👇 Each story then reuses that template -->
<Story
  name="Settings Delete"
  args={{
    width: "612px",
    height: "auto",
    customClass: "settings",
    headerClass: "settings",
    title: "Delete account",
  }}
/>

<style>
  .sb-container {
    padding: 2rem 1rem;
  }
</style>
