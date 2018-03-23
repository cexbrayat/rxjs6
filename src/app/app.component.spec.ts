import { fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('should update title every second', fakeAsync(() => {
    const component = new AppComponent();

    expect(component.title).toBe(-1);

    // start the observable
    component.ngOnInit();

    tick(1000);
    expect(component.title).toBe(0);

    tick(1000);
    expect(component.title).toBe(1);

    tick(1000);
    expect(component.title).toBe(2);

    discardPeriodicTasks();
  }));
});
