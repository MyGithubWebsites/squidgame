let song        = document.querySelector('#doll-song')
let playGame    = document.querySelector('#play-game')
let doll        = document.querySelector('#squid-game--doll')

const play      = () => {  song.play()  }
const pause     = () => {  song.pause() }
const restart   = () => {  song.currentTime = 0 }

playGame.addEventListener('click', () =>{
  if(!playGame.classList.contains('leave-game')){
    playGame.classList.add('leave-game')
    doll.classList.add('active-eyes') 
    play()
  }else{
    playGame.classList.remove('leave-game')
    doll.classList.remove('active-eyes')
    restart()
    pause()
  }

  song.ontimeupdate = function(){
    if(song.currentTime >= 11){
      restart()
      doll.classList.remove('active-eyes')
      void doll.offsetWidth
      doll.classList.add('active-eyes') 
    }
  }
})