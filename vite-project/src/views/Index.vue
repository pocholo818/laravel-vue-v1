<template>
    <h1>this is index</h1>
</template>


<script>
    // import axios from 'axios';
    // import API_URL from '../js/config';

    export default {
        name: "Student",
        data() {
            return {
                result: {},
            }
        },
        created() {
            // this.StudentLoad();
        },
        methods: {
            // StudentLoad() {
            //     var page = API_URL;
            //     axios.get(page)
            //         .then(({ data }) => {
            //             this.result = data;
            //         });
            // },
        }
    }
</script>
