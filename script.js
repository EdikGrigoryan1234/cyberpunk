const section = document.querySelector('#section1')
let count = 11
setInterval(()=>{
	count=count + 1
	if (count > 13) {
		count = 11
	}
	
	section.style.backgroundImage = "url(" + 'images/' + count + '.jpg' +')';	
},2000)

