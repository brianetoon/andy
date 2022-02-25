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
.understand {
    background: var(--blue-green-gradient);
}
.understand > * {
    color: var(--gr-blue-green-dk);
}
.design {
    background: var(--pink-gradient);
}
.design > * {
    color: var(--gr-pink-extra-lt);
}
.prototype {
    background: var(--gold-gradient);
}
.prototype > * {
    color: var(--gr-gold-lt);
}
.deliver {
    background: var(--lavender-gradient);
}
.deliver > * {
    color: var(--gr-lavender-lt);
}

/* Media Queries */
@media screen and (min-width: 1200px) {
    .process-card .card-content {
        padding: 40px;
    }
}

</style>