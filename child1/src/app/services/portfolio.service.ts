import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {
  map,
  // publishReplay,
  // refCount,
  catchError,
  shareReplay,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  public projects$: Observable<any[]>;

  private gitProjects = [
    'rest-api-node-typescript',
    'firestore-backup-restore',
    'firebase-wordpress-plugin',
    'serverless-rest-api',
    'firebase-functions-helper',
    'stockai',
    // 'WebdriverIO-TypeScript-Boilerplate',
    // 'angular-store-locator'
  ];

  private gitBaseUrl =
    'https://api.github.com/users/dalenguyen/repos?per_page=100';

  constructor(private http: HttpClient) {
    this.getGitProjects();
    this.projects$ = of([]);
  }

  private getGitProjects(): void {
    this.projects$ = this.http.get<[]>(this.gitBaseUrl).pipe(
      map((projects) =>
        projects.filter((project: any) =>
          this.gitProjects.includes(project.name)
        )
      ),
      // publishReplay(1),
      // refCount(),
      shareReplay({ bufferSize: 1, refCount: true }),
    ) as Observable<any[]>;
  }
}
