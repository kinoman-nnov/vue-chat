<template lang="pug">
  .user-component
    avatar-comp(
      size="2.7"
      :src="userPic"
    )
    div(
      :class=['user-container', {'user-container--with-btn': !plain} ]
    )
      .username {{ name }}
      .user-occupation {{ occupation }}
      div(
        v-if="!plain"  
      )
        button(
          type="button"
          @click="$emit('handleClick', 'logout')"
          class="btn user__btn"
        ).buttons.user__button Выйти
</template>

<script>
import avatar from "../../components/avatar";

export default {
  props: {
    plain: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: "John"
    },
    occupation: {
      default: "Philanthropist"
    }
  },
  components: {
    avatarComp: avatar
  },
  methods: {
    userPic() {
      return ""
    }
  }
  
}
</script>

<style lang="postcss" scoped>
  .user-component {
    display: flex;
    align-items: center;
  }
</style>