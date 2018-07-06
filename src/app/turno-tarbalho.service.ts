import { Injectable } from '@angular/core';
import { TurnoTrabalho } from './shared/turnoTrabalho';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TurnoTarbalhoService {
  private turnoTrabalhoUrl = 'http://localhost:8080/SistemaBarbearia/rs/turnoTrabalho';
  constructor(private http: HttpClient) { }

  getTurnos(): Observable<TurnoTrabalho[]> {
    return this.http.get<TurnoTrabalho[]>(this.turnoTrabalhoUrl).pipe(
      catchError(this.handleError('getTurnos', []))
    );
  }
  getTurno(idTurnoTrabalho: number): Observable<TurnoTrabalho> {
    return this.http.get<TurnoTrabalho>(this.turnoTrabalhoUrl + '/' + idTurnoTrabalho).pipe(
      catchError(this.handleError<any>('getTurno'))
    );
  }
  save(turnoTrabalho: TurnoTrabalho) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.post(this.turnoTrabalhoUrl, turnoTrabalho, httpOptions).pipe(
      tap(_ => this.log(`added hero w/ id=${turnoTrabalho.id}`)),
      catchError(this.handleError<any>('addTurno'))
    );
  }
  atualizar(turnoTrabalho: TurnoTrabalho) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.put(this.turnoTrabalhoUrl, turnoTrabalho, httpOptions).pipe(
      tap(_ => this.log(`atualido turno w/ id=${turnoTrabalho.id}`)),
      catchError(this.handleError<any>('addTurno'))
    );
  }

  apagar(turnoTrabalho: TurnoTrabalho) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.delete(this.turnoTrabalhoUrl + '/' + turnoTrabalho.id, httpOptions).pipe(
      tap(_ => this.log(`atualido turno w/ id=${turnoTrabalho.id}`)),
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


  getHeroNo404<Data>(id: number): Observable<TurnoTrabalho> {
    const url = `${this.turnoTrabalhoUrl}/?id=${id}`;
    return this.http.get<TurnoTrabalho[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<TurnoTrabalho>(`getHero id=${id}`))
      );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }
}
