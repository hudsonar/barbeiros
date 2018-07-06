import { Injectable } from '@angular/core';
import { Servico } from './shared/servico';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  private servicoUrl = 'http://localhost:8080/SistemaBarbearia/rs/servico';
  constructor(private http: HttpClient) { }

  getTurnos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.servicoUrl).pipe(
      catchError(this.handleError('getTurnos', []))
    );
  }

  save(servico: Servico) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.post(this.servicoUrl, servico, httpOptions).pipe(
      tap(_ => this.log(`added hero w/ id=${servico.id}`)),
      catchError(this.handleError<any>('addTurno'))
    );
  }
  atualizar(servico: Servico) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.put(this.servicoUrl, servico, httpOptions).pipe(
      tap(_ => this.log(`atualido turno w/ id=${servico.id}`)),
      catchError(this.handleError<any>('addTurno'))
    );
  }

  apagar(servico: Servico) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.delete(this.servicoUrl + '/' + servico.id, httpOptions).pipe(
      tap(_ => this.log(`atualido turno w/ id=${servico.id}`)),
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


  getHeroNo404<Data>(id: number): Observable<Servico> {
    const url = `${this.servicoUrl}/?id=${id}`;
    return this.http.get<Servico[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Servico>(`getHero id=${id}`))
      );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }
}
