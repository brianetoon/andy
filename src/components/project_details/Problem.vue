<template>
  <section class="problem bg-grey padding-default">
    <div class="container">
      <div class="row center">
        <div class="col-9">
          <h2 class="align-center bottom-1">The Problem</h2>
          <p>
            <span class="bold">The Problem:</span> {{ problem.intro }}
          </p>
          <h4 class="top-2">
            Deliverables
          </h4>
          <ul class="deliverables top-1">
            <li v-for="(deliverable, i) in problem.deliverables" :key="i">
              {{ deliverable }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['problem']
}
</script>

<style>
  ul.deliverables {
    padding-left: 16px;
  }
  ul.deliverables li {
    position: relative;
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
    left: -12px;
  }
</style>
