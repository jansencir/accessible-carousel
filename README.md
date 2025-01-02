# Accessible Carousel
Build a carousel that's more accessible

## Objective
Create a carousel that is more accessibility friendly and uses aria controls.

### Why
Based on my research (hours of Googling), carousels are generally considered bad for accessibility:
- Visual indicators of a carousel may be confusing
- The structure of a carousel may be difficult to understand

On top of that, only about 1% of users actually interact with carousels on a website. But, websites still use them and users with disabilities still come across them... So, I felt it was still worth it to explore.

## Note
I'll update this over time as I learn more about accessibility and best practices (I'm still a beginner). If you would like to give me pointers, please don't hesitate! (:

If you're wondering why I'm using chickens in the carousel out of everything, I just like chickens.

## Design Details
Carousel does not auto-rotate
- For many users with disabilities, especially those that rely on screen readers, the auto rotating nature of a carousel makes it difficult to understand the information being presented
- For users with lower motor skills, they may not be able to stop the carousel from changing quick enough
- For users with ADHD, it can be distracting
- Instead, the carousel is controlled with clickable arrows and navigation circles

Carousel uses `aria-hidden` instead of `z-index`
- Many carousels use `z-index` to control what image/item is currently showing
- While researching, I came across various sources (people on different forums) saying that `z-index` can place things in the wrong order and confuse people
- Instead, the carousel displays an image/item depending on if `aria-hidden` is set to `true` or `false`

## How It Works
- Users can navigate between images in one of two ways
  1. Use the arrows on each side of the carousel images/items
  2. Click the circle buttons below the carousel images/items
- Each of the arrows and circle buttons can be tabbed to and clicked with the enter key
- Each image/item in the carousel will have an `aria-hidden="true"` attribute
- The selected image will get a `class="current"` and if that class is present, the `aria-hidden="true"` will be switched to `aria-hidden="false"` so that the user is notified what is currently on the screen
- Depending on what image is shown on the sequence, the circle buttons associated with that image below will also get a `class="current` attribute
- The function is immediately invoked (IIFE) when the `main.js` file is loaded just so the carousel works as fast as possible (and to practice not using global variables)