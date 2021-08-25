<script lang="ts">
  /* This Source Code Form is subject to the terms of the Mozilla Public
    * License, v. 2.0. If a copy of the MPL was not distributed with this
    * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  import { getContext } from "svelte";
  import { fly } from "svelte/transition";
  import { goto } from "$app/navigation";
  import ExternalLink from "$lib/components/icons/ExternalLink.svelte";
  
  import type { AppStore } from "$lib/stores/types";
  const store: AppStore = getContext("rally:store");

  let email;
  let password;

  $: if ($store._initialized && $store?.user?.uid) {
    if (!$store?.user?.enrolled) {
      goto("/welcome/terms");
    } else {
      goto("/studies");
    }
  }

  </script>
  
  <style>
    .mzp-c-call-out {
      background-color: transparent;
      min-height: calc(100vh - 2.5rem);
      padding: 0;
    }
  
    .mzp-l-content {
      padding-left: 0;
      padding-right: 0;
      /* this is Main + required padding to meet 120px */
      padding-top: 80px;
    }
  
    .mzp-c-call-out-title {
      margin-bottom: 12px;
    }
    .how-it-works {
      margin-top: 24px;
      text-align: center;
    }
  
    .mzp-c-field-label {
      text-align: left;
    }
    .mzp-c-field-set {
      width: max-content;
      margin: auto;
    }
  </style>
  
  <section class="mzp-c-call-out">
    <div class="mzp-l-content" in:fly={{ duration: 800, y: 5 }}>
      <h2
        class="mzp-c-call-out-title mzp-has-zap-1"
        in:fly={{ duration: 800, y: 5 }}>
        <img src="img/logo-wide.svg" alt="Mozilla Rally Logo" />
      </h2>
  
      <p
        class="mzp-c-call-out-desc"
        style="color: var(--color-marketing-gray-70);
  ">
        This is a feasibility spike exploring a web-based Rally user experience.
      </p>
      <div style="padding: 2rem;">
        <button 
          on:click={async () => {
            await store.loginWithGoogle();
            // dispatch('user-signup-login-complete');
          }}
          style="display: grid; place-items: center; padding: .5rem 1rem; background-color: white;
          color: hsl(217, 10%, 20%);
          text-decoration: none;
          width: 240px;
          border: none;
          margin: auto;
          border-radius: 4px;
          font-weight: 600;
        ">
          <img src="img/google-signin.png" alt='google signin' />
      </button>
      </div>
        <div class="mzp-c-form-header" style="font-weight: bold; font-size: 1.125rem;">
          or create a Rally account
        </div>
        <fieldset class="mzp-c-field-set">
          <div class="mzp-c-field ">
            <label class="mzp-c-field-label"
             for="id_name" >Email</label>
            <input class="mzp-c-field-control " bind:value={email}
             id="id_name" type="email">
      
          </div>
          <div class="mzp-c-field ">
            <label class="mzp-c-field-label"
             for="id_user_email">Password</label>
            <input class="mzp-c-field-control" bind:value={password}
             id="id_user_email" type="password">
          </div>
        </fieldset>
        <div class="mzp-c-form-footer">
          <button 
          on:click={async () => {
            await store.loginWithEmailAndPassword(email, password);
          }}
        class="mzp-c-button">Log In</button>
          <button
            on:click={async () => {
              await store.signupWithEmailAndPassword(email, password);
            }}
          class="mzp-c-button mzp-t-secondary">Sign Up</button>
        </div>
      <div class="how-it-works">
        <a class="external-link" target="_blank" rel="noopener noreferrer" href="__BASE_SITE__/how-rally-works/">Wait – how does it work again?
          <ExternalLink /></a>
      </div>
    </div>
  </section>
  