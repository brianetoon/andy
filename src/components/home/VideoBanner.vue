<template>
    <section class="video-banner">
        <video autoplay muted loop>
            <source src="@/assets/videos/video.webm" type="video/webm">
            Your browser does no support HTML5 video
        </video>

        <div class="overlay">
            <div class="content">
                <h1>Designing for Web3</h1>
                <p>When did design get so serious? <br> Let’s create <span class="highlight">fun</span>, <span class="highlight">inspiring</span>, and <span class="highlight">imaginative</span> digital experiences.</p>
                <button>Email Me</button>
                <IconBar />
                <p class="sub-text">Curious about this background image?<br>It’s an NFT I purchased for fun <a href="#" class="link">here</a>.</p>
            </div>
        </div>

    </section>
</template>

<script>
import IconBar from '../IconBar.vue'
export default {
    components: { IconBar }
}
</script>

<style>
.video-banner {
    width: 100%;
    position: relative;
    height: 420px;
    overflow: hidden;
    text-align: center;
}
video {
    width: 100%;
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.overlay {
    height: inherit;
    background: rgba(0, 0, 0, 0.5);
}
.content {
    height: inherit;
    padding: 30px 40px;
    position: relative;
}
.content > * {
    margin-bottom: 20px;
}
.highlight {
    color: var(--primary);
}
.video-banner button {
    margin: 40px auto 20px;
}
.video-banner .sub-text {
    white-space: nowrap;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%)
}
</style>