import { Injectable } from '@angular/core';
import { Cliente } from './shared/cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteUrl = 'http://localhost:8080/SistemaBarbearia/rs/cliente';
  constructor(private http: HttpClient) { }

  getTurnos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clienteUrl).pipe(
      catchError(this.handleError('getTurnos', []))
    );
  }

  save(cliente: Cliente) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.post(this.clienteUrl, cliente, httpOptions).pipe(
      tap(_ => this.log(`added hero w/ id=${cliente.id}`)),
      catchError(this.handleError<any>('addTurno'))
    );
  }
  atualizar(cliente: Cliente) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.put(this.clienteUrl, cliente, httpOptions).pipe(
      tap(_ => this.log(`atualido turno w/ id=${cliente.id}`)),
      catchError(this.handleError<any>('addTurno'))
    );
  }

  apagar(cliente: Cliente) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    };
    return this.http.delete(this.clienteUrl + '/' + cliente.id, httpOptions).pipe(
      tap(_ => this.log(`atualido turno w/ id=${cliente.id}`)),
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


  getHeroNo404<Data>(id: number): Observable<Cliente> {
    const url = `${this.clienteUrl}/?id=${id}`;
    return this.http.get<Cliente[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Cliente>(`getHero id=${id}`))
      );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }
}
