#explore sf

[explore live][explore]

[explore]: https://kattelles.github.io/exploresf/


Explore SF is an easy to use search app to find places in San Francisco. It is written in Javascript (vanilla), HTML5 and CSS3.

![image of splash](https://github.com/kattelles/JS-Paint/blob/master/app/assets/img/screenshot.png)

This app utilizes Google Maps API to render a dynamic app with markers for search results.

```Javascript
const Painting = require("./painting");

document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  new Painting(canvas, context);
});
```

It also allows users to click on search results to get directions.
![image of splash](https://github.com/kattelles/JS-Paint/blob/master/app/assets/img/click.png)

## Future Plans

With more time, I'd allow users to favorite locations and provide front-end authentication.
