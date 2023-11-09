import convertTimestampToDate from './convertTimestamp'

export default function newMassage (data) {
  const massage = document.createElement('div')
  massage.classList.add('message')

  const email = document.createElement('span')
  email.textContent = data.from

  let textSubject = Array.from(data.subject)
  if (textSubject.length > 15) {
    textSubject.length = 15
    textSubject = textSubject.join('') + '...'
  }

  const subject = document.createElement('span')
  subject.classList.add('subject')
  subject.textContent = textSubject

  const time = document.createElement('span')
  time.classList.add('time')
  // console.log(convertTimestampToDate(data.received));
  time.textContent = convertTimestampToDate(data.received)

  massage.append(email, subject, time)
  document.querySelector('.messages').insertAdjacentElement('afterbegin', massage)
}
