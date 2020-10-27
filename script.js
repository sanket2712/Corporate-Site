window.addEventListener('load', function(){
  new Glider(document.querySelector(".glider"), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots:"#dots",
		// skipTrack:true,
		rewind:true,
		arrows:{
			prev:".glider-prev",
			next:".glider-next",
		}
  });
})