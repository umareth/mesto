export class Section {
  constructor({ items, renderer }, galleryContainer) {
    // console.log('проверка')
    this.renderer = renderer;

    this._items = items;

    this._container = galleryContainer;

  }



  renderItems() {
    // console.log('Items:', this._items); // Проверка массива элементов
    this._items.forEach(element => {
      // console.log('Element:', element); // Проверка текущего элемента
      const renderedElement = this.renderer(element);
      // console.log('Rendered element:', renderedElement); // Проверка отрисованного элемента
      this.addItem(renderedElement);
      // console.log('Item added:', renderedElement); // Проверка добавления элемента
    });
  }

  addItem(item) {
    // console.log('Проверка элемента, который будет добавлен:', item); // Проверка элемента, который будет добавлен
    this._container.prepend(item);
    // console.log('Проверка добавления элемента к контейнеру:', item); // Проверка добавления элемента к контейнеру
  }
}