import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private foods: Foods[] = [
    {
      id: 1,
      name: "Griddlecakes",
      price: 5000,
      favorite: true,
      star: 3.5,
      tags: [ "Lunch"],
      imageUrl: "./assets/images/pnk1.jpg",
      cookTime: "30-50",
      origins: ["USA"]
    },
    {
      id: 2,
      name: "Hotcakes",
      price: 5000,
      favorite: false,
      star: 3.5,
      tags: [ "Lunch"],
      imageUrl: "./assets/images/pnk3.jpg",
      cookTime: "30-40",
      origins: ["USA"]
    },
    {
      id: 3,
      name: "Oat pancakes",
      price: 5500,
      favorite: true,
      star: 4.7,
      tags: [ "Lunch"],
      imageUrl: "./assets/images/pnk2.jpg",
      cookTime: "20-30",
      origins: ["Canada"]
    },
    {
      id: 4,
      name: "Apam Balik",
      price: 5500,
      favorite: true,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/pnk4.jpg",
      cookTime: "30-45",
      origins: ["Germany", "Malaisie"]
    },
    {
      id: 5,
      name: "Poffertjes",
      price: 3500,
      favorite: false,
      star: 4.0,
      tags: ["Lunch" ],
      imageUrl: "./assets/images/pnk5.jpg",
      cookTime: "20-30",
      origins: ["Pays-bas"]
    },
    {
      id: 6,
      name: "Smoothie",
      price: 2500,
      favorite: true,
      star: 4.0,
      tags: ["Lunch" ],
      imageUrl: "./assets/images/smt2.jpg",
      cookTime: "15-30",
      origins: ["Ghana"]
    },
    {
      id: 7,
      name: "Jus à la bétérave ",
      price: 1500,
      favorite: false,
      star: 4.5,
      tags: [ "Lunch"],
      imageUrl: "./assets/images/smt3.jpg",
      cookTime: "10-12",
      origins: ["Togo"]
    },
    {
      id: 8,
      name: "Jus detox",
      price: 2000,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/smt1.jpg",
      cookTime: "10-12",
      origins: ["Ghana"]
    },
    {
      id: 9,
      name: "Jus à la pastèque",
      price: 1500,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/juice1.jpg",
      cookTime: "10-15",
      origins: ["Togo"]
    },
    {
      id: 10,
      name: "Jus d'avocat",
      price: 2000,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/juice2.jpg",
      cookTime: "10-15",
      origins: ["France"]
    },
    {
      id: 11,
      name: "Jus de carotte",
      price: 2000,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/juice3.jpg",
      cookTime: "10-15",
      origins: ["Ghana"]
    },
    {
      id: 12,
      name: "Jus de fraise",
      price: 1000,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/juice4.jpg",
      cookTime: "10-15",
      origins: ["France"]
    },
    {
      id: 13,
      name: "Confiserie",
      price: 6000,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/glc1.jpg",
      cookTime: "30-45",
      origins: ["Germany"]
    },
    {
      id: 14,
      name: "Borba",
      price: 4500,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/glc3.jpg",
      cookTime: "30-45",
      origins: ["Mexico"]
    },
    {
      id: 15,
      name: "Milk Shake",
      price: 5500,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/glc4.jpg",
      cookTime: "30-45",
      origins: ["Mexico"]
    },
    {
      id: 16,
      name: "Frappuccino",
      price: 3500,
      favorite: false,
      star: 4.5,
      tags: ["Lunch"],
      imageUrl: "./assets/images/glc5.jpg",
      cookTime: "20-30",
      origins: ["Germany"]
    },
     
  ];

  constructor() { }

  public getAll():Observable<Foods[]>{
    return of(this.foods);
  }

  public getFoodById(id: number): Observable<Foods>{
    let fd = this.foods.find(f => f.id == id);
    if (fd == undefined) return throwError(() => new Error("Foods undefined"));
    return of(fd);
  }

  public deleteProductById(id: number): Observable<boolean>{
    this.foods = this.foods.filter(p => p.id != id);
    return of(true);
  }

  public editFoodById(food: Foods): Observable<Foods>{
    this.foods = this.foods.map(f => (f.id == food.id) ? food : f);
    return of(food);
  }

}