import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/csharp.svg',
      alt: 'Ícone de conhecimento de csharp'
    },
    {
      src: 'assets/icons/knowledge/dotnet.svg',
      alt: 'Ícone de conhecimento de dotnet'
    },
    {
      src: 'assets/icons/knowledge/sqlserver.svg',
      alt: 'Ícone de conhecimento de sqlserve'
    },
    {
      src: 'assets/icons/knowledge/azuredevops.svg',
      alt: 'Ícone de conhecimento de csharp'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de JavaScript'
    },
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'Ícone de conhecimento de html'
    },
    {
      src: 'assets/icons/knowledge/css.svg',
      alt: 'Ícone de conhecimento de css'
    }
  ])
}
