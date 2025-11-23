import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: false
})
export class NavigationComponent implements OnInit {
  activeSection: string = 'about-me';

  constructor() { }

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about-me', 'experience', 'education', 'certifications'];
    const scrollPosition = window.pageYOffset + 150; // Offset for navbar height

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
}
