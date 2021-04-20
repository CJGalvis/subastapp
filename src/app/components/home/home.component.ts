import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LinkNavigation } from 'src/app/models/LinkNavigation';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public navLinks: Array<LinkNavigation>;
  public activeLinkIndex = -1;
  public typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private globalService: GlobalService
  ) {
    this.navLinks = [
      {
        label: 'Inicio',
        link: '/',
        index: 0,
        icon: 'search'
      },
      {
        label: 'Perfil',
        link: '/profile/1',
        index: 1,
        icon: 'edit'
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  filterName(value: string) {
    this.globalService.filterElementNames.next(value);
  }

}
