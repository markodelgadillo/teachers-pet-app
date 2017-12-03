const users = ['Teacher', 'Student', 'Parent']
const $container = document.querySelector('.container')
const $UI = document.createElement('div')
const $label = document.createElement('h2')
$label.textContent = 'Teachers P.E.T.'
$label.setAttribute('class', 'center-align')
const $nav = document.createElement('nav')
// $nav.setAttribute('class', 'nav')
const $ul = document.createElement('ul')
$ul.setAttribute('class', 'collection card col s6 offset-s3 z-depth-3')
$container.appendChild($label)

function userMenu(users) {
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
  const $students = document.createElement('div')
  const $notes = document.createElement('div')

  $UI.setAttribute('class', 'row')
  $students.setAttribute('class', 'col s3 teal')
  $notes.setAttribute('class', 'col s9 grey lighten-3')

  // $teacher.textContent = 'Teacher UI'
  $students.textContent = 'Student List'
  $notes.textContent = 'Notes'

  $container.appendChild($UI)
  $UI.appendChild($students)
  $UI.appendChild($notes)
}

function studentUI() {
  const $notes = document.createElement('div')
  const $respond = document.createElement('input')
  const $button = document.createElement('button')

  $container.appendChild($UI)
  $UI.appendChild($notes)
  $UI.appendChild($respond)
  $respond.appendChild($button)
}

function parentUI() {
  const $childNotes = document.createElement('div')
  const $notes = document.createElement('div')
  const $respond = document.createElement('input')
  const $button = document.createElement('button')

  $container.appendChild($UI)
  $UI.appendChild($childNotes)
  $UI.appendChild($notes)
  $UI.appendChild($respond)
  $respond.appendChild($button)
}

function selectUser(event) {
  event.preventDefault()
  const id = event.target.getAttribute('id')

  switch (id) {
    case 'teacher':
      $container.innerHTML = ''
      teacherUI()
      console.log(id)
      // add function that renders the teacher UI
      break
    case 'student':
      $container.innerHTML = ''
      studentUI()
      console.log(id)
      // add function that renders the student UI
      break
    case 'parent':
      $container.innerHTML = ''
      parentUI()
      console.log(id)
      // add function that renders the parents UI
      break
  }
}

userMenu(users)
