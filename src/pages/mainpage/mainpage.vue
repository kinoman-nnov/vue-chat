<template lang="pug">
.mainpage-component
  .left-side
    .left-side-container.side-container
      .users-container
        .user-info
          user-comp(
            name="John"
            occupation="Philanthropist"
          )
        .users-list
  .right-side
    .right-side-container.side-container
      .messages-container
        .messages-list
      .input-container
        .input-line
          app-input(
            placeholder="Message"
            
            @input="showInput"
          )
        .btn
          app-button(
            :disabled="isSubmitDisabled" typeAttr="submit" title="Send"
          )

</template>

<script>
import user from '../../components/user';
import appInput from '../../components/input';
import appButton from '../../components/button';

export default {
  data: () => ({
    isSubmitDisabled: false
  }),
  methods: {
    showInput(e) {
      console.log(e)
    }
  },
  components: {
    appInput,
    appButton,
    userComp: user
  }
}
</script>


<style lang="postcss" scoped>
  .mainpage-component {
    display: flex;
    height: 100%;
    padding: 5px 0 5px 0;
  }

  .left-side {
    width: 30%;
    border-right: 2px solid #000;
  }

  .right-side {
    width: 70%;
  }

  .right-side-container{
    height: 100%;
  }

  .side-container {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .messages-container {
    flex: 1;
  }

  .input-container {
    display: flex;
    align-items: center;
  }

  .input-line {
    flex-grow: 1;
  }
</style>
