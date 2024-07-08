<template>
  <div>
    <h1
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-theme-main transition-colors duration-300"
    >
      <slot name="header" />
    </h1>

    <slot name="default" />
  </div>
</template>
