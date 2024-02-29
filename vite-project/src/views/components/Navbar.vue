<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <router-link :to="{name: 'student.index'}" class="navbar-brand p-2">Silos University</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'student.index'}" class="nav-link">Students</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>