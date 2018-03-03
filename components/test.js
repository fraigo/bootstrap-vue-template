Vue.component('bjumbo', {
    props:[
        "title",
        "content",
        "buttonLabel",
        "buttonLink"
    ],
    template: `
    <div class="jumbotron">
        <h1>{{title}}</h1>
        <p class="lead">{{content}}<slot></slot></p>
        <a class="btn btn-lg btn-primary" v-bind:href="buttonLink" role="button">{{buttonLabel}}</a>
    </div>
    `
    
  })