Vue.component('bslide', {
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
        active:{
          type:Number,
          default:0
        },
    },
    template: `
    <div  :style="{
            height: height, 
            backgroundImage:'url('+image+')',
            backgroundSize: 'cover',
            backgroundPosition:'center',
            backgroundColor: bgcolor,
            marginBottom: '20px'
          }" 
          :class="active==1?'carousel-item active':'carousel-item'" >
            <div class="container" style="background-color:rgba(255,255,255,0.5)">
              <div class="carousel-caption" 
                :style="{
                  textAlign: align, 
                  color: color, 
                  textShadow: '0px 0px 8px #444'
                }">
                <h1>{{title}}</h1>
                <p><slot></slot></p>
                <p><a v-if="label" class="btn btn-lg btn-primary" href="#" role="button">{{label}}</a></p>
              </div>
            </div>
          </div>
    `
    
  })