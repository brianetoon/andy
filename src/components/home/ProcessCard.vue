<template>
    <div class="process-card" :class="item.classes">
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
.blue-gradient-card {
    background: var(--blue-gradient);
}
.blue-gradient-card > * {
    color: var(--gr-blue-lt);
}
.pink-gradient-card {
    background: var(--pink-gradient);
}
.pink-gradient-card > * {
    color: var(--gr-pink-extra-lt);
}
.gold-gradient-card {
    background: var(--gold-gradient);
}
.gold-gradient-card > * {
    color: var(--gr-gold-lt);
}
.lavender-gradient-card {
    background: var(--lavender-gradient);
}
.lavender-gradient-card > * {
    color: var(--gr-lavender-lt);
}
.green-gradient-card {
    background: var(--green-gradient);
}
.green-gradient-card > * {
    color: var(--gr-green-dk)
}

/* Media Queries */
@media screen and (min-width: 1200px) {
    .process-card .card-content {
        padding: 40px;
    }
}

</style>