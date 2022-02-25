<template>
    <main class="project-details">
      <Banner :banner="project.banner" />
      <FinalProduct :finalProduct="project.finalProduct"/>
      <Problem :problem="project.problem"></Problem>
      <CompetitiveExamples :examples="project.examples" v-if="project.slug === 'lambdoge'"></CompetitiveExamples>
      <Personas :personas="project.personas" v-if="project.slug === 'lamden'"></Personas>
<!--      <UserScenarios :scenarios="project.scenarios"></UserScenarios>-->
<!--      <Flows :flows="project.flows"></Flows>-->
<!--      <Wireframes :wireframes="project.wireframes"></Wireframes>-->
<!--      <Usability></Usability>-->
<!--      <Launch :launch="project.launch" :slug="project.slug"></Launch>-->
<!--      <Work :work="project.work"></Work>-->
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
      CompetitiveExamples
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
  }
  .lamden-border {
    background: var(--border-grey);
  }
  .lambdoge-border {
    background: radial-gradient(37.19% 146.49% at 45.98% 49%, var(--gr-gold-dk) 0%, var(--gr-gold-lt) 100%);
  }
</style>
