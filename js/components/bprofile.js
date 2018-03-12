Vue.component('bprofile', {
    props:{
        title:String,
        label:String,
        image:String,
        link:String,
        imagepos:{
            type:String,
            default:"center"
          }
    },
    created:function(){
        this.imageUrl='url('+this.image+')';
    },
    template: `
    <div class="text-center">
        <div v-if="image" :style="{
            height: '140px', 
            width: '140px',
            backgroundImage:'url('+image+')',
            backgroundSize: 'cover',
            backgroundPosition: imagepos,
            display:'inline-block',
            borderRadius: '99%'
        }">
        </div>
        <h2>{{title}}</h2>
        <p><slot></slot></p>
        <p v-if="label&&link"><a class="btn btn-secondary" :href="link" role="button">{{label}}</a></p>
        </div>
    <div>
    `
    
  })