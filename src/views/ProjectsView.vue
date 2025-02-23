<script setup lang="ts">
import ExternalLink from '@/components/nav/ExternalLink.vue';
import ProjectCard from '@/components/projects/ProjectCard.vue';
</script>

<template>
  <div class="text-center p-4 lg:p-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 xl:gap-24 justify-items-center">
      <project-card
        project-name="Best Pokémon"
        github-link="https://github.com/mikeycodingstuff/best-pokemon"
        live-link="https://best-pokemon.netlify.app/"
        screenshot="/screenshots/best-pokemon.png"
        alt="screenshot of the best pokemon website"
      >
        <p>
          Best Pokémon is a very simple app where the user is presented with two Pokémon and can
          vote for their favourite. I enjoy making little projects in my spare time but had never
          deployed something to production myself before, so this is something I quickly spun up in
          a weekend to learn how! It is a
          <external-link link="https://vuejs.org/guide/introduction">Vue</external-link>
          frontend deployed on
          <external-link link="https://www.netlify.com/">Netlify</external-link>
          that pulls from a
          <external-link link="https://supabase.com/">Supabase</external-link>
          database. It deploys from main when the branch is updated in GitHub, and also has a
          maintenance branch that I can publish to set the site in maintenance mode. I plan on
          adding a section to show the wins/losses percentage for each Pokémon.
        </p>
      </project-card>
      <project-card
        project-name="Dunkin' Bisquids"
        github-link="https://github.com/iO-Academy/2022-jul-DunkinBisquids"
        live-link="https://dev.io-academy.uk/projects/2022-july/dunkin-bisquids/index.php"
        screenshot="/screenshots/dunkin-bisquids.png"
        alt="screenshot of the dunkin bisquids website"
      >
        <p>
          Dunkin' Bisquids is an object-oriented PHP project, styled with bootstrap, that fetches
          and displays a list of biscuits from a MySQL database. We used the hydrator entity design
          pattern to populate the app with data and a viewhelper to display it on the front end. We
          managed namespacing and autoloading using Composer and attempted to follow the SOLID
          principles where possible. Testing was performed with PHPUnit and custom exception
          handling was used to deal with errors. This was built during my time at iO Academy, where
          all of our projects were undertaken as a team with an Agile approach using Scrum
          methodology.
        </p>
      </project-card>
    </div>

    <div class="self-end">
      <p class="mt-6 text-2xl self-end">
        Feel free to check out my
        <external-link link="https://github.com/mikeycodingstuff">GitHub</external-link>
        to view my other work!
      </p>
    </div>
  </div>
</template>
