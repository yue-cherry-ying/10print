/*
  10print - Music Score

  (c) 2020 ../che*r!o CHICAGO, IL
  email cherry.yue.ying@gmail.com

  Art of Randomness:
      Although the world is undergoing a turbulent time and we really
    do not know when the pandemic will end, each and every day is still
    filled with joy and hope -- because we have the accompnay of
    music. Whether it's the daily chorus humming or the get-together
    weekly '我是歌手' music-reality-show watching, music has played a
    significant role in my quarantine life.
      In my mind, a musician is like an architect, who plans, designs
    and oversees the construction of music notes. A musician is also a
    mathematician, who is concerned with spaces, changes and structure
    of the entire music score. Above all, a musician is an artist, who
    engages with the melody to demonstrate their feelings and thoughts.
    In every single step of the music creation process, randomness is
    involved. The beautiful notes, melody and rhythms, all result from
    randomness. Yet, they are not random. Every note represents a fixed
    amount of duration, and each bar has the same total beats.
      This assignment is a live display of this music-making process. My
    music score is produced one line at a time, with spaces in between,
    just like in a physical music score. As indicated on the very left
    side of each line, each bar follows tne 3/4 rule, meaning that if
    we use quarter notes to indicate a beat, then each bar has 3 beats.
    With the illustration on a terminal, this randomly generated music
    score becomes an art piece -- both in its content and in its form.
*/

/*
Music Score Unicode:
  \u2669 Quarter Note ♩
  \u266A Eighth Note ♪
  \u266B Beamed Eighth Note ♫
  \u266C Beamed Sixteenth Note ♬
  𝄞 G Clef
  │ Single Barline
  ¾ 3/4
*/

const b1 = '♩▂♫♫│'
const b2 = '♩♫♬♬│'
const b3 = '♩♫♬♬│'
const b4 = '▂♩♩♩│'
const b5 = '♩♫▂♩│'
const b6 = '♪♩♪♩│'
const b7 = '♫♫♫▂│'
const b8 = '♫♩♬♬│'
const b9 = '♫▂♩♩│'
const b10 = '♫♩▂♫│'
const b11 = '♬♬♫♩│'

const w = process.stdout.columns
const block = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11]

let j = 0
function print() {
  setTimeout(print, 1000 / 2)
  let output = '\x1b[97m\x1b[40m │𝄞¾  '
  if (j % 2 == 0) {
    for (let i = 0; i < w / 5 - 2; i++) {
      let b = Math.floor(Math.random() * block.length)
      output += block[b]
    }
  } else {
    empty = '\x1b[40m '
    output = empty.repeat(w)
  }
  j++
  console.log(output)
}

print()
