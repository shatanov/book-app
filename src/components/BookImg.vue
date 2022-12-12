<template>
    <img class="book-img"
    :class="{
        'book-img--lg': size === 'lg',
        'book-img--xl': size === 'xl',
        'book-img--sm': size === 'sm',
    }" 
    :src="imgUrl" alt="book" />
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    props: {
        size: {
            type: Boolean,
            required: true
        },

        imgUrl: {
            type: String,
            required: false
        }
    }
})
</script>

<style scoped lang="scss">
    .book-img {
  &--lg {
    object-fit: cover;
    width: 140px;
    height: 232px;
    border-radius: var(--border-radius-m);
  }

  &--xl {
    object-fit: cover;
    width: 253px;
    height: 392px;
    border-radius: var(--border-radius-m);
  }

  &--sm {
    object-fit: cover;
    width: 143px;
    height: 222px;
    border-radius: var(--border-radius-m);
  }
}
</style>
