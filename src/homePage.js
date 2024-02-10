export const content = document.querySelector('#content')

export function homePage() {
	content.innerHTML = `<h1>Griboedov Restaurant</h1>
    	
  <div class="textImg">
	<p>
		Griboedov Restaurant in St. Petersburg the place you won't forget.
	</p> <img src="../src/assets/images/griboedov.jpg" alt="griboedov" class="griboedovImg"/></div>`
}
