Vue.component('bmain', {
    template: `
    <main role="main" :class="{
	container:true
	}">
        <slot></slot>
    </main>
    `
    
  })