import { Component, signal } from '@angular/core';
import { text } from 'stream/consumers';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Back-end Developer Junior",
        p: "DISCIPULUS | julho 2022 - presente",
      },
      text: "<p>Desde de julho de 2022, atuo como desenvolvedor back-end, na plataforma discipulus"
    },
    {
      summary: {
        strong: "Back-end Developer Junior",
        p: "DISCIPULUS | julho 2022 - presente",
      },
      text: "<p>Desde de julho de 2022, atuo como desenvolvedor back-end, na plataforma discipulus"
    }
  ])
}
