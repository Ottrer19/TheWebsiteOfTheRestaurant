Vue.component('images_gallery', {
  data() {
    return {
      currentSlide : 0,
      images: [
        {
          src : 'img/1.png',
        },
        {
          src: 'img/2.png',
        },
        {
          src: 'img/3.png',
        },
        {
          src: 'img/4.png',
        },
      	{
          src: 'img/5.png',
        },
        ]
    }
  },

  template : `
<div class="gallery1">

	<a @click="prevSlide" :disabled="currentSlide===0" > < </a>

	<div class="images_gallery">
		<div class="slide">
			<img :src="getCurrentImage.src" :alt="getCurrentImage.text">
		</div>
	</div>

	<a @click="nextSlide" :disabled="currentSlide===images.length - 1" > > </a>

</div>
`,


  computed: {
    getCurrentImage() {
      return this.images[this.currentSlide]
    }
  },

  methods: {
    nextSlide() {
      let max = this.images.length - 1
      let current = this.currentSlide
      if(current != max) this.currentSlide++
    },
    prevSlide() {
      let min = 0
      let current = this.currentSlide
      if(current >= min) this.currentSlide--
    }
  }
});

new Vue({
  el : "#photo_gallery"
});


new Vue ({
	el: "#app2",
	data: {
		show_modal_1: false,
		show_modal_2: false
	},

});


new Vue({
	el: '#app1',
	data: {
  		paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolores minus, totam nulla quod vel facilis illum provident eum magnam aspernatur deleniti molestias beatae tenetur vero, iusto possimus modi non."
  	}
});
