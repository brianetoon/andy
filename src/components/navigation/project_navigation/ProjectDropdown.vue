<template>
    <div class="project-dropdown">

        <div class="dropdown-button" 
            :class="{ open: showingDropdown, closed: !showingDropdown }"
            @click="toggleDropdown">
            <div class="button-content">
                <span class="button-text">Featured Projects</span>
                <img src="@/assets/icons/caret_down.svg" class="caret" v-if="!showingDropdown">
                <img src="@/assets/icons/caret_up.svg" class="caret" v-if="showingDropdown">
            </div>
        </div>

        <ProjectLinks @close="toggleDropdown"/>

    </div>
</template>

<script>
import gsap from 'gsap'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import ProjectLinks from './ProjectLinks.vue'

export default {
    components: { ProjectLinks },
    setup() {
        const showingDropdown = ref(false)

        const toggleDropdown = () => {
            if (showingDropdown.value === false) {
                animation.play()
            } else {
                animation.reverse()
            }
        }

        const toggle = () => showingDropdown.value = !showingDropdown.value
        
        let animation

        onMounted(() => {
            gsap.set('.project-links', {scaleY:0})
            gsap.set('.project-links li', {opacity:0, scale:0})
            animation = gsap.timeline({ 
                                        paused:true, 
                                        duration:0.3,
                                        onStart:toggle, 
                                        onReverseComplete:toggle
                                    })
                .to('.project-links', {scaleY:1, ease:'back'})
                .to('.project-links li', {scale:1, opacity:1, duration:0.3,
                        stagger:{amount:0.25, from:'end'}
                    }, '-=0.1')

        })

        return { showingDropdown, toggleDropdown }
    }
}
</script>

<style>
.project-dropdown {
    width: 100%;
    max-width: 200px;
    position: relative;
}
.dropdown-button {
    background: linear-gradient(to right, #7949FC, #BE17FB);
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
}
.project-dropdown .button-content {
    background: #151515;
    padding: 8px 16px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
}
.dropdown-button.open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: all 0.5s ease;
}
.dropdown-button.closed {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.5s ease;
}
.button-text {
    font-size: 17px;
}
.caret {
    width: 15px;
    margin-left: 10px;
}
.project-links {
    width: 100%;
    background: linear-gradient(to right, #7949FC, #BE17FB);
    position: absolute;
    padding: 0 2px 2px 2px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transform-origin: top;
}
.project-links .links {
    background: #151515;
    padding: 10px 0;
    border-radius: 3px;
}
.project-links li {
    transform-origin: left center;
}
.project-links a {
    padding: 10px 16px;
    width: 100%;
    display: inline-block;
}
.project-links a:hover {
    background: linear-gradient(to right, #7949FC, #BE17FB);
    color: white;
}

@media screen and (min-width: 900px) {
    .project-dropdown {
        max-width: 240px;
    }
    .button-text {
        font-size: 18px;
    }
}
</style>