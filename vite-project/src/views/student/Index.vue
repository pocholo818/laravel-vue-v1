<template>
    <div class="card-contaier">
        <div class="card-header">
            <h2 class="float-start">Student List</h2>
            <router-link :to="{ name: 'student.create' }" class="btn btn-primary float-end"> Add new Student</router-link>
        </div>

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
                <tr v-for="student in student" v-bind:key="student.id">
                    <td scope="col">{{ student.id }}</td>
                    <td scope="col">{{ student.name }}</td>
                    <td scope="col">{{ student.address }}</td>
                    <td scope="col">{{ student.phone }}</td>
                    <td>
                        <button type="button" class="btn btn-warning" @click="edit(student.id)">Edit</button>
                        <button type="button" class="btn btn-danger" @click="remove(student)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import API_URL from '@/js/config';

    export default {
        name: "Student",
        data() {
            return {
                student: {},
            }
        },
        created() {
            this.StudentLoad();
        },
        methods: {
            StudentLoad() {
                var page = API_URL;
                axios.get(page)
                    .then(({ data }) => {
                        this.student = data;
                    });
            },
            edit(student) {
                this.$router.push({ name: 'student.edit', params: { id: student }});
            },
            remove(student) {
                if (confirm("Are you sure you want to delete this student?")) {
                    var url = API_URL + "/" + student.id;
                    axios.delete(url)
                        .then(() => {
                            alert("Deleted!");
                            this.StudentLoad();
                        });
                }
            }
        }
    }
</script>