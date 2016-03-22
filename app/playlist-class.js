function Playlist(data){

  this.id=data.id;
  this.title=data.title;
  this.songs=[];
  for(x=0; x<data.songs.length;x++){
      this.songs[x]=new Song(data.songs[x]);
    }

  this.imageLarge=data.imageLarge;
  this.imageSmall=data.imageSmall;
  this.description=data.description;


}
Playlist.prototype.getId= function(){

	return this.id;
}
Playlist.prototype.getTitle= function(){

	return this.title;
}
Playlist.prototype.getImageLarge= function(){
	return this.imageLarge;

}
Playlist.prototype.getImageSmall= function(){
	return this.imageSmall;

}

Playlist.prototype.getDescription= function(){
	return this.description;

}
Playlist.prototype.getLengthSongs= function(){
	return this.songs.length;

}