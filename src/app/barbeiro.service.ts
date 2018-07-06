import { Injectable } from '@angular/core';
import { Barbeiro } from './shared/barbeiro';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BarbeiroService {
  private barbeiroUrl = 'http://localhost:8080/SistemaBarbearia/rs/barbeiro';
  constructor(private http: HttpClient) { }

  getBarbeiros(): Observable<Barbeiro[]> {
    return this.http.get<Barbeiro[]>(this.barbeiroUrl).pipe(
      catchError(this.handleError('getTurnos', []))
    );
  }

  save(barbeiro: Barbeiro) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.post(this.barbeiroUrl, barbeiro, httpOptions).pipe(
      tap(_ => this.log(`added hero w/ id=${barbeiro.id}`)),
      catchError(this.handleError<any>('addTurno'))
    );
  }
  atualizar(barbeiro: Barbeiro) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.put(this.barbeiroUrl, barbeiro, httpOptions).pipe(
      tap(_ => this.log(`atualido turno w/ id=${barbeiro.id}`)),
      catchError(this.handleError<any>('addTurno'))
    );
  }

  apagar(barbeiro: Barbeiro) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.delete(this.barbeiroUrl + '/' + barbeiro.id, httpOptions).pipe(
      tap(_ => this.log(`atualido turno w/ id=${barbeiro.id}`)),
      catchError(this.handleError<any>('addTurno'))
    );
  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


  getHeroNo404<Data>(id: number): Observable<Barbeiro> {
    const url = `${this.barbeiroUrl}/?id=${id}`;
    return this.http.get<Barbeiro[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Barbeiro>(`getHero id=${id}`))
      );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }
}
