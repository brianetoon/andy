<template>
    <main class="project-details">
      <Banner :banner="project.banner" />
      <ProjectSection v-for="(section,i) in project.sections" 
        :key="i" :section="section"/>
    </main>
</template>

<script>
import store from '@/store.js'
import { computed } from '@vue/reactivity'
import ProjectNav from '@/components/navigation/project_navigation/ProjectNav.vue'
import Banner from '@/components/project_details/Banner.vue'
import ProjectSection from '@/components/project_details/ProjectSection.vue'

export default {
    props: ['slug'],
    components: {
      ProjectSection,
      ProjectNav,
      Banner
    },
    setup(props) {

        const project = computed(() => {
            return store.projects.find(project => {
                return project.slug === props.slug
            })
        })

        return { project }
    }
}
</script>

<style>
  .project-details section:nth-child(2n+3) {
    background: var(--grey);
  }

  img {
    display: block;
    max-width: 100%;
  }
  .project-details {
    overflow-x: hidden;
  }
  .image-small {
    width: 292px;
  }
  .image-medium {
    width: 535px;
  }
  .lamden-border {
    background: var(--border-grey);
  }
  .lambdoge-border {
    background: radial-gradient(37.19% 146.49% at 45.98% 49%, var(--gr-gold-dk) 0%, var(--gr-gold-lt) 100%);
  }
  .image-row {
    margin-left: calc(-1 * var(--image-row-spacing));
    margin-right: calc(-1 * var(--image-row-spacing));
  }
  .image-col {
    padding-left: var(--image-row-spacing);
    padding-right: var(--image-row-spacing);
  }
  section.padding-default {
    padding: var(--spacing-lg) 0;
  }

  section.padding-default-top {
    padding: var(--spacing-lg) 0 0;
  }

  @media (max-width: 991px) {
    section.padding-default {
      padding: var(--spacing-md) 0;
    }

    section.padding-default-top {
      padding: var(--spacing-md) 0 0;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    .image-small {
      width: 270px;
    }
  }

  @media (max-width: 767px) {
    .image-row {
      margin-left: 0;
      margin-right: 0;
    }
    .image-col {
      padding: var(--image-row-spacing);
    }
    .image-col.no-mobile-horizontal-padding {
      padding-left: 0;
      padding-right: 0;
    }
    .image-small,
    .image-medium {
      width: auto;
    }
  }

  @media (max-width: 480px) {
    .image-col {
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
