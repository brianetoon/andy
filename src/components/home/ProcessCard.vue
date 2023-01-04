<template>
    <div class="process-card" :class="item.gradient">
        <div class="card-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>
.process-card {
    padding: 5px;
    border-radius: 10px;
}
.process-card p {
    margin: 15px 0;
    max-width: 500px;
}
.process-card .card-content {
    background: var(--background);
    padding: 30px;
    border-radius: 7px;
}

/* Dynamic Classes */
.understand, 
.learn {
    background: var(--blue-gradient);
}
.understand > *,
.learn > * {
    color: var(--gr-blue-lt);
}
.wireframe {
    background: var(--pink-gradient);
}
.wireframe > * {
    color: var(--gr-pink-extra-lt);
}
.design {
    background: var(--gold-gradient);
}
.design > * {
    color: var(--gr-gold-lt);
}
.prototype {
    background: var(--lavender-gradient);
}
.prototype > * {
    color: var(--gr-lavender-lt);
}
.user-test {
    background: var(--green-gradient);
}
.user-test > * {
    color: var(--gr-green-dk)
}

/* Media Queries */
@media screen and (min-width: 1200px) {
    .process-card .card-content {
        padding: 40px;
    }
}

</style>