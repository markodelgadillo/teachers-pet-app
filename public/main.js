const users = ['Teacher', 'Student', 'Parent']
const students = [
  {
    id: 0,
    name: 'Jeffrey Garcia',
    notes: [],
    parents: [],
    parentNotes: []
  },

  {
    id: 1,
    name: 'Melissa Roberts',
    notes: [],
    parents: [],
    parentNotes: []
  },

  {
    id: 2,
    name: 'Alex Ventus',
    notes: [],
    parents: [],
    parentNotes: []
  }
]

const $studentName = document.createElement('div')
const $studentGrade = document.createElement('div')
const $parentName = document.createElement('div')
const $teacherName = document.createElement('div')

const $left = document.createElement('div')
const $right = document.createElement('div')

const $container = document.querySelector('.container')
const $UI = document.createElement('div')
const $label = document.createElement('h2')

$label.textContent = 'Teachers P.E.T.'
$label.setAttribute('class', 'center-align white-text')
const $nav = document.createElement('nav')

const $ul = document.createElement('ul')
$ul.setAttribute('class', 'collection card col s6 offset-s3 z-depth-3')
$container.appendChild($label)

function userMenu(users) {
  document.body.setAttribute('class', 'blue lighten-3')
  const $row = document.createElement('div')
  $row.setAttribute('class', 'row')
  $container.appendChild($row)
  $row.appendChild($ul)
  users.map(user => {
    const $li = document.createElement('li')
    $li.addEventListener('click', selectUser)
    $li.textContent = user
    $li.setAttribute('id', user.toLowerCase())
    $li.setAttribute('class', 'collection-item blue-text center-align')
    $ul.appendChild($li)
  })
  return $ul
}

function teacherUI() {
  $UI.setAttribute('class', 'row')
  const $students = document.createElement('div')
  const $notes = document.createElement('div')

  const $studentNotes = document.createElement('div')
  const $studentRespond = document.createElement('input')
  const $studentBut = document.createElement('button')

  const $parentNotes = document.createElement('div')
  const $parentRespond = document.createElement('input')
  const $parentBut = document.createElement('button')

  $students.setAttribute('class', 'col s3 teal')
  $notes.setAttribute('class', 'col s9 grey lighten-3')
  $students.textContent = 'Student List'
  // $notes.textContent = 'Notes'

  $studentNotes.setAttribute('class', 'col s5 card medium z-depth-3')
  $studentRespond.setAttribute('class', 'col s5 z-depth-1')
  $studentRespond.setAttribute('placeholder', 'Notes to Student')
  $studentBut.setAttribute('class', 'col s2 offset-s10 z-depth-1')
  $studentBut.textContent = 'To Student'

  $parentNotes.setAttribute('class', 'col s5  offset-s1 card medium z-depth-3')
  $parentRespond.setAttribute('class', 'col s5 offset-s1 z-depth-1')
  $parentRespond.setAttribute('placeholder', 'Notes to Parent')
  $parentBut.setAttribute('class', 'col s2 offset-s10 z-depth-1')
  $parentBut.textContent = 'To Parent'

  $container.appendChild($UI)

  $UI.appendChild($students)
  $UI.appendChild($notes)

  $notes.appendChild($studentNotes)
  $notes.appendChild($parentNotes)

  $notes.appendChild($studentRespond)
  $notes.appendChild($studentBut)

  $notes.appendChild($parentRespond)
  $notes.appendChild($parentBut)
}

function studentUI() {
  $UI.setAttribute('class', 'row')
  const $notes = document.createElement('div')
  const $respond = document.createElement('input')
  const $button = document.createElement('button')

  $left.setAttribute('class', 'card col s4')

  $studentName.setAttribute('class', 'card-content amber accent-1')
  $studentName.textContent = 'Student Name'
  $studentGrade.setAttribute('class', 'card-content amber accent-3')
  $studentGrade.textContent = 'Grade'
  $parentName.setAttribute('class', 'card-content amber accent-1')
  $parentName.textContent = 'Parent Name'

  $right.setAttribute('class', 'col s8')
  $notes.setAttribute('class', 'card medium z-depth-3')
  $respond.setAttribute('class', 'offset-s2 z-depth-1')
  $respond.setAttribute('placeholder', 'Note...')
  $button.setAttribute('class', 'col s2 offset-s10 z-depth-1')
  $button.textContent = 'Send'

  $container.appendChild($UI)
  $UI.appendChild($left)
  $UI.appendChild($right)

  $left.appendChild($studentName)
  $left.appendChild($studentGrade)
  $left.appendChild($parentName)

  $right.appendChild($notes)
  $right.appendChild($respond)
  $right.appendChild($button)
}

function parentUI() {
  $UI.setAttribute('class', 'row')
  const $notes = document.createElement('div')
  const $respond = document.createElement('input')
  const $button = document.createElement('button')

  $left.setAttribute('class', 'card col s4')

  $studentName.setAttribute('class', 'card-content amber accent-1')
  $studentName.textContent = 'Student Name'
  $studentGrade.setAttribute('class', 'card-content amber accent-3')
  $studentGrade.textContent = 'Grade'
  $teacherName.setAttribute('class', 'card-content amber accent-1')
  $teacherName.textContent = 'Teacher Name'

  $right.setAttribute('class', 'col s8')

  $notes.setAttribute('class', 'card medium z-depth-3')
  $respond.setAttribute('class', 'offset-s2 z-depth-1')
  $respond.setAttribute('placeholder', 'Note...')
  $button.setAttribute('class', 'col s2 offset-s10 z-depth-1')
  $button.textContent = 'Send'

  $container.appendChild($UI)
  $UI.appendChild($left)
  $UI.appendChild($right)

  $left.appendChild($studentName)
  $left.appendChild($studentGrade)
  $left.appendChild($teacherName)

  $right.appendChild($notes)
  $right.appendChild($respond)
  $right.appendChild($button)
}

function selectUser(event) {
  event.preventDefault()
  const id = event.target.getAttribute('id')

  switch (id) {
    case 'teacher':
      $container.innerHTML = ''
      teacherUI()
      console.log(id)
      break
    case 'student':
      $container.innerHTML = ''
      studentUI()
      console.log(id)
      break
    case 'parent':
      $container.innerHTML = ''
      parentUI()
      console.log(id)
      break
  }
}

userMenu(users)
