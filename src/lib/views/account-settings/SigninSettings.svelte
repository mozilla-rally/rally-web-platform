<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

  import { getContext, onMount } from "svelte";
  import Card from "../../../lib/components/Card.svelte";
  import ExternalLink from "$lib/components/icons/ExternalLink.svelte";
  import moment from "moment";
  import type { AppStore } from "$lib/stores/types";

  const store: AppStore = getContext("rally:store");

  export let width;
  export let title;
  export let height;
  export let customClass;
  export let headerClass;
  export let displayCard;

  let userEmail;
  let timeSeconds = null;
  let createdOn;
  let userProvider;
  let getEmailStatus;

  let isGoogleAccount;
  let showBtn = "display: block;";
  let hideBtn = "display: none;";
  let googleAccountLink = "https://www.google.com/account";
  let showWarning = false;

  onMount(async () => {
    userProvider = await store.getUserProvider();
    timeSeconds = $store.user.createdOn.seconds;
    createdOn = formatDate();
    if (userProvider) {
      userProvider[0].providerId === "google.com"
        ? (isGoogleAccount = true)
        : (isGoogleAccount = false);
    }
  });

  const getLatestVerified = async () => {
    isUserVerified = await store.isUserVerified();
    return isUserVerified;
  };

  const getLatestUserEmail = async () => {
    userEmail = await store.getUserEmail();
    return userEmail;
  };

  const resendVerificationEmail = async () => {
    await store.resendUserVerificationEmail();
  };

  const formatDate = () => {
    if (timeSeconds) {
      let date = new Date(timeSeconds * 1000).toISOString();
      date = moment(date).format("ll");
      return date;
    }
  };

  $: isUserVerified = getLatestVerified();
  $: userEmail = getLatestUserEmail();
  $: getEmailStatus = localStorage.getItem("isEmailChange");
  $: if (isUserVerified === false && getEmailStatus) {
    showWarning = true;
  } else {
    showWarning = false;
  }
</script>

<Card {width} {height} {customClass} {headerClass}>
  <h2 class="title-wrapper title-wrapper--settings" slot="card-title">
    <div class="title-text title-text--settings">{title}</div>
  </h2>
  <div class="card-content card-content--settings" slot="card-content">
    <div class="content-box">
      <div class="content-box__title">Email</div>
      <div class="content-box__content">
        <div class="content-description user-email">
          {userEmail}
          <span class="not-verified-warning"
            >{showWarning ? "(not verified)" : ""}
          </span>
          <span
            on:click={resendVerificationEmail}
            class="not-verified-warning--action"
            >{showWarning ? "Resend verification email" : ""}</span
          >
        </div>
        <button
          style={isGoogleAccount === true ? hideBtn : showBtn}
          on:click={() => {
            displayCard("update-email");
          }}
          class="edit-btn">Edit</button
        >
      </div>
      <hr />
      {#if isGoogleAccount === true}
        <div class="content-box">
          <div class="content-box__title">Connected with Google</div>
          <p class="content-box__description content-box__description--google">
            You can change your Security or Privacy settings through your Google
            Account
          </p>
          <div class="content-box__content content-box__content--google">
            <div
              class="content-box__description content-box__description--google"
            >
              <img src="img/icon-logo-google.svg" alt="Google logo" />
              <div class="info">
                Connected to {userEmail} on {createdOn}
              </div>
            </div>
            <a
              href={googleAccountLink}
              target="_blank"
              class="content-box__link d-flex justify-content-between align-items-center"
              >Manage account <ExternalLink /></a
            >
          </div>
        </div>
      {:else}
        <div class="content-box">
          <div class="content-box__title">Password</div>
          <div class="content-box__content">
            <div class="content-box__description password-dots">
              •••••••••••••••••
            </div>
            <button
              on:click={() => {
                displayCard("update-pw");
              }}
              class="edit-btn">Edit</button
            >
          </div>
        </div>
      {/if}
    </div>
  </div></Card
>

<style>
  .not-verified-warning {
    color: red;
  }

  .not-verified-warning--action {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
