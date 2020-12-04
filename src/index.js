// step one of setting up events
// we need to grab some elements to put events on
// buttons
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");
// console.log('launchButton', launchButton);
// console.log('confirmButton', confirmButton);
// console.log('cancelButton', cancelButton);
// messages
const successMessage = document.querySelector("h1.success");
const failureMessage = document.querySelector("h1.failure");
// console.log('successMessage', successMessage);
// console.log('failureMessage', failureMessage);
// modal
const modal = document.querySelector("div.modal");
// console.log('modal', modal);
// click event
launchButton.onclick = (e) => {
	console.log("This is the event: ", e);
};

// element.addEventListener('EVENTNAME', () => {
//   // code goes in here
// });
// 10 minute code challenge!
// make a click event that does something cool
// make a resize event that does something cool

launchButton.addEventListener("click", () => {
	// code goes in here
	console.log("Hello world!");
	console.log(`
        event type: ${e.type}
        event target: ${e.target.nodeName}
        timestamp: ${Math.floor(e.timeStamp / 1000)}
    `);
	launchButton.style.color = "red";
});

window.addEventListener("resize", () => {
	console.log("The window was resized");
});

document.addEventListener("click", () => {
	if (e.target === launchButton) {
		console.log("you hit the launch button");
	} else {
		console.log("you hit the something else");
	}
});

// take an array of elements and add events to all

Array.from(document.links).forEach(() => {
	link.addEventListener("click", (e) => {
		console.log("clicked");
	});
});
