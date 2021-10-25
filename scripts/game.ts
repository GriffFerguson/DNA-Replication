var gameElems = {
   wrapper: document.getElementById('game'),
   timer: document.getElementById('timer'),
   help: document.getElementById('gameHelp'),
   strands: {
      leading: document.getElementsByClassName('leading')[0],
      lagging: document.getElementsByClassName('lagging')[0],
   },
   options: {
      adenine: document.getElementsByClassName('option')[0],
      cytosine: document.getElementsByClassName('option')[1],
      guanine: document.getElementsByClassName('option')[2],
      thymine: document.getElementsByClassName('option')[3]
   }
}
gameElems.help.addEventListener('click', e => {showHelp()})

var selectedBase = [1, 1]; // [<id>, <leading (1) or lagging (2)>]

function startGame() {
   generateLevel();
   gameElems.wrapper.style.display = 'block'
   setTimeout(() => {
      gameElems.wrapper.style.opacity = '1'
   }, 5)
}


// Create game
function generateLevel() {
   for(var i = 1; i < 7; i++) {
      createNucleotides(i)
   }
   selectBase()
}

function createNucleotides(i: number) {
   var row = {
      leading: document.createElement('div'),
      lagging: document.createElement('div')
   }
   row.leading.classList.add('row')
   row.lagging.classList.add('row')
   var leading = {
      left: {
         wrapper: document.createElement('div'),
         backbone: document.createElement('img'),
         base: document.createElement('img'),
      },
      bond: document.createElement('img'),
      right: {
         wrapper: document.createElement('div'),
         backbone: document.createElement('img'),
         base: document.createElement('img')
      }
   }
   var lagging = {
      left: {
         wrapper: document.createElement('div'),
         backbone: document.createElement('img'),
         base: document.createElement('img'),
      },
      bond: document.createElement('img'),
      right: {
         wrapper: document.createElement('div'),
         backbone: document.createElement('img'),
         base: document.createElement('img')
      }
   }
   var bases = generateBases()

   // Leading
   leading.left.wrapper.classList.add('nucleotide')
   leading.left.backbone.src = './images/nucleotide-leading.svg'
   leading.left.backbone.setAttribute('alt', 'leading nucleotide')
   leading.left.backbone.classList.add('backbone')
   leading.left.base.src = `./images/bases/${bases[0]}.svg`
   leading.left.base.setAttribute('alt', bases[0])
   leading.left.base.setAttribute('id', `leading_filled${7 - i}`)
   leading.left.base.classList.add('base')
   leading.left.base.classList.add('leading')

   leading.bond.src = `./images/${bases[2]}-bond.svg`
   leading.bond.setAttribute('alt', `${bases[2]} hydrogen bonds`)
   leading.bond.classList.add('bond')

   leading.right.wrapper.classList.add('nucleotide')
   leading.right.backbone.src = './images/nucleotide-lagging.svg'
   leading.right.backbone.setAttribute('alt', 'lagging nucleotide')
   leading.right.backbone.classList.add('backbone')
   leading.right.base.src = './images/bases/blank.svg'
   leading.right.base.setAttribute('alt', 'blank')
   leading.right.base.setAttribute('id', `leading_blank${7 - i}`)
   leading.right.base.classList.add('base')
   leading.right.base.classList.add('lagging')

   leading.left.wrapper.appendChild(leading.left.backbone)
   leading.left.wrapper.appendChild(leading.left.base)
   leading.right.wrapper.appendChild(leading.right.base)
   leading.right.wrapper.appendChild(leading.right.backbone)

   // Lagging
   if (i + 3 > 6) {
      i = i - 3
   } else {
      i = i + 3
   }
   lagging.right.wrapper.classList.add('nucleotide')
   lagging.right.backbone.src = './images/nucleotide-lagging.svg'
   lagging.right.backbone.setAttribute('alt', 'lagging nucleotide')
   lagging.right.backbone.classList.add('backbone')
   lagging.right.base.src = `./images/bases/${bases[1]}.svg`
   lagging.right.base.setAttribute('alt', bases[1])
   lagging.right.base.setAttribute('id', `lagging_filled${i}`)
   lagging.right.base.classList.add('base')
   lagging.right.base.classList.add('lagging')

   lagging.bond.src = `./images/${bases[2]}-bond.svg`
   lagging.bond.setAttribute('alt', `${bases[2]} hydrogen bonds`)
   lagging.bond.classList.add('bond')

   lagging.left.wrapper.classList.add('nucleotide')
   lagging.left.backbone.src = './images/nucleotide-leading.svg'
   lagging.left.backbone.setAttribute('alt', 'leading nucleotide')
   lagging.left.backbone.classList.add('backbone')
   lagging.left.base.src = './images/bases/blank.svg'
   lagging.left.base.setAttribute('alt', 'blank')
   lagging.left.base.setAttribute('id', `lagging_blank${i}`)
   lagging.left.base.classList.add('base')
   lagging.left.base.classList.add('leading')

   lagging.left.wrapper.appendChild(lagging.left.backbone)
   lagging.left.wrapper.appendChild(lagging.left.base)
   lagging.right.wrapper.appendChild(lagging.right.base)
   lagging.right.wrapper.appendChild(lagging.right.backbone)

   // Append to row
   row.leading.appendChild(leading.left.wrapper)
   row.leading.appendChild(leading.bond)
   row.leading.appendChild(leading.right.wrapper)

   row.lagging.appendChild(lagging.left.wrapper)
   row.lagging.appendChild(lagging.bond)
   row.lagging.appendChild(lagging.right.wrapper)

   gameElems.strands.leading.appendChild(row.leading)
   gameElems.strands.lagging.appendChild(row.lagging)
}

function generateBases() {
   var random: number = Math.floor(Math.random() * 4)

   if (random == 0) {
      return ['adenine', 'thymine', 'two']
   } else if (random == 1) {
      return ['thymine', 'adenine', 'two']
   } else if (random == 2) {
      return ['cytosine', 'guanine', 'three']
   } else if (random == 3) {
      return ['guanine', 'cytosine', 'three']
   }
}

//Play game
function selectBase() {
   var blank: HTMLElement;
   var filled: HTMLElement;
   document.getElementsByClassName('selected')[0] != undefined ? document.getElementsByClassName('selected')[0].classList.remove('selected') : false
   document.getElementsByClassName('answer')[0] != undefined ? document.getElementsByClassName('answer')[0].classList.remove('answer') : false
   if (selectedBase[1] == 1) {
      blank = document.getElementById(`leading_blank${selectedBase[0]}`)
      filled = document.getElementById(`leading_filled${selectedBase[0]}`)
      blank.setAttribute('src', './images/bases/selected.svg')
      blank.classList.add('selected')
      filled.classList.add('answer')
      selectedBase[1] = 2;
   } else if (selectedBase[1] == 2) {
      blank = document.getElementById(`lagging_blank${selectedBase[0]}`)
      filled = document.getElementById(`lagging_filled${selectedBase[0]}`)
      blank.setAttribute('src', './images/bases/selected.svg')
      blank.classList.add('selected')
      filled.classList.add('answer')
      selectedBase[1] = 1;
      selectedBase[0]++;
   }

}

gameElems.options.adenine.addEventListener('click', e => {answer('adenine')})
gameElems.options.cytosine.addEventListener('click', e => {answer('cytosine')})
gameElems.options.guanine.addEventListener('click', e => {answer('guanine')})
gameElems.options.thymine.addEventListener('click', e => {answer('thymine')})

function answer(chosen: string) {
   console.log(chosen)
   var compliment = document.getElementsByClassName('answer')[0].getAttribute('alt')
   var blank = document.getElementsByClassName('selected')[0]
   var answer: string;
   if (compliment == 'adenine') {
      answer = 'thymine'
   } else if (compliment == 'cytosine') {
      answer = 'guanine'
   } else if (compliment == 'guanine') {
      answer = 'cytosine'
   } else if (compliment == 'thymine') {
      answer = 'adenine'
   }
   console.log(answer)
   if(chosen == answer) {
      blank.setAttribute('src', `./images/bases/${answer}.svg`)
      selectBase()
   } else {
      console.log('no')
   }
}