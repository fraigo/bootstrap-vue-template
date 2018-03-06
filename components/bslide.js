Vue.component('bslide', {
    props:{
        title:String,
        image:String,
        label:String,
        active:Number,
        height:{
            type:Number,
            default:"300px"
        }
    },
    template: `
    <div  :style="{
            height: height, 
            backgroundColor: '#777', 
            backgroundImage:'url('+image+')',
            backgroundSize: 'cover',
            backgroundPosition:'center'
          }" 
          :class="active==1?'carousel-item active':'carousel-item'" >
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>{{title}}</h1>
                <p><slot></slot></p>
                <p><a v-if="label" class="btn btn-lg btn-primary" href="#" role="button">{{label}}</a></p>
              </div>
            </div>
          </div>
    `
    
  })