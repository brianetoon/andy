<template>
    <nav>
        <h2 class="nav-title">UX Andy</h2>
        <img src="@/assets/icons/hamburger.svg" class="hamburger" alt="hamburger">
    </nav>
</template>

<script>
export default {

}
</script>

<style>
nav {
    background: #000000;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 18px;
}
.nav-title {
    font-size: 16px;
    font-weight: 700;
}
.hamburger {
    width: 42px;
}
</style>