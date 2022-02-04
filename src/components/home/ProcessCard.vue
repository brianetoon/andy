<template>
    <div class="process-card" :class="item.gradient">
        <div class="card-content">
            <h2>{{ item.title }}</h2>
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
    background: linear-gradient(to right, #00BAC6, #C5FFAA);
}
.understand > * {
    color: #00BAC6;
}
.design {
    background: linear-gradient(to right, #FF66DF, #FF00C9, #CC00A1);
}
.design > * {
    color: #FF66DF;
}
.prototype {
    background: linear-gradient(to right, #F9AB34, #FFE68E, #F9AB34);
}
.prototype > * {
    color: #FFE68E;
}
.deliver {
    background: linear-gradient(to right, #E6B2FD, #9559FF);
}
.deliver > * {
    color: #E6B2FD;
}
</style>