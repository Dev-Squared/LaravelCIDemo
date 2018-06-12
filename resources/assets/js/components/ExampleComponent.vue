<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">String formatter</div>

                    <div class="card-body">
                        Enter a string to format:<br>
                        <input type="text" v-model="text" />
                        <br>
                        <button @click="format()">Format It!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        mounted() {
            console.log('mounted successfully');
        },
        data: function () {
            return {
                text: ''
            }
        },
        methods: {
            format() {                
                axios.post('/api/v1/format', {text: this.text})
                    .then(resp => {
                        console.log(resp.data);
                        this.text = resp.data;
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not format text");
                    });
            }
        }
    }
</script>
