(function(){
    var data = {
      allCats:[
           { catName: 'cat1', num:1, imgUrl:'/боорцог.jpg'},
           { catName: 'cat2', num:0, imgUrl:'/400.png'},
           { catName: 'cat3', num:4, imgUrl:'/bo.jpg'},
           { catName: 'cat4', num:0, imgUrl:'/logo1.png'},
           { catName: 'cat5', num:7, imgUrl:'/print1.jpg'}
        ]

    }
    var view = {
        init: function(){
          octopus.getCats();
          var catList = $('#cat-list');
          var catImg =  $('#cat-img');
          var catCount = $('#cat-count');
           octopus.getCats().forEach(
            function(catName){
               catList.append(`<li class='clickName'>${catName}</li>`);
            });
          var clickName = $('.clickName');
           clickName.click(function(e){
               octopus.showCatInfo(this.innerHTML);
             catCount.text(octopus.catInfo.num);
             catImg.attr('src', octopus.catInfo.imgUrl);                    
             });
            catImg.click(function(e){ 
              octopus.countClick();
            });  
        },
        render: function(clickNum){
          $('#cat-count').text(clickNum);
        },
    }
  var octopus = { 
      getCats: function(){
          var catNames = data.allCats.map(function(cat){ return cat.catName});
         return catNames;
    },
       showCatInfo: function(catName){
          var catInfo = $.grep(data.allCats, function(obj) {
            return (obj.catName == catName);
          });
        this.catInfo = catInfo[0];
    },
       countClick: function(){
          var  clickNum = ++this.catInfo.num;
          const result = data.allCats.findIndex( cat => cat.num == this.catInfo.num);
          data.allCats[result]['num'] = clickNum;
          view.render(clickNum);
        }
    }

    view.init();
})();





