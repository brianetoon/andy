<template>
    <section class="project-banner" :class="banner.background">
      <div class="container full-height">
        <div class="row full-height v-center">
          <div :class="banner.colWidth">
            <h1>{{ banner.title }}</h1>
            <p>{{ banner.text }}</p>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    props: ['banner']
}
</script>

<style>

.project-banner {
    height: var(--hero-height);
    width: 100%;
}
.project-banner h1 {
    margin-bottom: 20px;
}
.project-banner .container {
  max-width: 1120px;
}

/* Dynamic Classes */
.bread-account-center-banner {
    background-image: url('../../assets/images/banners/account_center_banner.png');
    background-size: cover;
    background-position: center;
}
.bread-easypay-banner {
    background-image: url('../../assets/images/banners/easypay_banner.png');
    background-size: cover;
    background-position: center;
}
.lamden-banner {
    background-image: url('../../assets/images/banners/lamden_banner.png');
    background-size: cover;
    background-position: center;
}
.lambdoge-banner {
    background: radial-gradient(37.19% 146.49% at 45.98% 49%, #FFE68E 0%, #F9AB34 100%);
}

.lambdoge-banner p {
  max-width: 550px;
  width: 100%;
}

.lambdoge-banner > * {
    color: black;
}
.nebula-banner {
    background: linear-gradient(95.06deg, #FF66DF 2.48%, #FF00C9 27.7%, #CC00A1 56.28%);
}
.blender-banner {
    background: linear-gradient(95.08deg, #39DB80 2.49%, #05D6A4 97.19%);
}

@media (max-width: 991px) {
  .project-banner {
    height: var(--hero-height-tablet);
  }
}

@media screen and (min-width: 992px) {
    .project-banner .container {
        padding: 0 50px;
    }
}

@media (max-width: 480px) {
  .project-banner {
    height: var(--hero-height-mobile);
  }
  .lambdoge-banner h1 {
    width: 290px;
  }
}

</style>
