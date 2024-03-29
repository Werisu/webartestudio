import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUserSolid } from '@ng-icons/heroicons/solid';
import { listStateTrigger } from '@webartestudio/solutions-data-access';
import { bounceInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'webartestudio-solution-card',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './solution-card.component.html',
  styleUrl: './solution-card.component.css',
  viewProviders: [provideIcons({ heroUserSolid })],
  animations: [bounceInOnEnterAnimation(), listStateTrigger],
})
export class SolutionCardComponent {
  public sections = [
    {
      svg: `<svg
      class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="m5.5 7.7 1-2.7h11A56 56 0 0 1 19 9.7v.6l-.3.4a1 1 0 0 1-.4.2.8.8 0 0 1-.6 0 1 1 0 0 1-.4-.2l-.2-.4-.1-.6a1 1 0 1 0-2 0c0 .4-.1.7-.3 1a1 1 0 0 1-.7.3.9.9 0 0 1-.7-.3c-.2-.3-.3-.6-.3-1a1 1 0 1 0-2 0c0 .4-.1.7-.3 1a1 1 0 0 1-.7.3.9.9 0 0 1-.7-.3c-.2-.3-.3-.6-.3-1a1 1 0 0 0-2 0 1.5 1.5 0 0 1-.2.8l-.1.2a1 1 0 0 1-.4.2L6 11a1 1 0 0 1-.5-.3h-.1c-.2-.3-.4-.6-.4-1v-.2l.1-.5.4-1.3ZM4 12l-.1-.1A3.5 3.5 0 0 1 3 9.7l.2-1.2a26.3 26.3 0 0 1 1.4-4.2A2 2 0 0 1 6.5 3h11a2 2 0 0 1 1.8 1.2A58 58 0 0 1 21 9.7a3.5 3.5 0 0 1-.8 2.3l-.2.2V19a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1v-4H8v4c0 .6-.4 1-1 1H6a2 2 0 0 1-2-2v-6.9Zm9 2.9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1h-2a1 1 0 0 1-1-1v-2Z"
        clip-rule="evenodd"
      />
    </svg>`,
      title: 'Lojas Virtuais Personalizadas',
      description: `Leve sua operação de vendas para o próximo nível com uma loja virtual
      única. Da navegação do usuário ao checkout, cuidamos de cada detalhe.`,
    },
    {
      svg: `<svg
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
            fill="currentColor"
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
            ></path>
          </svg>`,
      title: 'Facebook e Instagram',
      description: `Amplie sua presença nas redes sociais! Integramos estrategicamente sua
          loja virtual ao Instagram e Facebook, potencializando sua visibilidade
          e interação com o público.`,
    },
    {
      svg: `<svg
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
            fill="currentColor"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 5 5 C 3.355469 5 2 6.355469 2 8 L 2 11 L 48 11 L 48 8 C 48 6.355469 46.644531 5 45 5 Z M 7 8 C 7.550781 8 8 8.449219 8 9 C 8 9.550781 7.550781 10 7 10 C 6.449219 10 6 9.550781 6 9 C 6 8.449219 6.449219 8 7 8 Z M 10 8 C 10.550781 8 11 8.449219 11 9 C 11 9.550781 10.550781 10 10 10 C 9.449219 10 9 9.550781 9 9 C 9 8.449219 9.449219 8 10 8 Z M 2 13 L 2 27 L 48 27 L 48 13 Z M 2 29 L 2 42 C 2 43.644531 3.355469 45 5 45 L 24 45 L 24 29 Z M 26 29 L 26 45 L 45 45 C 46.644531 45 48 43.644531 48 42 L 48 29 Z M 6 31 L 21 31 L 21 33 L 6 33 Z M 6 35 L 21 35 L 21 37 L 6 37 Z M 6 39 L 15 39 L 15 41 L 6 41 Z"
            ></path>
          </svg>`,
      title: 'Criação de Sites',
      description: `Desenvolvemos sites modernos e intuitivos, alinhados à identidade da
          sua marca. Deixe-nos construir a base para a sua presença online.`,
    },
    {
      svg: `<svg
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
            ></path>
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
              clip-rule="evenodd"
            ></path>
          </svg>`,
      title: 'Marketing Digital',
      description: `Atingimos seu público-alvo com campanhas de marketing digital
          personalizadas. Desde estratégias de conteúdo até publicidade online,
          garantimos que sua mensagem alcance as pessoas certas.`,
    },
    {
      svg: `<svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M5 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z"
              clip-rule="evenodd"
            />
          </svg>`,
      title: 'Aplicativos',
      description: `Leve sua marca para onde seus clientes estão! Desenvolvemos
          aplicativos personalizados, garantindo uma experiência intuitiva e
          impactante em dispositivos móveis.`,
    },
    {
      svg: `<svg
            class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            ></path>
          </svg>`,
      title: 'Sistemas Personalizados',
      description: `Soluções sob medida para o seu negócio. Desenvolvemos sistemas
          personalizados que atendem às necessidades específicas da sua operação.`,
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeHtml(itemSvg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(itemSvg);
  }
}
