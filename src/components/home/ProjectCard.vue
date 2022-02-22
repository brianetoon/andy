<template>
    <div class="project-card" :class="project.gradient">
        <router-link :to="{ name: 'ProjectDetails', params: { slug: project.slug } }">

            <div class="card-content">
                <h2>{{ project.title }}</h2>
                <p>{{ project.lead }}</p>
                <span class="learn-more">
                    Learn More<img src="@/assets/icons/learn_more.svg" class="learn-icon">
                </span>
            </div>

        </router-link>
    </div>
</template>

<script>
export default {
    props: ['project']
}
</script>

<style>
.project-card {
    margin: 30px auto;
    padding: 5px;
}
.project-card .card-content {
    background: var(--background);
    padding: 30px;
    transition: background 0.4s;
}
.project-card p {
    margin: 15px 0 25px;
    max-width: 500px;
}
.project-card a {
    color: white;
}
.project-card a:hover .card-content {
    background: none;
}
.project-card a:hover .learn-icon {
    padding-left: 12px;
}
.project-card .learn-more {
    font-weight: 700;
    font-size: 17px;
    text-decoration: underline;
    display: flex;
    align-items: center;
    color: white;
}
.learn-icon {
    padding-left: 6px;
    transition: 0.4s;
}

/* Dynamic Classes */
.lamden {
    background: linear-gradient(to right, #7949FC, #BE17FB);
}
.lambdoge {
    background: linear-gradient(to right, #F9AB34, #FFE68E, #F9AB34);
}
.nebula {
    background: linear-gradient(to right, #FF66DF, #FF00C9, #CC00A1);
}
.blender {
    background: linear-gradient(to right, #39DB80, #05D6A4);
}

/* Media Queries */
@media screen and (min-width: 768px) {
    .project-card .card-content {
        padding: 50px 70px;
    }
}

@media screen and (min-width: 900px) {
    .project-card a {
        font-size: 18px;
    }
}

@media screen and (min-width: 1200px) {
    .project-card .card-content {
        padding: 70px 90px;
    }
}

</style>