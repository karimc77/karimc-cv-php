var  select  =  fonction ( s )  {
     document de retour . querySelector ( s ) ;
  }
  
  fonction  aléatoire entre ( min , max )
  {
      var  nombre  =  Math . plancher ( Math . aléatoire ( ) * ( max - min + 1 ) + min ) ;
    
      if  (  nombre ! == 0  ) {
         numéro de retour ;
      } else  {
        return  0,5 ;
      }
  }
  
  var  tl  =  new  TimelineMax ( ) ;
  
  pour ( var  i  =  0 ;  i  <  20 ;  i ++ ) {
  
    var  t  =  TweenMax . à ( select ( '.bubble'  +  i ) ,  randomB Between ( 1 ,  1.5 ) ,  {
      x : aléatoire Entre ( 12 ,  15 ) * ( aléatoire Entre ( - 1 ,  1 ) ) ,
      y : aléatoire Entre ( 12 ,  15 ) * ( aléatoire Entre ( - 1 ,  1 ) ) , 
      répéter : - 1 ,
      repeatDelay : aléatoire Entre ( 0,2 ,  0,5 ) ,
      yoyo : vrai ,
      facilité : élastique . easyOut . config ( 1 ,  0,5 )
    } )
  
    tl . ajouter ( t ,  ( i + 1 ) / 0,6 )
  }
  
  tl . chercher ( 50 ) ;