<template>
    <div class="container">
        <router-link :to="{ name: 'student.index' }" class="btn btn-primary">Go back</router-link>

        <div class="col-md-4">
            <div class="card-header">
                Edit Record
            </div>

            <!-- show errors -->
            <show-error :feedback="feedback"></show-error>

            <div class="card-body">
                <form @submit.prevent="updateDate">
                    <div class="form-group">
                        <label>Student Name</label>
                        <input type="text" v-model="student.name" class="form-control" placeholder="Student Name Here">

                    </div>

                    <div class="form-group">
                        <label>Student Address</label>
                        <input type="text" v-model="student.address" class="form-control" placeholder="Student Address Here">
                        
                    </div>

                    <div class="form-group">
                        <label>Phone</label>
                        <input type="text" maxlength="11" v-model="student.phone" class="form-control" placeholder="Phone Here">
                        
                    </div>

                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="button" class="btn btn-warning" @click="reset">Reset</button>
                    <button type="button" class="btn btn-warning" @click="clear">Clear</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import API_URL from '@/js/config';
    import ShowError from '@/views/components/ShowError.vue';

    export default {
        components: {
            ShowError
        },
        name: "Student",
        data() {
            return {
                student: {},
                backup: {},
                feedback: {},
            }
        },
        created() {
            this.StudentLoad();
        },
        methods: {
            StudentLoad() {
                var page = API_URL + "/" + this.$route.params.id;
                axios.get(page)
                    .then(({ data }) => {
                        this.student = data; // Use spread operator to create a copy
                        this.backup = { ...data };
                    });
            },
            clear() {
                this.student.name = '';
                this.student.address = '';
                this.student.phone = '';
                this.feedback = {};
            },
            reset() {
                this.student = { ...this.backup }; // Reset student to backup
            },
            updateDate() {
                var editRecord = API_URL + "/" + this.student.id;
                axios.put(editRecord, this.student)
                    .then(({ data }) => {
                        alert("Updated!");
                        this.StudentLoad();
                        this.clear();
                        this.$router.push({ name: 'student.index' });
                }).catch(error => {
                        this.feedback = error.response.data;
                });
            },
        }
    }
</script>