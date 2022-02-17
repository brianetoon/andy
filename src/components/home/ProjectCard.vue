<template>
    <div class="project-card" :class="project.gradient">
        <div class="card-content">
            <h2>{{ project.title }}</h2>
            <p>{{ project.lead }}</p>
            <router-link :to="{ name: 'ProjectDetails', params: { slug: project.slug } }">
                Learn More<img src="@/assets/icons/learn_more.svg" class="learn-icon">
            </router-link>
        </div>
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
}
.project-card p {
    margin: 15px 0 25px;
    max-width: 500px;
}
.project-card a {
    font-weight: 700;
    font-size: 17px;
    text-decoration: underline;
    display: flex;
    align-items: center;
    color: white;
}
.learn-icon {
    padding-left: 6px;
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