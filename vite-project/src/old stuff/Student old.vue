<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <h3 class="text-center text-dark mt-2">Laravel Vue js crud</h3>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="card-header">
                    Add Record
                </div>

                <div class="card-body">
                    <form @submit.prevent="save">
                        <div class="form-group">
                            <label>Student Name</label>
                            <input type="text" v-model="formData.name" class="form-control" placeholder="Student Name Here">

                        </div>

                        <div class="form-group">
                            <label>Student Address</label>
                            <input type="text" v-model="formData.address" class="form-control" placeholder="Student Address Here">
                            
                        </div>

                        <div class="form-group">
                            <label>Phone</label>
                            <input type="text" maxlength="11" v-model="formData.phone" class="form-control" placeholder="Phone Here">
                            
                        </div>

                        <button type="submit" class="btn btn-primary">Save</button>
                        <button class="btn btn-warning" @click="clear">Clear</button>
                    </form>
                </div>
            </div>

            <div class="col-md-8">
                <h2>Student List</h2>

                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Option</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="student in result" v-bind:key="student.id">
                            <td scope="col">{{ student.id }}</td>
                            <td scope="col">{{ student.name }}</td>
                            <td scope="col">{{ student.address }}</td>
                            <td scope="col">{{ student.phone }}</td>
                            <td>
                                <button type="button" class="btn btn-warning" @click="edit(student)">Edit</button>
                                <button type="button" class="btn btn-danger" @click="remove(student)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>

    <router-link to="/" active-class="btn-secondary" class="btn btn-primary">Home</router-link>
    <router-link :to="{name: 'student.create'}" active-class="btn-secondary" class="btn btn-primary">create</router-link>

    <router-view></router-view>
</template>

<script>
    import axios from 'axios';
    import API_URL from '@/js/config';

    export default {
        name: "Student",
        data() {
            return {
                api_url: API_URL,
                // api_url: process.env.API_URL,
                // api_url: "http://laravel-vue-crud-2.test/api/student",
                result: {},
                // student: {
                //     id: "",
                //     name: "",
                //     address: "",
                //     phone: ""
                // },
                formData: {
                    name: "",
                    address: "",
                    phone: ""
                }
            }
        },
        created() {
            this.StudentLoad();
        },
        methods: {
            StudentLoad() {
                var page = this.api_url;
                axios.get(page)
                    .then(({ data }) => {
                        // console.log(data);
                        this.result = data;
                    });
            },
            save() {
                if (this.formData.id == '') {
                    this.saveData();
                } else {
                    this.updateDate();
                }
            },
            saveData() {
                axios.post(this.api_url, this.formData)
                    .then(({ data }) => {
                        alert("Saved!");
                        this.StudentLoad();
                        this.clear();
                    });
            },
            clear() {
                this.formData.id = '';
                this.formData.name = '';
                this.formData.address = '';
                this.formData.phone = '';
            },
            edit(student) {
                this.student = student;
                this.formData = Object.assign({}, student); // Copy student data to formData
            },
            updateDate() {
                var editRecord = this.api_url + this.student.id;
                axios.put(editRecord, this.formData) // Use formData to update the record
                    .then(({ data }) => {
                        alert("Updated!");
                        this.StudentLoad();
                        this.clear();
                });
            },
            // updateDate() {
            //     var editRecord = this.api_url + this.student.id;
            //     axios.put(editRecord, this.student)
            //         .then(({ data }) => {
            //             alert("Updated!");
            //             this.StudentLoad();
            //             this.clear();   
            //         });
            // },
            remove(student) {
                var url = this.api_url + student.id;
                axios.delete(url)
                    .then(() => {
                        alert("Deleted!");
                        this.StudentLoad();
                    });
            }
        }
    }
</script>
