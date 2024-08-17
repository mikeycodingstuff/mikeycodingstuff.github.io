<template>
  <div>
    <div class="p-10">
      <div class="flex justify-center">
        <header
          class="text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-theme-main transition-colors duration-300"
        >
          <slot name="header" />
        </header>
      </div>
      <slot name="sub" />
    </div>

    <slot name="default" />
  </div>
</template>
