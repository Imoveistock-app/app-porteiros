// Angular
import { Directive, Input } from '@angular/core';

// Ionic
import { IonInput } from '@ionic/angular';

// Rxjs
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { createTextMaskInputElement } from 'text-mask-core';

// Text-mask

/**
 * ion-mask directive, based on text-mask module
 */
@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ionMask]',
  providers: [IonInput],
})
export class IonMaskDirectiveLogged {

  @Input('ionMask')
  mask: Array<any>    = [];
  private onDestroy: Subject<void> = new Subject<void>();

  constructor(public ionInput: IonInput) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  public ngOnInit() {
    this.configureInput();
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  public ngOnDestroy() {
    this.onDestroy.next();
  }

  public async configureInput() {
    const input       = await this.ionInput.getInputElement();
    const maskedInput = createTextMaskInputElement({
      inputElement  : input,
      mask          : this.mask,
      guide         : false
    });
    this.ionInput
      .ionChange
      .pipe( takeUntil( this.onDestroy ) )
      .subscribe( ( event: CustomEvent ) => {
        const { value } = event.detail;
        maskedInput.update(value);
        this.ionInput.value = input.value;
      });
  }

}
