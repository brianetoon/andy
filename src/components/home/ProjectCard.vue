<template>
    <div class="project-card" :class="project.gradient">
        <router-link :to="{ name: 'ProjectDetails', params: { slug: project.slug } }">

            <div class="card-content">
                <h3>{{ project.title }}</h3>
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
    border-radius: 4px;
}
.project-card .card-content {
    background: var(--background);
    padding: 30px;
    transition: background 0.35s;
    -webkit-transition: background 0.35s;
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
    margin-left: 14px;
}
.project-card .learn-more {
    font-weight: 700;
    font-size: 18px;
    text-decoration: underline;
    display: flex;
    align-items: center;
    color: white;
}
.learn-icon {
    margin-left: 8px;
    transition: 0.35s;
    -webkit-transition: 0.35s;
}

/* Dynamic Classes */
.bread-easypay {
    background: var(--blue-gradient);
}
.lamden {
    background: var(--purple-gradient);
}
.lambdoge {
    background: var(--gold-gradient);
}
.nebula {
    background: var(--pink-gradient);
}
.bread-account-center {
    background: var(--green-gradient);
}

/* Media Queries */
@media screen and (min-width: 768px) {
    .project-card .card-content {
        padding: 50px 70px;
    }
}

@media screen and (min-width: 900px) {
    .project-card .learn-more {
        font-size: 20px;
    }
}

@media screen and (min-width: 1200px) {
    .project-card .card-content {
        padding: 70px 90px;
    }
    .project-card .learn-more {
        font-size: 22px;
    }
    .learn-icon {
        width: 26px;
    }
}
</style>