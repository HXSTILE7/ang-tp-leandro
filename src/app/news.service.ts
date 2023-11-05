import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = 'dd5872e40717487cbb0aafecff824e5b'; // Reemplaza con tu clave de API de News API
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  getTopHeadlines() {
    // Puedes personalizar los parámetros según tus necesidades
    const params = {
      apiKey: this.apiKey,
      country: 'us', // Cambia el país según tu preferencia
    };

    return this.http.get(this.apiUrl, { params });
  }
}
