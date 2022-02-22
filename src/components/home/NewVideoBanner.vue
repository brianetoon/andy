<template>
    <section id="video-banner">
        <video autoplay muted loop>
            <source src="@/assets/videos/globe.mp4" type="video/webm">
            Your browser does no support HTML5 video
        </video>

        <div class="overlay">
            <div class="content">
                <h1>Designing for Web3</h1>
                <p>When did design get so serious? <br> Let's create <span class="highlight">fun</span>, <span class="highlight">inspiring</span>, and <span class="highlight">imaginative</span> digital experiences.</p>
                <a href="mailto: uxandyphil@gmail.com" class="btn btn-outline">
                    Email Me
                </a>
                <IconBar />
                <p class="sub-text">
                    Curious about this background image?<br>It's an NFT I purchased for fun 
                    <a href="https://opensea.io/assets/0xd305e3885a9ac0d77bfd8b6c954e357b04b3623d/156" 
                        class="link" target="_blank">here</a>.
                </p>
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
    background: rgba(0, 0, 0, 0.5);
}
#video-banner .content {
    height: inherit;
    padding: 30px;
    position: relative;
    margin: 0 auto;
}
#video-banner .content > * {
    margin-bottom: 20px;
}
.highlight {
    color: var(--primary);
}
#video-banner .btn {
    margin: 40px auto 20px;
}
#video-banner .sub-text {
    white-space: nowrap;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%)
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
        margin: 40px 0 20px;
        max-width: 200px;
    }
    #video-banner .icon-bar {
        margin: 0 10px;
    }
    #video-banner .sub-text {
        left: 40px;
        transform: translateX(0);
        bottom: 15px;
        text-align: left;
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
    #video-banner .sub-text {
        left: 50px;
        bottom: 40px;
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