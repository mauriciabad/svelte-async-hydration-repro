<script>
  let count = $state(0);
</script>

{#if await Promise.resolve(true)}
  <input />
  {#if true}
    <button onclick={() => count++}>Clicked {count}</button>
  {/if}
{/if}
