<template>
    <section id="video-banner">
        <video autoplay muted loop>
            <source src="@/assets/videos/video.webm" type="video/webm">
            Your browser does no support HTML5 video
        </video>

        <div class="overlay">
            <div class="content">
                <h1>Designing for Web3</h1>
                <p class="lead">When did design get so serious? <br> Let's create <span class="highlight">fun</span>, <span class="highlight">inspiring</span>, and <span class="highlight">imaginative</span> digital experiences.</p>
                <a href="mailto: uxandyphil@gmail.com" class="btn btn-outline btn-border-primary">
                    Email Me
                </a>
                <IconBar />
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
#video-banner {
    width: 100%;
    position: relative;
    display: block;
    height: 420px;
    overflow: hidden;
    text-align: center;
}
video {
    width: auto;
    height: 100%;
    z-index: -1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

}
.overlay {
    height: inherit;
    background: rgba(0, 0, 0, 0.3);
}
#video-banner .content {
    height: inherit;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#video-banner .content > * {
    margin-bottom: 30px;
}
.highlight {
    color: var(--primary);
}
.lead {
    font-size: 18px;
}


@media screen and (min-width: 740px) {
    video {
        width: 100%;
        height: auto;
    }
}

@media screen and (min-width: 768px) {
    #video-banner .content {
        text-align: left;
        padding: 30px 40px;
    }
    #video-banner .btn {
        margin: 0 0 30px;
        max-width: 220px;
    }
    #video-banner .icon-bar {
        margin: 0 10px;
    }
}
@media screen and (min-width: 900px) {
    #video-banner {
        height: 500px;
    }
    #video-banner .content {
        padding: 60px 50px;
        max-width: 1120px;
    }
    #video-banner .content > * {
        margin-bottom: 35px;
    }
    #video-banner .btn {
        margin-bottom: 25px;
        font-size: 19px;
    }
    .lead {
        font-size: 20px;
        line-height: 32px;
    }
}
@media screen and (min-width: 1200px) {
    #video-banner {
        height: 620px;
    }
    #video-banner .content {
        padding: 120px 50px;
    }
    #video-banner .sub-text {
        left: 50px;
        bottom: 80px;
    }
}
</style>
