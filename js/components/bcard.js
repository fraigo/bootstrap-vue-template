Vue.component('bcard', {
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
<div style="margin-bottom:20px">
  <div class="card h-100" style="border-radius: 0px" >
    <div v-if="image" :style="{
      height: '140px', 
      backgroundImage:'url('+image+')',
      backgroundSize: 'cover',
      backgroundPosition: imagepos
    }">
    </div>
    <div class="card-body text-center">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text" ><slot></slot></p>
      <p v-if="label&&link" style="margin-bottom: 40px;"></p>
      <div style="position: absolute; bottom: 8px; width: 100%; margin-left:-20px">
        <a v-if="label&&link" :href="link" class="btn btn-primary">{{label}}</a>
      </div>
  </div>
  
</div>
    `
    
  })