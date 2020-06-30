<template>
  <div>
    <div>User detail</div>
    <div>The param is {{userid}}</div>
  </div>
</template>
<script>
export default {
  name: 'user-detail',
  props: ['userid']
}
</script>
