#explore sf

[explore live][explore]

[explore]: https://kattelles.github.io/exploresf/


Explore SF is an easy to use search app for finding cool places in San Francisco. It is written in (vanilla) Javascript, HTML5 and CSS3.

![image of splash](https://github.com/kattelles/exploresf/blob/master/app/assets/img/screenshot.png)

The app utilizes Google Maps API to render a dynamic map with markers for search results.

```Javascript
let marker = new google.maps.Marker({
  map: map,
  icon: image,
  title: place.name,
  position: place.geometry.location,
  animation: google.maps.Animation.DROP
});
```

It also allows users to click on results to get directions.
![image of splash](https://github.com/kattelles/exploresf/blob/master/app/assets/img/click.png)

## Future Plans

With more time, I'd provide front-end authentication and allow users to favorite and save locations.
