<template>
            <div class="row center">
                <div class="col-9 col-md-13 col-xs-16">
                    <h4 class="top-2">Deliverables</h4>
                    <ul class="deliverables top-1">
                        <li v-for="(deliverable, i) in deliverables" :key="i">
                            {{ deliverable }}
                        </li>
                    </ul>
                </div>
            </div>
</template>

<script>
export default {
    props: ['deliverables']
}
</script>

<style>
:root {
    --list-spacing: 12px;
}
ul.deliverables {
    margin-left: calc(-1 * var(--list-spacing));
    margin-right: calc(-1 * var(--list-spacing));
    padding-left: 16px;
}
ul.deliverables li {
    position: relative;
    padding-left: var(--list-spacing);
    padding-right: var(--list-spacing);
    margin: 0 0 12px;
    display: inline-block;
    width: 50%;
}
ul.deliverables li:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--white);
    top: 7px;
    left: -2px;
}

@media (max-width: 480px) {
    ul.deliverables li {
        display: block;
        width: 100%;
    }
}
</style>