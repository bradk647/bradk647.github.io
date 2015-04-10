jQuery(document).ready(function($){ //fire on DOM ready
         $('#myimage').addpowerzoom({
         defaultpower: 2,
         powerrange: [2,5],
         largeimage: null,
         magnifiersize: [100,100] //<--no comma following last option!
        })
     })