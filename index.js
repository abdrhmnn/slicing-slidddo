const hamburger = document.querySelector(".hamburger");
const navDropdown = document.querySelector(".nav-dropdown");
const faqsOne = document.querySelectorAll(".faqs-title");
const faqsDescOne = document.querySelectorAll(".faqs-desc");
const faqsPlusOne = document.querySelectorAll(".faqs-btn img");

hamburger.addEventListener("click", () => {
	navDropdown.classList.toggle("open");
	// alert("ok");
});

// console.log(faqsOne);
// console.log(faqsDescOne);
// console.log(faqsPlusOne);

for (let i = 0; i < faqsOne.length; i++) {
	for (let y = 0; y < faqsDescOne.length; y++) {
		for (let j = 0; j < faqsPlusOne.length; j++) {
			faqsOne[i].addEventListener("click", (e) => {
				if (i == y && i == j) {
					faqsDescOne[y].classList.toggle("open-faqs");
					faqsPlusOne[j].classList.toggle("rotate-plus");
				}
				// e.target.addEventListener("click", () => {
				// 	faqsPlusOne.classList.toggle("rotate-plus");
				// 	faqsDescOne.classList.toggle("open-faqs");
				// });
				// alert(i);
				// console.log(i);
				// for (let y = 0; y < faqsDescOne.length; y++) {
				// 	faqsDescOne[y].classList.toggle("open-faqs");
				// }
				// console.log(e);
			});
		}
	}
}

// faqsOne.map((e, i) => {

// })

// faqsOne.addEventListener("click", () => {
// faqsDescOne.classList.toggle("open-faqs");
// faqsPlusOne.classList.toggle("rotate-plus");
// });
