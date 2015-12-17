React.render(
 React.createElement("h1", null, "Hello, world"), document.body
 );


 o = Object.create(Object.prototype, {
  foo: { writable: false, configurable: true, value : "fafa"},
  bar : {configurable: false, get: funciton(){return 10}, set : function(value){console.log(value)}}
    });
