export class Section {
  constructor(renderer, galleryContainer) {
    this.renderer = renderer;

    this._container = galleryContainer;
  }

  renderItems(items) {
    console.log('Получения массива в renderItems')
    console.log(items)
    items.forEach(item => {
      this.renderer(item)
    })
  }
  

  addItem(item) {
    this._container.prepend(item);
  }
}
