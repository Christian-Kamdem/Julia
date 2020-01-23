exports.create = ()=>{
  const {TexView,ImageView,CollectionView,Composite,ScrollView,contentView,Tab,TabFolder,TextView,Button} = require('tabris');
  const copyright = require('./widgets/copyright.js').create();
  const centreInteret = require('./../helpers/centreInteret.js');
  let actualPage = new Composite({
    top:0,
    bottom:0,
    left:0,
    right:0
  }).appendTo(contentView);
  actualPage.append(copyright);
  let slide1 = new Tab({title:'1'})
  .append(new ImageView({
        top:120,
        bottom:80,
        left:0,
        right:0,
        scaleMode:'fit',
        image:'src/images/undraw_exciting_news_ksse.png'
      }));
      slide1.append(new TextView({
        left:15,
        bottom:120,
        font:{size:20,weight:'medium'},
        text:'Bienvenue sur Julia'
      }));
      slide1.append(new TextView({
        bottom:80,
        left:15,
        right:10,
        font:{size:15,weight:'thin'},
        text:'Restez à jour sur vos centres d\'intérêt,Partagez vos découvertes,Diffusez vos articles.'
      }));
      let buttonNext1 = new Composite({
        bottom:15,
        right:15,
        background:'#6b63ff',
        width:140,
        height:40,
        cornerRadius:15
      }).appendTo(slide1);
      let buttonNext1Text = new TextView({
        centerX:0,
        centerY:0,
        font:{size:19,weight:'thin'},
        text:'Continuer',
        textColor:'white'
      }).appendTo(buttonNext1);
      let buttonNext1Image = new ImageView({
        centerY:0,
        width:10,
        height:50,
        right:10,
        image:'src/icons/next.png'
      }).appendTo(buttonNext1);console.log(centreInteret);
  let slide2 = new Tab({title:'2'})
          const stack = new ScrollView({
            left:0,
            right:0,
            padding:10,
            top:10,
            bottom:150
          }).appendTo(slide2);
          let collectionInteret = new CollectionView({
            left: 10, top: 10, right: 10, bottom: 10,
            itemCount: centreInteret.length,
            createCell: () => new TextView(),
            updateCell: (view, index) =>  {
              view.text = centreInteret[index];
            }
          }).appendTo(stack);
          slide2.append(new TextView({
            left:15,
            bottom:120,
            font:{size:20,weight:'medium'},
            text:'Choisissez vos centres d\'intérêtes'
          }));
          slide2.append(new TextView({
            bottom:90,
            left:15,
            right:10,
            font:{size:15,weight:'thin'},
            text:'Vous devez en choisir au moins 3'
          }));
          let buttonNext2 = new Composite({
            bottom:15,
            right:15,
            background:'#6b63ff',
            width:130,
            height:40,
            cornerRadius:15
          }).appendTo(slide2);
          let buttonNext2Text = new TextView({
            centerX:0,
            centerY:0,
            font:{size:19,weight:'thin'},
            text:'Allons-y',
            textColor:'white'
          }).appendTo(buttonNext2);
          let buttonNext2Image = new ImageView({
            centerY:0,
            width:10,
            height:50,
            right:10,
            image:'src/icons/next.png'
          }).appendTo(buttonNext2);
  let slider = new TabFolder({left: 0, top: 0, right: 0, bottom: 40,
  tabBarLocation:'bottom',
  paging:'yes',
  selectedTabTintColor:'red',tabBarLocation: 'hidden'})
  .append(slide1)
  .append(slide2)
  .appendTo(actualPage);
  return actualPage;
};
