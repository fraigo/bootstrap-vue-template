Vue.component('bjumbo', {
    props:{
        title:String,
        label:String,
        image:String,
        color:{
            type:String,
            default:"#FFF"
          },
        bgcolor:{
            type:String,
            default:"#888"
        },
        height:{
            type:Number,
            default:"300px"
        },
        align:{
            type:String,
            default:'left'
        },
        content:String,
        link:String,
        
    },
    created:function(){
        this.imageUrl='url('+this.image+')';
    },
    template: `
    <div class="jumbotron"
        :style="{
            height: height, 
            backgroundColor: bgcolor, 
            color: color, 
            backgroundImage: imageUrl,
            backgroundSize: 'cover',
            backgroundPosition:'center',
            textAlign:align,
            borderRadius: '0px'
        }" >
        <div class="col-md-9 p-0" style="display:inline-block">
        <h1>{{title}}</h1>
        <p class="lead">{{content}}<slot></slot></p>
        <a v-if="link" class="btn btn-lg btn-primary" v-bind:href="link" role="button">{{label}}</a>
        </div>
    </div>
    `
    
  })