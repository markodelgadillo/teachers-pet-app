const users = ['Teacher', 'Student', 'Parent']
const $container = document.querySelector('.container')
const $label = document.createElement('h2')
$label.textContent = 'Teachers P.E.T.'
const $nav = document.createElement('nav')
// $nav.setAttribute('class', 'nav')
const $ul = document.createElement('ul')
$ul.setAttribute('class', 'collection')
$ul.appendChild
$container.appendChild($label)
$container.appendChild($nav)
$nav.appendChild($ul)

function userMenu(users) {
  users.map(user => {
    const $li = document.createElement('li')
    $li.addEventListener('click', selectUser)
    $li.textContent = user
    $li.setAttribute('id', user.toLowerCase())
    $li.setAttribute('class', 'collection-item blue-text')
    $ul.appendChild($li)
  })
  return $ul
}

function teacherUI() {
  const $teacher = document.createElement('div')
  const $students = document.createElement('div')
  const $notes = document.createElement('div')

  $teacher.setAttribute('class', 'row')
  $students.setAttribute('class', 'col s3 teal')
  $notes.setAttribute('class', 'col s9 grey lighten-3')

  // $teacher.textContent = 'Teacher UI'
  $students.textContent = 'Student List'
  $notes.textContent = 'Notes'

  $container.appendChild($teacher)
  $teacher.appendChild($students)
  $teacher.appendChild($notes)
}

function studentUI() {}

function parentUI() {}

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
