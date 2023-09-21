import { Component } from '@angular/core';
import {
  Observable,
  Observer,
  Subject,
  ReplaySubject,
  BehaviorSubject,
  AsyncSubject,
  filter,
  interval,
  take,
  merge,
  from,
  tap,
} from 'rxjs';
import { of, map } from 'rxjs';
@Component({
  template: `<h1>RxJS Demo</h1>`,
})
export class RxjsDemoComponent {
  observable$!: any;
  // subject$!: any;

  ngOnInit() {
    // var data = of(1, 2, 3, 4, 5, 6);
    // var res = data.pipe(filter((z) => z % 2 == 0));
    // res.subscribe((x) => console.log(x));
    // // Single line usage
    // var d1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    //   .pipe(
    //     filter((x) => x % 2 == 0),
    //     map((e) => e * 10)
    //   )
    //   .subscribe((z) => console.log(z));

    // console.log("Demo Interval");
    // const num1 = interval(1000).pipe(take(10));
    // const alpha = ['A','B','C','D','E','F','G','H','I','J']
    // const alphaArray = interval(1010).pipe(map(x=> alpha[x]),take(10))
    // const output = merge(num1,alphaArray).subscribe(x=>{
    //   console.log(x)
    // })

    var res1 = from(['Jack and Jill went to hill', 'To fetch a pile of water'])
      .pipe(
        map((str) => str.split(' ')),
        tap((x) => console.log(x.length))
      )
      .subscribe((z) => console.log(z));

    var employees = [
      { name: 'Alice', skill: 'JavaScript' },
      { name: 'Bob', skill: 'Java' },
      { name: 'Anita', skill: 'C#' },
      { name: 'Hari', skill: 'React' },
      { name: 'Remo', skill: 'Angular' },
      { name: 'Leo', skill: 'Angular' },
    ];
    const hasSkill = (sk: string) => sk.toLowerCase().includes('java');
    const members = from(employees)
      .pipe(filter((c) => hasSkill(c.skill)))
      .subscribe((x) => console.log(x));
  }

  // Example for using Subject it can have multiple Observers or subscribers
  // ngOnInit() {
  //   this.subject$ = new AsyncSubject();
  //   this.subject$.subscribe((x: any) => {
  //     console.log('First Subscriber' + x);
  //   });
  //   this.subject$.next(1);
  //   this.subject$.next(2);
  //   this.subject$.next(3);
  //   this.subject$.subscribe((x: any) => {
  //     console.log('Second Subscriber' + x);
  //   });
  //   this.subject$.next(4);
  //   this.subject$.next(5);
  //   this.subject$.next(6);
  //   this.subject$.subscribe((x: any) => {
  //     console.log('Third Subscriber' + x);
  //   });
  //   this.subject$.next(7);
  //   this.subject$.next(8);
  //   this.subject$.next(9);
  //   this.subject$.complete();
  // }
  // ngOnDestroy(){
  //   this.subject$.unsubscribe();
  // }

  // Usage of Observable and Observer
  // ngOnInit() {
  //   this.observable$ = new Observable((observer: Observer<any>) => {
  //     observer.next(1);
  //     observer.next(2);
  //     observer.next(3);
  //     observer.complete();
  //   });
  //   this.observable$.subscribe({
  //     next: (value: any) => console.log('The emitted data is ' + value),
  //     error: (err: any) => console.error('Observer got an error: ' + err),
  //     complete: () => console.log('Observer got a complete notification'),
  //   });
  // }
  // ngOnDestroy() {
  //   this.observable$.unsubscribe();

  // }
}
