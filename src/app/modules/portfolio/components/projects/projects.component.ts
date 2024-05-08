import { Component, inject, signal } from '@angular/core';
import { title } from 'process';
import { IProjects } from '../../interface/IProjects.interface';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/images.jpeg',
      alt: 'Projeto Hospital System',
      title: 'HospitalSystem',
      with: '100px',
      height: '51px',
      description: '<p>Explore um sistema pratico hospitalar</p>',
      links:[
        {
          name: 'Conheça HospitalSystem',
          href: 'htpps://github.com/vitormoraesdev/HospitalSystem'
        },
      ],
    },
    {
      src: 'assets/img/images.jpeg',
      alt: 'Projeto Hospital System',
      title: 'HospitalSystem',
      with: '100px',
      height: '51px',
      description: '<p>Explore um sistema pratico hospitalar</p>',
      links:[
        {
          name: 'Conheça HospitalSystem',
          href: 'htpps://github.com/vitormoraesdev/HospitalSystem'
        },
      ],
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.PROJECTS
    })
  }
}
