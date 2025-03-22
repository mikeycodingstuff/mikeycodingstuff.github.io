<template>
  <div class="p-4">
    <div class="flex flex-col justify-center m-4">
      <header
        class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-theme-main transition-colors duration-300"
      >
        <slot name="header" />
      </header>

      <slot name="sub" />
    </div>

    <slot name="default" />
  </div>
</template>
