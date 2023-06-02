export class Section {
  constructor(renderer, galleryContainer) {
    this.renderer = renderer;

    this._container = galleryContainer;
  }

  renderItems(items) {
    items.forEach(item => {
      this.renderer(item)
    })
  }

  addItem(item) {
    this._container.append(item);
  }

  addItemPrepend(item) {
    this._container.prepend(item);
  }
}
