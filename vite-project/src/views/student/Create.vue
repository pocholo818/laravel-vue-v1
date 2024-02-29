<template>
    <div class="container">
        <router-link :to="{ name: 'student.index' }" class="btn btn-primary">Go back</router-link>

        <div class="col-md-4">
            <div class="card-header">
                Add Record
            </div>

            <!-- show errors -->
            <show-error :feedback="feedback"></show-error>

            <div class="card-body">
                <form @submit.prevent="saveData">
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
                feedback: {},
            }
        },
        methods: {
            saveData() {
                axios.post(API_URL, this.student)
                    .then(({ data }) => {
                        alert("Saved!");
                        this.clear();
                    }).catch(error => {
                        this.feedback = error.response.data;
                        // console.log(this.feedback.errors);
                        // console.log(error.response.data);
                    });
            },
            clear() {
                this.student.name = '';
                this.student.address = '';
                this.student.phone = '';
                this.feedback = {};
            }
        }
    }
</script>