import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        // fornece um atraso em cascata para elementos animados.
        // Suponha que você tenha uma lista de elementos e deseje animá-los um por um de maneira sequencial, é quando as animações de escalonamento entram em cena
        stagger(200, [
          animate(
            '300ms ease-out',
            keyframes([
              style({
                opacity: 0.5,
                transform: 'translateX(15px)',
                offset: 0.4,
              }),
              style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1,
              }),
            ])
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
