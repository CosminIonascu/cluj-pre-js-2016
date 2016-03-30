

var playlistsJSON = '[{"id":0,"title":"Playlist 1","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies love","songAuthor":"Smiley","songLength":74,"songListened":82},{"image":"../core/assets/2015-best-music.png","songTitle":"love love enemies pierdut","songAuthor":"Dr. Dre","songLength":186,"songListened":78},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money pierdut ea","songAuthor":"Andra","songLength":303,"songListened":94},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies el buletin ea","songAuthor":"Andra","songLength":359,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin el buletin love","songAuthor":"Eminem","songLength":312,"songListened":11},{"image":"../core/assets/2015-best-music.png","songTitle":"pierdut pierdut enemies ea","songAuthor":"Eminem","songLength":37,"songListened":9},{"image":"../core/assets/2015-best-music.png","songTitle":"ea money enemies enemies","songAuthor":"Dr. Dre","songLength":325,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money el money","songAuthor":"Eminem","songLength":58,"songListened":10}],"imageLarge":"../core/assets/dj-killer-mixes.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."},{"id":1,"title":"Playlist 2","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"money money love ea","songAuthor":"Dr. Dre","songLength":97,"songListened":100},{"image":"../core/assets/2015-best-music.png","songTitle":"el pierdut pierdut ea","songAuthor":"Smiley","songLength":42,"songListened":86},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies money pierdut enemies","songAuthor":"Dr. Dre","songLength":454,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"money ea love buletin","songAuthor":"Dr. Dre","songLength":448,"songListened":16},{"image":"../core/assets/2015-best-music.png","songTitle":"buletin pierdut ea el","songAuthor":"Dr. Dre","songLength":363,"songListened":23},{"image":"../core/assets/2015-best-music.png","songTitle":"el love el buletin","songAuthor":"Smiley","songLength":88,"songListened":20}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."},{"id":2,"title":"Playlist 3","songs":[{"image":"../core/assets/2015-best-music.png","songTitle":"enemies enemies el love","songAuthor":"Smiley","songLength":192,"songListened":51},{"image":"../core/assets/2015-best-music.png","songTitle":"el enemies pierdut el","songAuthor":"Andra","songLength":232,"songListened":87},{"image":"../core/assets/2015-best-music.png","songTitle":"ea enemies pierdut enemies","songAuthor":"Smiley","songLength":234,"songListened":5},{"image":"../core/assets/2015-best-music.png","songTitle":"enemies ea enemies buletin","songAuthor":"Andra","songLength":123,"songListened":45},{"image":"../core/assets/2015-best-music.png","songTitle":"love money buletin love","songAuthor":"Andra","songLength":299,"songListened":13},{"image":"../core/assets/2015-best-music.png","songTitle":"el love ea love","songAuthor":"Andra","songLength":478,"songListened":34},{"image":"../core/assets/2015-best-music.png","songTitle":"ea el enemies money","songAuthor":"Dr. Dre","songLength":280,"songListened":35}],"imageLarge":"../core/assets/up-all-night.png","imageSmall":"../core/assets/up-all-night-small.png","description":"Culpa ipsum adipisicing adipisicing mollit nostrud consequat adipisicing reprehenderit laboris duis cillum reprehenderit velit. Et cupidatat eiusmod reprehenderit cupidatat consectetur est. Aliquip laboris ullamco excepteur deserunt culpa et exercitation labore velit ad."}]';
var playlist = JSON.parse(playlistsJSON);
var playlist_1 = [];
var obj_accountService = JSON.parse(localStorage.getItem('testObject'));
var search  ;
var response = JSON.parse(playlistsJSON);

function clonare(pop) {//onclick event
  Clear_playlist();//clear songs in playlist
  openPlaylist();


}
function OnLoad(obj) { //on load event
  control_user();
  Update_playlist();
  Populate();
  Search_music();

  request_from_server();


}
function logOut() {

    localStorage.removeItem('testObject');
    window.location.href = "index.html";
}

function openPlaylist() {

  var x = document.getElementById("pop_playlist1");
  x.style.transition = "0.5s";
  x.style.height = "800px";

}

function control_user() {
  if (obj_accountService ) {
      document.getElementById("button_signin").className = "hidden_button ";
      document.getElementById("log_out").style.display = "inline";

  }
  else{
     document.getElementById("log_out").style.display = "none";
  }

}

function Search(e) { //search event on key pressed
  if (e.keyCode  ==  13)	{
    var values  =  document.getElementById("search").value;
    search.SearchByValue(values,playlist_1);
    return false;
  }

}



function Update_playlist() {


  var playlists = new Playlists();
  playlists.fetch().done(function(){
    var playlist = new PlaylistsView({
      el: document.getElementById('playlist1'),
      collection: playlists

   });
  
    playlist.render();

 });

}



function Update_song (pop) {
	var songs = new Songs();
  debugger;

	songs.set(pop);

	var pageView = new SongsView({
		el: document.getElementById('name_songs'),
		collection: songs
	});
	pageView.render();

}


function Populate() {//populate from json


playlist.map(function (val,i){

  function Songs( vall,y){
    var song= [];
    song[y]=new Song(vall);
    playlist_1[i].setSong(song[y]);
  }

  playlist_1[i] = new Playlist(val);

  val.songs.map(Songs);

});


}

function Search_music() {
   search  = new SearchMusic();
   var SongTitleArray = search.PopulateSearchList(playlist_1);
      SongTitleArray.forEach(function(a){
        var list  =  document.getElementById("search_music");
        var option1  =  document.getElementById("option_music");
        var cloneOption  =  option1.cloneNode(true);
        option1.value  = a;
        list.appendChild(cloneOption);
    });
}

function PlaylistChangeTitle(pop) {
  document.getElementById("img_play_big").src  =  pop.imageLarge;
  document.getElementById("text_playlist2").innerHTML = pop.title;

}

function Clear_playlist() {

  var list  =  document.getElementById("name_songs");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
function scrollup() {
  window.scrollTo(0,0);
  document.getElementById("focus").focus();
}
function close1(){
  var x = document.getElementById("pop_playlist1");
  x.style.transition = "0.5s";
  x.style.height = "0px";
}
