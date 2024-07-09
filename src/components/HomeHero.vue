<template>
  <div>
    <div>
      <header
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-theme-main transition-colors duration-1000"
      >
        <slot name="header" />
      </header>
      <slot name="sub" />
    </div>

    <slot name="default" />
  </div>
</template>
