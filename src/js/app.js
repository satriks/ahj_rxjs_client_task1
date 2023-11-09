import newMassage from './component/message'
import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'
import { of, interval, mergeMap } from 'rxjs'

const obs$ = interval(1000 * 5)
  .pipe(
    mergeMap(() =>
      ajax.getJSON('https://ahj-rxjs-server-task1.onrender.com/messages/unread')
        .pipe(
          map(data => data.messages),
          catchError(error => {
            return of([])
          })
        )
    )
  )

obs$.subscribe(data => {
  data.forEach(message => { newMassage(message) })
})
