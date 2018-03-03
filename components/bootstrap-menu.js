Vue.component('bmenu', {
    props:[
        "title",
        "icon",
        "rightmenu",
        "leftmenu",
        "search"
    ],
    template: `<nav class="navbar navbar-expand-md navbar-light bg-light rounded">
        <a class="navbar-brand" href="#">
        <img v-bind:src="icon" height="24" style="vertical-align:text-bottom">
        {{title}}
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample09">
        <ul class="navbar-nav mr-auto" >
            <li class="nav-item active" v-if="leftmenu" v-for="item in leftmenu">
                <a class="nav-link" v-bind:href="item.url">{{ item.label }}</a>
            </li>
        </ul>
        <ul class="navbar-nav" >
            <li class="nav-item active" v-if="rightmenu" v-for="item in rightmenu">
                <a class="nav-link" href="{{item.url}}">{{ item.label }}</a>
            </li>
        </ul>
        <form class="form-inline my-2 my-md-0" v-if="search">
            <input class="form-control" type="text" v-model="search" placeholder="Search" aria-label="Search">
        </form>
        </div>
    </nav>
    `
    
  })