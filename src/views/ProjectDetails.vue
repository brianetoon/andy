<template>
    <main class="project-details">
      <Banner :banner="project.banner" />
      <FinalProduct :finalProduct="project.finalProduct"/>
      <Problem :problem="project.problem"></Problem>
      <CompetitiveExamples :examples="project.examples"
                           v-if="project.slug === 'lambdoge' || project.slug === 'nebula'">
      </CompetitiveExamples>
      <Personas :personas="project.personas" v-if="project.slug === 'lamden'"></Personas>
      <Wireframes :wireframes="project.wireframes"
                  :slug="project.slug"
                  v-if="project.slug === 'blender'">
      </Wireframes>
      <Fonts :fonts="project.fonts" v-if="project.slug !== 'lamden'"></Fonts>
      <Stickers :stickers="project.stickers" v-if="project.slug === 'lambdoge'"></Stickers>
      <UserScenarios :scenarios="project.scenarios" v-if="project.slug === 'lamden'"></UserScenarios>
      <Flows :flows="project.flows" v-if="project.slug === 'lamden'"></Flows>
      <Wireframes :wireframes="project.wireframes"
                  :slug="project.slug"
                  v-if="project.slug === 'lamden'">
      </Wireframes>
      <Usability v-if="project.slug === 'lamden'"></Usability>
      <Launch :launch="project.launch" :slug="project.slug"></Launch>
      <Work :work="project.work" v-if="project.slug === 'lamden'"></Work>
    </main>
</template>

<script>
import store from '@/store.js'
import { computed } from '@vue/reactivity'
import ProjectNav from '@/components/navigation/project_navigation/ProjectNav.vue'
import Banner from '@/components/project_details/Banner.vue'
import FinalProduct from "@/components/project_details/FinalProduct";
import Problem from "@/components/project_details/Problem";
import Personas from "@/components/project_details/Personas";
import UserScenarios from "@/components/project_details/UserScenarios";
import Flows from "@/components/project_details/Flows";
import Wireframes from "@/components/project_details/Wireframes";
import Usability from "@/components/project_details/Usability";
import Launch from "@/components/project_details/Launch";
import Work from "@/components/project_details/Work";
import CompetitiveExamples from "@/components/project_details/CompetitiveExamples";
import Fonts from "@/components/project_details/Fonts";
import Stickers from "@/components/project_details/Stickers";

export default {
    props: ['slug'],
    components: {
      FinalProduct,
      ProjectNav,
      Banner,
      Problem,
      Personas,
      UserScenarios,
      Flows,
      Wireframes,
      Usability,
      Launch,
      Work,
      CompetitiveExamples,
      Fonts,
      Stickers
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
