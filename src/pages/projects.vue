<template>
  <div class="text-center p-4 lg:p-8">
    <div>
      <ProjectCard
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
          <ExternalLink to="https://vuejs.org/guide/introduction" name="Vue" />
          frontend deployed on
          <ExternalLink to="https://www.netlify.com/" name="Netlify" />
          that pulls from a
          <ExternalLink to="https://supabase.com/" name="Supabase" />
          database. It deploys from main when the branch is updated in GitHub, and also has a
          maintenance branch that I can publish to set the site in maintenance mode.
        </p>
      </ProjectCard>
    </div>

    <div class="self-end">
      <p class="mt-6 lg:text-2xl self-end">
        Check out my
        <ExternalLink to="https://github.com/mikeycodingstuff" name="GitHub" />
        to view my other work!
      </p>
    </div>
  </div>
</template>
