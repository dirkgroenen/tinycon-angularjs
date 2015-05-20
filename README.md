# Tinycon Angularjs
This nothing more than an Angular service for [tommoor's TinyCon](https://github.com/tommoor/tinycon), who obviously deserves all credits. 


## TinyCon
From the TinyCon README:

>A small library for manipulating the favicon, in particular adding alert bubbles and changing images. Tinycon gracefully falls back to a number in title approach for browers that don't support canvas or dynamic favicons.

## Documentation 
Include angular-tinycon.min.js in your application. The minified version already includes a version of Tincon so there is no need to include that file too.
```html
<script src="components/tinycon-angular/dist/angular-tinycon.min.js"></script>
```

Add the module ```angularTinycon``` as a dependency to your application module.
```javascript
var app = angular.module('app', ['angularTinycon']);
```

You can set Tinycon's options in the app config. 
```javascript
app.config(function(anTinyconProvider){
    anTinyconProvider.setOptions({
        width: 7,
        height: 9,
        font: "10px arial",
        colour: "#ffffff",
        background: "#549A2F",
        fallback: true
    });
});
```

To use the API methods you have to call the ```anTinycon``` service in (for example) your controller.

## API Documentation

###setBubble
Change the value of the bubble

**Usage:** ```anTinycon.setBubble(number)```

```javascript
app.controller('MainCtrl', function($scope, anTinycon) {
  anTinycon.setBubble(number);
});
```

###bind
Bind a $scope key to the bubble.

**Usage:** ```anTinycon.bind(scope, key)```

```javascript
app.controller('MainCtrl', function($scope, anTinycon) {
    // Define
    $scope.number = 10;

    // Bind
    anTinycon.bind($scope, 'number');
});
```

Tinycon will automatically update the bubble's value when your key's value changes.

## Credits
All credits for Tinycon go to [tommoor's](https://github.com/tommoor).