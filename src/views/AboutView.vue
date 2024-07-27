<script setup lang="ts">
import AboutParagraph from '@/components/about/AboutParagraph.vue';
import ExternalLink from '@/components/nav/ExternalLink.vue';
import InternalLink from '@/components/nav/InternalLink.vue';
</script>

<template>
  <div>
    <div class="flex flex-col space-y-10">
      <about-paragraph>
        Coding for me started with a bootcamp; the full stack dev course at
        <external-link link="https://io-academy.uk/">iO Academy</external-link>. Through the 16 week
        course I not only learnt all about full stack development, but worked together with my
        cohort on several <internal-link link="/projects">group projects</internal-link>. The
        projects were run following
        <external-link link="https://en.wikipedia.org/wiki/Agile_software_development"
          >Agile methodology</external-link
        >
        to get us used to what it would be like to work in a real dev team. I really enjoyed my time
        at iO and all the people there were great!
      </about-paragraph>
      <about-paragraph>
        The academy helped prepare me for my first job in many aspects; coding knowledge and skills,
        experience working within a small development team, projects for a portfolio, advice on
        writing a CV and applying for jobs, etc. However, trying to get my first tech job as someone
        with no experience was still very difficult and I ended up applying for over 300 roles
        before becoming successful!
      </about-paragraph>
      <about-paragraph>
        Eventually I landed a job at
        <external-link link="https://rework.digital/">Rework Digital</external-link>, where I work
        currently. It's everything I could've hoped for when I first thought about getting into
        coding; fully remote, a great small team of nice people, freedom to work on my own but with
        support there if I need it, an Agile approach to software development. I have worked on a
        few different things but the majority of my time has been spent developing an API in
        <external-link link="https://laravel.com/">Laravel</external-link>. I really liked Laravel
        when I first started using it, and I'm liking it more and more as I become more experienced
        with it.
      </about-paragraph>
      <about-paragraph>
        Since discovering coding I've loved constantly learning new things and developing my
        abilities. Coding is a hobby for me as well as being a job, and I enjoy making small things
        and learning new languages/frameworks/patterns etc. in my spare time. Check out my
        <external-link link="https://github.com/mikeycodingstuff">GitHub</external-link> for some
        examples!
      </about-paragraph>
    </div>
  </div>
</template>
