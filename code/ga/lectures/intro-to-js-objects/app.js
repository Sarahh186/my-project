let Music = {
  currentPlaylist: [
    {
      title: 'What Was I Made For',
      artist: 'Billie Eilish',
      album: 'Barbie The Album',
      length: '3:42',
    },
   
  ],
};


Music.currentPlaylist[0].length = '3:54';

console.log(Music.currentPlaylist[0].length); 
