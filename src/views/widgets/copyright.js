exports.create = ()=>{
  const {TextView,ImageView,Composite} = require('tabris');
  let copyrightComposite = new Composite({
    height:40,
    bottom:0,
    left:0,
    right:0
  });
  let text = new TextView({
    text:'© Julia',
    centerX:0,
    centerY:0,
    textColor:'#9eb2bf'
  }).appendTo(copyrightComposite);
  return copyrightComposite;
};
