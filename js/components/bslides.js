Vue.component('bslides', {
    props:{
        active:{
          type:Number,
          default:0
        },
        height:{
            type:String,
            default:"300px"
        }
    },
    created:function(){
        //if (!this.height) this.height="300px";
        var slots=this.$slots.default;
        var slides=[];
        for(var i=0;i<slots.length;i++){
          if (slots[i].tag) console.log(slots[i].tag.slice(-6));
          if (slots[i].tag && slots[i].tag.slice(-6)=="bslide"){
            slides.push(slots[i].innerText);
          }
        }
        this.slides=(slides);
    },
    template: `
    <div id="myCarousel" class="carousel slide" data-ride="carousel" >
        <ol class="carousel-indicators">
          <li v-for="(slide,idx) in slides" data-target="#myCarousel" :data-slide-to="idx" ></li>
        </ol>
        <div class="carousel-inner" >
          <slot></slot>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    `,
    data:{
      slides:[],
    }
    
  })