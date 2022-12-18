<template>
    <div class="search">
        <input
            type="text"
            class="search__input"
            placeholder="Search your books "
        />
        <button class="search__icon" type="button">
            <span class="material-symbols-outlined">search</span>
        </button>
    </div>
</template>

<style lang="scss">
@import "../styles/main.scss";

.search {
    display: none;
    border-radius: var(--border-radius-m);
    background: var(--bg);
    flex: 2;

    &__input {
        border-radius: var(--border-radius-m);
        background: var(--bg);
        width: 100%;
        box-sizing: border-box;
        border: none;
        font-size: var(--font-size-m);
        line-height: 27px;
        color: var(--dark-grey);
        padding: 15px 20px;

        &::placeholder {
            color: var(--placeholder);
        }

        &:focus,
        &:hover {
            outline: none;
        }
    }

    &__icon {
        width: 27px;
        height: 27px;
        margin-right: 10px;
        margin-top: auto;
        margin-bottom: auto;
        order: 1;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
}

@include desktop {
    .search {
        display: inline-flex;
    }
}
</style>
