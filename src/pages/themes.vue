<template>
  <div>
    <div class="flex flex-col md:flex-row items-center p-3 gap-y-10">
      <div class="text-2xl max-w-2xl p-3">
        <p class="leading-normal text-pretty">
          Use this theme-switcher to change the theme!
        </p>
        <!--        TODO: implement command bar -->
        <!--        <p class="leading-normal text-pretty"> -->
        <!--          Use this theme-switcher, or hit -->
        <!--          <span class="text-theme-accent-alt">`Esc`</span> to change the theme! -->
        <!--        </p> -->
        <br>
        <p class="leading-normal">
          Heavily inspired by
          <ExternalLink to="https://monkeytype.com" name="monkeytype" />.
        </p>
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  </div>
</template>
