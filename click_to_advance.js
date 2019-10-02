const flower_images = ["flower0.png", "flower1.png", "flower2.png"];
const container_div = document.getElementById("container_div");

/* frame_images is an array of image URLs.
 * target_div is the HTML element within which the image should be appended.
 * x and y are the coordinates for where to position the image.
 */
function ClickToAdvance (frame_images, target_div, x, y) {
    this.images = frame_images; // An array of image urls
    this.frame = 0;             // Index of the frame to show
    this.img = document.createElement("img");
    this.img.src = this.images[0];
    this.img.style.position = "absolute";
    this.img.style.left = x + "px";
    this.img.style.top = y + "px";
    target_div.appendChild(this.img);

    /* TODO: Implement a prototype method named handleEvent (see Note 1 below).
     * "handleEvent" should advance to the next frame in the sequence.
     * 
     * In other words, add 1 to this.frame, and set
     * this.img.src = this.images[this.frame]
     * 
     * Dont increase this.frame beyond the number of frame_images available.
     * 
     * Once you have implemented the handleEvent method, you can uncomment the
     * line below to add this object as the click event listener for the image.
     */
     
     // this.img.addEventListener("click", this);            // (see Note 1 below)
}

for (let i = 0; i < 5; i++) {
    const x = 150 * i;
    const y = Math.floor(Math.random() * 500);
    const flower = new ClickToAdvance(flower_images, container_div, x, y);
}

/* NOTE 1 -------

"The event listener can be specified as... an object... whose handleEvent() method serves as the callback function." <https://mdn.io/addEventListener#The_event_listener_callback>.

In our case, this object is the instance of our ClickToAdvance class, and as usual, we're representing it with `this`. 

You could pass a callback function directly to addEventListener, but in this case, we are making use of a different addEventListener feature: if we pass it a normal object (like `this`), instead of a function, it will try to look on that object for a method called "handleEvent". If it finds that method name on the object, it will then execute that it as though you had passed it directly as the callback function argument. One benefit of this approach is that you don't need to bind the callback function to the instance or worry about the differences between arrow functions and standard functions. */
