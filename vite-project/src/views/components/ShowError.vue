<template>
    <div v-if="feedback">
        <span style="color:red" v-text="feedback.message"></span>
        <ul>
            <li v-for="(item, index) in feedback.errors" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        feedback: {
            type: Object,
            required: true
        }
    }
}
</script>
