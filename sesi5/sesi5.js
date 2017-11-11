// var buah = [' Jambu ' , ' Mangga ' , ' Anggur ' , ' Apel '];
// var listBuah =  $('#buah');
//
// for (var i = 0; i < buah.length; i++) {
//     var listItem = ('<li class="buah">'+buah[i]+'</li>');
//     listBuah.append(listItem);
// }
//
// var filter = $('#filter');
//
// function MyBuah() {
//   var buah = $('.buah');
//
//   for (var i = 0; i < buah.length; i++) {
//     var item  = $(buah[i]).text().toLowerCase();
//     if (item.indexOf(filter.val().toLowerCase()) >= 0) {
//       $(buah[i]).slideDown();
//     }
//     else {
//       $(buah[i]).slideUp();
//     }
//   }
// }

// var search = filter.val();
// var buahItem = $('.buah');
//
// buahItem.each(MyBuah(){
//   var buah = $(this)
//   var namaBuah = buah.text();
//
//   if (namaBuah.indexOf(search.toLowerCase()) <= 0) {
//     buah.slideDown();
//   }
//   else {
//     buah.slideUp();
//   }
// })


$.get('https://ariona.net/talentbandung/', function(data, status){
  for (var i = 0; i < data.length; i++) {
    var listItem = '<li class= "taman"><h2>' + data[i].nama + '</h2><img src="'+data[i].image.thumbnail +'"/></li>';
    $('#taman').append(listItem);
  }
} );

function MyTaman() {
  var taman = $('.taman');

  for (var i = 0; i < taman.length; i++) {
    var item  = $(taman[i]).text().toLowerCase();
    if (item.indexOf($('#lol').val().toLowerCase()) >= 0) {
      $(taman[i]).slideDown();
    }
    else {
      $(taman[i]).slideUp();
    }
  }
}

$.get('https://ariona.net/comments.php',{count:1}, function(data, status) {
  console.log(data);
} );
