<template>
  <div class="avatar-component">
    <div :class="['avatar-container', { bordered: active }]" :style="measures">
      <div class="image">
        <img v-bind="$attrs" alt="user picture" />
      </div>
    </div>
    <div class="user-container">
      <div class="username">{{ name }}</div>
      <div class="usersurname">{{ surname }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'имя'
    },
    surname: {
      type: String,
      default: 'фамилия'
    },
    size: {
      type: String,
      default: '3'
    },
    active: Boolean
  },
  computed: {
    measures () {
      const size = Number(this.size)
      return {
        width: `${size}rem`,
        height: `${size}rem`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-component {
  display: flex;
  align-items: center;
}
.avatar-container {
  overflow: hidden;
  border-radius: 50%;
  margin-right: 18px;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.bordered {
  box-shadow: 0 0 5px 0 rgb(0, 128, 107);
}

.username {
  font-weight: 900;
}

.usersurname {
  font-weight: 900;
}
</style>
