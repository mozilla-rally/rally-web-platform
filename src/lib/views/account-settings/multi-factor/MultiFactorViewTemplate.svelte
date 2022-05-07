<div class="container">
  <h1>Two-Factor Authentication</h1>

  <slot name="body" />

  <div class="footer">
    <slot name="footer" />
  </div>
</div>

<style>
  .container {
    padding: 32px;
    background: white;
    border: 1px solid #e7e5e2;
    border-radius: 4px;
  }

  .container :global(h1) {
    font-weight: 700;
    font-size: 38px;
    line-height: 105%;
    color: #271948;
    margin-bottom: 20px;
  }

  .container :global(h2) {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #2b2156;
  }

  .container :global(.sub-step) {
    font-size: 12px;
    line-height: 12px;
    color: #393473;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
  }

  .container :global(.disclaimer) {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #42435a;
  }

  .container :global(p) {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #5e5e72;
  }

  .container :global(.error-msg) {
    color: var(--color-red-70) !important;
    font-size: 14px;
  }

  .footer {
    margin-top: 32px;
  }

  .footer :global(button) {
    margin-right: 12px;
  }

  .footer :global(button:last-child) {
    margin: 0 !important;
  }
</style>
