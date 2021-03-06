import { HeaderView } from '../header/headerView.js';
import { PlaylistsView } from '../playlist/playlistsView.js';

export const PlaylistPageView = Backbone.View.extend({

  renderTemplate(selectorString, options) {
    const templateText = document.querySelector(selectorString).innerText;
    const compiled = _.template(templateText);
    if (options !== null) {
      return compiled(options);
    }
    return compiled();
  },
  template() {
    return this.renderTemplate('#template-playlistPage');
  },
  render() {
    this.$el.html(this.template());
    this.headerView = new HeaderView({
      model: this.model,
      el: document.querySelector('.contaier'),
    });
    this.playlist = new PlaylistsView({
      el: document.querySelector('#playlist1'),
      collection: this.collection,

    });

    if (this.model.get('status') === true) {
      const imageBackground = this.model.get('backgroundColor');
      document.querySelector('.container').style.backgroundImage =
      'url('+imageBackground+')';
    }
    this.listenTo(this.model, 'triggerPage',
    function () {
      document.querySelector('.container').style.backgroundImage =
      'url(../core/assets/banner-top.jpg)';
    });
    this.headerView.render();
    this.playlist.render();
    return this;
  },
});
