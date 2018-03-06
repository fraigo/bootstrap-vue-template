Vue.component('bjumbo', {
    props:[
        "title",
        "content",
        "label",
        "link"
    ],
    template: `
    <div class="jumbotron">
        <h1>{{title}}</h1>
        <p class="lead">{{content}}<slot></slot></p>
        <a class="btn btn-lg btn-primary" v-bind:href="link" role="button">{{label}}</a>
    </div>
    `
    
  })